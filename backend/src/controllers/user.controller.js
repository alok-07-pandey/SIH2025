import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

// Helper: Generate access & refresh tokens
const generateTokens = async (userId) => {
  console.log("🔑 Generating tokens for user:", userId);
  const user = await User.findById(userId);
  if (!user) {
    console.error("❌ User not found while generating tokens");
    throw new ApiError(404, "User not found");
  }

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  console.log("✅ Tokens generated");

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

// Register User
const registerUser = asyncHandler(async (req, res) => {
  console.log("📩 Register request body:", req.body);

  const { fullName, email, username, password } = req.body;

  if ([fullName, email, username, password].some((f) => !f?.trim())) {
    console.error("❌ Missing required fields");
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existedUser) {
    console.error("❌ User already exists:", existedUser.email, existedUser.username);
    throw new ApiError(409, "User already exists");
  }

  console.log("🛠 Creating new user...");
  const user = await User.create({
    fullName,
    email,
    username: username.toLowerCase(),
    password,
    
  });

  console.log("✅ User created:", user._id);

  const createdUser = await User.findById(user._id).select("-password -refreshToken");

  res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  console.log("📩 Login request body:", req.body);

  const { email, username, password } = req.body;

  if (!(email || username)) {
    console.error("❌ No email/username provided");
    throw new ApiError(400, "Email or username is required");
  }

  const user = await User.findOne({ $or: [{ email }, { username }] });
  if (!user) {
    console.error("❌ User not found:", email || username);
    throw new ApiError(404, "User does not exist");
  }

  console.log("🔍 Checking password for user:", user._id);
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    console.error("❌ Invalid password for user:", user._id);
    throw new ApiError(401, "Invalid password");
  }

  console.log("✅ Password correct, generating tokens...");
  const { accessToken, refreshToken } = await generateTokens(user._id);
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  };

  console.log("🚀 Login successful for user:", user._id);

  res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "Logged in successfully"
      )
    );
});

// Logout User
const logoutUser = asyncHandler(async (req, res) => {
  console.log("🚪 Logging out user:", req.user?._id);

  await User.findByIdAndUpdate(req.user._id, { refreshToken: undefined });
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponse(200, {}, "Logged out successfully"));
});

// Refresh Token
const refreshAccessToken = asyncHandler(async (req, res) => {
  console.log("♻️ Refresh token request");

  const incomingToken = req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingToken) {
    console.error("❌ No refresh token provided");
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    console.log("🔑 Verifying refresh token...");
    const decoded = jwt.verify(incomingToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decoded._id);
    if (!user) {
      console.error("❌ User not found for refresh token");
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingToken !== user.refreshToken) {
      console.error("❌ Refresh token mismatch");
      throw new ApiError(401, "Refresh token expired");
    }

    console.log("✅ Refresh token valid, generating new tokens...");
    const { accessToken, refreshToken } = await generateTokens(user._id);
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json(new ApiResponse(200, { accessToken, refreshToken }, "Access token refreshed"));
  } catch (error) {
    console.error("❌ Refresh token error:", error.message);
    throw new ApiError(401, error.message || "Invalid refresh token");
  }
});

export { registerUser, loginUser, logoutUser, refreshAccessToken };

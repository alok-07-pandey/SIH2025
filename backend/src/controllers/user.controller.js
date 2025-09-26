// src/controllers/user.controller.js
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

// Register User
export const registerUser = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ success: false, message: "User already exists" });

    const user = new User({ fullName, username, email, password });
    const savedUser = await user.save();

    res.status(201).json({ success: true, message: "User registered successfully", data: savedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!(email || username)) return res.status(400).json({ success: false, message: "Email or username required" });

    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const isValid = await user.isPasswordCorrect(password);
    if (!isValid) return res.status(401).json({ success: false, message: "Invalid password" });

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    const cookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict" };

    res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json({ success: true, message: "Logged in successfully", data: { user, accessToken, refreshToken } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Logout User
export const logoutUser = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.status(400).json({ success: false, message: "Invalid request" });

    await User.findByIdAndUpdate(userId, { refreshToken: undefined });
    const cookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === "production" };

    res
      .status(200)
      .clearCookie("accessToken", cookieOptions)
      .clearCookie("refreshToken", cookieOptions)
      .json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Refresh Access Token
export const refreshAccessToken = async (req, res) => {
  try {
    const incomingToken = req.cookies.refreshToken || req.body.refreshToken;
    if (!incomingToken) return res.status(401).json({ success: false, message: "No refresh token provided" });

    const decoded = jwt.verify(incomingToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decoded._id);
    if (!user || incomingToken !== user.refreshToken) return res.status(401).json({ success: false, message: "Invalid refresh token" });

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    const cookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === "production" };

    res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json({ success: true, message: "Access token refreshed", data: { accessToken, refreshToken } });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};




// import asyncHandler from "../utils/asyncHandler.js";
// import { ApiError } from "../utils/ApiError.js";
// import { ApiResponse } from "../utils/ApiResponse.js";
// import { User } from "../models/user.model.js";
// import jwt from "jsonwebtoken";

// // Helper: Generate access & refresh tokens
// const generateTokens = async (userId) => {
//   console.log("🔑 Generating tokens for user:", userId);
//   const user = await User.findById(userId);
//   if (!user) {
//     console.error("❌ User not found while generating tokens");
//     throw new ApiError(404, "User not found");
//   }

//   const accessToken = user.generateAccessToken();
//   const refreshToken = user.generateRefreshToken();

//   console.log("✅ Tokens generated");

//   user.refreshToken = refreshToken;
//   await user.save({ validateBeforeSave: false });

//   return { accessToken, refreshToken };
// };

// // Register User
// import User from "../models/user.model.js";

// export const registerUser = async (req, res) => {
//   try {
//     console.log("📩 Register request body:", req.body);
//     console.log("📸 Files:", req.files);

//     const { fullName, username, email, password } = req.body;

//     // agar avatar compulsory hai
//     if (!req.files || !req.files.avatar) {
//       return res.status(400).json({ success: false, message: "Avatar is required" });
//     }

//     const avatarUrl = await uploadOnCloudinary(req.files.avatar[0].path);

//     const user = new User({
//       fullName,
//       username,
//       email,
//       password,
//       avatar: avatarUrl,
//     });

//     const savedUser = await user.save();
//     console.log("✅ User saved in DB:", savedUser);

//     res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       data: savedUser,
//     });
//   } catch (error) {
//     console.error("❌ Register error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// // Login User
// const loginUser = asyncHandler(async (req, res) => {
//   console.log("📩 Login request body:", req.body);

//   const { email, username, password } = req.body;

//   if (!(email || username)) {
//     console.error("❌ No email/username provided");
//     throw new ApiError(400, "Email or username is required");
//   }

//   const user = await User.findOne({ $or: [{ email }, { username }] });
//   if (!user) {
//     console.error("❌ User not found:", email || username);
//     throw new ApiError(404, "User does not exist");
//   }

//   console.log("🔍 Checking password for user:", user._id);
//   const isPasswordValid = await user.isPasswordCorrect(password);
//   if (!isPasswordValid) {
//     console.error("❌ Invalid password for user:", user._id);
//     throw new ApiError(401, "Invalid password");
//   }

//   console.log("✅ Password correct, generating tokens...");
//   const { accessToken, refreshToken } = await generateTokens(user._id);
//   const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

//   const cookieOptions = {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "strict",
//   };

//   console.log("🚀 Login successful for user:", user._id);

//   res
//     .status(200)
//     .cookie("accessToken", accessToken, cookieOptions)
//     .cookie("refreshToken", refreshToken, cookieOptions)
//     .json(
//       new ApiResponse(
//         200,
//         { user: loggedInUser, accessToken, refreshToken },
//         "Logged in successfully"
//       )
//     );
// });

// // Logout User
// const logoutUser = asyncHandler(async (req, res) => {
//   console.log("🚪 Logging out user:", req.user?._id);

//   await User.findByIdAndUpdate(req.user._id, { refreshToken: undefined });
//   const cookieOptions = {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//   };

//   res
//     .status(200)
//     .clearCookie("accessToken", cookieOptions)
//     .clearCookie("refreshToken", cookieOptions)
//     .json(new ApiResponse(200, {}, "Logged out successfully"));
// });

// // Refresh Token
// const refreshAccessToken = asyncHandler(async (req, res) => {
//   console.log("♻️ Refresh token request");

//   const incomingToken = req.cookies.refreshToken || req.body.refreshToken;
//   if (!incomingToken) {
//     console.error("❌ No refresh token provided");
//     throw new ApiError(401, "Unauthorized request");
//   }

//   try {
//     console.log("🔑 Verifying refresh token...");
//     const decoded = jwt.verify(incomingToken, process.env.REFRESH_TOKEN_SECRET);
//     const user = await User.findById(decoded._id);
//     if (!user) {
//       console.error("❌ User not found for refresh token");
//       throw new ApiError(401, "Invalid refresh token");
//     }

//     if (incomingToken !== user.refreshToken) {
//       console.error("❌ Refresh token mismatch");
//       throw new ApiError(401, "Refresh token expired");
//     }

//     console.log("✅ Refresh token valid, generating new tokens...");
//     const { accessToken, refreshToken } = await generateTokens(user._id);
//     const cookieOptions = {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//     };

//     res
//       .status(200)
//       .cookie("accessToken", accessToken, cookieOptions)
//       .cookie("refreshToken", refreshToken, cookieOptions)
//       .json(new ApiResponse(200, { accessToken, refreshToken }, "Access token refreshed"));
//   } catch (error) {
//     console.error("❌ Refresh token error:", error.message);
//     throw new ApiError(401, error.message || "Invalid refresh token");
//   }
// });

// export { registerUser, loginUser, logoutUser, refreshAccessToken };

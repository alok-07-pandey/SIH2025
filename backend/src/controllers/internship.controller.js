// controllers/internship.controller.js
import axios from "axios";
import asyncHandler from "../utils/asyncHandler.js";
import { ML_SERVICE_URL } from "../constants.js";
import { ApiError } from "../utils/ApiError.js";

// @desc Find top 5 internships for a user
// @route POST /api/internship/find
// @access Private
export const findInternships = asyncHandler(async (req, res) => {
  const { education, skills, interests, location } = req.body;
  const userId = req.user._id;

  if (!education || !skills || !interests || !location) {
    throw new ApiError(400, "All fields are required: education, skills, interests, location");
  }

  try {
    // Optional: Save user input to DB if needed
    // await User.findByIdAndUpdate(userId, { education, skills, interests, location });

    // Call ML service
    const response = await axios.post(ML_SERVICE_URL, { education, skills, interests, location });

    if (!response.data || !Array.isArray(response.data)) {
      throw new ApiError(500, "Invalid response from ML service");
    }

    // Take top 5 internships
    const recommendations = response.data.slice(0, 5);

    res.status(200).json({ success: true, recommendations });
  } catch (error) {
    console.error("Error fetching internships:", error.message || error);
    throw new ApiError(500, "Error fetching internships from ML service");
  }
});

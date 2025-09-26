// src/controllers/internship.controller.js
import { Internship } from "../models/internship.model.js";
import axios from "axios";

export const submitInternship = async (req, res) => {
  try {
    console.log("📩 Received internship submission:", req.body);

    // Save to DB
    const newEntry = await Internship.create(req.body);
    console.log("✅ Saved internship entry:", newEntry._id);

    // Call ML FastAPI
    const mlUrl = "https://sih2025-1-qet3.onrender.com/recommend";  // agar ML API same host (if backend merged) ya alag se
    // agar ML API alag ho to uska URL put karo
    const mlResponse = await axios.post(mlUrl, {
      student_id: newEntry._id.toString(),  // ya agar tum student_id approach use karte ho
      top_n: 5,
    });

    console.log("🔄 ML response:", mlResponse.data);

    // Return to frontend
    res.status(201).json({
      message: "Internship submitted and recommendations fetched",
      recommendations: mlResponse.data.recommendations || mlResponse.data,  // adjust according to your ML response shape
    });
  } catch (error) {
    console.error("❌ Error in submitInternship:", error);
    return res.status(500).json({
      message: "Server error during internship submission",
      error: error.toString(),
    });
  }
};



// // src/controllers/internship.controller.js
// import { Internship } from "../models/internship.model.js";

// export const findInternships = async (req, res) => {
//   try {
//     const filters = req.body;
//     const internships = await Internship.find(filters);
//     res.status(200).json({ success: true, data: internships });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// // controllers/internship.controller.js
// import axios from "axios";
// import asyncHandler from "../utils/asyncHandler.js";
// import { ML_SERVICE_URL } from "../constants.js";
// import { ApiError } from "../utils/ApiError.js";

// // @desc Find top 5 internships for a user
// // @route POST /api/internship/find
// // @access Private
// export const findInternships = asyncHandler(async (req, res) => {
//   const { education, skills, interests, location } = req.body;
//   const userId = req.user._id;

//   if (!education || !skills || !interests || !location) {
//     throw new ApiError(400, "All fields are required: education, skills, interests, location");
//   }

//   try {
//     // Optional: Save user input to DB if needed
//     // await User.findByIdAndUpdate(userId, { education, skills, interests, location });

//     // Call ML service
//     const response = await axios.post(ML_SERVICE_URL, { education, skills, interests, location });

//     if (!response.data || !Array.isArray(response.data)) {
//       throw new ApiError(500, "Invalid response from ML service");
//     }

//     // Take top 5 internships
//     const recommendations = response.data.slice(0, 5);

//     res.status(200).json({ success: true, recommendations });
//   } catch (error) {
//     console.error("Error fetching internships:", error.message || error);
//     throw new ApiError(500, "Error fetching internships from ML service");
//   }
// });

// src/controllers/internship.controller.js
import { Internship } from "../models/internship.model.js";
import axios from "axios";

export const submitInternship = async (req, res) => {
  try {
    console.log("📩 Internship form data:", req.body);
    console.log("📎 Uploaded file:", req.file);

    // Agar file upload hui hai to uska path le lo
    const resumePath = req.file ? req.file.path : null;

    // DB entry create karo
    const bodyData = { ...req.body, resumePath };
    const newEntry = await Internship.create(bodyData);

    console.log("✅ Saved internship entry:", newEntry._id);

    // Call ML API (yahan tum apna ML service ka URL use karna)
    const mlUrl = "https://<tumhara-ml-service-url>/recommend";
    const mlResponse = await axios.post(mlUrl, {
      student_id: newEntry._id.toString(),
      top_n: 5,
    });

    res.status(201).json({
      message: "Internship submitted and recommendations fetched",
      recommendations: mlResponse.data.recommendations || mlResponse.data,
    });
  } catch (error) {
    console.error("❌ Error in submitInternship:", error);
    res.status(500).json({
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

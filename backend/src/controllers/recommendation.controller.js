import { Student } from "../models/student.model.js";
import { Internship } from "../models/internship.model.js"; // tumhare internship dataset ka model
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// Recommend internships based on student's profile
const recommendInternships = asyncHandler(async (req, res) => {
  const { studentId } = req.params;

  // 1. Get student profile
  const student = await Student.findOne({ student_id: studentId });
  if (!student) {
    throw new ApiError(404, "Student not found");
  }

  // 2. Get internships dataset
  const internships = await Internship.find();

  // 3. Very simple filtering logic (later ML model se replace karenge)
  const matchedInternships = internships.filter((internship) =>
    internship.domain.toLowerCase() === student.domain.toLowerCase() &&
    internship.skills.some((skill) => student.skills.includes(skill))
  );

  // 4. Top 5 recommendations (for now)
  const topRecommendations = matchedInternships.slice(0, 5);

  res.status(200).json(
    new ApiResponse(200, topRecommendations, "Recommended internships fetched")
  );
});

export { recommendInternships };

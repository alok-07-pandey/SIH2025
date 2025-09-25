import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Student } from "../models/student.model.js";

// Helper to generate student_id
const generateStudentId = async () => {
  const lastStudent = await Student.findOne().sort({ createdAt: -1 });
  if (!lastStudent) return "S00001";
  const lastId = parseInt(lastStudent.student_id.slice(1));
  const newId = "S" + String(lastId + 1).padStart(5, "0");
  return newId;
};

// Create new student profile
const createStudentProfile = asyncHandler(async (req, res) => {
  const { name, degree, year_of_study, domain, skills, location_preference, duration_preference, stipend_expectation, email, phone, resume_url } = req.body;

  if (![name, degree, year_of_study, domain, skills, location_preference].every(Boolean)) {
    throw new ApiError(400, "All required fields must be provided");
  }

  const student_id = await generateStudentId();

  const student = await Student.create({
    student_id,
    name,
    degree,
    year_of_study,
    domain,
    skills,
    location_preference,
    duration_preference,
    stipend_expectation,
    email,
    phone,
    resume_url
  });

  res.status(201).json(new ApiResponse(201, student, "Student profile created successfully"));
});

// Optional: get all students (for testing / ML)
const getAllStudents = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.status(200).json(new ApiResponse(200, students, "All students fetched"));
});

export { createStudentProfile, getAllStudents };

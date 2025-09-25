import express from "express";
import { createStudentProfile, getAllStudents } from "../controllers/student.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Protected routes
router.post("/create", protect, createStudentProfile);
router.get("/all", protect, getAllStudents);

export default router;

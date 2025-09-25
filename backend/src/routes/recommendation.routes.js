import express from "express";
import { recommendInternships } from "../controllers/recommendation.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Recommended internships (protected, student must be logged in)
router.get("/:studentId", protect, recommendInternships);

export default router;

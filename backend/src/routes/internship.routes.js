// routes/internship.routes.js
import { Router } from "express";
import { findInternships } from "../controllers/internship.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = Router();

// Protected route: find internships
router.post("/find", protect, findInternships);

export default router;

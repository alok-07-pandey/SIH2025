// app.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import studentRoutes from "./src/routes/student.routes.js";
import recommendationRoutes from "./src/routes/recommendation.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*",
  credentials: true,
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
import userRouter from "./src/routes/user.routes.js";
import internshipRoutes from "./src/routes/internship.routes.js";




app.use("/api/v1/users", userRouter);
app.use("/api/internship", internshipRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/recommend", recommendationRoutes);

export default app;

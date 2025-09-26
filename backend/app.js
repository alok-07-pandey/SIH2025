import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import studentRoutes from "./src/routes/student.routes.js";
import recommendationRoutes from "./src/routes/recommendation.routes.js";
import userRouter from "./src/routes/user.routes.js";
import internshipRoutes from "./src/routes/internship.routes.js";

dotenv.config();

const app = express();

// ✅ Allowed origins list
const allowedOrigins = [
  process.env.CORS_ORIGIN,
  "https://pm-internship-recommender.netlify.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin) || process.env.CORS_ORIGIN === "*") {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// ✅ API Routes
app.use("/api/v1/users", userRouter);   // Auth routes
app.use("/api/internship", internshipRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/recommend", recommendationRoutes);

// ✅ Default health check
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

export default app;

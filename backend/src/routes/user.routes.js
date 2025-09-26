// src/routes/user.routes.js
import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken } from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);
router.post("/refresh-token", refreshAccessToken);

export default router;




// import express from "express";
// import {
//   registerUser,
//   loginUser,
//   logoutUser,
//   refreshAccessToken,
// } from "../controllers/user.controller.js";

// const router = express.Router();

// // ✅ Auth Routes
// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/logout", logoutUser);
// router.post("/refresh-token", refreshAccessToken);

// export default router;

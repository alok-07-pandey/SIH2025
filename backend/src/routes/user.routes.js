
import express from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken } from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import multer from "multer";

const userRouter = express.Router();

// Multer config for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/temp"); // local path to temporarily store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// ✅ Register route with file upload
userRouter.post(
  "/register",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 }
  ]),
  registerUser
);

// ✅ Login, Logout, Refresh routes
userRouter.post("/login", loginUser);
userRouter.post("/logout", protect, logoutUser);
userRouter.post("/refresh-token", refreshAccessToken);

export default userRouter;





// // routes/user.routes.js
// import { Router } from "express";
// import { registerUser, loginUser, logoutUser, refreshAccessToken } from "../controllers/user.controller.js";
// import { upload } from "../middlewares/multer.middleware.js";
// import { protect } from "../middlewares/auth.middleware.js";

// const router = Router();

// // Register with avatar & coverImage
// router.post(
//   "/register",
//   upload.fields([{ name: "avatar", maxCount: 1 }, { name: "coverImage", maxCount: 1 }]),
//   registerUser
// );

// // Login
// router.post("/login", loginUser);

// // Logout
// router.post("/logout", protect, logoutUser);

// // Refresh Token
// router.post("/refresh-token", refreshAccessToken);

// export default router;

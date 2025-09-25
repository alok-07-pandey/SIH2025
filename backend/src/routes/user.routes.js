

import express from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken } from "../controllers/user.controller.js";

const router = express.Router();

// 👇 simple routes without multer
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/refresh-token", refreshAccessToken);

export default router;






// code 2
// import express from "express";
// import { registerUser, loginUser, logoutUser, refreshAccessToken } from "../controllers/user.controller.js";
// import { protect } from "../middlewares/auth.middleware.js";
// import multer from "multer";

// const userRouter = express.Router();



// // ✅ Login, Logout, Refresh routes
// userRouter.post("/login", loginUser);
// userRouter.post("/logout", protect, logoutUser);
// userRouter.post("/refresh-token", refreshAccessToken);

// export default userRouter;




//code 1
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

// src/routes/internship.routes.js
import express from "express";
import multer from "multer";
import { submitInternship } from "../controllers/internship.controller.js";

const router = express.Router();

// Storage config
const upload = multer({
  dest: "uploads/", // backend ke andar ek folder bana lena "uploads"
});

// Route with file upload
router.post("/submit", upload.single("resume"), submitInternship);

export default router;


// // src/routes/internship.routes.js
// import { Router } from "express";
// import { findInternships } from "../controllers/internship.controller.js";
// import { protect } from "../middlewares/auth.middleware.js";

// const router = Router();
// router.post("/find", protect, findInternships);

// export default router;



// // routes/internship.routes.js
// import { Router } from "express";
// import { findInternships } from "../controllers/internship.controller.js";
// import { protect } from "../middlewares/auth.middleware.js";

// const router = Router();

// // Protected route: find internships
// router.post("/find", protect, findInternships);

// export default router;
// // 

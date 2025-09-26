import multer from "multer";
const upload = multer({
  dest: "uploads/",  // folder for storing uploads
});


// // middlewares/multer.middleware.js
// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "./public/temp"),
//   filename: (req, file, cb) => cb(null, file.originalname),
// });

// export const upload = multer({ storage });

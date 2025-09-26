
// src/models/internship.model.js
import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  degree: { type: String, required: true },
  year_of_study: { type: String, required: true },
  domain: { type: String, required: true },
  skills: { type: String, required: true }, // store comma-separated or array
  resumePath: { type: String },             // store path or filename if uploaded
  location_preference: { type: String },
  duration_preference: { type: String },
  stipend_expectation: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
}, {
  timestamps: true,
});

export const Internship = mongoose.model("Internship", internshipSchema);


// // src/models/internship.model.js
// import mongoose from "mongoose";

// const internshipSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true, trim: true },
//     company: { type: String, required: true, trim: true },
//     location: { type: String, required: true, trim: true },
//     stipend: { type: Number, default: 0 },
//     duration: { type: String, default: "" },
//     domain: { type: String, required: true },
//     skills: [{ type: String, required: true }],
//     description: { type: String, default: "" },
//   },
//   { timestamps: true }
// );

// export const Internship = mongoose.model("Internship", internshipSchema);




// import mongoose from "mongoose";

// const internshipSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     company: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     location: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     stipend: {
//       type: Number,
//       default: 0,
//     },
//     duration: {
//       type: String,
//       default: "",
//     },
//     domain: {
//       type: String,
//       required: true,
//     },
//     skills: [
//       {
//         type: String,
//         required: true,
//       },
//     ],
//     description: {
//       type: String,
//       default: "",
//     },
//   },
//   { timestamps: true }
// );

// export const Internship = mongoose.model("Internship", internshipSchema);

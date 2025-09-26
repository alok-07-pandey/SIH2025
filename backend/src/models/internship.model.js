// src/models/internship.model.js
import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    stipend: { type: Number, default: 0 },
    duration: { type: String, default: "" },
    domain: { type: String, required: true },
    skills: [{ type: String, required: true }],
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

export const Internship = mongoose.model("Internship", internshipSchema);




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

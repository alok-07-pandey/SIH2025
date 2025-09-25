import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    student_id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    year_of_study: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    location_preference: {
      type: String,
      required: true,
    },
    duration_preference: {
      type: String,
    },
    stipend_expectation: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);

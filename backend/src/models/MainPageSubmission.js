import mongoose from "mongoose";

const mainPageSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true },
    source: { type: String, default: "main-page" },
    status: {
      type: String,
      enum: ["new", "replied", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("MainPageSubmission", mainPageSubmissionSchema);
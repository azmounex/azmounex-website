import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
    clientName: { type: String, default: "" },
    projectUrl: { type: String, default: "" },
    technologies: [{ type: String, trim: true }],
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    featured: { type: Boolean, default: false },
    image: {
      url: { type: String, default: "" },
      filename: { type: String, default: "" },
      path: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
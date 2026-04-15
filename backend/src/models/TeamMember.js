import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    category: { type: String, default: "Staff", trim: true },
    email: { type: String, default: "", trim: true },
    bio: { type: String, required: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    image: {
      url: { type: String, default: "" },
      filename: { type: String, default: "" },
      path: { type: String, default: "" },
    },
    socialLinks: {
      linkedin: { type: String, default: "" },
      github: { type: String, default: "" },
      instagram: { type: String, default: "" },
      website: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export default mongoose.model("TeamMember", teamMemberSchema);
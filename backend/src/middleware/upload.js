import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

function createImageUpload(folderName) {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params: {
      folder: `portfolio/${folderName}`,
      resource_type: "auto",
    },
  });

  return multer({ storage });
}

export { createImageUpload };
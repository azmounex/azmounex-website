import fs from "fs";
import path from "path";
import multer from "multer";

function ensureUploadDir(folderName) {
  const uploadRoot = path.resolve(process.cwd(), "uploads", folderName);

  if (!fs.existsSync(uploadRoot)) {
    fs.mkdirSync(uploadRoot, { recursive: true });
  }

  return uploadRoot;
}

function createImageUpload(folderName) {
  const destination = ensureUploadDir(folderName);

  const storage = multer.diskStorage({
    destination,
    filename: (req, file, cb) => {
      const safeName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, "-");
      cb(null, `${Date.now()}-${safeName}`);
    },
  });

  return multer({ storage });
}

export { createImageUpload, ensureUploadDir };
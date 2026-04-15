import { Router } from "express";
import { createProject, deleteProject, listProjects, updateProject } from "../controllers/projectController.js";
import { requireAdmin } from "../middleware/auth.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { createImageUpload } from "../middleware/upload.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { createProjectValidator, updateProjectValidator } from "../validators/projectValidators.js";

const router = Router();
const upload = createImageUpload("projects");

router.get("/", requireAdmin, asyncHandler(listProjects));
router.post("/", requireAdmin, upload.single("image"), createProjectValidator, validateRequest, asyncHandler(createProject));
router.put("/:id", requireAdmin, upload.single("image"), updateProjectValidator, validateRequest, asyncHandler(updateProject));
router.delete("/:id", requireAdmin, asyncHandler(deleteProject));

export default router;
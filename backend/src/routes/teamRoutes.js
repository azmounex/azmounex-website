import { Router } from "express";
import { createTeamMember, deleteTeamMember, listTeamMembers, updateTeamMember } from "../controllers/teamController.js";
import { requireAdmin } from "../middleware/auth.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { createImageUpload } from "../middleware/upload.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { createTeamValidator, updateTeamValidator } from "../validators/teamValidators.js";

const router = Router();
const upload = createImageUpload("staff");

router.get("/", requireAdmin, asyncHandler(listTeamMembers));
router.post("/", requireAdmin, upload.single("image"), createTeamValidator, validateRequest, asyncHandler(createTeamMember));
router.put("/:id", requireAdmin, upload.single("image"), updateTeamValidator, validateRequest, asyncHandler(updateTeamMember));
router.delete("/:id", requireAdmin, asyncHandler(deleteTeamMember));

export default router;
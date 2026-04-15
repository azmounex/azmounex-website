import { Router } from "express";
import { requireAdmin } from "../middleware/auth.js";
import { deleteProjectCategory, listProjectCategories } from "../controllers/projectCategoryController.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(listProjectCategories));
router.delete("/:category", requireAdmin, asyncHandler(deleteProjectCategory));

export default router;
import { Router } from "express";
import {
  createContactSubmission,
  createMainPageSubmission,
  listContactSubmissions,
  listMainPageSubmissions,
  updateContactSubmissionStatus,
  updateMainPageSubmissionStatus,
} from "../controllers/submissionController.js";
import { requireAdmin } from "../middleware/auth.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { contactSubmissionValidator, mainSubmissionValidator } from "../validators/submissionValidators.js";

const router = Router();

router.post("/contact", contactSubmissionValidator, validateRequest, asyncHandler(createContactSubmission));
router.post("/main-page", mainSubmissionValidator, validateRequest, asyncHandler(createMainPageSubmission));
router.get("/contact", requireAdmin, asyncHandler(listContactSubmissions));
router.get("/main-page", requireAdmin, asyncHandler(listMainPageSubmissions));
router.put("/contact/:id", requireAdmin, asyncHandler(updateContactSubmissionStatus));
router.put("/main-page/:id", requireAdmin, asyncHandler(updateMainPageSubmissionStatus));

export default router;
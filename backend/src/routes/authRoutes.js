import { Router } from "express";
import { loginAdmin } from "../controllers/authController.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { loginValidator } from "../validators/authValidators.js";

const router = Router();

router.post("/login", loginValidator, validateRequest, asyncHandler(loginAdmin));

export default router;
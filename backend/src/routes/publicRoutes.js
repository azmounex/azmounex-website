import { Router } from "express";
import {
  getPublicHeroSlides,
  getPublicProjectCategories,
  getPublicProjects,
  getPublicTeamMembers,
} from "../controllers/publicController.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = Router();

router.use((req, res, next) => {
  res.set("Cache-Control", "public, max-age=120, stale-while-revalidate=300");
  next();
});

router.get("/team-members", asyncHandler(getPublicTeamMembers));
router.get("/projects", asyncHandler(getPublicProjects));
router.get("/project-categories", asyncHandler(getPublicProjectCategories));
router.get("/hero-slides", asyncHandler(getPublicHeroSlides));

export default router;
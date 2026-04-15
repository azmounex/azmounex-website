import HeroSlide from "../models/HeroSlide.js";
import Project from "../models/Project.js";
import TeamMember from "../models/TeamMember.js";

function normalizeCategories(values) {
  return values
    .filter(Boolean)
    .map((value) => String(value).trim())
    .filter(Boolean)
    .sort((left, right) => left.localeCompare(right));
}

async function getPublicTeamMembers(req, res) {
  const teamMembers = await TeamMember.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).lean();
  return res.json(teamMembers);
}

async function getPublicProjects(req, res) {
  const projects = await Project.find({ status: "published" })
    .sort({ order: 1, featured: -1, createdAt: -1 })
    .lean();

  return res.json(projects);
}

async function getPublicProjectCategories(req, res) {
  const categories = await Project.distinct("category");
  return res.json(normalizeCategories(categories));
}

async function getPublicHeroSlides(req, res) {
  const slides = await HeroSlide.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).lean();
  return res.json(slides);
}

export {
  getPublicTeamMembers,
  getPublicProjects,
  getPublicProjectCategories,
  getPublicHeroSlides,
};
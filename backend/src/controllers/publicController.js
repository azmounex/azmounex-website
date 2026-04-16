import HeroSlide from "../models/HeroSlide.js";
import Project from "../models/Project.js";
import TeamMember from "../models/TeamMember.js";

function normalizeTeamImageUrl(url) {
  if (!url) {
    return "";
  }

  if (url.startsWith("/uploads/team/")) {
    return url.replace("/uploads/team/", "/uploads/staff/");
  }

  return url;
}

function normalizeCategories(values) {
  return values
    .filter(Boolean)
    .map((value) => String(value).trim())
    .filter(Boolean)
    .sort((left, right) => left.localeCompare(right));
}

async function getPublicTeamMembers(req, res) {
  const teamMembers = await TeamMember.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).lean();
  const normalizedMembers = teamMembers.map((member) => ({
    ...member,
    image: {
      ...(member.image || {}),
      url: normalizeTeamImageUrl(member.image?.url),
    },
  }));

  return res.json(normalizedMembers);
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
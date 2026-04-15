import Project from "../models/Project.js";

function normalizeCategories(values) {
  return values
    .filter(Boolean)
    .map((value) => String(value).trim())
    .filter(Boolean)
    .sort((left, right) => left.localeCompare(right));
}

async function listProjectCategories(req, res) {
  const categories = await Project.distinct("category");
  return res.json(normalizeCategories(categories));
}

async function deleteProjectCategory(req, res) {
  const categoryName = decodeURIComponent(req.params.category);

  if (!categoryName) {
    return res.status(400).json({ message: "Category name is required" });
  }

  await Project.updateMany({ category: categoryName }, { $set: { category: "General" } });

  return res.json({ message: "Category removed from projects" });
}

export { listProjectCategories, deleteProjectCategory };
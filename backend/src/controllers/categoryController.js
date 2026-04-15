import ProjectCategory from "../models/ProjectCategory.js";

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function listCategories(req, res) {
  const categories = await ProjectCategory.find().sort({ order: 1, createdAt: -1 });
  return res.json(categories);
}

async function createCategory(req, res) {
  const { name, description = "", isActive = true, order = 0, slug } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Category name is required" });
  }

  const category = await ProjectCategory.create({
    name,
    slug: slug || slugify(name),
    description,
    isActive,
    order,
  });

  return res.status(201).json(category);
}

async function updateCategory(req, res) {
  const category = await ProjectCategory.findById(req.params.id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  const { name, description, isActive, order, slug } = req.body;

  if (name !== undefined) category.name = name;
  if (slug !== undefined) category.slug = slug || slugify(name || category.name);
  if (description !== undefined) category.description = description;
  if (isActive !== undefined) category.isActive = isActive;
  if (order !== undefined) category.order = order;

  await category.save();
  return res.json(category);
}

async function deleteCategory(req, res) {
  const category = await ProjectCategory.findById(req.params.id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  await category.deleteOne();
  return res.json({ message: "Category deleted" });
}

export { listCategories, createCategory, updateCategory, deleteCategory, slugify };
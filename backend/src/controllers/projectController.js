import Project from "../models/Project.js";
import cloudinary from "../config/cloudinary.js";
import { slugify } from "./categoryController.js";

function normalizeTechnologies(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map((item) => String(item).trim());
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function imagePayload(file) {
  if (!file) {
    return undefined;
  }

  return {
    url: file.path,
    filename: file.filename,
    public_id: file.public_id,
  };
}

async function removeStoredFile(image) {
  if (!image || !image.public_id) {
    return;
  }

  try {
    await cloudinary.v2.uploader.destroy(image.public_id);
  } catch {
    // Ignore cleanup errors.
  }
}

async function listProjects(req, res) {
  const projects = await Project.find().sort({ order: 1, createdAt: -1 });
  return res.json(projects);
}

async function createProject(req, res) {
  const {
    title,
    description,
    category,
    order = 0,
    clientName = "",
    projectUrl = "",
    status = "draft",
    featured = false,
    slug,
  } = req.body;

  if (!title || !description || !category) {
    return res.status(400).json({ message: "Title, description, and category are required" });
  }

  const project = await Project.create({
    title,
    slug: slug || slugify(title),
    description,
    category,
    order,
    clientName,
    projectUrl,
    technologies: normalizeTechnologies(req.body.technologies),
    status,
    featured: featured === true || featured === "true",
    image: imagePayload(req.file) || undefined,
  });

  return res.status(201).json(project);
}

async function updateProject(req, res) {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  const { title, description, category, order, clientName, projectUrl, status, featured, slug } = req.body;

  if (title !== undefined) {
    project.title = title;
    if (slug === undefined) {
      project.slug = slugify(title);
    }
  }
  if (slug !== undefined) project.slug = slug || slugify(title || project.title);
  if (description !== undefined) project.description = description;
  if (category !== undefined) project.category = category;
  if (order !== undefined) project.order = order;
  if (clientName !== undefined) project.clientName = clientName;
  if (projectUrl !== undefined) project.projectUrl = projectUrl;
  if (req.body.technologies !== undefined) project.technologies = normalizeTechnologies(req.body.technologies);
  if (status !== undefined) project.status = status;
  if (featured !== undefined) project.featured = featured === true || featured === "true";

  if (req.file) {
    await removeStoredFile(project.image);
    project.image = imagePayload(req.file);
  }

  await project.save();
  return res.json(project);
}

async function deleteProject(req, res) {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  await removeStoredFile(project.image);
  await project.deleteOne();
  return res.json({ message: "Project deleted" });
}

export { listProjects, createProject, updateProject, deleteProject };
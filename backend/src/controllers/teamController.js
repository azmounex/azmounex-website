import fs from "fs/promises";
import path from "path";
import TeamMember from "../models/TeamMember.js";

function normalizeImageUrl(url) {
  if (!url) {
    return "";
  }

  // Backward compatibility: old records used /uploads/team while files were stored in /uploads/staff.
  if (url.startsWith("/uploads/team/")) {
    return url.replace("/uploads/team/", "/uploads/staff/");
  }

  return url;
}

function imagePayload(file) {
  if (!file) {
    return undefined;
  }

  return {
    url: path.posix.join("/uploads", "staff", file.filename),
    filename: file.filename,
    path: file.path,
  };
}

function serializeTeamMember(teamMember) {
  const record = typeof teamMember.toObject === "function" ? teamMember.toObject() : teamMember;

  return {
    ...record,
    image: {
      ...(record.image || {}),
      url: normalizeImageUrl(record.image?.url),
    },
  };
}

async function removeStoredFile(image) {
  if (!image) {
    return;
  }

  let filePath = image.path;

  if (!filePath && image.filename) {
    filePath = path.resolve(process.cwd(), "uploads", "staff", image.filename);
  }

  if (!filePath && image.url && image.url.startsWith("/uploads/")) {
    filePath = path.resolve(process.cwd(), image.url.slice(1));
  }

  if (!filePath) {
    return;
  }

  try {
    await fs.unlink(filePath);
  } catch {
    // Ignore cleanup errors.
  }
}

async function listTeamMembers(req, res) {
  const teamMembers = await TeamMember.find().sort({ order: 1, createdAt: -1 });
  return res.json(teamMembers.map(serializeTeamMember));
}

async function createTeamMember(req, res) {
  const { name, role, category = "Staff", email = "", bio, order = 0, isActive = true } = req.body;

  if (!name || !role || !bio) {
    return res.status(400).json({ message: "Name, role, and bio are required" });
  }

  const teamMember = await TeamMember.create({
    name,
    role,
    category,
    email,
    bio,
    order,
    isActive: isActive === true || isActive === "true",
    socialLinks: {
      linkedin: req.body.linkedin || "",
      github: req.body.github || "",
      instagram: req.body.instagram || "",
      website: req.body.website || "",
    },
    image: imagePayload(req.file) || undefined,
  });

  return res.status(201).json(serializeTeamMember(teamMember));
}

async function updateTeamMember(req, res) {
  const teamMember = await TeamMember.findById(req.params.id);

  if (!teamMember) {
    return res.status(404).json({ message: "Team member not found" });
  }

  const { name, role, category, email, bio, order, isActive } = req.body;

  if (name !== undefined) teamMember.name = name;
  if (role !== undefined) teamMember.role = role;
  if (category !== undefined) teamMember.category = category;
  if (email !== undefined) teamMember.email = email;
  if (bio !== undefined) teamMember.bio = bio;
  if (order !== undefined) teamMember.order = order;
  if (isActive !== undefined) teamMember.isActive = isActive === true || isActive === "true";

  teamMember.socialLinks = {
    linkedin: req.body.linkedin ?? teamMember.socialLinks.linkedin,
    github: req.body.github ?? teamMember.socialLinks.github,
    instagram: req.body.instagram ?? teamMember.socialLinks.instagram,
    website: req.body.website ?? teamMember.socialLinks.website,
  };

  if (req.file) {
    await removeStoredFile(teamMember.image);
    teamMember.image = imagePayload(req.file);
  }

  await teamMember.save();
  return res.json(serializeTeamMember(teamMember));
}

async function deleteTeamMember(req, res) {
  const teamMember = await TeamMember.findById(req.params.id);

  if (!teamMember) {
    return res.status(404).json({ message: "Team member not found" });
  }

  await removeStoredFile(teamMember.image);
  await teamMember.deleteOne();
  return res.json({ message: "Team member deleted" });
}

export { listTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember };
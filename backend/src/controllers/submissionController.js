import ContactSubmission from "../models/ContactSubmission.js";
import MainPageSubmission from "../models/MainPageSubmission.js";

async function createContactSubmission(req, res) {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All contact fields are required" });
  }

  const submission = await ContactSubmission.create({ name, email, subject, message });
  return res.status(201).json(submission);
}

async function createMainPageSubmission(req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All lead fields are required" });
  }

  const submission = await MainPageSubmission.create({ name, email, message });
  return res.status(201).json(submission);
}

async function listContactSubmissions(req, res) {
  const submissions = await ContactSubmission.find().sort({ createdAt: -1 });
  return res.json(submissions);
}

async function listMainPageSubmissions(req, res) {
  const submissions = await MainPageSubmission.find().sort({ createdAt: -1 });
  return res.json(submissions);
}

async function updateContactSubmissionStatus(req, res) {
  const submission = await ContactSubmission.findById(req.params.id);

  if (!submission) {
    return res.status(404).json({ message: "Contact submission not found" });
  }

  submission.status = req.body.status || submission.status;
  await submission.save();
  return res.json(submission);
}

async function updateMainPageSubmissionStatus(req, res) {
  const submission = await MainPageSubmission.findById(req.params.id);

  if (!submission) {
    return res.status(404).json({ message: "Main page submission not found" });
  }

  submission.status = req.body.status || submission.status;
  await submission.save();
  return res.json(submission);
}

export {
  createContactSubmission,
  createMainPageSubmission,
  listContactSubmissions,
  listMainPageSubmissions,
  updateContactSubmissionStatus,
  updateMainPageSubmissionStatus,
};
import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";
import HeroSlide from "../models/HeroSlide.js";
import Project from "../models/Project.js";
import TeamMember from "../models/TeamMember.js";

const projectSeedData = [
  {
    title: "RetailFlow POS Suite",
    description:
      "A complete POS ecosystem for retail chains with billing, inventory sync, and branch-level analytics dashboards.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
    tags: ["POS", "Inventory", "Analytics", "Node.js"],
    category: "Business Systems",
  },
  {
    title: "DeskPilot ERP Desktop",
    description:
      "A desktop business application for finance, HR, procurement, and role-based operational workflows.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    tags: ["Desktop App", "ERP", "Operations"],
    category: "Business Systems",
  },
  {
    title: "Nimbus SaaS Platform",
    description:
      "A multi-tenant SaaS platform with subscription billing, customer portals, and advanced admin controls.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
    tags: ["SaaS", "Multi-Tenant", "Payments", "React"],
    category: "SaaS Products",
  },
  {
    title: "VisionTrack CV Inspector",
    description:
      "A computer vision pipeline for product quality assurance, anomaly detection, and camera stream monitoring.",
    image:
      "https://images.unsplash.com/photo-1581090700227-4c4f50ed7f7d?auto=format&fit=crop&w=1400&q=80",
    tags: ["Computer Vision", "OpenCV", "Automation"],
    category: "AI Solutions",
  },
  {
    title: "LexiAssist NLP Engine",
    description:
      "An NLP-powered support assistant for ticket classification, intent detection, and smart response generation.",
    image:
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=1400&q=80",
    tags: ["NLP", "LLM", "Chatbot", "Python"],
    category: "AI Solutions",
  },
  {
    title: "PulseCommerce Web Store",
    description:
      "An enterprise e-commerce web application with personalized recommendations and omnichannel order tracking.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80",
    tags: ["Web App", "E-commerce", "Performance"],
    category: "Web Platforms",
  },
  {
    title: "FieldOps Flutter App",
    description:
      "A Flutter mobile app for field teams with offline mode, geo-logging, and real-time task synchronization.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
    tags: ["Flutter", "Mobile", "Offline Sync"],
    category: "Mobile Solutions",
  },
  {
    title: "React Native Delivery Hub",
    description:
      "A React Native logistics app for fleet tracking, route optimization, and delivery proof automation.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    tags: ["React Native", "Logistics", "Maps"],
    category: "Mobile Solutions",
  },
];

const teamSeedData = [
  {
    name: "Muhammed Asim Iftikhar",
    role: "Chief Executive Officer & Founder",
    category: "Leadership",
    email: "azmounex@gmail.com",
    bio: "Founder of Azmounex, leading vision, strategy, and innovation. Focused on building scalable digital solutions and driving growth through modern technology and AI.",
    imageUrl: "/uploads/staff/asim_profile.jpg",
    order: 1,
  },
  {
    name: "Ali Raza",
    role: "Frontend Developer",
    category: "Staff",
    email: "azmounex@gmail.com",
    bio: "Specializes in building modern, responsive, and user-friendly interfaces using React and latest web technologies, ensuring smooth and engaging user experiences.",
    imageUrl: "/uploads/staff/ali_profile.jpeg",
    order: 2,
  },
  {
    name: "Adan Masih",
    role: "Backend Developer",
    category: "Staff",
    email: "azmounex@gmail.com",
    bio: "Develops secure and scalable server-side systems, APIs, and databases to power high-performance applications and ensure reliable business operations.",
    imageUrl: "/uploads/staff/adan_profile.jpeg",
    order: 3,
  },
  {
    name: "Atif Ali",
    role: "Full Stack Developer & Designer",
    category: "Staff",
    email: "azmounex@gmail.com",
    bio: "Designs intuitive and visually appealing user experiences with a focus on usability, consistency, and modern design principles.",
    imageUrl: "/uploads/staff/atif_profile.jpeg",
    order: 4,
  },
  {
    name: "Zohaib Haider",
    role: "Machine Learning Engineer",
    category: "Staff",
    email: "azmounex@gmail.com",
    bio: "Builds intelligent AI and machine learning solutions, including automation systems, predictive models, and data-driven applications.",
    imageUrl: "/uploads/staff/zohaib_profile.jpeg",
    order: 5,
  },
];

const heroSlidesSeedData = [
  { imageUrl: "/uploads/hero_section/hero_section_image_1.png", order: 1 },
  { imageUrl: "/uploads/hero_section/hero_section_image_2.png", order: 2 },
  { imageUrl: "/uploads/hero_section/hero_section_image_3.png", order: 3 },
  { imageUrl: "/uploads/hero_section/hero_section_image_4.png", order: 4 },
  { imageUrl: "/uploads/hero_section/hero_section_image_5.png", order: 5 },
];

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function seedContent() {
  await connectDB();

  await Promise.all([
    Project.deleteMany({}),
    TeamMember.deleteMany({}),
    HeroSlide.deleteMany({}),
  ]);

  await Project.insertMany(
    projectSeedData.map((item) => ({
      title: item.title,
      slug: slugify(item.title),
      description: item.description,
      category: item.category,
      order: projectSeedData.findIndex((project) => project.title === item.title) + 1,
      clientName: "",
      projectUrl: "",
      technologies: item.tags,
      status: "published",
      featured: false,
      image: {
        url: item.image,
        filename: "",
        path: "",
      },
    }))
  );

  await TeamMember.insertMany(
    teamSeedData.map((item) => ({
      name: item.name,
      role: item.role,
      email: item.email,
      bio: item.bio,
      order: item.order,
      isActive: true,
      socialLinks: {
        linkedin: "",
        github: "",
        instagram: "",
        website: "",
      },
      image: {
        url: item.imageUrl,
        filename: item.imageUrl.split("/").pop(),
        path: "",
      },
      category: item.category,
    }))
  );

  await HeroSlide.insertMany(
    heroSlidesSeedData.map((item) => ({
      title: "",
      subtitle: "",
      imageUrl: item.imageUrl,
      order: item.order,
      isActive: true,
    }))
  );

  console.log("Content seed completed successfully.");
  process.exit(0);
}

seedContent().catch((error) => {
  console.error("Failed to seed content:", error);
  process.exit(1);
});
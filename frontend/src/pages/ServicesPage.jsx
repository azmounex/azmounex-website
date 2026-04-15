import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Seo from "../components/seo/Seo.jsx";
import { pageSeo } from "../constants/seo.js";

const serviceDetails = [
  {
    title: "UI/UX Design",
    summary: "Creating intuitive and engaging digital experiences that users love.",
    points: [
      "User research, personas, and journey mapping",
      "Wireframes, prototypes, and modern design systems",
      "Conversion-focused and user-centered interfaces",
    ],
  },
  {
    title: "Web Development",
    summary: "Building fast, scalable, and modern web applications for businesses.",
    points: [
      "Custom front-end and back-end development",
      "Secure authentication and scalable architecture",
      "API integrations with third-party services",
    ],
  },
  {
    title: "Mobile App Development",
    summary: "High-performance mobile apps for Android and iOS platforms.",
    points: [
      "Cross-platform and native app development",
      "User-friendly and responsive mobile interfaces",
      "Integration with APIs, databases, and cloud services",
    ],
  },
  {
    title: "SaaS Product Development",
    summary: "End-to-end SaaS solutions from idea to scalable product launch.",
    points: [
      "MVP development for startups",
      "Subscription systems and admin dashboards",
      "Cloud-ready and scalable architecture",
    ],
  },
  {
    title: "AI & Machine Learning",
    summary: "Smart AI-powered solutions to automate and optimize business processes.",
    points: [
      "Custom AI models and intelligent automation",
      "Predictive analytics and data-driven insights",
      "AI integration into existing applications",
    ],
  },
  {
    title: "Computer Vision",
    summary: "Advanced visual AI solutions for real-world applications.",
    points: [
      "Object detection and image classification",
      "OCR and document processing systems",
      "Video analysis for security and monitoring",
    ],
  },
  {
    title: "Natural Language Processing",
    summary: "AI-powered language systems for smarter communication.",
    points: [
      "Chatbots and virtual assistants",
      "Text analysis and sentiment detection",
      "Semantic search and knowledge systems",
    ],
  },
  {
    title: "POS Systems",
    summary: "Smart point-of-sale solutions for retail and restaurants.",
    points: [
      "Billing, inventory, and sales tracking",
      "Multi-branch and real-time reporting",
      "Hardware integration (barcode, printers, etc.)",
    ],
  },
  {
    title: "CRM Systems",
    summary: "Customer relationship management tools to grow and retain clients.",
    points: [
      "Lead tracking and sales pipeline management",
      "Customer insights and analytics dashboards",
      "Automation of communication and follow-ups",
    ],
  },
  {
    title: "ERP Solutions",
    summary: "Enterprise systems to manage business operations efficiently.",
    points: [
      "Finance, HR, and inventory management",
      "Centralized dashboards and reporting",
      "Custom modules based on business needs",
    ],
  },
  {
    title: "SEO & Digital Growth",
    summary: "Helping businesses grow online with visibility and performance.",
    points: [
      "On-page and technical SEO optimization",
      "Website speed and performance improvements",
      "Content strategy and ranking growth",
    ],
  },
  {
    title: "Custom Software Development",
    summary: "Tailored software solutions designed for unique business needs.",
    points: [
      "End-to-end system design and development",
      "Automation of manual workflows",
      "Scalable and secure architecture",
    ],
  },
];

const technologies = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Computer Vision", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "Natural Language Processing", logo: "https://cdn.simpleicons.org/huggingface/FFD21E" },
];

function ServicesPage() {
  return (
    <div className="bg-white text-slate-900">
      <Seo {...pageSeo.services} />
      <section className="bg-white px-4 pb-14 pt-8 text-slate-900 md:px-12 md:pt-12">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1d9bf0]">Services</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tighter md:text-7xl">
            Complete Software
            <br />
            House Services<span className="text-[#1d9bf0]">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            We build modern digital products for startups and enterprises, including web apps,
            desktop tools, POS systems, SaaS platforms, and AI solutions.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 md:px-12 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-[#d9eaf7] bg-white p-7 shadow-[0_12px_28px_rgba(29,155,240,0.08)]"
            >
              <h2 className="text-3xl font-extrabold tracking-tighter text-slate-900">{service.title}</h2>
              <p className="mt-3 text-slate-600">{service.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 text-[#1d9bf0]">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f5faff] px-4 py-14 text-slate-900 md:px-12 md:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
            Languages & Tech We Use<span className="text-[#1d9bf0]">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Our team ships across full-stack software and AI domains with production-ready engineering standards.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 rounded-2xl border border-[#d9eaf7] bg-white px-4 py-3"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1">
                  <img src={tech.logo} alt={tech.name} className="h-8 w-8 object-contain" />
                </span>
                <span className="text-sm font-medium text-slate-700">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#1d9bf0] px-6 py-3 font-semibold text-white transition hover:bg-[#1786d3]"
            >
              Start Your Project
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;

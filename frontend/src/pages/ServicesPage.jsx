import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Seo from "../components/seo/Seo.jsx";
import { pageSeo } from "../constants/seo.js";

/* ================= SERVICES ================= */

const serviceDetails = [
  {
    title: "Startup MVP Development",
    summary:
      "We transform early-stage ideas into market-ready MVPs, enabling rapid validation and scalable growth.",
    points: [
      "Rapid product prototyping and launch",
      "Scalable architecture for future growth",
      "Technical strategy and product consulting",
    ],
  },
  {
    title: "Custom Web Platforms",
    summary:
      "High-performance web platforms engineered for scalability, security, and business efficiency.",
    points: [
      "Custom dashboards and admin systems",
      "Secure authentication and API integrations",
      "Modern full-stack (MERN) architecture",
    ],
  },
  {
    title: "AI-Powered Solutions",
    summary:
      "Intelligent systems that automate processes and unlock actionable insights from your data.",
    points: [
      "Predictive analytics and automation",
      "Custom AI model development",
      "Seamless AI integration into products",
    ],
  },
  {
    title: "SaaS Product Engineering",
    summary:
      "End-to-end SaaS platforms designed for performance, scalability, and recurring revenue models.",
    points: [
      "Multi-tenant architecture",
      "Subscription and billing systems",
      "Cloud-native deployment",
    ],
  },
  {
    title: "Mobile Applications",
    summary:
      "Cross-platform mobile apps delivering seamless performance and engaging user experiences.",
    points: [
      "React Native & Flutter apps",
      "API-driven mobile systems",
      "Optimized performance & UX",
    ],
  },
  {
    title: "Business Automation",
    summary:
      "Streamline operations and reduce costs through intelligent workflow automation systems.",
    points: [
      "Process automation solutions",
      "System integrations",
      "Real-time monitoring dashboards",
    ],
  },
];

/* ================= TECHNOLOGIES ================= */

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
  },
  {
    category: "AI & Data",
    items: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Machine Learning", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "Computer Vision", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "NLP", logo: "https://cdn.simpleicons.org/huggingface/FFD21E" },
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "REST API", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
    ],
  },
];

/* ================= COMPONENT ================= */

function ServicesPage() {
  return (
    <div className="bg-white text-slate-900">
      <Seo {...pageSeo.services} />

      {/* HERO */}
      <section className="px-4 pb-16 pt-10 md:px-12 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1d9bf0]">
            Our Expertise
          </p>

          <h1 className="mt-5 text-5xl font-extrabold tracking-tight md:text-7xl leading-tight">
            Engineering Digital
            <br />
            Products That Scale<span className="text-[#1d9bf0]">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            We partner with startups and enterprises to design, build, and scale
            modern software solutions powered by cutting-edge technologies and AI.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-3xl border border-[#e6f2fb] bg-white p-8 
              shadow-[0_10px_30px_rgba(29,155,240,0.08)] 
              transition-all duration-500 
              hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(29,155,240,0.18)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#1d9bf0]/10 to-transparent" />

              <h3 className="text-2xl font-bold">{service.title}</h3>

              <p className="mt-4 text-slate-600">{service.summary}</p>

              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1d9bf0]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center text-sm font-semibold text-[#1d9bf0]">
                Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-[#f8fbff] py-20 px-4 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Technology Stack</h2>

          <p className="mt-3 text-slate-600 max-w-xl">
            We leverage modern, scalable technologies to build high-performance digital solutions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.category}
                className="rounded-2xl bg-white p-6 border border-[#e6f2fb] 
                shadow-sm hover:shadow-xl transition duration-300"
              >
                <h4 className="font-semibold text-lg text-[#1d9bf0]">
                  {tech.category}
                </h4>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {tech.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-2 rounded-lg 
                      hover:bg-[#f1f7fe] transition group"
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-sm font-medium text-slate-700">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Have an idea in mind?
        </h2>
        <p className="mt-4 text-slate-600">
          Let’s turn your vision into a scalable digital product.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1d9bf0] px-6 py-3 text-white font-semibold shadow-md hover:shadow-lg transition"
        >
          Start a Project <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}

export default ServicesPage;
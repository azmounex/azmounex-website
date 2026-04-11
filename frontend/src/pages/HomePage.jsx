import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage1 from "../assets/hero_section/hero_section_image_1.png";
import heroImage2 from "../assets/hero_section/hero_section_image_2.png";
import heroImage3 from "../assets/hero_section/hero_section_image_3.png";
import heroImage4 from "../assets/hero_section/hero_section_image_4.png"; 
import heroImage5 from "../assets/hero_section/hero_section_image_5.png";
import webImage from "../assets/services_section/web.webp";
import landingimage from "../assets/services_section/landing_page.webp";
import uiImage from "../assets/services_section/ui.avif";
import posImage from "../assets/services_section/pos.webp";
import desktopImage from "../assets/services_section/desktop.avif";
import aiImage from "../assets/services_section/ai.webp";
import saasImage from "../assets/services_section/saas.webp";
import mobileImage from "../assets/services_section/mobile.webp";

const tickerItems = [
  "AI Solutions",
  "Web Development",
  "Mobile Apps",
  "Desktop Apps",
  "POS Systems",
  "E-Commerce Stores",
  "ERP Solutions",
  "CRM Software",
  "SaaS Products",
  "UI/UX Design",
  "Chatbot Development",
];

const milestoneCards = [
  {
    title: "The Beginning",
    description:
      "Azmounex was founded in 2025 with a mission to build innovative, scalable, and user-focused digital solutions.",
    badge: "2025",
    icon: "✿",
  },
  {
    title: "Early Growth",
    description:
      "Started collaborating with startups and businesses, delivering high-quality web, mobile, and AI-powered solutions.",
    badge: "2025",
    icon: "✦",
  },
  {
    title: "Building Impact",
    description:
      "Focused on creating meaningful digital products that enhance user experience and drive real business growth.",
    badge: "2025",
    icon: "◜",
  },
  {
    title: "Future Vision",
    description:
      "Expanding into AI/ML, automation, and global markets to shape the future of digital innovation.",
    badge: "Beyond 2025",
    icon: "✺",
  },
];

const stats = [
  { value: "5+", label: "Projects in Progress" },
  { value: "10+", label: "Happy Clients" },
  { value: "3+", label: "Technologies Mastered" },
  { value: "24/7", label: "Dedicated Support" },
];

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Craft beautiful user interfaces with exceptional user experience",
    image: uiImage,
  },
  {
    id: 2,
    title: "Web Development",
    description: "Build powerful and scalable web applications",
    image: webImage,
  },
  {
    id: 3,
    title: "Landing Page",
    description: "Create high-converting landing pages that drive results",
    image: landingimage,
  },
  {
    id: 4,
    title: "POS System",
    description: "Intelligent point-of-sale solutions for retail businesses",
    image: posImage,
  },
  {
    id: 5,
    title: "Desktop App",
    description: "Cross-platform desktop applications for Windows, Mac & Linux",
    image: desktopImage,      
  },
  {
    id: 6,
    title: "AI Driven Projects",
    description: "Harness AI to create intelligent business solutions",
    image: aiImage,
  },
  {
    id: 7,
    title: "SaaS Development",
    description: "Build subscription-based software solutions",
    image: saasImage,
  },
  {
    id: 8,
    title: "Mobile App Dev",
    description: "Native and cross-platform mobile applications",
    image: mobileImage,
  },
];



function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-white px-4 pb-8 pt-2 text-slate-900 md:px-12 md:pt-3">
        <div className="mx-auto grid w-full max-w-6xl gap-10 py-2 lg:grid-cols-2 lg:items-center lg:py-4">
          <div>
            <p className="mb-6 hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1d9bf0] lg:block">
              About Us
            </p>
            <h1 className="max-w-xl text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-7xl">
              Crafting Digital
              <br />
              Brilliance<span className="text-[#1d9bf0]">.</span>
            </h1>
            <p className="mt-7 max-w-lg text-[1.06rem] leading-relaxed text-slate-600">
              We are Azmounex, a startup studio transforming businesses with cutting-edge digital
              experiences.
            </p>
            <p className="mt-4 max-w-lg text-[1.06rem] leading-relaxed text-slate-600">
              You can also white-label all our services for the best price on the market.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-full border border-[#d9eaf7] bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm hover:border-[#1d9bf0] hover:text-[#1d9bf0]"
              >
                Explore Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-[#1d9bf0] bg-[#1d9bf0] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#1786d3]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8efff]" />
            <div className="relative z-10 mx-auto h-[30rem] w-[82%] -translate-y-8 overflow-hidden rounded-3xl border-2 border-[#1d9bf0]/20 shadow-lg md:-translate-y-10">
              <img
                src={heroImages[currentSlide]}
                className="h-full w-full object-cover transition-opacity duration-700"
                alt="hero"
              />
              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition ${
                      index === currentSlide ? "w-8 bg-[#1d9bf0]" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute bottom-32 left-0 z-20 rounded-xl border border-[#d9eaf7] bg-white/90 p-4 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <img src="https://i.pravatar.cc/40?img=11" alt="avatar" className="h-7 w-7 rounded-full object-cover" />
                <img src="https://i.pravatar.cc/40?img=52" alt="avatar" className="-ml-2 h-7 w-7 rounded-full object-cover" />
                <img src="https://i.pravatar.cc/40?img=32" alt="avatar" className="-ml-2 h-7 w-7 rounded-full object-cover" />
                <span className="ml-1 text-xl font-semibold text-slate-900">9</span>
                <span className="text-[#1d9bf0]">+</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">Satisfied Customer</p>
              <p className="mt-1 text-xs text-slate-500">★★★★★ 4.9/5 Review</p>
            </div>

            <div className="absolute bottom-12 right-0 z-20 rounded-xl border border-[#d9eaf7] bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm">
              <p className="text-4xl font-extrabold tracking-tighter text-slate-900">10+</p>
              <p className="text-sm text-slate-500">Happy Businesses</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 hidden w-full max-w-6xl border-t border-[#d9eaf7] pt-6 lg:block">
          <div className="grid gap-8 text-slate-900 md:grid-cols-4 md:gap-6">
            <div>
              <p className="text-6xl font-extrabold tracking-tighter">10<span className="text-[#1d9bf0]">+</span></p>
              <p className="text-xl tracking-tight text-slate-600">Success Project</p>
            </div>
            <div>
              <p className="text-6xl font-extrabold tracking-tighter">1<span className="text-[#1d9bf0]">+</span></p>
              <p className="text-xl tracking-tight text-slate-600">Years Experience</p>
            </div>
            <div>
              <p className="text-6xl font-extrabold tracking-tighter">11<span className="text-[#1d9bf0]">+</span></p>
              <p className="text-xl tracking-tight text-slate-600">Product Launched</p>
            </div>
            <div>
              <p className="text-6xl font-extrabold tracking-tighter">5<span className="text-[#1d9bf0]">+</span></p>
              <p className="text-xl tracking-tight text-slate-600">Employees</p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white">
        <div className="bg-[#1d9bf0] py-6 shadow-sm">
          <div className="ticker-track text-nowrap py-0">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="mx-4 inline-flex items-center gap-4 text-2xl font-medium tracking-tight text-white"
              >
                {item}
                <span className="text-white/80">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 md:px-12 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              <span className="h-px w-8 bg-[#1d9bf0]" />
              About Azmounex
            </p>

            <h1 className="max-w-xl text-5xl font-extrabold tracking-tighter text-slate-900 md:text-6xl">
              Building The Future
              <br />
              With Smart Technology<span className="text-[#1d9bf0]">.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-7 text-slate-600">
              Founded in 2025, Azmounex is a modern technology startup helping businesses transform ideas
              into powerful digital products. We focus on innovation, performance, and user experience to
              create solutions that truly stand out.
            </p>

            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-600">
              From web platforms and mobile apps to AI-driven systems and scalable digital solutions, we
              partner with startups and growing businesses to build, launch, and grow in the digital world.
              Our mission is simple—deliver technology that is fast, smart, and built for the future.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {milestoneCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-[#d9eaf7] bg-white p-6 shadow-[0_10px_30px_rgba(29,155,240,0.08)]"
              >
                <div className="text-3xl text-[#1d9bf0]">{card.icon}</div>
                <h2 className="mt-5 text-2xl font-bold tracking-tighter text-slate-900">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
                <span className="mt-5 inline-flex rounded-full bg-[#f5faff] px-4 py-2 text-sm font-medium text-slate-600">
                  {card.badge}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-12">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
                className="rounded-2xl border border-[#d9eaf7] bg-white p-6 text-center shadow-[0_10px_30px_rgba(29,155,240,0.08)]"
            >
                <p className="text-4xl font-extrabold tracking-tighter text-[#1d9bf0]">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

        <section className="relative bg-[#f5faff] px-4 py-16 text-slate-900 md:px-12 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
                  My <span className="text-[#1d9bf0]">Services</span>
              </h2>
            </div>
            <div>
                <p className="text-lg leading-relaxed text-slate-600">
                We offer a comprehensive suite of software development and design services tailored to meet your business needs. From custom web applications to AI-driven solutions, we deliver excellence across every project.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative min-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#d9eaf7] bg-white backdrop-blur-sm transition-all hover:border-[#1d9bf0]/50 hover:shadow-lg hover:shadow-[#1d9bf0]/10"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1d9bf0] text-white transition-all hover:bg-[#1786d3]"
                    >
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: Math.ceil(services.length / 3) }).map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === 0
                      ? "w-8 bg-[#1d9bf0]"
                      : "w-2 bg-[#cfe8fb] hover:bg-[#9fcdef]"
                  }`}
                />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                to="/services"
                className="rounded-full border border-[#1d9bf0] bg-[#1d9bf0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1786d3]"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#1d9bf0]/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-[#1d9bf0]/10 to-transparent blur-3xl" />
      </section>

      <section className="bg-white px-4 py-20 md:px-12 md:py-32">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-extrabold leading-tight tracking-tighter text-slate-900 md:text-6xl">
              Have an Awesome Project Idea?{" "}
              <span className="text-[#1d9bf0]">Let's Discuss</span>
            </h2>
          </div>

          <form className="space-y-5">
            {/* Name Field */}
            <div className="relative flex h-16 items-center rounded-full border border-[#d9eaf7] bg-[#f5faff] shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute left-5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1d9bf0]/10">
                <svg className="h-5 w-5 text-[#1d9bf0]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H4a2.5 2.5 0 00-2.5 2.5v10A2.5 2.5 0 004 16.5h12a2.5 2.5 0 002.5-2.5V10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M2.5 4.5A1.5 1.5 0 104 3a1.5 1.5 0 00-1.5 1.5z" fill="currentColor" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Name"
                className="h-full w-full border-0 bg-transparent pl-20 pr-6 text-base text-slate-900 placeholder-slate-500 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="relative flex h-16 items-center rounded-full border border-[#d9eaf7] bg-[#f5faff] shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute left-5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1d9bf0]/10">
                <svg className="h-5 w-5 text-[#1d9bf0]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="h-full w-full border-0 bg-transparent pl-20 pr-6 text-base text-slate-900 placeholder-slate-500 focus:outline-none"
              />
            </div>

            {/* Message Field with Send Button */}
            <div className="relative overflow-hidden rounded-3xl border border-[#d9eaf7] bg-[#f5faff] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex">
                <div className="absolute left-5 top-5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1d9bf0]/10">
                  <svg className="h-5 w-5 text-[#1d9bf0]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                    <path d="M6 11a1 1 0 11-2 0 1 1 0 012 0z" />
                    <path d="M12 11a1 1 0 11-2 0 1 1 0 012 0z" />
                    <path d="M16 11a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <textarea
                  placeholder="Enter Message"
                  rows="4"
                  className="w-full resize-none border-0 bg-transparent pl-20 pr-32 py-4 text-base text-slate-900 placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute bottom-4 right-4 inline-flex items-center justify-center rounded-full bg-[#1d9bf0] px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#1786d3] transition-all"
                >
                  Send
                </button>
              </div>
            </div>
          </form>

          {/* Trust Indicators */}
            <div className="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-10 sm:flex-row sm:justify-center sm:gap-12">
              <div className="flex items-center justify-center gap-2">
                <span className="text-base">★</span>
                <span className="text-sm font-medium text-gray-700">Client-Focused Approach</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-base">🚀</span>
                <span className="text-sm font-medium text-gray-700">Fast & Scalable Solutions</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-base">✓</span>
                <span className="text-sm font-medium text-gray-700">Modern Tech Stack & AI Integration</span>
              </div>
            </div>
        </div>
      </section>

      
    </div>
  );
}

export default HomePage;

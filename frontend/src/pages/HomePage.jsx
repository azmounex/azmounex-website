import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import webImage from "../assets/services_section/web.webp";
import landingimage from "../assets/services_section/landing_page.webp";
import uiImage from "../assets/services_section/ui.avif";
import posImage from "../assets/services_section/pos.webp";
import desktopImage from "../assets/services_section/desktop.avif";
import aiImage from "../assets/services_section/ai.webp";
import saasImage from "../assets/services_section/saas.webp";
import mobileImage from "../assets/services_section/mobile.webp";
import MainPageInquiryForm from "../components/forms/MainPageInquiryForm.jsx";
import { apiRequest, resolveMediaUrl } from "../lib/api.js";
import Seo from "../components/seo/Seo.jsx";
import { pageSeo } from "../constants/seo.js";

const pageFade = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const heroText = {
  initial: { opacity: 0, x: -18 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const heroPanel = {
  initial: { opacity: 0, y: 18, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: "easeOut" } },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const hoverLift = {
  scale: 1.05,
  y: -4,
  boxShadow: "0 18px 40px rgba(29, 155, 240, 0.16)",
};

const tapScale = { scale: 0.97 };


const milestoneCards = [
  {
    title: "The Beginning",
    description:
      "Azmounex was established with a clear vision—to deliver reliable, scalable, and modern digital solutions tailored for evolving business needs.",
    badge: "2025",
    icon: "✿",
  },
  {
    title: "Early Growth",
    description:
      "We began collaborating with startups and small businesses, delivering practical solutions across web, mobile, and intelligent systems.",
    badge: "2025",
    icon: "✦",
  },
  {
    title: "Building Impact",
    description:
      "Our focus shifted towards creating high-performance products that not only function well but also drive measurable business results.",
    badge: "2025",
    icon: "◜",
  },
  {
    title: "Future Vision",
    description:
      "We aim to expand into advanced AI systems, automation, and global markets while continuously improving our technical and creative capabilities.",
    badge: "Beyond 2025",
    icon: "✺",
  },
];

const stats = [
  { value: "5+", label: "Active Projects" },
  { value: "10+", label: "Happy Clients" },
  { value: "3+", label: "Core Technologies" },
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
  const [heroSlides, setHeroSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleMediaChange = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    async function fetchHeroSlides() {
      try {
        const data = await apiRequest("/public/hero-slides");
        setHeroSlides(data);
      } catch {
        setHeroSlides([]);
      }
    }

    fetchHeroSlides();
  }, []);

  const heroImages = useMemo(
    () =>
      heroSlides.length
        ? heroSlides.map((slide) => resolveMediaUrl(slide.imageUrl)).filter(Boolean)
        : ["https://placehold.co/1000x1200/e2e8f0/0f172a?text=Hero+Image"],
    [heroSlides],
  );

  const interactiveHover = isMobile || shouldReduceMotion ? undefined : hoverLift;
  const interactiveCardHover =
    isMobile || shouldReduceMotion
      ? undefined
      : { scale: 1.03, y: -4, boxShadow: "0 18px 35px rgba(29,155,240,0.12)" };
  const sectionViewport = isMobile
    ? { once: true, amount: 0.08 }
    : { once: true, amount: 0.2 };

  useEffect(() => {
    if (heroImages.length <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <motion.div
      className="min-h-screen overflow-x-hidden bg-white text-slate-900"
      initial="initial"
      animate="animate"
      variants={pageFade}
    >
      <Seo {...pageSeo.home} />
      <motion.section className="bg-white px-4 pb-8 pt-3 text-slate-900 sm:px-6 lg:px-10 lg:pt-5" initial="initial" animate="animate" variants={pageFade}>
        <div className="mx-auto grid w-full max-w-7xl gap-8 py-2 sm:gap-10 lg:grid-cols-2 lg:items-center lg:py-4">
          <motion.div variants={heroText}>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1d9bf0] sm:mb-6 sm:tracking-[0.28em]">
              About Us
            </p>
            <motion.h1 className="max-w-xl text-4xl font-extrabold leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl" variants={heroText}>
              Crafting Digital
              <br />
              Brilliance<span className="text-[#1d9bf0]">.</span>
            </motion.h1>
            <motion.p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-7 sm:text-[1.02rem]" variants={heroText}>
             Azmounex is a technology startup studio focused on building high-performance digital products for modern businesses. We combine design, development, and intelligent systems to turn ideas into scalable solutions.
            </motion.p>
            <motion.p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-[1.02rem]" variants={heroText}>
              We also offer white-label development services, enabling agencies and businesses to scale efficiently without compromising on quality.
            </motion.p>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              <motion.div whileHover={interactiveHover} whileTap={tapScale} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
                <Link
                  to="/projects"
                  className="inline-flex min-h-11 items-center rounded-full border border-[#d9eaf7] bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:border-[#1d9bf0] hover:text-[#1d9bf0]"
                >
                View Our Work
                </Link>
              </motion.div>
              <motion.div whileHover={interactiveHover} whileTap={tapScale} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center rounded-full border border-[#1d9bf0] bg-[#1d9bf0] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1786d3]"
                >
                Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none" variants={heroPanel}>
            <div className="absolute inset-0 left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8efff] sm:h-[24rem] sm:w-[24rem]" />
            <motion.div className="relative z-10 mx-auto h-[22rem] w-[88%] -translate-y-4 overflow-hidden rounded-3xl border-2 border-[#1d9bf0]/20 shadow-lg sm:h-[26rem] sm:w-[82%] sm:-translate-y-6 md:h-[30rem] md:-translate-y-10" whileHover={isMobile || shouldReduceMotion ? undefined : { scale: 1.01 }} transition={{ type: "spring", stiffness: 220, damping: 26 }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={heroImages[currentSlide]}
                  src={heroImages[currentSlide]}
                  className="h-full w-full object-cover"
                  alt="hero"
                  loading="eager"
                  initial={shouldReduceMotion || isMobile ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
                  animate={shouldReduceMotion || isMobile ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion || isMobile ? { opacity: 0 } : { opacity: 0, scale: 1.01 }}
                  transition={{ duration: shouldReduceMotion || isMobile ? 0.35 : 0.7, ease: "easeOut" }}
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {heroImages.map((_, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    whileTap={tapScale}
                    className={`h-2 rounded-full transition ${
                      index === currentSlide ? "w-8 bg-[#1d9bf0]" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div className="absolute bottom-16 left-1 z-20 hidden rounded-xl border border-[#d9eaf7] bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:block" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
              <div className="flex items-center gap-2 text-slate-600">
                <img src="https://i.pravatar.cc/40?img=11" alt="avatar" className="h-7 w-7 rounded-full object-cover" />
                <img src="https://i.pravatar.cc/40?img=52" alt="avatar" className="-ml-2 h-7 w-7 rounded-full object-cover" />
                <img src="https://i.pravatar.cc/40?img=32" alt="avatar" className="-ml-2 h-7 w-7 rounded-full object-cover" />
                <span className="ml-1 text-xl font-semibold text-slate-900">9</span>
                <span className="text-[#1d9bf0]">+</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">Satisfied Customer</p>
              <p className="mt-1 text-xs text-slate-500">★★★★★ 4.9/5 Review</p>
            </motion.div>

            <motion.div className="absolute bottom-5 right-1 z-20 hidden rounded-xl border border-[#d9eaf7] bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:block" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42, duration: 0.5 }}>
              <p className="text-3xl font-extrabold tracking-tighter text-slate-900 md:text-4xl">10+</p>
              <p className="text-xs text-slate-500 md:text-sm">Happy Businesses</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="mx-auto mt-8 w-full max-w-7xl border-t border-[#d9eaf7] pt-6 sm:pt-8" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal}>
          <div className="grid grid-cols-2 gap-5 text-slate-900 sm:gap-6 lg:grid-cols-4">
            <motion.div variants={itemReveal} whileHover={interactiveCardHover} transition={{ type: "spring", stiffness: 280, damping: 22 }}>
              <p className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">10<span className="text-[#1d9bf0]">+</span></p>
              <p className="text-base tracking-tight text-slate-600 sm:text-lg lg:text-xl">Success Project</p>
            </motion.div>
            <motion.div variants={itemReveal} whileHover={interactiveCardHover} transition={{ type: "spring", stiffness: 280, damping: 22 }}>
              <p className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">1<span className="text-[#1d9bf0]">+</span></p>
              <p className="text-base tracking-tight text-slate-600 sm:text-lg lg:text-xl">Years Experience</p>
            </motion.div>
            <motion.div variants={itemReveal} whileHover={interactiveCardHover} transition={{ type: "spring", stiffness: 280, damping: 22 }}>
              <p className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">11<span className="text-[#1d9bf0]">+</span></p>
              <p className="text-base tracking-tight text-slate-600 sm:text-lg lg:text-xl">Product Launched</p>
            </motion.div>
            <motion.div variants={itemReveal} whileHover={interactiveCardHover} transition={{ type: "spring", stiffness: 280, damping: 22 }}>
              <p className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">5<span className="text-[#1d9bf0]">+</span></p>
              <p className="text-base tracking-tight text-slate-600 sm:text-lg lg:text-xl">Employees</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-12 sm:px-6 md:pb-16 md:pt-16 lg:px-10 lg:pt-20" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal}>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div variants={itemReveal}>
            <p className="mb-4 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              <span className="h-px w-8 bg-[#1d9bf0]" />
              About Azmounex
            </p>

            <motion.h2 className="max-w-xl text-3xl font-extrabold tracking-tighter text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl" variants={itemReveal}>
              Engineering Digital Solutions
              <br />
              for the Future<span className="text-[#1d9bf0]">.</span>
            </motion.h2>

            <motion.p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg" variants={itemReveal}>
              Founded in 2025, Azmounex is a forward-thinking technology startup dedicated to transforming 
              ideas into robust, scalable digital products. We focus on performance, usability, and long-term value.
            </motion.p>

            <motion.p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base" variants={itemReveal}>
              From custom web platforms and mobile applications to AI-driven systems and SaaS products, 
              we partner with startups and growing businesses to design, build, and scale impactful digital solutions.
            </motion.p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {milestoneCards.map((card) => (
              <motion.article
                key={card.title}
                className="rounded-2xl border border-[#d9eaf7] bg-white p-5 shadow-[0_10px_30px_rgba(29,155,240,0.08)] sm:p-6"
                variants={itemReveal}
                whileHover={interactiveCardHover}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <div className="text-3xl text-[#1d9bf0]">{card.icon}</div>
                <h2 className="mt-5 text-xl font-bold tracking-tighter text-slate-900 sm:text-2xl">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
                <span className="mt-5 inline-flex rounded-full bg-[#f5faff] px-4 py-2 text-sm font-medium text-slate-600">
                  {card.badge}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-10" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal}>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.article
              key={stat.label}
                className="rounded-2xl border border-[#d9eaf7] bg-white p-5 text-center shadow-[0_10px_30px_rgba(29,155,240,0.08)] sm:p-6"
                variants={itemReveal}
                whileHover={interactiveCardHover}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
                <p className="text-3xl font-extrabold tracking-tighter text-[#1d9bf0] sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="relative bg-[#f5faff] px-4 py-14 text-slate-900 sm:px-6 sm:py-16 lg:px-10 lg:py-24" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal}>
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 grid gap-6 sm:mb-12 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <motion.div variants={itemReveal}>
              <motion.h2 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl" variants={itemReveal}>
                  My <span className="text-[#1d9bf0]">Services</span>
              </motion.h2>
            </motion.div>
            <motion.div variants={itemReveal}>
                <motion.p className="text-base leading-relaxed text-slate-600 sm:text-lg" variants={itemReveal}>
                We provide a complete range of software development and design services tailored to help businesses build, scale, and innovate in a competitive digital landscape.
                </motion.p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 sm:mx-0 sm:gap-6 sm:px-0 scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="relative min-w-[82vw] snap-start flex-shrink-0 overflow-hidden rounded-2xl border border-[#d9eaf7] bg-white backdrop-blur-sm transition-all hover:border-[#1d9bf0]/50 hover:shadow-lg hover:shadow-[#1d9bf0]/10 sm:min-w-[320px] lg:min-w-[350px]"
                  variants={itemReveal}
                  whileHover={interactiveCardHover}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.04 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={sectionViewport}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {service.description}
                    </p>
                    <motion.div whileTap={tapScale} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                      <Link
                        to="/services"
                        className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1d9bf0] text-white transition-all hover:bg-[#1786d3]"
                      >
                        <span className="text-lg">→</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: Math.ceil(services.length / 3) }).map((_, i) => (
                <motion.button
                  key={i}
                  whileTap={tapScale}
                  className={`h-2 rounded-full transition-all ${
                    i === 0
                      ? "w-8 bg-[#1d9bf0]"
                      : "w-2 bg-[#cfe8fb] hover:bg-[#9fcdef]"
                  }`}
                />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <motion.div whileHover={interactiveHover} whileTap={tapScale} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
                <Link
                  to="/services"
                  className="inline-flex min-h-11 items-center rounded-full border border-[#1d9bf0] bg-[#1d9bf0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1786d3]"
                >
                  Explore All Services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#1d9bf0]/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-[#1d9bf0]/10 to-transparent blur-3xl" />
      </motion.section>

      <motion.section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal}>
        <MainPageInquiryForm />
      </motion.section>

      
    </motion.div>
  );
}

export default HomePage;

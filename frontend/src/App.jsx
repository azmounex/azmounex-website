
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, SendHorizontal } from "lucide-react";
import {
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Team", path: "/team" },
  { label: "Contact Us", path: "/contact" },
  { label: "Careers", path: "/careers" },
];

const pageMeta = {
  "/": {
    title: "Azmounex",
    subtitle: "Future-focused software and digital innovation.",
  },
  "/careers": {
    title: "Careers",
    subtitle: "Join a high-performance team shaping digital futures.",
  },
  "/contact": {
    title: "Contact",
    subtitle: "Tell us what you are building and we will help scale it.",
  },
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-5 md:px-8 w-full">
      <nav
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-7 ${
          scrolled
            ? "border-[#d9eaf7] bg-white/95 shadow-[0_12px_30px_rgba(29,155,240,0.08)]"
            : "border-[#d9eaf7] bg-white/90"
        } backdrop-blur-xl`}
      >
        <Link to="/" className="inline-flex items-center gap-2.5 text-slate-900">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d9bf0]/10 ring-1 ring-[#1d9bf0]/20">
            <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
              <path d="M32 6 56 54c.8 1.7-.9 3.5-2.7 2.8L39 51a3 3 0 0 1-1.5-1.4L32 39l-5.5 10.6A3 3 0 0 1 25 51l-14.3 5.8C8.9 57.5 7.2 55.7 8 54L32 6z" fill="#1d9bf0"/>
              <path d="M32 39c-5.8-5.1-2.9-14 4.9-18.6" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-slate-900 md:text-xl">AZMOUNEX</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1d9bf0] lg:block">
              Tech First. You First.
            </span>
          </span>
        </Link>

        <ul className="hidden flex-wrap items-center gap-3 text-sm font-semibold text-slate-700 lg:flex lg:gap-5">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                className={`rounded-full px-3 py-1.5 tracking-tight transition ${
                  location.pathname === item.path
                    ? "bg-[#1d9bf0]/10 text-[#1d9bf0]"
                    : "text-slate-700 hover:text-[#1d9bf0]"
                }`}
                to={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-full border border-[#d9eaf7] bg-white p-2 text-slate-900 lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-[#d9eaf7] bg-white/95 px-4 py-4 shadow-[0_12px_30px_rgba(29,155,240,0.08)] backdrop-blur-xl lg:hidden">
          <ul className="space-y-2 text-sm text-slate-700">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  className={`block rounded-full border px-4 py-3 transition ${
                    location.pathname === item.path
                      ? "border-[#1d9bf0] bg-[#1d9bf0]/10 text-[#1d9bf0]"
                      : "border-[#d9eaf7] bg-[#f5faff] text-slate-700 hover:bg-white"
                  }`}
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923351084084?text=Hello%20Azmounex"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#1ebe5d]"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.55 0 .25 5.29.25 11.8c0 2.08.54 4.12 1.56 5.91L0 24l6.45-1.69a11.82 11.82 0 0 0 5.62 1.43h.01c6.51 0 11.8-5.3 11.8-11.81 0-3.15-1.23-6.1-3.46-8.45Zm-8.45 18.27h-.01a9.85 9.85 0 0 1-5.01-1.37l-.36-.21-3.83 1 1.02-3.74-.24-.38a9.85 9.85 0 0 1-1.53-5.25c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.95 2.89a9.8 9.8 0 0 1 2.88 6.95c0 5.44-4.42 9.86-9.85 9.86Zm5.4-7.36c-.29-.14-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.14-.2.29-.77.96-.95 1.15-.17.2-.35.22-.64.08-.29-.14-1.23-.45-2.34-1.43a8.8 8.8 0 0 1-1.63-2.02c-.17-.29-.02-.45.13-.59.13-.13.29-.35.43-.52.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.14-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.29-1.05 1.03-1.05 2.52 0 1.49 1.08 2.93 1.23 3.13.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.74-.71 1.99-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.56-.34Z" />
      </svg>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-white px-4 pb-6 md:px-8 md:pb-8">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-[#d9eaf7] bg-white px-6 py-8 text-slate-700 shadow-[0_12px_30px_rgba(29,155,240,0.08)] md:px-10 md:py-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tighter text-slate-900 md:text-5xl">
            Lets Connect there
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d9bf0] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#1786d3]"
          >
            Hire me
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="my-8 h-px w-full bg-[#d9eaf7]" />

        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.9fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-extrabold text-white">
                AZ
              </span>
              <h3 className="text-2xl font-bold tracking-tighter text-slate-900">Azmounex</h3>
            </div>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
              We design and build premium digital products for modern businesses, from concept to scale.
            </p>
            <div className="mt-6 flex items-center gap-3 text-slate-600">
              <a href="https://www.facebook.com/share/1Hm6CGCPUu/" target="_blank" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d9eaf7] text-sm font-semibold transition hover:border-[#1d9bf0] hover:text-[#1d9bf0]">f</a>
              <a href="https://www.linkedin.com/company/azmounex" target="_blank" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d9eaf7] text-xs font-semibold transition hover:border-[#1d9bf0] hover:text-[#1d9bf0]">in</a>
              <a href="https://www.instagram.com/azmounex/" target="_blank" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d9eaf7] text-xs font-semibold transition hover:border-[#1d9bf0] hover:text-[#1d9bf0]">ig</a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold tracking-tighter text-[#1d9bf0]">Navigation</h4>
            <ul className="mt-5 space-y-3 text-base text-slate-600">
              <li><Link to="/" className="transition hover:text-[#1d9bf0]">Home</Link></li>
              <li><Link to="/about" className="transition hover:text-[#1d9bf0]">About Us</Link></li>
              <li><Link to="/services" className="transition hover:text-[#1d9bf0]">Services</Link></li>
              <li><Link to="/careers" className="transition hover:text-[#1d9bf0]">Careers</Link></li>
              <li><Link to="/projects" className="transition hover:text-[#1d9bf0]">Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold tracking-tighter text-[#1d9bf0]">Contact</h4>
            <ul className="mt-5 space-y-3 text-base text-slate-600">
              <li><a href="tel:+923351084084" className="transition hover:text-[#1d9bf0]">+92 335 1084084</a></li>
              <li><a href="mailto:Azmounex@gmail.com" className="transition hover:text-[#1d9bf0]">Azmounex@gmail.com</a></li>
              <li><a href="https://www.Azmounex.com" className="transition hover:text-[#1d9bf0]">https://www.Azmounex.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold tracking-tighter text-[#1d9bf0]">Get the latest information</h4>
            <form className="mt-5 flex overflow-hidden rounded-xl border border-[#d9eaf7] bg-[#f5faff]">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 focus:outline-none"
              />
              <button
                type="button"
                aria-label="Send"
                className="inline-flex items-center justify-center bg-[#1d9bf0] px-4 text-white transition hover:bg-[#1786d3]"
              >
                <SendHorizontal className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-[#d9eaf7]" />

        <div className="mt-6 flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Azmounex. All rights reserved.</p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

function PageSection({ path }) {
  const content = pageMeta[path] || pageMeta["/"];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-12 md:py-20">
      <div className="rounded-3xl border border-[#d9eaf7] bg-white p-8 shadow-[0_12px_30px_rgba(29,155,240,0.08)] md:p-12">
        <h1 className="text-3xl font-extrabold tracking-tighter text-slate-900 md:text-5xl">{content.title}</h1>
        <p className="mt-4 max-w-2xl text-slate-600 md:text-lg">{content.subtitle}</p>
      </div>
    </section>
  );
}

function SiteLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 pt-28">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

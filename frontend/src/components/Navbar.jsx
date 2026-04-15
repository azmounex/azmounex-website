import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "Careers", path: "/careers" },
];

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
    <header className="fixed left-0 right-0 top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 lg:px-8 lg:pt-5">
      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:rounded-full sm:px-4 sm:py-3 md:px-6 lg:px-7 ${
          scrolled
            ? "border-[#d9eaf7] bg-white/95 shadow-[0_12px_30px_rgba(29,155,240,0.08)]"
            : "border-[#d9eaf7] bg-white/90"
        } backdrop-blur-xl`}
      >
        <Link to="/" className="inline-flex items-center gap-2 text-slate-900 sm:gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#1d9bf0]/10 ring-1 ring-[#1d9bf0]/20 sm:h-10 sm:w-10">
            <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
              <path d="M32 6 56 54c.8 1.7-.9 3.5-2.7 2.8L39 51a3 3 0 0 1-1.5-1.4L32 39l-5.5 10.6A3 3 0 0 1 25 51l-14.3 5.8C8.9 57.5 7.2 55.7 8 54L32 6z" fill="#1d9bf0" />
              <path d="M32 39c-5.8-5.1-2.9-14 4.9-18.6" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-slate-900 sm:text-lg md:text-xl">AZMOUNEX</span>
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
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[#d9eaf7] bg-white p-2 text-slate-900 lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 w-full max-w-7xl rounded-2xl border border-[#d9eaf7] bg-white/95 px-3 py-3 shadow-[0_12px_30px_rgba(29,155,240,0.08)] backdrop-blur-xl sm:px-4 sm:py-4 lg:hidden">
          <ul className="space-y-2 text-sm text-slate-700">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  className={`block min-h-11 rounded-full border px-4 py-3 transition ${
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

export default Navbar;
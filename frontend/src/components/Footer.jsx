import { ArrowUpRight, SendHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

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
              <a href="https://www.facebook.com/share/1Hm6CGCPUu/" target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d9eaf7] text-sm font-semibold transition hover:border-[#1d9bf0] hover:text-[#1d9bf0]">f</a>
              <a href="https://www.linkedin.com/company/azmounex" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d9eaf7] text-xs font-semibold transition hover:border-[#1d9bf0] hover:text-[#1d9bf0]">in</a>
              <a href="https://www.instagram.com/azmounex/" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d9eaf7] text-xs font-semibold transition hover:border-[#1d9bf0] hover:text-[#1d9bf0]">ig</a>
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

export default Footer;
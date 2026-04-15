import { Star } from "lucide-react";
import ContactSubmissionForm from "../components/forms/ContactSubmissionForm.jsx";
import Seo from "../components/seo/Seo.jsx";
import { pageSeo } from "../constants/seo.js";


function ContactPage() {
  return (
    <div className="w-full bg-white text-slate-900">
      <Seo {...pageSeo.contact} />
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-12 md:py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#1d9bf0]">Let's Connect</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tighter text-slate-900 md:text-6xl">
            Have an Awesome<br /> Project in Mind?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Share your vision and timeline. We'll review your requirements and send back a detailed roadmap within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left: Contact Info */}
          <div className="md:col-span-1">
            <div className="rounded-3xl border border-[#d9eaf7] bg-white p-8 shadow-[0_12px_30px_rgba(29,155,240,0.08)]">
              <h2 className="text-2xl font-extrabold tracking-tighter text-slate-900">Contact Info</h2>
              
              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#1d9bf0] font-semibold">Email</p>
                  <a href="mailto:azmounex@gmail.com" className="mt-2 text-slate-800 hover:text-[#1d9bf0] transition">
                    azmounex@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#1d9bf0] font-semibold">Office</p>
                  <p className="mt-2 text-slate-600">
                    Lahore, Pakistan<br />
                    & Remote Global Teams
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#1d9bf0] font-semibold">Response Time</p>
                  <p className="mt-2 text-slate-600">
                    Within 1 business day
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#1d9bf0] font-semibold">Availability</p>
                  <p className="mt-2 text-slate-600">
                    Available for remote and on-site projects
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3 border-t border-[#d9eaf7] pt-8">
                <p className="text-xs uppercase tracking-widest text-[#1d9bf0] font-semibold">Follow Us</p>
                <div className="mt-4 flex gap-3">
                  <a href="https://www.facebook.com/share/1Hm6CGCPUu/" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9eaf7] text-xs font-semibold transition hover:border-[#1d9bf0] hover:text-[#1d9bf0]">
                    f
                  </a>
                  <a href="https://www.linkedin.com/company/azmounex" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9eaf7] text-xs font-semibold transition hover:border-[#1d9bf0] hover:text-[#1d9bf0]">
                    in
                  </a>
                  <a href="https://www.instagram.com/azmounex" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9eaf7] text-xs font-semibold transition hover:border-[#1d9bf0] hover:text-[#1d9bf0]">
                    ig
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <ContactSubmissionForm />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-12">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-black p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-blue-600">10+</p>
              <p className="mt-2 text-sm text-zinc-400">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-blue-600">100%</p>
              <p className="mt-2 text-sm text-zinc-400">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-blue-600">1+</p>
              <p className="mt-2 text-sm text-zinc-400">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-blue-600">24h</p>
              <p className="mt-2 text-sm text-zinc-400">Response Time</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;

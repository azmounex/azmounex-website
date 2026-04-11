import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};


function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShowToast(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [showToast]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setFormData(initialFormState);
      setShowToast(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white text-slate-900">
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
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#d9eaf7] bg-white p-8 shadow-[0_12px_30px_rgba(29,155,240,0.08)] md:col-span-2"
          >
            <h2 className="text-2xl font-extrabold tracking-tighter text-slate-900">Send us a Message</h2>
            
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Full Name *</span>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-lg border border-[#d9eaf7] bg-[#f5faff] px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#1d9bf0] focus:ring-2 focus:ring-[#1d9bf0]/20"
                  placeholder="John Doe"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Email Address *</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-lg border border-[#d9eaf7] bg-[#f5faff] px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#1d9bf0] focus:ring-2 focus:ring-[#1d9bf0]/20"
                  placeholder="john@company.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Project Subject *</span>
              <input
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-3 w-full rounded-lg border border-[#d9eaf7] bg-[#f5faff] px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#1d9bf0] focus:ring-2 focus:ring-[#1d9bf0]/20"
                placeholder="e.g., Web App Development, UI/UX Design"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Project Details *</span>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="mt-3 w-full rounded-lg border border-[#d9eaf7] bg-[#f5faff] px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#1d9bf0] focus:ring-2 focus:ring-[#1d9bf0]/20"
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
              />
            </label>

            {error && (
              <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full rounded-full bg-[#1d9bf0] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1786d3] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>

            <p className="mt-4 text-center text-xs text-slate-500">
              We'll get back to you within 24 hours
            </p>
          </form>
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

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 rounded-2xl border border-blue-500/50 bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-sm font-semibold text-white shadow-lg"
          >
            there is an error in sending the message. Kindly reach out via email or whatsapp.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactPage;

import { useEffect, useState } from "react";
import { apiRequest } from "../../lib/api.js";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactSubmissionForm() {
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
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await apiRequest("/submissions/contact", {
        method: "POST",
        data: formData,
      });
      setFormData(initialFormState);
      setShowToast(true);
    } catch (submitError) {
      setError(submitError.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
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

        {error ? (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className="mt-8 w-full rounded-full bg-[#1d9bf0] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1786d3] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>

        <p className="mt-4 text-center text-xs text-slate-500">We'll get back to you within 24 hours</p>
      </form>

      {showToast ? (
        <div className="fixed bottom-6 right-6 z-50 rounded-2xl border border-blue-500/50 bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-sm font-semibold text-white shadow-lg">
          Your message was submitted successfully.
        </div>
      ) : null}
    </>
  );
}

export default ContactSubmissionForm;
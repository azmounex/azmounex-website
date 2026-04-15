import { useState } from "react";
import { apiRequest } from "../../lib/api.js";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function MainPageInquiryForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    setMessage("");

    try {
      await apiRequest("/submissions/main-page", {
        method: "POST",
        data: formData,
      });
      setFormData(initialState);
      setMessage("Thanks. Your message was submitted successfully.");
    } catch (submitError) {
      setError(submitError.message || "Unable to submit the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-10 text-center sm:mb-12 md:mb-16">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Have an Awesome Project Idea? <span className="text-[#1d9bf0]">Let's Discuss</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="relative flex min-h-14 items-center rounded-2xl border border-[#d9eaf7] bg-[#f5faff] shadow-sm transition-shadow hover:shadow-md sm:h-16 sm:rounded-full">
          <div className="absolute left-4 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#1d9bf0]/10 sm:left-5 sm:h-10 sm:w-10">
            <svg className="h-5 w-5 text-[#1d9bf0]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H4a2.5 2.5 0 00-2.5 2.5v10A2.5 2.5 0 004 16.5h12a2.5 2.5 0 002.5-2.5V10" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M2.5 4.5A1.5 1.5 0 104 3a1.5 1.5 0 00-1.5 1.5z" fill="currentColor" />
            </svg>
          </div>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="h-full w-full border-0 bg-transparent pl-16 pr-4 text-sm text-slate-900 placeholder-slate-500 focus:outline-none sm:pl-20 sm:pr-6 sm:text-base"
          />
        </div>

        <div className="relative flex min-h-14 items-center rounded-2xl border border-[#d9eaf7] bg-[#f5faff] shadow-sm transition-shadow hover:shadow-md sm:h-16 sm:rounded-full">
          <div className="absolute left-4 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#1d9bf0]/10 sm:left-5 sm:h-10 sm:w-10">
            <svg className="h-5 w-5 text-[#1d9bf0]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="h-full w-full border-0 bg-transparent pl-16 pr-4 text-sm text-slate-900 placeholder-slate-500 focus:outline-none sm:pl-20 sm:pr-6 sm:text-base"
          />
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-[#d9eaf7] bg-[#f5faff] shadow-sm transition-shadow hover:shadow-md">
          <div className="absolute left-4 top-4 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#1d9bf0]/10 sm:left-5 sm:top-5 sm:h-10 sm:w-10">
            <svg className="h-5 w-5 text-[#1d9bf0]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              <path d="M6 11a1 1 0 11-2 0 1 1 0 012 0z" />
              <path d="M12 11a1 1 0 11-2 0 1 1 0 012 0z" />
              <path d="M16 11a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            rows={4}
            className="w-full resize-none border-0 bg-transparent pl-16 pr-4 py-4 text-sm text-slate-900 placeholder-slate-500 focus:outline-none sm:pl-20 sm:pr-32 sm:text-base"
          />
          <button
            type="submit"
            disabled={submitting}
            className="mx-4 mb-4 inline-flex min-h-11 w-[calc(100%-2rem)] items-center justify-center rounded-full bg-[#1d9bf0] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#1786d3] disabled:cursor-not-allowed disabled:opacity-70 sm:absolute sm:bottom-4 sm:right-4 sm:mb-0 sm:w-auto sm:px-8 sm:text-base"
          >
            {submitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      {message ? (
        <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {message}
        </p>
      ) : null}

      {error ? (
        <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      ) : null}

    </div>
  );
}

export default MainPageInquiryForm;
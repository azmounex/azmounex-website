import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../lib/api.js";
import Seo from "../../components/seo/Seo.jsx";

function AdminLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const payload = await apiRequest("/auth/login", {
        method: "POST",
        data: formData,
      });

      window.localStorage.setItem("adminToken", payload.token);
      navigate("/admin");
    } catch (submitError) {
      setError(submitError.message || "Unable to sign in");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_35%),linear-gradient(180deg,_#0f172a_0%,_#020617_100%)] px-4 text-white">
      <Seo
        title="Admin Login | Azmounex"
        description="Secure admin login for Azmounex content management system."
        path="/admin/login"
        noindex
      />
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.55)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Admin access</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight">Sign in to the dashboard</h1>
        <p className="mt-3 text-sm text-slate-400">Use the admin username and password configured on the backend.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            required
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />
          <input
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />

          {error ? (
            <div className="rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage;
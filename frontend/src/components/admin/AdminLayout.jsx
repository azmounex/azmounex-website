import { NavLink, Outlet, useNavigate } from "react-router-dom";

const sections = [
  { label: "Overview", to: "/admin" },
  { label: "Categories", to: "/admin#categories" },
  { label: "Projects", to: "/admin#projects" },
  { label: "Team", to: "/admin#team" },
  { label: "Submissions", to: "/admin#submissions" },
];

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-white/10 bg-slate-950 px-6 py-6 lg:border-b-0 lg:border-r lg:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-lg font-black text-cyan-300 ring-1 ring-cyan-400/20">
              A
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-white">Azmounex Admin</p>
              <p className="text-sm text-slate-400">Content control center</p>
            </div>
          </div>

          <nav className="mt-10 space-y-2">
            {sections.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/20"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Logout
          </button>
        </aside>

        <main className="bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_40%),linear-gradient(180deg,_#0f172a_0%,_#020617_100%)] px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
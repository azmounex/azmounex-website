import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { apiRequest, resolveMediaUrl } from "../lib/api.js";
import Seo from "../components/seo/Seo.jsx";
import { pageSeo } from "../constants/seo.js";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const data = await apiRequest("/projects");
        setProjects(data);
      } catch (fetchError) {
        setError(fetchError.message || "Unable to load projects");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const categories = useMemo(() => {
    const fromData = projects.map((project) => project.category || "General").filter(Boolean);
    return ["All", ...new Set(fromData)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }

    return projects.filter((project) => (project.category || "General") === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section className="mx-auto w-full max-w-6xl overflow-x-hidden px-4 py-8 md:px-12 md:py-12">
      <Seo {...pageSeo.projects} />
      <div className="mb-8 rounded-3xl border border-[#d9eaf7] bg-white p-6 shadow-[0_12px_30px_rgba(29,155,240,0.08)] md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#1d9bf0]">Our Projects</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tighter text-slate-900 md:text-6xl">
          Built For Scale<span className="text-[#1d9bf0]">.</span>
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600 md:text-lg">
          Explore our latest software products across SaaS, AI, POS systems, desktop apps, and enterprise web platforms.
        </p>
      </div>

      {loading ? (
        <div className="mb-6 rounded-2xl border border-[#d9eaf7] bg-white p-6 text-slate-700 shadow-sm">
          Loading projects...
        </div>
      ) : null}

      {error ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600 shadow-sm">
          {error}
        </div>
      ) : null}

      {filteredProjects.length === 0 && (
        <div className="rounded-2xl border border-[#d9eaf7] bg-white p-6 text-slate-700 shadow-sm">
          No projects available for this category.
        </div>
      )}

      {projects.length > 0 && (
        <>
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                  selectedCategory === category
                    ? "border-[#1d9bf0] bg-[#1d9bf0] text-white"
                    : "border-[#d9eaf7] bg-white text-slate-700 hover:border-[#1d9bf0] hover:text-[#1d9bf0]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-5 flex items-center justify-between text-sm text-slate-600">
            <p>
              Showing <span className="font-semibold text-slate-900">{filteredProjects.length}</span> project
              {filteredProjects.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project._id}
                className="overflow-hidden rounded-3xl border border-[#d9eaf7] bg-white shadow-sm transition hover:border-[#1d9bf0]/50"
              >
                <img
                  src={resolveMediaUrl(project.image?.url) || "https://placehold.co/1200x800/111111/ffffff?text=Project"}
                  alt={project.title}
                  className="h-56 w-full object-cover md:h-64"
                />
                <div className="px-5 py-5 md:px-6">
                  <div className="mb-3 inline-flex rounded-full border border-[#d9eaf7] bg-[#f5faff] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1d9bf0]">
                    {project.category || "General"}
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-extrabold tracking-tighter text-slate-900 md:text-3xl">{project.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base">{project.description}</p>
                    </div>
                    <button type="button" className="mt-1 rounded-full bg-[#1d9bf0] p-3 text-white shadow-sm hover:bg-[#1786d3]">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tag) => (
                        <span
                          key={`${project._id}-${tag}`}
                          className="rounded-full border border-[#d9eaf7] bg-[#f5faff] px-3 py-1 text-xs text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default ProjectsPage;

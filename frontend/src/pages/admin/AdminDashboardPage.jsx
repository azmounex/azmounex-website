import { useEffect, useState } from "react";
import { apiRequest, resolveMediaUrl } from "../../lib/api.js";
import ResourceManager from "../../components/admin/ResourceManager.jsx";
import SubmissionsSection from "../../components/admin/SubmissionsSection.jsx";
import Seo from "../../components/seo/Seo.jsx";

function normalizeListPayload(payload, fallbackKeys = []) {
  if (Array.isArray(payload)) {
    return payload;
  }

  for (const key of fallbackKeys) {
    if (Array.isArray(payload?.[key])) {
      return payload[key];
    }
  }

  return [];
}

function AdminDashboardPage() {
  const token = window.localStorage.getItem("adminToken");
  const [projectCategories, setProjectCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [mainPageSubmissions, setMainPageSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDashboard = async () => {
    setLoading(true);

    try {
      const [categoryData, projectData, teamData, contactData, mainData] = await Promise.all([
        apiRequest("/public/project-categories"),
        apiRequest("/projects", { token }),
        apiRequest("/team-members", { token }),
        apiRequest("/submissions/contact", { token }),
        apiRequest("/submissions/main-page", { token }),
      ]);

      setProjectCategories(normalizeListPayload(categoryData, ["categories", "projectCategories"]));
      setProjects(normalizeListPayload(projectData, ["projects", "items"]));
      setTeamMembers(normalizeListPayload(teamData, ["teamMembers", "members", "items"]));
      setContactSubmissions(normalizeListPayload(contactData, ["submissions", "contactSubmissions", "items"]));
      setMainPageSubmissions(normalizeListPayload(mainData, ["submissions", "mainPageSubmissions", "items"]));
    } catch {
      setProjectCategories([]);
      setProjects([]);
      setTeamMembers([]);
      setContactSubmissions([]);
      setMainPageSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const handleSaveProject = async (editingId, payload) => {
    if (editingId) {
      await apiRequest(`/projects/${editingId}`, { token, method: "PUT", data: payload, isFormData: true });
    } else {
      await apiRequest("/projects", { token, method: "POST", data: payload, isFormData: true });
    }

    await loadDashboard();
  };

  const handleSaveTeamMember = async (editingId, payload) => {
    if (editingId) {
      await apiRequest(`/team-members/${editingId}`, { token, method: "PUT", data: payload, isFormData: true });
    } else {
      await apiRequest("/team-members", { token, method: "POST", data: payload, isFormData: true });
    }

    await loadDashboard();
  };

  const handleDelete = async (endpoint, recordId) => {
    await apiRequest(`${endpoint}/${recordId}`, { token, method: "DELETE" });
    await loadDashboard();
  };

  const handleDeleteProjectCategory = async (categoryName) => {
    await apiRequest(`/project-categories/${encodeURIComponent(categoryName)}`, {
      token,
      method: "DELETE",
    });
    await loadDashboard();
  };

  const handleContactStatus = async (recordId, status) => {
    await apiRequest(`/submissions/contact/${recordId}`, {
      token,
      method: "PUT",
      data: { status },
    });
    await loadDashboard();
  };

  const handleMainPageStatus = async (recordId, status) => {
    await apiRequest(`/submissions/main-page/${recordId}`, {
      token,
      method: "PUT",
      data: { status },
    });
    await loadDashboard();
  };

  return (
    <div className="space-y-8 text-white">
      <Seo
        title="Admin Dashboard | Azmounex"
        description="Secure content management dashboard for Azmounex website content and submissions."
        path="/admin"
        noindex
      />
      <header className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Dashboard</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight">Manage content and submissions</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Create and update projects, team members, and review submitted forms from one place.
        </p>
      </header>

      <div id="projects">
        <ResourceManager
          title="Projects"
          description="Manage your portfolio projects with a single form, including category, order, link, and image."
          fields={[
            { name: "title", label: "Project Name", placeholder: "Project name", required: true },
            { name: "description", label: "Description", type: "textarea", placeholder: "Project overview", required: true },
            { name: "technologies", label: "Used Technologies", placeholder: "React, Node.js, MongoDB", required: true },
            { name: "projectUrl", label: "Project Link", type: "url", placeholder: "https://example.com" },
            { name: "order", label: "Order", type: "number", placeholder: "0" },
            { name: "category", label: "Project Category", placeholder: "Business Systems", required: true },
            {
              name: "status",
              label: "Status",
              type: "select",
              options: [
                { label: "Draft", value: "draft" },
                { label: "Published", value: "published" },
                { label: "Archived", value: "archived" },
              ],
            },
            { name: "featured", label: "Featured", type: "checkbox", checkboxLabel: "Feature this project" },
            { name: "image", label: "Cover Image", type: "file" },
          ]}
          records={projects}
          loading={loading}
          onSave={handleSaveProject}
          onDelete={(recordId) => handleDelete("/projects", recordId)}
          buildCardTitle={(record) => record.title}
          buildCardSummary={(record) => `${record.category || "Uncategorized"} • order ${record.order ?? 0}`}
          imageAccessor={(record) => resolveMediaUrl(record.image?.url)}
        />
      </div>

      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur">
        <div className="flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Project Categories</h2>
            <p className="mt-1 text-sm text-slate-400">Categories are derived from saved projects. Add a new category by creating a project with that category name.</p>
          </div>
          <p className="text-sm text-slate-500">{projectCategories.length} categories</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {projectCategories.map((category) => (
            <div key={category} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              <span>{category}</span>
              <button
                type="button"
                onClick={() => handleDeleteProjectCategory(category)}
                className="rounded-full border border-rose-400/30 px-2 py-0.5 text-xs font-semibold text-rose-300 transition hover:bg-rose-400/10"
              >
                Delete
              </button>
            </div>
          ))}

          {!projectCategories.length ? <p className="text-sm text-slate-400">No categories yet.</p> : null}
        </div>
      </section>

      <div id="team">
        <ResourceManager
          title="Team Members"
          description="Maintain team profiles and headshots."
          fields={[
            { name: "name", label: "Name", placeholder: "Team member name", required: true },
            { name: "role", label: "Role", placeholder: "Role or position", required: true },
            { name: "category", label: "Category", placeholder: "Leadership or Staff", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "member@azmounex.com" },
            { name: "bio", label: "Bio", type: "textarea", placeholder: "Short bio", required: true },
            { name: "order", label: "Order", type: "number", placeholder: "0" },
            { name: "linkedin", label: "LinkedIn", type: "url", placeholder: "https://linkedin.com/in/..." },
            { name: "github", label: "GitHub", type: "url", placeholder: "https://github.com/..." },
            { name: "instagram", label: "Instagram", type: "url", placeholder: "https://instagram.com/..." },
            { name: "website", label: "Website", type: "url", placeholder: "https://example.com" },
            { name: "isActive", label: "Active", type: "checkbox", checkboxLabel: "Team member is active" },
            { name: "image", label: "Profile Image", type: "file" },
          ]}
          records={teamMembers}
          loading={loading}
          onSave={handleSaveTeamMember}
          onDelete={(recordId) => handleDelete("/team-members", recordId)}
          buildCardTitle={(record) => record.name}
          buildCardSummary={(record) => `${record.role}${record.category ? ` • ${record.category}` : ""}`}
          imageAccessor={(record) => resolveMediaUrl(record.image?.url)}
        />
      </div>

      <div id="submissions" className="grid gap-8 xl:grid-cols-2">
        <SubmissionsSection
          title="Contact Submissions"
          description="Messages sent through the contact page."
          records={contactSubmissions}
          kind="contact"
          loading={loading}
          onStatusChange={handleContactStatus}
        />

        <SubmissionsSection
          title="Main Page Submissions"
          description="Messages captured from the homepage inquiry form."
          records={mainPageSubmissions}
          kind="main"
          loading={loading}
          onStatusChange={handleMainPageStatus}
        />
      </div>
    </div>
  );
}

export default AdminDashboardPage;
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { apiRequest, resolveMediaUrl } from "../lib/api.js";
import Seo from "../components/seo/Seo.jsx";
import { pageSeo } from "../constants/seo.js";

function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hoveredMemberId, setHoveredMemberId] = useState(null);

  const aboutCards = [
    {
      title: "Our Mission",
      text: "Deliver practical, high-quality digital solutions that help businesses grow faster and operate smarter.",
      accent: "from-cyan-400 to-blue-500",
    },
    {
      title: "Our Vision",
      text: "Become a trusted technology partner known for innovative products, measurable outcomes, and long-term impact.",
      accent: "from-blue-500 to-indigo-500",
    },
    {
      title: "Our Values",
      text: "We value clarity, ownership, craftsmanship, and continuous improvement in every project we deliver.",
      accent: "from-sky-400 to-cyan-500",
    },
  ];

  useEffect(() => {
    async function fetchTeam() {
      try {
        setLoading(true);
        const data = await apiRequest("/public/team-members");
        const normalizedMembers = Array.isArray(data)
          ? data
          : Array.isArray(data?.teamMembers)
            ? data.teamMembers
            : [];
        setTeamMembers(normalizedMembers);
      } catch (fetchError) {
        setError(fetchError.message || "Unable to load team members");
        setTeamMembers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  const sortedMembers = useMemo(
    () => (Array.isArray(teamMembers) ? [...teamMembers] : []).sort((left, right) => (left.order ?? 0) - (right.order ?? 0)),
    [teamMembers]
  );

  return (
    <section className="w-full bg-[#f5faff] px-4 py-8 md:px-12 md:py-12">
      <Seo {...pageSeo.about} />
      <div className="mx-auto w-full max-w-6xl">
        {loading ? (
          <div className="mb-8 rounded-2xl border border-[#d9eaf7] bg-white p-4 text-sm text-slate-600">Loading team...</div>
        ) : null}

        {error ? (
          <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">{error}</div>
        ) : null}

        <div className="mb-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gray-600">
              About Us
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tighter text-gray-900 md:text-5xl">
              Building Azmounex With Purpose<span className="text-blue-600">.</span>
            </h1>

            <p className="mt-4 text-gray-700 md:text-lg">
              We are a product-focused technology company helping businesses turn ideas into scalable digital experiences.
           
              Our team combines engineering, design, and strategy to create solutions that feel modern, perform well,
              and support real business goals.
           
              From software products to AI-driven systems, we build with clarity, care, and long-term value in mind.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {aboutCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${card.accent}`} />
              <h2 className="mt-5 text-2xl font-extrabold tracking-tighter text-gray-900">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-700">{card.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-blue-100 bg-white px-5 py-6 shadow-sm md:px-8 md:py-8">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              
              <h2 className="mt-2 text-3xl font-extrabold tracking-tighter text-gray-900 md:text-4xl">
                Meet Our Co-Founders
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedMembers.map((member, index) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              className="group relative flex flex-col items-center rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm transition hover:border-blue-400 hover:shadow-md"
              onMouseEnter={() => setHoveredMemberId(member._id)}
              onMouseLeave={() => setHoveredMemberId(null)}
            >
              <img
                src={resolveMediaUrl(member.image?.url) || "https://placehold.co/600x400/0f172a/ffffff?text=Team"}
                alt={member.name}
                className="h-48 w-48 rounded-full border-3 border-blue-500/30 object-cover shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500 group-hover:shadow-blue-500/20"
              />

              <h2 className="mt-5 text-2xl font-extrabold tracking-tighter text-gray-900">{member.name}</h2>
              <p className="mt-2 text-sm font-semibold text-blue-600">{member.role}</p>
              <p className="mt-2 inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
                {member.category}
              </p>

              {hoveredMemberId === member._id && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-40 flex items-center justify-center rounded-2xl"
                  >
                    <div className="absolute inset-0 rounded-2xl border border-blue-400 bg-black/90 backdrop-blur-sm" />
                    <motion.div
                      initial={{ scale: 0.96, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.96, y: 10 }}
                      className="relative z-50 max-w-sm rounded-2xl bg-zinc-950 p-6 text-center shadow-lg md:p-8"
                    >
                      <img
                        src={resolveMediaUrl(member.image?.url) || "https://placehold.co/600x400/0f172a/ffffff?text=Team"}
                        alt={member.name}
                        className="mx-auto h-32 w-32 rounded-full border-3 border-blue-500 object-cover"
                      />
                      <h3 className="mt-4 text-2xl font-extrabold tracking-tighter text-white">{member.name}</h3>
                      <p className="mt-1 font-semibold text-blue-400">{member.role}</p>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{member.bio || "No bio provided."}</p>

                      <div className="mt-5 flex items-center justify-center gap-3">
                        <a
                          href={member.socialLinks?.linkedin || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                            member.socialLinks?.linkedin
                              ? "bg-[#0A66C2] text-white hover:scale-105"
                              : "cursor-not-allowed bg-white/10 text-white/50"
                          }`}
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>

                        <a
                          href={`mailto:${member.email || "azmounex@gmail.com"}`}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-105"
                        >
                          <Mail className="h-4 w-4" />
                          Gmail
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default TeamPage;

import { motion } from "framer-motion";
import { ArrowUpRight, Check, MapPin, Briefcase } from "lucide-react";
import Seo from "../components/seo/Seo.jsx";
import { pageSeo } from "../constants/seo.js";

const jobOpenings = [];

const benefits = [
  {
    icon: "🚀",
    title: "Career Growth",
    description: "Clear growth paths with mentorship from experienced team leads"
  },
  {
    icon: "💻",
    title: "Latest Tech",
    description: "Work with cutting-edge technologies and modern development practices"
  },
  {
    icon: "🏢",
    title: "Flexible Work",
    description: "Remote-first culture with option to work from anywhere in the world"
  },
  {
    icon: "💰",
    title: "Competitive Pay",
    description: "Market-competitive salaries with performance bonuses and incentives"
  },
  {
    icon: "🎓",
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and professional development"
  },
  {
    icon: "🤝",
    title: "Team Culture",
    description: "Collaborative and inclusive environment with team building activities"
  }
];

const values = [
  {
    title: "Quality First",
    description: "We prioritize code quality, testing, and best practices in everything we build"
  },
  {
    title: "Innovation",
    description: "We encourage creative thinking and exploring new technologies and approaches"
  },
  {
    title: "Collaboration",
    description: "Success comes from strong teamwork, open communication, and mutual support"
  },
  {
    title: "Integrity",
    description: "We maintain high ethical standards and transparency in all our dealings"
  }
];

function CareersPage() {
  return (
    <div className="w-full bg-white text-slate-900">
      <Seo {...pageSeo.careers} />
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-12 md:py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#1d9bf0]">Join Our Team</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tighter text-slate-900 md:text-6xl">
            Build Your Career<br /> With Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            We're looking for talented developers, designers, and engineers to join our fast-growing team. Help us build amazing digital products.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-12">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#1d9bf0]">Our Culture</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tighter text-slate-900">What We Stand For</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-[#d9eaf7] bg-white p-6 hover:border-[#1d9bf0]/50 transition shadow-sm"
            >
              <h3 className="text-xl font-extrabold text-slate-900">{value.title}</h3>
              <p className="mt-3 text-slate-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-12">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#1d9bf0]">Benefits</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tighter text-slate-900">Why Join Azmounex</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-[#d9eaf7] bg-white p-6 text-center hover:border-[#1d9bf0]/50 transition shadow-sm"
            >
              <div className="text-4xl">{benefit.icon}</div>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-12">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#1d9bf0]">Opportunities</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tighter text-slate-900">Open Positions</h2>
        </div>

        {jobOpenings.length === 0 ? (
          <div className="rounded-2xl border border-[#d9eaf7] bg-white p-8 text-center shadow-sm md:p-10">
            <p className="text-lg font-semibold text-slate-900">No available jobs right now.</p>
            <p className="mt-2 text-sm text-slate-600">Please check back later for new opportunities.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-2xl border border-[#d9eaf7] bg-white p-6 hover:border-[#1d9bf0]/50 transition cursor-pointer shadow-sm md:p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start md:gap-6">
                {/* Left: Job Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-extrabold text-slate-900">{job.title}</h3>
                    <span className="inline-flex rounded-full bg-[#1d9bf0]/10 px-3 py-1 text-xs font-semibold text-[#1d9bf0]">
                      {job.level}
                    </span>
                    <span className="inline-flex rounded-full bg-[#f5faff] px-3 py-1 text-xs font-semibold text-slate-600">
                      {job.type}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#1d9bf0]" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-[#1d9bf0]" />
                      {job.salary}
                    </div>
                  </div>

                  <p className="mt-4 text-slate-600">{job.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-[#d9eaf7] bg-[#f5faff] px-3 py-1 text-xs text-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-1 text-xs text-slate-500">
                        <Check className="h-3 w-3 text-[#1d9bf0]" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: CTA Button */}
                <div className="flex shrink-0 items-start">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Apply Now
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-12 pb-20">
        <div className="rounded-3xl border border-[#d9eaf7] bg-white p-8 text-center shadow-[0_12px_30px_rgba(29,155,240,0.08)] md:p-12">
          <h2 className="text-2xl font-extrabold tracking-tighter text-slate-900 md:text-3xl">
            Don't See Your Perfect Role?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We're always looking for talented individuals. Send us your resume and tell us about yourself.
          </p>
          <a
            href="mailto:careers@azmounex.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1d9bf0] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#1786d3]"
          >
            Email Your Resume
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;

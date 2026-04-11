import { useState } from "react";
import asimProfile from "../assets/staff/asim_profile.jpg";
import aliProfile from "../assets/staff/ali_profile.jpeg";
import teamData from "../data/teamData";

function TeamPage() {
  const [hoveredMemberId, setHoveredMemberId] = useState(null);
  const ceo = teamData[0];
  const staffMembers = teamData.slice(1);

  return (
    <section className="w-full bg-[#f5faff] px-4 py-8 md:px-12 md:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gray-600">
              Meet The Team
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tighter text-gray-900 md:text-5xl">
              The Minds Behind Azmounex<span className="text-blue-600">.</span>
            </h1>

            <p className="mt-4 text-gray-700 md:text-lg">
              A passionate team of developers, designers, and innovators building modern digital solutions.
            </p>

            <p className="mt-4 text-gray-700">
              At Azmounex, we are a growing team driven by creativity, technology, and a shared vision to
              help businesses succeed in the digital world. We combine technical expertise with fresh ideas
              to build impactful products.
            </p>

            <p className="mt-4 text-gray-700">
              We believe in continuous learning, collaboration, and delivering quality in every project.
              Our goal is simple—to create smart, scalable, and user-focused solutions that make a difference.
            </p>
          </div>

          {ceo && (
            <div className="flex justify-center">
              <div className="group relative flex max-w-sm flex-col items-center rounded-3xl border-2 border-blue-300 bg-white p-6 text-center shadow-lg md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue-600">Our Leadership</p>
                <img
                  src={asimProfile}
                  alt={ceo.name}
                  className="mt-4 h-48 w-48 rounded-full border-4 border-blue-600 object-cover shadow-lg transition-all duration-300 group-hover:scale-105"
                />
                <h2 className="mt-4 text-2xl font-extrabold tracking-tighter text-gray-900">{ceo.name}</h2>
                <p className="mt-1 text-base font-semibold text-blue-600">{ceo.role}</p>
                <p className="mt-3 text-sm leading-6 text-gray-700">{ceo.bio}</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="group relative flex flex-col items-center rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm transition hover:border-blue-400 hover:shadow-md"
              onMouseEnter={() => setHoveredMemberId(member.id)}
              onMouseLeave={() => setHoveredMemberId(null)}
            >
              <img
                src={member.image || "https://placehold.co/600x400/0f172a/ffffff?text=Team"}
                alt={member.name}
                className="h-48 w-48 rounded-full border-3 border-blue-500/30 object-cover shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500 group-hover:shadow-blue-500/20"
              />

              <h2 className="mt-5 text-2xl font-extrabold tracking-tighter text-gray-900">{member.name}</h2>
              <p className="mt-2 text-sm font-semibold text-blue-600">{member.role}</p>
              <p className="mt-2 inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
                {member.category}
              </p>

              {hoveredMemberId === member.id && (
                <div className="absolute inset-0 z-40 flex items-center justify-center rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl border border-blue-400 bg-black/90 backdrop-blur-sm" />
                  <div className="relative z-50 max-w-sm rounded-2xl bg-zinc-950 p-6 text-center shadow-lg md:p-8">
                    <img
                      src={member.image || "https://placehold.co/600x400/0f172a/ffffff?text=Team"}
                      alt={member.name}
                      className="mx-auto h-32 w-32 rounded-full border-3 border-blue-500 object-cover"
                    />
                    <h3 className="mt-4 text-2xl font-extrabold tracking-tighter text-white">{member.name}</h3>
                    <p className="mt-1 font-semibold text-blue-400">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">{member.bio || "No bio provided."}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPage;

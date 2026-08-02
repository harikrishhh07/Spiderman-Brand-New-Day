import React, { useState } from "react";
import ElementsCanvas from "../recruitment/ElementsCanvas";
import { Linkedin, Github, Instagram, UserCheck, Camera } from "lucide-react";

const teamData = [
  // LEADERSHIP (1 Secretary, 2 Joint Secretaries)
  {
    id: "sec-1",
    name: "Club Secretary",
    role: "Secretary",
    category: "Leadership",
    deptBadge: "COUNCIL COMMAND",
    alias: "Avatar-Commander",
    photo: null,
    linkedin: "#",
    github: "#",
    instagram: "#",
    color: "from-cyan-500 via-sky-400 to-blue-600",
  },
  {
    id: "jsec-1",
    name: "Joint Secretary 1",
    role: "Joint Secretary",
    category: "Leadership",
    deptBadge: "COUNCIL COMMAND",
    alias: "Council Deputy 1",
    photo: null,
    linkedin: "#",
    github: "#",
    instagram: "#",
    color: "from-cyan-500 via-sky-400 to-blue-600",
  },
  {
    id: "jsec-2",
    name: "Joint Secretary 2",
    role: "Joint Secretary",
    category: "Leadership",
    deptBadge: "COUNCIL COMMAND",
    alias: "Council Deputy 2",
    photo: null,
    linkedin: "#",
    github: "#",
    instagram: "#",
    color: "from-cyan-500 via-sky-400 to-blue-600",
  },

  // TECHNICAL ORGANIZERS (5)
  ...[1, 2, 3, 4, 5].map((i) => ({
    id: `tech-org-${i}`,
    name: `Tech Organizer ${i}`,
    role: "Tech Organizer",
    category: "Technical",
    deptBadge: "FIREBENDER CORPS",
    alias: `Flame Coder ${i}`,
    photo: null,
    linkedin: "#",
    github: "#",
    instagram: "#",
    color: "from-cyan-600 via-sky-500 to-blue-600",
  })),

  // PUBLICITY ORGANIZERS (4)
  ...[1, 2, 3, 4].map((i) => ({
    id: `pub-org-${i}`,
    name: `Publicity Organizer ${i}`,
    role: "Publicity Organizer",
    category: "Publicity",
    deptBadge: "MESSENGER HAWKS",
    alias: `Hawk Rider ${i}`,
    photo: null,
    linkedin: "#",
    github: "#",
    instagram: "#",
    color: "from-cyan-500 via-sky-400 to-blue-500",
  })),

  // NON-TECH ORGANIZERS (4)
  ...[1, 2, 3, 4].map((i) => ({
    id: `nontech-org-${i}`,
    name: `Non-Tech Organizer ${i}`,
    role: "Non-Tech Organizer",
    category: "Non-Tech",
    deptBadge: "EARTHBENDER CORPS",
    alias: `Ground Sentinel ${i}`,
    photo: null,
    linkedin: "#",
    github: "#",
    instagram: "#",
    color: "from-blue-700 via-indigo-600 to-cyan-500",
  })),

  // SPONSORSHIP ORGANIZERS (4)
  ...[1, 2, 3, 4].map((i) => ({
    id: `spons-org-${i}`,
    name: `Sponsorship Organizer ${i}`,
    role: "Sponsorship Organizer",
    category: "Sponsorship",
    deptBadge: "WHITE LOTUS",
    alias: `Lotus Envoy ${i}`,
    photo: null,
    linkedin: "#",
    github: "#",
    instagram: "#",
    color: "from-sky-500 via-cyan-400 to-blue-600",
  })),

  // LOGISTICS ORGANIZERS (4)
  ...[1, 2, 3, 4].map((i) => ({
    id: `log-org-${i}`,
    name: `Logistics Organizer ${i}`,
    role: "Logistics Organizer",
    category: "Logistics",
    deptBadge: "SKY BISON CORPS",
    alias: `Bison Handler ${i}`,
    photo: null,
    linkedin: "#",
    github: "#",
    instagram: "#",
    color: "from-cyan-400 via-blue-500 to-sky-300",
  })),

  // CONTENT ORGANIZERS (4)
  ...[1, 2, 3, 4].map((i) => ({
    id: `content-org-${i}`,
    name: `Content Organizer ${i}`,
    role: "Content Organizer",
    category: "Content",
    deptBadge: "SCROLLKEEPERS",
    alias: `Archive Scribe ${i}`,
    photo: null,
    linkedin: "#",
    github: "#",
    instagram: "#",
    color: "from-blue-600 via-cyan-500 to-indigo-500",
  })),

  // CREATIVES ORGANIZERS (4)
  ...[1, 2, 3, 4].map((i) => ({
    id: `creative-org-${i}`,
    name: `Creatives Organizer ${i}`,
    role: "Creatives Organizer",
    category: "Creatives",
    deptBadge: "AIRBENDER STUDIO",
    alias: `Flow Artist ${i}`,
    photo: null,
    linkedin: "#",
    github: "#",
    instagram: "#",
    color: "from-sky-300 via-cyan-400 to-blue-500",
  })),
];

function Team() {
  const [selectedCategory, setSelectedCategory] = useState("All Squad");

  const categories = [
    "All Squad",
    "Leadership",
    "Technical",
    "Publicity",
    "Non-Tech",
    "Sponsorship",
    "Logistics",
    "Content",
    "Creatives",
  ];

  const filteredMembers = selectedCategory === "All Squad"
    ? teamData
    : teamData.filter((m) => m.category === selectedCategory);

  return (
    <section id="teams" className="relative min-h-screen bg-slate-950 py-24 px-6 md:px-12 lg:px-20 text-white overflow-hidden">
      <ElementsCanvas />

      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="text-center mb-16 relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-4">
          <UserCheck className="w-4 h-4 text-cyan-400" />
          <span>MEET THE SQUAD</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          THE CORE <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent"> TEAM</span>
        </h2>
        <p className="text-gray-300 mt-4 text-base md:text-lg font-medium">
          The minds, builders, and visionaries behind Team SRM Hackathon Club.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white border border-cyan-300/50 scale-105 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "bg-slate-900/80 text-gray-400 hover:text-white border border-white/10 hover:border-cyan-500/30"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="group relative p-6 rounded-3xl bg-slate-900/70 border border-cyan-500/20 hover:border-cyan-400/70 transition-all duration-300 hover:-translate-y-1.5 text-center overflow-hidden flex flex-col justify-between shadow-[0_0_15px_rgba(6,182,212,0.08)]"
          >
            <div>
              <div className="relative w-28 h-28 mx-auto mb-4 rounded-full p-1 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-105 transition duration-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden border border-slate-800 relative">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-cyan-400 p-2">
                      <Camera className="w-6 h-6 mb-1 opacity-70 group-hover:opacity-100 transition" />
                      <span className="text-[9px] font-mono text-gray-400 leading-tight text-center">Photo Card</span>
                      <span className="text-[8px] font-mono text-cyan-400/80">Upload Later</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {member.deptBadge}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                {member.name}
              </h3>

              <p className="text-cyan-400 text-xs font-semibold mt-0.5">
                {member.role}
              </p>
              <p className="text-gray-400 text-[11px] font-mono mt-0.5 italic">
                "{member.alias}"
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-center gap-3">
              <a
                href={member.linkedin}
                className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-300 border border-white/5 hover:border-cyan-400/40 transition cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={member.github}
                className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-300 border border-white/5 hover:border-cyan-400/40 transition cursor-pointer"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={member.instagram}
                className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-300 border border-white/5 hover:border-cyan-400/40 transition cursor-pointer"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;

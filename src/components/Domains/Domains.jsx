import React, { useState } from "react";
import ElementsCanvas from "../recruitment/ElementsCanvas";
import { Flame, Mountain, Handshake, Wind, Palette, Newspaper, Megaphone, Send, ChevronRight, Check } from "lucide-react";
import fireElementImg from "../../assets/images/fire-element.png";
import waterElementImg from "../../assets/images/water-element.png";
import earthElementImg from "../../assets/images/earth-element.png";
import airElementImg from "../../assets/images/air-element.png";

const domains = [
  {
    id: "tech",
    title: "Technical (Firebender)",
    badge: "FORGE & DEPLOY",
    desc: "Build full-stack web applications, mobile platforms, and AI integrations for club hackathons.",
    icon: Flame,
    elementImg: fireElementImg,
    elementName: "FIRE NATION",
    color: "from-amber-600 via-orange-500 to-red-600",
    accent: "text-amber-300 border-amber-500/40 bg-amber-500/10",
    cardGlow: "hover:shadow-[0_0_35px_rgba(249,115,22,0.45)] hover:border-amber-400/80 border-amber-500/30",
    glowAura: "from-amber-500/20 via-orange-500/10 to-transparent",
    highlights: ["React, Next.js, Node.js", "Hackathon Platform Dev", "AI/ML Integration"],
  },
  {
    id: "nontech",
    title: "Non Tech (Earthbender)",
    badge: "GROUND COMMAND",
    desc: "Orchestrate flagship events, coordinate team operations, and lead national-scale hackathons.",
    icon: Mountain,
    elementImg: earthElementImg,
    elementName: "EARTH KINGDOM",
    color: "from-emerald-700 via-teal-600 to-green-500",
    accent: "text-emerald-300 border-emerald-500/40 bg-emerald-500/10",
    cardGlow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] hover:border-emerald-400/80 border-emerald-500/30",
    glowAura: "from-emerald-500/20 via-teal-500/10 to-transparent",
    highlights: ["Event Execution", "Team Operations", "Strategic Planning"],
  },
  {
    id: "sponsorship",
    title: "Sponsorships (White Lotus)",
    badge: "ALLIANCE COUNCIL",
    desc: "Connect with top tech companies, secure high-value event sponsorships, and build industry ties.",
    icon: Handshake,
    elementImg: waterElementImg,
    elementName: "WATER TRIBE",
    color: "from-sky-500 via-cyan-400 to-blue-600",
    accent: "text-sky-300 border-sky-500/40 bg-sky-500/10",
    cardGlow: "hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] hover:border-cyan-400/80 border-cyan-500/30",
    glowAura: "from-cyan-500/20 via-sky-500/10 to-transparent",
    highlights: ["Corporate Pitching", "Sponsorship Acquisition", "Industry Relations"],
  },
  {
    id: "logistics",
    title: "Logistics (Sky Bison Corps)",
    badge: "TRANSPORT COMMAND",
    desc: "Ensure seamless venue management, tech equipment setup, and smooth event ground execution.",
    icon: Wind,
    elementImg: airElementImg,
    elementName: "AIR NOMADS",
    color: "from-cyan-400 via-blue-500 to-sky-300",
    accent: "text-cyan-200 border-cyan-300/40 bg-cyan-300/10",
    cardGlow: "hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] hover:border-sky-300/80 border-sky-400/30",
    glowAura: "from-sky-500/20 via-cyan-500/10 to-transparent",
    highlights: ["Venue Management", "Equipment & Network Ops", "Ground Operations"],
  },
  {
    id: "creatives",
    title: "Creatives (Airbender)",
    badge: "FREE-FLOW DESIGN",
    desc: "Craft modern UI design systems, event graphics, posters, and digital branding assets.",
    icon: Palette,
    elementImg: airElementImg,
    elementName: "AIR NOMADS",
    color: "from-sky-300 via-cyan-400 to-blue-500",
    accent: "text-sky-200 border-sky-300/40 bg-sky-300/10",
    cardGlow: "hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] hover:border-sky-300/80 border-sky-400/30",
    glowAura: "from-sky-500/20 via-indigo-500/10 to-transparent",
    highlights: ["Figma UI/UX Design", "Event Branding & Posters", "Visual Systems"],
  },
  {
    id: "content",
    title: "Content (Scrollkeeper)",
    badge: "ARCHIVE LEAD",
    desc: "Write technical blogs, event press releases, and engaging social media copy.",
    icon: Newspaper,
    elementImg: waterElementImg,
    elementName: "WATER TRIBE",
    color: "from-blue-600 via-cyan-500 to-indigo-500",
    accent: "text-blue-300 border-blue-500/40 bg-blue-500/10",
    cardGlow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.45)] hover:border-blue-400/80 border-blue-500/30",
    glowAura: "from-blue-500/20 via-cyan-500/10 to-transparent",
    highlights: ["Tech Blogging", "Social Media Copy", "Event Scripts"],
  },
  {
    id: "publicity",
    title: "Publicity (Messenger Hawk)",
    badge: "SIGNAL FLIGHT",
    desc: "Drive outreach across SRM campus, produce video reels, and grow audience channels.",
    icon: Megaphone,
    elementImg: fireElementImg,
    elementName: "FIRE NATION",
    color: "from-orange-500 via-amber-500 to-red-500",
    accent: "text-amber-300 border-amber-500/40 bg-amber-500/10",
    cardGlow: "hover:shadow-[0_0_35px_rgba(249,115,22,0.45)] hover:border-amber-400/80 border-amber-500/30",
    glowAura: "from-orange-500/20 via-amber-500/10 to-transparent",
    highlights: ["Campus Promotions", "Reels & Video Production", "Social Media Growth"],
  },
  {
    id: "social-media",
    title: "Social Media (Messenger Hawk)",
    badge: "SIGNAL BOOST",
    desc: "Plan social content, manage audience engagement, and amplify recruitment and event campaigns.",
    icon: Send,
    elementImg: fireElementImg,
    elementName: "FIRE NATION",
    color: "from-rose-500 via-orange-500 to-amber-500",
    accent: "text-rose-200 border-rose-400/40 bg-rose-500/10",
    cardGlow: "hover:shadow-[0_0_35px_rgba(244,63,94,0.45)] hover:border-rose-300/80 border-rose-400/30",
    glowAura: "from-rose-500/20 via-orange-500/10 to-transparent",
    highlights: ["Content Calendar", "Audience Engagement", "Campaign Analytics"],
  },
];

function Domains() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 py-24 px-6 md:px-12 lg:px-20 text-white">
      <ElementsCanvas />

      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="text-center mb-16 relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">OUR DOMAINS</span>
        </h2>
        <p className="text-gray-300 mt-4 text-base md:text-lg font-medium">
          Explore the core domains powering Team SRM Hackathon. Choose your element!
        </p>
      </div>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {domains.map((dom) => {
          const IconComp = dom.icon;
          return (
            <div
              key={dom.id}
              onClick={() => setSelectedDomain(dom)}
              className={`group relative p-6 rounded-3xl bg-slate-900/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col justify-between ${dom.cardGlow}`}
            >
              {/* Dynamic Elemental Glow Aura */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${dom.glowAura} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none`} />

              {/* Watermark Elemental Symbol Image from Pinterest */}
              <div className="absolute top-2 right-2 w-28 h-28 opacity-15 group-hover:opacity-40 group-hover:scale-110 transition duration-700 pointer-events-none mix-blend-screen overflow-hidden rounded-full">
                <img src={dom.elementImg} alt={dom.elementName} className="w-full h-full object-cover rounded-full" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${dom.color} text-white group-hover:scale-110 transition duration-300 shadow-lg`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <img src={dom.elementImg} alt={dom.elementName} className="w-9 h-9 rounded-full border border-white/20 object-cover shadow-md group-hover:rotate-12 transition duration-500" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${dom.accent}`}>
                    {dom.badge}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{dom.title}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
                </h3>

                <p className="text-gray-300 text-xs leading-relaxed mb-4">
                  {dom.desc}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 space-y-1.5">
                {dom.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {selectedDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-slate-950 border border-cyan-400/50 rounded-3xl p-6 text-white shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden">
            {/* Modal Elemental Background Glow */}
            <div className="absolute -top-12 -right-12 w-44 h-44 opacity-20 pointer-events-none rounded-full overflow-hidden">
              <img src={selectedDomain.elementImg} alt={selectedDomain.elementName} className="w-full h-full object-cover rounded-full" />
            </div>

            <button
              onClick={() => setSelectedDomain(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition z-10"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="relative">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${selectedDomain.color} text-white`}>
                  <selectedDomain.icon className="w-6 h-6" />
                </div>
                <img src={selectedDomain.elementImg} alt={selectedDomain.elementName} className="w-6 h-6 rounded-full border border-white/40 absolute -bottom-1 -right-1 object-cover shadow" />
              </div>
              <div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${selectedDomain.accent}`}>
                  {selectedDomain.badge} • {selectedDomain.elementName}
                </span>
                <h3 className="text-xl font-extrabold text-white mt-1">{selectedDomain.title} Domain</h3>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed relative z-10">{selectedDomain.desc}</p>
            <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold mb-3 relative z-10">Key Focus Areas & Skills</h4>
            <ul className="space-y-2 mb-6 relative z-10">
              {selectedDomain.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs text-gray-200 bg-slate-900/80 p-3 rounded-xl border border-white/10">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setSelectedDomain(null);
                document.getElementById("recruitment")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative z-10 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition cursor-pointer border border-cyan-300/40 shadow-lg shadow-cyan-500/25"
            >
              Apply for {selectedDomain.title}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Domains;

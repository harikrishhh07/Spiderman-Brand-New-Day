import React, { useState } from "react";
import ElementsCanvas from "./ElementsCanvas";
import AvatarRecruitmentModal from "./AvatarRecruitmentModal";
import { Flame, Droplets, Mountain, Wind, Handshake, Newspaper, Megaphone, Landmark, ChevronRight, CheckCircle } from "lucide-react";
import fireElementImg from "../../assets/images/fire-element.png";
import waterElementImg from "../../assets/images/water-element.png";
import earthElementImg from "../../assets/images/earth-element.png";
import airElementImg from "../../assets/images/air-element.png";

export default function AvatarRecruitmentSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDomain, setActiveDomain] = useState(0);

  const domains = [
    {
      id: "tech",
      title: "Firebender (Technical)",
      alias: "Web & App Developers",
      icon: Flame,
      badge: "FORGE & DEPLOY",
      elementImg: fireElementImg,
      elementName: "FIRE NATION",
      color: "from-amber-600 via-orange-500 to-red-600",
      accent: "text-amber-300 border-amber-500/40 bg-amber-500/10",
      glowColor: "border-amber-500/60 shadow-[0_0_30px_rgba(249,115,22,0.35)]",
      description: "Build high-performance web apps, hackathon platforms, and digital solutions for SRM.",
      perks: ["Master modern stacks (React, Vite, Node)", "Build real-world hackathon platforms", "Mentorship from core leads"],
    },
    {
      id: "nontech",
      title: "Earthbender (Operations)",
      alias: "Event Managers & Strategy Leads",
      icon: Mountain,
      badge: "GROUND COMMAND",
      elementImg: earthElementImg,
      elementName: "EARTH KINGDOM",
      color: "from-emerald-700 via-teal-600 to-green-500",
      accent: "text-emerald-300 border-emerald-500/40 bg-emerald-500/10",
      glowColor: "border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.35)]",
      description: "Orchestrate flagship events, coordinate team operations, and lead national-scale hackathons.",
      perks: ["Lead national-scale hackathons", "Strategic event execution", "Team management & leadership"],
    },
    {
      id: "sponsorship",
      title: "White Lotus (Sponsorship)",
      alias: "Corporate & Sponsor Outreach",
      icon: Handshake,
      badge: "ALLIANCE COUNCIL",
      elementImg: waterElementImg,
      elementName: "WATER TRIBE",
      color: "from-sky-500 via-cyan-400 to-blue-600",
      accent: "text-sky-300 border-sky-500/40 bg-sky-500/10",
      glowColor: "border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.35)]",
      description: "Connect with top tech companies, secure event sponsorship deals, and build industry relations.",
      perks: ["Corporate pitching & negotiation", "Acquire cash & perk sponsorships", "Build tech network connections"],
    },
    {
      id: "logistics",
      title: "Sky Bison Corps (Logistics)",
      alias: "Ground & Venue Managers",
      icon: Wind,
      badge: "TRANSPORT COMMAND",
      elementImg: airElementImg,
      elementName: "AIR NOMADS",
      color: "from-cyan-400 via-blue-500 to-sky-300",
      accent: "text-cyan-200 border-cyan-300/40 bg-cyan-300/10",
      glowColor: "border-sky-300/60 shadow-[0_0_30px_rgba(56,189,248,0.35)]",
      description: "Ensure seamless venue management, equipment setup, and smooth ground execution.",
      perks: ["Venue & hall management", "Hardware & network setup", "On-ground hackathon execution"],
    },
    {
      id: "creatives",
      title: "Airbender (Creatives & UI/UX)",
      alias: "UI/UX & Graphic Designers",
      icon: Wind,
      badge: "FREE-FLOW DESIGN",
      elementImg: airElementImg,
      elementName: "AIR NOMADS",
      color: "from-sky-300 via-cyan-400 to-blue-500",
      accent: "text-sky-200 border-sky-300/40 bg-sky-300/10",
      glowColor: "border-sky-300/60 shadow-[0_0_30px_rgba(56,189,248,0.35)]",
      description: "Design jaw-dropping user interfaces, official event posters, and digital branding assets.",
      perks: ["Figma UI/UX design systems", "Official poster & merchandise art", "Build portfolio design projects"],
    },
    {
      id: "content",
      title: "Scrollkeeper (Content & Editorial)",
      alias: "Copywriters & Technical Writers",
      icon: Newspaper,
      badge: "ARCHIVE LEAD",
      elementImg: waterElementImg,
      elementName: "WATER TRIBE",
      color: "from-blue-600 via-cyan-500 to-indigo-500",
      accent: "text-blue-300 border-blue-500/40 bg-blue-500/10",
      glowColor: "border-blue-400/60 shadow-[0_0_30px_rgba(59,130,246,0.35)]",
      description: "Write technical blogs, event press releases, captions, and captivating social media scripts.",
      perks: ["Technical blogging & press writing", "Social media caption creation", "Event hosting & announcements"],
    },
    {
      id: "publicity",
      title: "Messenger Hawk (Publicity & Media)",
      alias: "Media Creators & Outreach Leads",
      icon: Megaphone,
      badge: "SIGNAL FLIGHT",
      elementImg: fireElementImg,
      elementName: "FIRE NATION",
      color: "from-orange-500 via-amber-500 to-red-500",
      accent: "text-amber-300 border-amber-500/40 bg-amber-500/10",
      glowColor: "border-amber-500/60 shadow-[0_0_30px_rgba(249,115,22,0.35)]",
      description: "Drive viral outreach across SRM campus, shoot high-energy reels, and manage 10k+ reach channels.",
      perks: ["Produce viral reels & video media", "Lead campus publicity campaigns", "Manage 10k+ social audience"],
    },
    {
      id: "finance",
      title: "Ba Sing Se Treasury (Finance)",
      alias: "Treasury & Budget Controllers",
      icon: Landmark,
      badge: "VAULT COMMAND",
      elementImg: earthElementImg,
      elementName: "EARTH KINGDOM",
      color: "from-emerald-600 via-teal-500 to-indigo-700",
      accent: "text-emerald-300 border-emerald-500/40 bg-emerald-500/10",
      glowColor: "border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.35)]",
      description: "Manage event budgets, track prize pool distributions, and audit financial records.",
      perks: ["Budgeting & expense allocation", "Prize money disbursement", "Financial record auditing"],
    },
  ];

  return (
    <section id="recruitment" className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-slate-950 text-white">
      <ElementsCanvas />

      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-900/90 border border-cyan-400/50 backdrop-blur-md font-mono text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-[0_0_25px_rgba(6,182,212,0.3)] animate-pulse">
            <span className="text-base">⚡</span>
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-300 bg-clip-text text-transparent">ELEMENTAL RECRUITMENT 2026</span>
            <span className="text-base">🌊</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            CHOOSE YOUR <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">ELEMENT</span>
          </h2>
          <p className="text-gray-300 mt-4 text-base md:text-lg max-w-2xl mx-auto font-medium">
            "Balance isn't given — it's built." Pick your path and begin training with Team SRM Hackathon.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-4 space-y-2.5">
            {domains.map((dom, index) => {
              const IconComponent = dom.icon;
              const isActive = activeDomain === index;
              return (
                <button
                  key={dom.id}
                  onClick={() => setActiveDomain(index)}
                  className={`w-full p-4 rounded-2xl transition-all duration-300 text-left flex items-center justify-between group cursor-pointer border ${isActive
                    ? `bg-gradient-to-r from-cyan-950/70 via-slate-900 to-blue-950/70 ${dom.glowColor} scale-[1.02]`
                    : "bg-slate-900/60 border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/80"
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative">
                      <div className={`p-2.5 rounded-xl bg-slate-950 border ${isActive ? "border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]" : "border-white/10 text-gray-400 group-hover:text-cyan-300"}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <img src={dom.elementImg} alt={dom.elementName} className="w-5 h-5 rounded-full border border-white/30 absolute -bottom-1 -right-1 object-cover shadow" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                        {dom.title}
                      </h4>
                      <p className="text-[11px] font-mono text-gray-400">{dom.alias}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-cyan-400 translate-x-1" : "text-gray-600 group-hover:text-gray-400"}`} />
                </button>
              );
            })}
          </div>

          <div className={`lg:col-span-8 p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border-2 relative overflow-hidden flex flex-col justify-between min-h-[440px] transition-all duration-500 ${domains[activeDomain].glowColor}`}>
            {/* Background Elemental Symbol Image Glow */}
            <div className="absolute -top-10 -right-10 w-64 h-64 opacity-25 pointer-events-none rounded-full overflow-hidden mix-blend-screen animate-pulse">
              <img src={domains[activeDomain].elementImg} alt={domains[activeDomain].elementName} className="w-full h-full object-cover rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${domains[activeDomain].accent}`}>
                    {domains[activeDomain].badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-extrabold bg-slate-950/80 border border-white/20 text-cyan-300 flex items-center gap-1.5 shadow">
                    <img src={domains[activeDomain].elementImg} alt="Element Emblem" className="w-4 h-4 rounded-full object-cover" />
                    {domains[activeDomain].elementName}
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  STATUS: RECRUITMENT LIVE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 flex items-center gap-3">
                <span>{domains[activeDomain].title}</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {domains[activeDomain].description}
              </p>

              <h4 className="text-xs font-mono text-cyan-300 uppercase tracking-widest font-bold mb-3">
                TRAINING PERKS:
              </h4>
              <div className="space-y-2.5 mb-8">
                {domains[activeDomain].perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-white/10 text-xs text-gray-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="relative z-10 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer border border-cyan-300/40 animate-pulse"
            >
              <span>Apply for {domains[activeDomain].title}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <AvatarRecruitmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

import React from "react";
import ElementsCanvas from "../recruitment/ElementsCanvas";

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white py-24">
      {/* ELEMENTAL AURA CANVAS */}
      <ElementsCanvas />

      {/* Elemental Dust Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-2">
              <span>⚡ THE ORIGIN STORY</span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Building the Future with </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
                Elemental Innovation
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              TEAM SRM HACKATHON is more than a club — it's a launchpad for 
              creators, developers, and problem solvers. We bring together 
              ambitious students to build, experiment, and disrupt through 
              technology-driven events.
            </p>

            <p className="text-cyan-200/80 text-sm md:text-base max-w-lg">
              From 36-hour national hackathons to real-world product building, we ensure every 
              member gains hands-on experience, industry exposure, and a strong 
              developer mindset.
            </p>
          </div>

          {/* RIGHT SIDE - CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400 hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <h3 className="text-xl font-extrabold text-cyan-300 mb-2">⚡ 10+ Events</h3>
              <p className="text-gray-400 text-sm">
                Conducting hackathons, ideathons, and coding competitions regularly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400 hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <h3 className="text-xl font-extrabold text-sky-300 mb-2">👨‍💻 500+ Members</h3>
              <p className="text-gray-400 text-sm">
                A growing community of passionate developers and innovators.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400 hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <h3 className="text-xl font-extrabold text-blue-300 mb-2">🌐 Networking</h3>
              <p className="text-gray-400 text-sm">
                Connect with peers, mentors, and industry experts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400 hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <h3 className="text-xl font-extrabold text-cyan-300 mb-2">🏆 ₹3,00,000+ Prizes</h3>
              <p className="text-gray-400 text-sm">
                Awarded across annual hackathons & competitive battles.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

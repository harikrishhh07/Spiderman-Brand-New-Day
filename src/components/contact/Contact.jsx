import React from "react";
import ElementsCanvas from "../recruitment/ElementsCanvas";
import { Mail, MapPin, Instagram, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white py-24">
      {/* ELEMENTAL AURA CANVAS */}
      <ElementsCanvas />

      {/* Elemental Dust Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-2">
              <span>⚡ SEND YOUR SIGNAL</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Join, Collaborate & </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
                Bend the Future
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Whether you're looking to join TEAM SRM HACKATHON, collaborate on exciting projects, 
              or participate in our events — send us your signal.
            </p>

            <div className="space-y-4 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-white/10">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>SRM Institute of Science and Technology, Kattankulathur</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-white/10">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>teamsrmhackathon@gmail.com</span>
              </div>
            </div>

          </div>

          <div className="p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 space-y-6 shadow-[0_0_30px_rgba(6,182,212,0.1)]">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-cyan-400 font-mono text-sm transition"
            />

            <input
              type="email"
              placeholder="Your College Email"
              className="w-full p-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-cyan-400 font-mono text-sm transition"
            />

            <select
              className="w-full p-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-cyan-400 font-mono text-sm transition"
            >
              <option className="bg-slate-950">Select Purpose</option>
              <option className="bg-slate-950">Join the Club</option>
              <option className="bg-slate-950">Sponsorship / Collaboration</option>
              <option className="bg-slate-950">Event Participation Query</option>
              <option className="bg-slate-950">Other</option>
            </select>

            <textarea
              rows="4"
              placeholder="Tell us more about your skills or query..."
              className="w-full p-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-cyan-400 font-mono text-sm transition"
            ></textarea>

            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition duration-300 flex items-center justify-center gap-2 cursor-pointer border border-cyan-300/40 shadow-lg shadow-cyan-500/25">
              <span>Send Signal ⚡</span>
              <Send className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

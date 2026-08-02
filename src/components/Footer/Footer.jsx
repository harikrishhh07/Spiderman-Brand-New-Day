import React from "react";
import ElementsCanvas from "../recruitment/ElementsCanvas";
import { Mail, MapPin, Send, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white px-6 py-16 overflow-hidden">
      {/* ELEMENTAL AURA CANVAS */}
      <ElementsCanvas />

      <div className="absolute top-0 left-0 w-full h-[2px] 
        bg-gradient-to-r from-transparent via-cyan-400 to-transparent 
        opacity-80 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />

      {/* Elemental Dust Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        <div>
          <h2 className="text-2xl font-extrabold text-cyan-300 mb-4 tracking-wide">
            TEAM SRM HACKATHON
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            We organize hackathons, ideathons, workshops, and technical events
            that help students develop real world skills and turn ideas into impact.
          </p>

          <div className="space-y-3 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400" />
              SRMIST, Kattankulathur
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-400" />
              teamsrmhackathon@gmail.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-400">
            <a href="#" className="hover:text-cyan-300 transition">About</a>
            <a href="#" className="hover:text-cyan-300 transition">Events</a>
            <a href="#" className="hover:text-cyan-300 transition">Domain</a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">
            Stay Updated
          </h3>

          <p className="text-gray-400 mb-6">
            Subscribe to get updates about our events and workshops.
          </p>

          <div className="flex items-center bg-slate-900/80 border border-cyan-500/30 rounded-xl p-2 backdrop-blur-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-sm px-3 text-white placeholder-gray-500 font-mono"
            />
            <button className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 p-3 rounded-lg hover:scale-105 transition shadow-lg shadow-cyan-500/20 text-white cursor-pointer border border-cyan-300/40">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 transition cursor-pointer">
            <Linkedin size={18} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 transition cursor-pointer">
            <Instagram size={18} />
          </div>
        </div>

        <p className="text-gray-500 text-sm text-center">
          © 2026 TEAM SRM HACKATHON, SRMIST KTR. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
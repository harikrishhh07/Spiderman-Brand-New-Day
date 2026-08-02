import React, { useState, useRef } from "react";
import ElementsCanvas from "../recruitment/ElementsCanvas";
import { Calendar, Users, Trophy, ArrowRight, ShieldCheck, Clock, Play, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";

import ideaImg from "./idea.jpg";
import semiImg from "./semi.jpg";
import hackImg from "./hack.jpg";

import fireElementImg from "../../assets/images/fire-element.png";
import waterElementImg from "../../assets/images/water-element.png";
import earthElementImg from "../../assets/images/earth-element.png";
import airElementImg from "../../assets/images/air-element.png";

const events = [
  {
    id: "ideathon-6",
    title: "Ideathon 6.0",
    phase: "PHASE 03",
    category: "Ideathons 💡",
    timeframe: "Q1 2026",
    status: "UPCOMING • FEB 2026",
    statusBadge: "bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse",
    date: "Feb 18–20, 2026",
    venue: "TP Ganesan Auditorium, SRMIST",
    desc: "A flagship innovation pitchathon to brainstorm disruptive ideas, solve real-world industry challenges, and present before top VCs & mentors.",
    participants: "250+ Teams",
    prize: "₹25,000+",
    img: ideaImg,
    elementImg: waterElementImg,
    elementName: "WATER TRIBE",
    cardGlow: "border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.15)]",
    timelineSteps: [
      { day: "FEB 18", title: "Idea Pitch & Mentorship", desc: "Refine problem statements with VC mentors" },
      { day: "FEB 19", title: "Prototype Development", desc: "Build MVP pitch decks and functional demos" },
      { day: "FEB 20", title: "Grand Finale Showcase", desc: "Present live on stage before investor jury" },
    ],
    perks: ["1-on-1 VC Pitch Mentorship", "Seed Funding Opportunities", "Official SRM Merit Certificate"],
  },
  {
    id: "semicolon-11",
    title: "Semicolon 11.0",
    phase: "PHASE 02",
    category: "Coding Battles 💻",
    timeframe: "Q4 2025",
    status: "REGISTRATIONS OPEN",
    statusBadge: "bg-sky-500/20 text-sky-300 border-sky-400/60 shadow-[0_0_15px_rgba(56,189,248,0.3)] animate-bounce",
    date: "Nov 12, 2025",
    venue: "Tech Park Labs, SRMIST",
    desc: "High-octane competitive programming battle focused on data structures, algorithmic speed, and flawless logic building under high pressure.",
    participants: "400+ Coders",
    prize: "₹50,000",
    img: semiImg,
    elementImg: fireElementImg,
    elementName: "FIRE NATION",
    cardGlow: "border-amber-500/40 hover:border-amber-400 shadow-[0_0_25px_rgba(249,115,22,0.15)]",
    timelineSteps: [
      { day: "ROUND 1", title: "Speed Sprint", desc: "30-min algorithmic speed run" },
      { day: "ROUND 2", title: "Complex DSA Challenge", desc: "Solve graph & DP optimizations" },
      { day: "FINALS", title: "1v1 Code Showdown", desc: "Live terminal duel for champion title" },
    ],
    perks: ["HackerRank Global Rating", "Cash Prizes & Trophy", "Swag Bags & Fast-Track Club Entry"],
  },
  {
    id: "hackathon-10",
    title: "Hackathon 10.0",
    phase: "PHASE 01",
    category: "Hackathons 🏆",
    timeframe: "Q2 2025",
    status: "MILESTONE COMPLETED",
    statusBadge: "bg-emerald-500/20 text-emerald-300 border-emerald-400/60 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
    date: "April 24–26, 2025",
    venue: "UB Main Hall & Virtual",
    desc: "36-Hour continuous national-level hackathon. Over 1,000 hackers leapt into action building full-stack AI, web3, and mobile prototypes.",
    participants: "1,000+ Hackers",
    prize: "₹2,00,000+",
    img: hackImg,
    elementImg: earthElementImg,
    elementName: "EARTH KINGDOM",
    cardGlow: "border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.15)]",
    timelineSteps: [
      { day: "DAY 1", title: "Hackathon Kickoff", desc: "Keynote, track release & midnight hacking" },
      { day: "DAY 2", title: "Mid-way Progress Evaluation", desc: "Mentor feedback & gaming breaks" },
      { day: "DAY 3", title: "Project Expo & Awards", desc: "Top 10 teams pitch for ₹2 Lakh prize" },
    ],
    perks: ["36-Hour Non-stop Hacking", "Sponsor Tracks by Top Tech Companies", "Free Food, Swags & Mentorship"],
  },
];

function Events() {
  const [activeTab, setActiveTab] = useState("All Flagship Events");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTimelineId, setActiveTimelineId] = useState("ideathon-6");

  const categories = ["All Flagship Events", "Hackathons 🏆", "Coding Battles 💻", "Ideathons 💡"];

  const filteredEvents = activeTab === "All Flagship Events"
    ? events
    : events.filter((e) => e.category === activeTab);

  const scrollToEvent = (eventId) => {
    setActiveTimelineId(eventId);
    const element = document.getElementById(eventId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="events" className="relative min-h-screen bg-slate-950 py-24 px-6 md:px-12 lg:px-20 text-white overflow-hidden">
      {/* ELEMENTAL AURA CANVAS */}
      <ElementsCanvas />

      {/* Background Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* HEADING SECTION */}
      <div className="text-center mb-16 relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-900/90 border border-cyan-400/50 text-cyan-300 font-mono text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-[0_0_25px_rgba(6,182,212,0.3)] animate-pulse">
          <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
          <span>FLAGSHIP EVENT TIMELINE & MOTION</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          CHRONICLES OF <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">OUR EVENTS</span>
        </h2>
        <p className="text-gray-300 mt-4 text-base md:text-lg font-medium">
          Step through time — from 36-hour continuous national hackathons to high-speed algorithmic duels.
        </p>

        {/* INTERACTIVE TIMELINE SCRUBBER NAV BAR */}
        <div className="mt-10 p-2 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl flex flex-wrap items-center justify-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          {events.map((ev) => {
            const isActive = activeTimelineId === ev.id;
            return (
              <button
                key={ev.id}
                onClick={() => scrollToEvent(ev.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold font-mono transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${isActive
                  ? "bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105 border border-cyan-300/60"
                  : "bg-slate-950/80 text-gray-400 hover:text-white border border-white/10 hover:border-cyan-500/40 hover:scale-102"
                  }`}
              >
                <img src={ev.elementImg} alt={ev.elementName} className="w-5 h-5 rounded-full object-cover border border-white/30" />
                <span>{ev.title}</span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] ${isActive ? "bg-white/20 text-white" : "bg-slate-900 text-gray-400"}`}>
                  {ev.timeframe}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Tabs Filter */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeTab === cat
                ? "bg-slate-800 text-cyan-300 border border-cyan-400/50 shadow"
                : "bg-slate-950/60 text-gray-400 hover:text-gray-200 border border-white/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* TIMELINE FRAME TRACK & CONTENT CARDS */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Central Vertical Glowing Timeline Motion Track */}
        <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)] hidden lg:block opacity-40" />

        <div className="space-y-16">
          {filteredEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                id={event.id}
                key={event.id}
                className="relative group transition-all duration-700 scroll-mt-28"
              >
                {/* Center Node Marker (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-10 z-20 hidden lg:flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:scale-125 transition duration-500">
                    <img src={event.elementImg} alt={event.elementName} className="w-8 h-8 rounded-full object-cover" />
                  </div>
                  <span className="mt-1 px-2 py-0.5 rounded-full bg-slate-900 border border-cyan-400/40 text-[9px] font-mono font-bold text-cyan-300 shadow">
                    {event.phase}
                  </span>
                </div>

                {/* Event Motion Card Box */}
                <div
                  className={`relative rounded-3xl bg-slate-900/80 backdrop-blur-xl border p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 group-hover:scale-[1.01] ${event.cardGlow} overflow-hidden`}
                >
                  {/* Background Watermark Element Image */}
                  <div className="absolute -top-12 -right-12 w-64 h-64 opacity-15 pointer-events-none rounded-full overflow-hidden mix-blend-screen group-hover:scale-110 transition duration-700">
                    <img src={event.elementImg} alt={event.elementName} className="w-full h-full object-cover rounded-full" />
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">

                    {/* EVENT MEDIA COLUMN */}
                    <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-400/50 transition shadow-xl">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border backdrop-blur-md ${event.statusBadge}`}>
                          {event.status}
                        </span>
                      </div>

                      {/* Prize Pool Badge Overlay */}
                      <div className="absolute bottom-4 right-4 bg-slate-950/90 border border-cyan-400/50 px-4 py-2 rounded-2xl backdrop-blur-md flex items-center gap-2 shadow-lg">
                        <Trophy className="w-4 h-4 text-cyan-300" />
                        <div>
                          <p className="text-[10px] font-mono text-gray-400">PRIZE POOL</p>
                          <p className="text-xs font-extrabold text-white">{event.prize}</p>
                        </div>
                      </div>
                    </div>

                    {/* EVENT CONTENT & TIMEFRAME DETAILS COLUMN */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                      <div>
                        {/* Time & Venue Header */}
                        <div className="flex flex-wrap items-center gap-2 text-cyan-300 font-mono text-xs font-semibold mb-2">
                          <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-400/40 text-cyan-200">
                            {event.timeframe}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {event.date}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span>{event.venue}</span>
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-3">
                          <span>{event.title}</span>
                        </h3>

                        <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                          {event.desc}
                        </p>
                      </div>

                      {/* TIMEFRAME MOTION STAGES / TIMELINE STEPS */}
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <p className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Play className="w-3 h-3 text-cyan-400" />
                          EVENT TIMELINE AGENDA:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {event.timelineSteps.map((step, sIdx) => (
                            <div key={sIdx} className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10 hover:border-cyan-400/40 transition">
                              <span className="text-[10px] font-mono font-extrabold text-cyan-400 block">{step.day}</span>
                              <span className="text-xs font-bold text-white block truncate">{step.title}</span>
                              <span className="text-[10px] text-gray-400 block leading-tight">{step.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* STATS & CTA BUTTON */}
                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-slate-950/80 px-3 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                            <Users className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-bold text-white">{event.participants}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedEvent(event)}
                          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition flex items-center justify-center gap-2 cursor-pointer border border-cyan-300/40 shadow-lg shadow-cyan-500/25"
                        >
                          <span>Explore Event Schedule</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* EVENT DETAIL MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-slate-950 border-2 border-cyan-400/50 rounded-3xl p-6 sm:p-8 text-white overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <div className="absolute -top-12 -right-12 w-48 h-48 opacity-20 pointer-events-none rounded-full overflow-hidden">
              <img src={selectedEvent.elementImg} alt={selectedEvent.elementName} className="w-full h-full object-cover rounded-full" />
            </div>

            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition z-10"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${selectedEvent.statusBadge}`}>
                {selectedEvent.status}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 border border-white/20 text-cyan-300">
                {selectedEvent.timeframe}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 relative z-10">{selectedEvent.title}</h3>
            <p className="text-xs text-cyan-300 font-mono mb-4 flex items-center gap-2 relative z-10">
              <Clock className="w-4 h-4" />
              <span>{selectedEvent.date} — {selectedEvent.venue}</span>
            </p>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed relative z-10">{selectedEvent.desc}</p>

            <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold mb-3 relative z-10">⚡ TIMELINE AGENDA STEPS</h4>
            <div className="space-y-2 mb-6 relative z-10">
              {selectedEvent.timelineSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono font-bold text-cyan-300">{step.day}: </span>
                    <span className="font-bold text-white">{step.title} — </span>
                    <span className="text-gray-300">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
              <span className="text-xs text-gray-400">Organized by <strong>Team SRM Hackathon</strong></span>
              <button
                onClick={() => {
                  alert(`Registering for ${selectedEvent.title}! Portal opening soon.`);
                  setSelectedEvent(null);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition cursor-pointer border border-cyan-300/40 shadow-lg shadow-cyan-500/25"
              >
                Confirm Registration ⚡
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Events;

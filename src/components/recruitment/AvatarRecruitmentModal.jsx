import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

export default function AvatarRecruitmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    regNo: "",
    year: "2nd Year",
    domain: "Firebender (Technical)",
    github: "",
    whyJoin: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const domainsList = [
    "Firebender (Technical)",
    "Avatar State (AI & ML)",
    "Earthbender (Operations)",
    "White Lotus (Sponsorship)",
    "Sky Bison Corps (Logistics)",
    "Airbender (Creatives & UI/UX)",
    "Scrollkeeper (Content & Editorial)",
    "Messenger Hawk (Publicity & Media)",
    "Ba Sing Se Treasury (Finance)",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-2xl bg-slate-950 border-2 border-cyan-400/50 rounded-3xl p-6 sm:p-8 z-10 overflow-hidden text-white my-8 shadow-[0_0_50px_rgba(6,182,212,0.25)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-cyan-500/20 text-gray-300 hover:text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-300 bg-clip-text text-transparent">⚡ OFFICIAL RECRUITMENT 2026</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
                  CHOOSE YOUR <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">ELEMENT</span>
                </h2>
                <p className="text-xs sm:text-sm text-cyan-200/80 mt-1">
                  "Balance isn't given — it's built." Fill in your training scroll to get started!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aria Sundar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-mono transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      SRM Email ID *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="mm1234@srmist.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-mono transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Reg. Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="RA2311003010123"
                      value={formData.regNo}
                      onChange={(e) => setFormData({ ...formData, regNo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-mono transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Academic Year *
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400 text-sm font-mono transition cursor-pointer"
                    >
                      <option className="bg-slate-950">1st Year</option>
                      <option className="bg-slate-950">2nd Year</option>
                      <option className="bg-slate-950">3rd Year</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Primary Domain *
                    </label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400 text-xs font-mono transition cursor-pointer"
                    >
                      {domainsList.map((d) => (
                        <option key={d} value={d} className="bg-slate-950">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    GitHub / Portfolio / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/yourhandle"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-mono transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Why do you want to join Team SRM Hackathon? *
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Tell us about your projects, skills, or what drives you..."
                    value={formData.whyJoin}
                    onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-mono transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-cyan-300/40 shadow-lg shadow-cyan-500/25"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Sending Your Scroll...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Training Application ⚡
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-3xl font-extrabold text-white">Scroll Delivered!</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                Welcome to the path, <span className="text-cyan-300 font-bold">{formData.name}</span>.
                Our core leads will review your application and send interview invites to your SRM email!
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-slate-900 border border-cyan-400/40 text-cyan-300 font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition cursor-pointer"
              >
                Back to Portal
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

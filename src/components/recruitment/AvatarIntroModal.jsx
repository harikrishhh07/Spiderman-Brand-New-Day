import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";

export default function AvatarIntroModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleApplyNow = () => {
    setIsOpen(false);
    document.getElementById("recruitment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Intro Card */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0, y: -100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full max-w-lg bg-slate-950 border-2 border-cyan-400/80 rounded-3xl p-6 sm:p-8 shadow-[0_0_70px_rgba(6,182,212,0.35)] z-10 overflow-hidden text-white my-8 text-center"
          >
            {/* Corner wind-swirl motif */}
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-30 animate-pulse">
              <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-300 fill-none stroke-current stroke-[1.2]">
                <path d="M20,50 Q50,10 80,30 Q95,40 80,55 Q65,68 45,58" />
                <circle cx="80" cy="30" r="3" fill="currentColor" stroke="none" />
              </svg>
            </div>

            {/* Glowing corner accents — electric blue */}
            <div className="absolute top-0 left-0 w-28 h-28 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-cyan-500/30 text-gray-300 hover:text-white transition cursor-pointer border border-white/10"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Emblem */}
            <div className="relative mb-6 pt-2">
              <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent mx-auto mb-2"
              />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 260 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 via-sky-400 to-blue-600 border-2 border-cyan-300 mx-auto flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                ⚡
              </motion.div>

              <div className="absolute top-10 right-1/4 transform translate-x-6 -rotate-12 px-2.5 py-0.5 rounded-md bg-cyan-400 text-slate-950 font-black font-mono text-[10px] uppercase tracking-widest shadow-md">
                Avatar State! 🌊⚡
              </div>
            </div>

            {/* Announcement */}
            <div className="relative mb-6 p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-inner">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-2 animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>The Elements Are Calling</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-white mb-2">
                RECRUITMENT 2026 IS{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
                  OFFICIALLY LIVE!
                </span>
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed">
                "Balance isn't given — it's built." Choose your element and join Team SRM Hackathon.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleApplyNow}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 border border-cyan-300/60 cursor-pointer animate-pulse"
              >
                <span>BEGIN YOUR TRAINING ⚡</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-300 hover:text-white font-bold text-xs uppercase tracking-wider transition border border-white/10 cursor-pointer"
              >
                EXPLORE PORTAL
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

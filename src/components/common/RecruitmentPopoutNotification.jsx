import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Zap } from "lucide-react";

export default function RecruitmentPopoutNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pop out 600ms after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleApplyClick = () => {
    setIsVisible(false);
    const element = document.getElementById("recruitment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -25, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -25, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="fixed top-20 right-4 sm:right-8 z-40 flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-950/95 border-2 border-cyan-400/70 shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-2xl text-white cursor-pointer hover:scale-105 transition-all group"
          onClick={handleApplyClick}
        >
          {/* Elemental Badge */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-700 border border-cyan-300 flex items-center justify-center text-lg shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <span>⚡</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-950 animate-ping" />
          </div>

          {/* Medium Pill Text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black tracking-wide bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent uppercase font-mono">
                RECRUITMENT 2026 LIVE
              </span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-black border border-cyan-400/50 uppercase">
                APPLY
              </span>
            </div>
            <span className="text-xs text-gray-300 font-medium group-hover:text-cyan-300 transition-colors flex items-center gap-1 mt-0.5">
              <span>Answer the call & pick your element</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-cyan-500/30 text-gray-300 hover:text-white transition cursor-pointer shrink-0 ml-1 border border-white/10"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

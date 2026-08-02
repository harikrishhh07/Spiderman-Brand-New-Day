import React, { useState } from "react";
import AvatarRecruitmentModal from "./AvatarRecruitmentModal";
import { Zap } from "lucide-react";

export default function AvatarFloatingWidget() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:scale-105 active:scale-95 transition-all duration-300 border border-cyan-300/60 shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-lg shadow-inner border border-cyan-400/40">
            <span className="animate-bounce">⚡</span>
          </div>

          <div className="relative text-left pr-1">
            <div className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-cyan-200 leading-tight">
              TEAM SRM HACKATHON
            </div>
            <div className="text-xs font-black uppercase tracking-wide flex items-center gap-1 text-white">
              <span>WE ARE RECRUITING!</span>
              <Zap className="w-3 h-3 text-cyan-300 fill-current" />
            </div>
          </div>
        </button>
      </div>

      <AvatarRecruitmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

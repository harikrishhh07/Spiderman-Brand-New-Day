import React from 'react';
import { sound } from '../../utils/sound';
import hackLogo from '../../assets/images/hack-logo.png';

const SpiderFooter = () => {
  return (
    <footer className="relative bg-[#0B0D13] border-t border-white/10 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Official Club Logo Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#040404] border border-[#D6001C]/40 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(214,0,28,0.5)]">
            <img src={hackLogo} alt="Team SRM Hackathon Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_#42C9FF]" />
          </div>
          <div>
            <span className="font-marvel text-xl text-white">TEAM SRM HACKATHON</span>
            <p className="font-display text-xs text-white/50">Spider-Man: Brand New Day • Official Recruitment Portal 2026</p>
          </div>
        </div>

        {/* Center: Theme Credits */}
        <div className="font-display text-xs text-white/40 text-center">
          Inspired by Marvel Studios × Sony Pictures × Apple × PlayStation UI.
          <br />
          Crafted with Next.js, React 19, GSAP, Lenis & Framer Motion.
        </div>

        {/* Right: Back to top */}
        <button
          onClick={() => {
            sound.playThwip();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-4 py-2 rounded-full border border-white/10 hover:border-[#42C9FF] text-white/70 hover:text-white font-marvel text-sm transition-all flex items-center gap-2"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
};

export default SpiderFooter;

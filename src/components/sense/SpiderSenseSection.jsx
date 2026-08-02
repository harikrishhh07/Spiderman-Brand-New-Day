import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sound } from '../../utils/sound';

const SpiderSenseSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.playSpiderSense();
  };

  return (
    <section
      id="spider-sense"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen py-24 bg-[#040404] overflow-hidden flex items-center justify-center cursor-none"
    >
      {/* Spider-Sense Concentric Wave Ripple around cursor */}
      {isHovered && (
        <div
          style={{
            left: mousePos.x,
            top: mousePos.y,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
        >
          {/* Concentric Pulsing Sense Rings */}
          {[0, 0.4, 0.8].map((delay, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${delay}s` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-[#42C9FF] spider-sense-ring pointer-events-none"
            />
          ))}
          {/* Central Glow Core */}
          <div className="w-8 h-8 rounded-full bg-[#D6001C] blur-md shadow-[0_0_30px_#D6001C] -translate-x-1/2 -translate-y-1/2" />
        </div>
      )}

      {/* Main Interactive Spider Sense Chamber */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Pulsing Spider Sense Emblem */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#D6001C] via-[#0058FF] to-[#42C9FF] p-1 flex items-center justify-center shadow-[0_0_60px_rgba(66,201,255,0.6)]"
        >
          <div className="w-full h-full rounded-full bg-[#0B0D13] flex items-center justify-center">
            <svg className="w-16 h-16 text-[#FFC400]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 3.8L18.2 10H17v8H7v-8H5.8L12 5.8z" />
            </svg>
          </div>
        </motion.div>

        <h2 className="font-marvel text-5xl sm:text-8xl text-white mb-6">
          SPIDER-SENSE <span className="text-[#42C9FF]">ACTIVATED</span>
        </h2>

        <p className="font-display text-lg text-white/70 max-w-2xl mx-auto mb-12">
          Move your cursor around the chamber to experience neural spider-sense waves reacting in real time. Feel the vibration of incoming code challenges.
        </p>

        {/* Proximity Sensing Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'DANGER DETECTION', desc: 'Real-time bug detection in hackathon codebases.', color: '#D6001C' },
            { title: 'NEURAL LINK', desc: 'Direct mental synchronization with team members.', color: '#42C9FF' },
            { title: 'REFLEX ACCELERATION', desc: 'Sub-millisecond API responses and UI renders.', color: '#FFC400' },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl spider-glass border border-white/10 hover:border-[#42C9FF] transition-all duration-300 text-left group"
            >
              <div className="w-3 h-3 rounded-full bg-[#D6001C] mb-4 group-hover:bg-[#42C9FF] transition-colors" />
              <h3 className="font-marvel text-2xl text-white mb-2">{card.title}</h3>
              <p className="font-display text-xs text-white/60 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpiderSenseSection;

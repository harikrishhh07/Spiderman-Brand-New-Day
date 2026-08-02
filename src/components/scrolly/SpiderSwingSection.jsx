import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { sound } from '../../utils/sound';

const SpiderSwingSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Swing arc trajectories
  const spideyX = useTransform(scrollYProgress, [0.1, 0.5, 0.9], ['-20vw', '50vw', '110vw']);
  const spideyY = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7, 0.9], ['0vh', '40vh', '15vh', '45vh', '10vh']);
  const spideyRotate = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7, 0.9], [-35, 45, -20, 35, 0]);
  const webScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.8, 1.2, 0.9]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-24 bg-[#0B0D13] overflow-hidden flex flex-col justify-center bg-comic-grid"
    >
      {/* Background Halftone Vignette */}
      <div className="absolute inset-0 bg-halftone opacity-40 pointer-events-none" />

      {/* Animated Swinging Spider-Man Canvas Overlay */}
      <motion.div
        style={{
          x: spideyX,
          y: spideyY,
          rotate: spideyRotate,
          scale: webScale,
        }}
        className="fixed top-0 left-0 pointer-events-none z-40 w-48 h-48 flex items-center justify-center filter drop-shadow-[0_10px_25px_rgba(214,0,28,0.7)]"
      >
        {/* Dynamic Web Thread attaching to invisible ceiling anchor */}
        <svg className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-[2px] h-[500px] overflow-visible">
          <line x1="0" y1="0" x2="0" y2="500" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="6 3" className="shadow-[0_0_10px_#42C9FF]" />
        </svg>

        {/* Swinging Spider-Man Graphic */}
        <div className="relative w-full h-full flex items-center justify-center">
          <svg className="w-40 h-40 text-[#D6001C] animate-pulse" viewBox="0 0 100 100" fill="currentColor">
            {/* Torso & Suit */}
            <path d="M50 20 L75 50 L60 85 L40 85 L25 50 Z" fill="#D6001C" stroke="#0058FF" strokeWidth="3" />
            <circle cx="50" cy="30" r="18" fill="#D6001C" stroke="#FFFFFF" strokeWidth="2" />
            {/* Mask Eyes */}
            <ellipse cx="43" cy="28" rx="6" ry="10" fill="#FFFFFF" transform="rotate(-15 43 28)" />
            <ellipse cx="57" cy="28" rx="6" ry="10" fill="#FFFFFF" transform="rotate(15 57 28)" />
            {/* Web Shooter Arm Extension */}
            <path d="M70 40 L95 10" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="4 2" />
            <circle cx="95" cy="10" r="4" fill="#42C9FF" />
          </svg>

          {/* Motion Blur Trail */}
          <div className="absolute inset-0 bg-[#D6001C]/20 blur-xl rounded-full -z-10" />
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Comic Panel Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group p-8 rounded-3xl spider-glass border-[#D6001C]/40 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Top Comic Tag */}
          <div className="inline-block px-3 py-1 bg-[#D6001C] text-white font-comic text-sm tracking-wider uppercase rounded-md mb-4 rotate-[-2deg]">
            ORIGIN STORY • ISSUE #01
          </div>

          <h2 className="font-marvel text-4xl sm:text-6xl text-white mb-4">
            GREAT POWER REQUIRES <span className="text-[#42C9FF]">GREAT CODE</span>
          </h2>

          <p className="font-display text-white/70 leading-relaxed mb-6">
            Welcome to Team SRM's official recruitment portal. Like Peter Parker discovering his abilities in Queens, every developer, designer, and hacker possesses a unique superpower waiting to be unlocked.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="font-marvel text-3xl text-[#FFC400]">500+</div>
              <div className="font-display text-xs text-white/60 uppercase tracking-wider">Active Heroes</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="font-marvel text-3xl text-[#42C9FF]">12+</div>
              <div className="font-display text-xs text-white/60 uppercase tracking-wider">Flagship Hackathons</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Interactive Marvel Quote Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-8 rounded-3xl spider-glass-blue border-[#0058FF]/50 shadow-[0_10px_40px_rgba(0,88,255,0.2)]"
        >
          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#D6001C]/20 blur-xl pointer-events-none" />

          <svg className="w-12 h-12 text-[#0058FF] mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="font-marvel text-2xl sm:text-3xl text-white tracking-wide leading-snug mb-6">
            "Anyone can wear the mask. You could wear the mask. If you didn't know that then, I hope you know it now."
          </blockquote>

          <div className="flex items-center gap-4 border-t border-white/10 pt-4">
            <div className="w-10 h-10 rounded-full bg-[#D6001C] flex items-center justify-center font-bold font-marvel text-lg">
              SP
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">Peter Parker</div>
              <div className="font-display text-xs text-[#42C9FF]">Friendly Neighborhood Mentor</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpiderSwingSection;

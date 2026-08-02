import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../../utils/sound';
import hackLogo from '../../assets/images/hack-logo.png';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Teams', href: '#teams' },
  { label: 'Spider-Sense', href: '#spider-sense' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Apply', href: '#register' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, e) => {
    e.preventDefault();
    sound.playThwip();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSoundToggle = () => {
    const mutedState = sound.toggleMute();
    setIsMuted(mutedState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 pointer-events-none transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left: Official Club Logo Brand */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick('#hero', e)}
          onMouseEnter={() => sound.playClick()}
          className="group flex items-center gap-3 p-2 px-3 rounded-2xl bg-[#0B0D13]/80 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all hover:border-[#D6001C]/60"
        >
          <div className="relative w-10 h-10 rounded-xl bg-[#040404] border border-[#D6001C]/40 p-1 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(214,0,28,0.4)] group-hover:scale-105 group-hover:border-[#42C9FF] transition-all">
            <img
              src={hackLogo}
              alt="Team SRM Hackathon Club Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_#42C9FF]"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-marvel text-lg tracking-wider text-white leading-none group-hover:text-[#42C9FF] transition-colors">
              TEAM SRM HACKATHON
            </span>
            <span className="font-display text-[9px] tracking-[0.2em] text-[#D6001C] uppercase font-bold">
              SPIDER-MAN PORTAL
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links with Web Spread Hover Effect */}
        <nav className={`hidden lg:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'spider-glass border-[#D6001C]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(214,0,28,0.2)]'
            : 'bg-black/40 backdrop-blur-md border border-white/10'
        }`}>
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              onMouseEnter={() => {
                setHoveredIdx(idx);
                sound.playClick();
              }}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative px-4 py-2 font-display text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors group"
            >
              {item.label}

              {/* Spider Web Line spreads beneath cursor on hover */}
              {hoveredIdx === idx && (
                <motion.div
                  layoutId="nav-web-indicator"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D6001C] via-[#42C9FF] to-[#D6001C] shadow-[0_0_10px_#42C9FF]"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right: Sound Toggle + "APPLY NOW" Thwip Button */}
        <div className="flex items-center gap-3">
          {/* Mute/Unmute Audio Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => sound.playClick()}
            className="p-2.5 rounded-full bg-[#0B0D13]/70 backdrop-blur-xl border border-white/10 text-white/80 hover:text-[#42C9FF] hover:border-[#42C9FF]/50 transition-all"
            title={isMuted ? 'Unmute Web Audio' : 'Mute Web Audio'}
          >
            {isMuted ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[#42C9FF] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>

          {/* CTA Apply Glowing Thwip Button */}
          <a
            href="#register"
            onClick={(e) => handleNavClick('#register', e)}
            onMouseEnter={() => sound.playSpiderSense()}
            className="relative group overflow-hidden px-6 py-2.5 rounded-full font-marvel text-base tracking-wider uppercase bg-gradient-to-r from-[#D6001C] via-[#0058FF] to-[#D6001C] text-white shadow-[0_0_20px_rgba(214,0,28,0.6)] hover:shadow-[0_0_35px_rgba(66,201,255,0.8)] transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              APPLY NOW
              <svg className="w-4 h-4 text-[#FFC400] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#42C9FF] via-[#D6001C] to-[#0058FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#0B0D13] border border-white/10 text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pointer-events-auto spider-glass rounded-2xl p-6 border-[#D6001C]/40 flex flex-col gap-3"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="font-marvel text-xl tracking-wider text-white hover:text-[#42C9FF] py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
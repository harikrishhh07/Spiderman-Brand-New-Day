import React from 'react';
import { motion } from 'framer-motion';
import { sound } from '../../utils/sound';

const SpiderFinalCTA = () => {
  const handleCTAClick = (e) => {
    e.preventDefault();
    sound.playThwip();
    sound.playHeroicSting();

    const regElement = document.getElementById('register');
    if (regElement) {
      regElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] py-24 bg-[#0B0D13] overflow-hidden flex items-center justify-center bg-comic-grid">
      {/* Background Radial Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-[#040404] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D6001C]/15 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Animated Landing Spider Silhouette Graphic */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 15, stiffness: 120 }}
          className="relative mb-8 group"
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#D6001C] via-[#0058FF] to-[#42C9FF] p-1 flex items-center justify-center shadow-[0_0_50px_rgba(214,0,28,0.8)]">
            <div className="w-full h-full rounded-full bg-[#040404] flex items-center justify-center">
              <svg className="w-16 h-16 text-[#D6001C] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M12 6l-2 4h4l-2-4zm-4 5l-2 5h12l-2-5H8z" />
              </svg>
            </div>
          </div>

          {/* Web thread pointing to CTA */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-[#D6001C] to-transparent pointer-events-none" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-marvel text-6xl sm:text-8xl text-white tracking-tight leading-none mb-4"
        >
          YOUR STORY <span className="gold-title-gradient">STARTS HERE</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-xl sm:text-2xl text-white/80 max-w-xl mb-10"
        >
          Every great hero once clicked Apply.
        </motion.p>

        {/* Hero CTA Button */}
        <motion.a
          href="#register"
          onClick={handleCTAClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => sound.playSpiderSense()}
          className="px-10 py-5 rounded-full font-marvel text-2xl tracking-wider uppercase bg-gradient-to-r from-[#D6001C] via-[#0058FF] to-[#42C9FF] text-white shadow-[0_0_40px_rgba(214,0,28,0.8)] hover:shadow-[0_0_60px_rgba(66,201,255,1)] transition-all duration-300 flex items-center gap-4"
        >
          JOIN THE SPIDER-VERSE
          <svg className="w-6 h-6 text-[#FFC400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default SpiderFinalCTA;

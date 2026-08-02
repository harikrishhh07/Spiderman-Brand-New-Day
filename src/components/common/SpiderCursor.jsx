import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../../utils/sound';

const SpiderCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [splashes, setSplashes] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive elements
      const target = e.target;
      const isInteractive = target.closest('button, a, input, select, textarea, [data-interactive]');
      setIsHovered(!!isInteractive);
    };

    const handleClick = (e) => {
      sound.playThwip();

      const newSplash = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 40 + 50,
        rotation: Math.floor(Math.random() * 360),
      };

      setSplashes((prev) => [...prev.slice(-6), newSplash]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden">
      {/* Click Web Splashes */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0.7 }}
            exit={{ opacity: 0, scale: 1.2, transition: { duration: 1.5 } }}
            style={{
              left: splash.x,
              top: splash.y,
              width: splash.size,
              height: splash.size,
              transform: `translate(-50%, -50%) rotate(${splash.rotation}deg)`,
            }}
            className="absolute pointer-events-none"
          >
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-white/40 drop-shadow-[0_0_8px_#42C9FF]">
              {/* Web Splash Radial Pattern */}
              <circle cx="50" cy="50" r="4" fill="#D6001C" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x2 = 50 + Math.cos(rad) * 45;
                const y2 = 50 + Math.sin(rad) * 45;
                return <line key={i} x1="50" y1="50" x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />;
              })}
              <polygon points="50,20 65,30 75,50 65,70 50,80 35,70 25,50 35,30" stroke="currentColor" strokeWidth="1" fill="none" />
              <polygon points="50,30 58,38 65,50 58,62 50,70 42,62 35,50 42,38" stroke="#42C9FF" strokeWidth="1" fill="none" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Spider Cursor */}
      <motion.div
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: isHovered ? 1.4 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.2 }}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center"
      >
        <div className={`relative flex items-center justify-center transition-all ${isHovered ? 'text-[#42C9FF]' : 'text-[#D6001C]'}`}>
          {/* Glowing Aura Ring */}
          {isHovered && (
            <motion.div
              layoutId="cursor-ring"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.6, opacity: [0.3, 0.8, 0.3] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute w-8 h-8 rounded-full border border-[#42C9FF] shadow-[0_0_15px_#42C9FF]"
            />
          )}

          {/* Spider Emblem Cursor */}
          <svg className="w-6 h-6 filter drop-shadow-[0_0_8px_rgba(214,0,28,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
            {/* Spider Legs */}
            <path d="M12 9L7 5M12 9L17 5M12 12L6 12M12 12L18 12M12 15L7 19M12 15L17 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default SpiderCursor;

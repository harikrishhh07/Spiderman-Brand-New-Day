import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../../utils/sound';

const SpiderIntro = ({ onComplete }) => {
  const [stage, setStage] = useState('crawling'); // 'crawling' -> 'webbing' -> 'cracking' -> 'complete'
  const [muted, setMuted] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Crawl animation timer
    const t1 = setTimeout(() => {
      setStage('webbing');
      sound.playThwip();
    }, 1800);

    // 2. Crack timer
    const t2 = setTimeout(() => {
      setStage('cracking');
      sound.playSpiderSense();
    }, 2800);

    // 3. Complete timer
    const t3 = setTimeout(() => {
      setStage('complete');
      if (onComplete) onComplete();
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  // Web crack Canvas animation
  useEffect(() => {
    if (stage !== 'cracking' && stage !== 'webbing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw Web Crack geometry
    let progress = 0;
    const drawCracks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#D6001C';

      progress = Math.min(progress + 0.05, 1);

      const numStrands = 12;
      for (let i = 0; i < numStrands; i++) {
        const angle = (i / numStrands) * Math.PI * 2;
        const maxLen = Math.max(canvas.width, canvas.height) * 0.8;
        const currentLen = maxLen * progress;

        ctx.strokeStyle = i % 2 === 0 ? '#D6001C' : '#42C9FF';
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);

        // Jagged web crack lines
        let currX = centerX;
        let currY = centerY;
        const steps = 8;
        for (let s = 1; s <= steps; s++) {
          const stepDist = (currentLen / steps) * s;
          const jitter = (Math.random() - 0.5) * 30 * (1 - s / steps);
          const targetX = centerX + Math.cos(angle) * stepDist + jitter;
          const targetY = centerY + Math.sin(angle) * stepDist + jitter;
          ctx.lineTo(targetX, targetY);
          currX = targetX;
          currY = targetY;
        }
        ctx.stroke();
      }

      // Web rings connecting cracks
      const numRings = 5;
      for (let r = 1; r <= numRings; r++) {
        const ringRadius = r * 80 * progress;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        for (let i = 0; i <= numStrands; i++) {
          const angle = (i / numStrands) * Math.PI * 2;
          const rx = centerX + Math.cos(angle) * ringRadius;
          const ry = centerY + Math.sin(angle) * ringRadius;
          if (i === 0) ctx.moveTo(rx, ry);
          else ctx.lineTo(rx, ry);
        }
        ctx.closePath();
        ctx.stroke();
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(drawCracks);
      }
    };

    drawCracks();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stage]);

  const handleSkip = () => {
    sound.playThwip();
    setStage('complete');
    if (onComplete) onComplete();
  };

  const handleSoundToggle = () => {
    const isMutedNow = sound.toggleMute();
    setMuted(isMutedNow);
  };

  if (stage === 'complete') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="spider-intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: 'easeOut' } }}
        className="fixed inset-0 z-[9999] bg-[#040404] flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none"
        onClick={handleSkip}
      >
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

        {/* Crawling glowing Spider Icon */}
        <motion.div
          initial={{ y: -200, scale: 0.5, opacity: 0 }}
          animate={
            stage === 'crawling'
              ? { y: 0, scale: 1.2, opacity: 1, rotate: [0, -5, 5, 0] }
              : { scale: 1.5, opacity: 1 }
          }
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-20 flex flex-col items-center"
        >
          {/* Animated SVG Spider Emblem */}
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(214,0,28,0.5)',
                  '0 0 50px rgba(66,201,255,0.8)',
                  '0 0 20px rgba(214,0,28,0.5)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="p-5 rounded-full bg-[#0B0D13]/80 border border-[#D6001C]/50 backdrop-blur-md"
            >
              <svg className="w-20 h-20 text-[#D6001C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M12 4L9 9h6l-3-5zm-5 6L4 16h3.5l1.5-3H8v-3zm10 0v3h-1l1.5 3H20l-3-6z" />
                <circle cx="12" cy="12" r="3" fill="#42C9FF" />
              </svg>
            </motion.div>

            {/* Glowing web threads behind spider */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '300px' }}
              transition={{ duration: 1.5 }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#D6001C] via-[#42C9FF] to-transparent pointer-events-none"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <h1 className="font-marvel text-4xl md:text-6xl tracking-wider text-white">
              MARVEL <span className="text-[#D6001C]">STUDIOS</span>
            </h1>
            <p className="font-display text-xs tracking-[0.3em] text-[#42C9FF] uppercase mt-1">
              BRAND NEW DAY • RECRUITMENT PORTAL
            </p>
          </motion.div>
        </motion.div>

        {/* Skip & Sound Controls */}
        <div className="absolute bottom-8 z-30 flex items-center gap-4 text-xs font-display text-white/60">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSoundToggle();
            }}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-[#42C9FF] transition-all flex items-center gap-2"
          >
            <span>{muted ? '🔇 Muted' : '🔊 Sound FX On'}</span>
          </button>
          <span className="text-white/30">•</span>
          <p className="animate-pulse">Click anywhere to enter</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SpiderIntro;

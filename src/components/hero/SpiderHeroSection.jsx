import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { sound } from '../../utils/sound';
import hackLogo from '../../assets/images/hack-logo.png';

const SpiderHeroSection = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.9]);
  const yShift = useTransform(scrollY, [0, 600], [0, 150]);

  // Live Canvas NYC Skyline with Rain, Moonlight, Clouds, and Spider-Man upside down
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Rain Particle System
    const numRain = 120;
    const rainDrops = Array.from({ length: numRain }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: Math.random() * 25 + 15,
      speed: Math.random() * 12 + 8,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    // City Skyline Building Heights
    const buildingWidths = [120, 90, 150, 110, 180, 130, 200, 100, 140, 160];
    const buildingHeights = buildingWidths.map((w) => Math.random() * 300 + 250);

    // Spider-Man Upside Down Animation Variables
    let time = 0;
    let eyeBlinkTimer = 0;
    let isBlinking = false;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Midnight Dark Background Sky Gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#040404');
      skyGrad.addColorStop(0.5, '#0B0D13');
      skyGrad.addColorStop(1, '#020409');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Moonlight Ray & Ambient Glow
      const moonX = width * 0.75;
      const moonY = height * 0.2;
      const moonGlow = ctx.createRadialGradient(moonX, moonY, 10, moonX, moonY, 350);
      moonGlow.addColorStop(0, 'rgba(66, 201, 255, 0.25)');
      moonGlow.addColorStop(0.5, 'rgba(0, 88, 255, 0.08)');
      moonGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(moonX, moonY, 350, 0, Math.PI * 2);
      ctx.fill();

      // Moon Circle
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.shadowBlur = 40;
      ctx.shadowColor = '#42C9FF';
      ctx.beginPath();
      ctx.arc(moonX, moonY, 45, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // 3. Render NYC Parallax Skyscrapers (Depth Layers)
      let currX = 0;
      buildingWidths.forEach((bw, i) => {
        const bh = buildingHeights[i];
        const by = height - bh;

        // Building silhouette gradient
        const bGrad = ctx.createLinearGradient(0, by, 0, height);
        bGrad.addColorStop(0, '#111522');
        bGrad.addColorStop(1, '#05060A');

        ctx.fillStyle = bGrad;
        ctx.fillRect(currX, by, bw - 5, bh);

        // Building Windows Grid
        ctx.fillStyle = 'rgba(255, 196, 0, 0.15)';
        for (let wx = currX + 15; wx < currX + bw - 20; wx += 20) {
          for (let wy = by + 20; wy < height - 50; wy += 35) {
            if ((Math.sin(wx * wy + Math.floor(time * 0.5)) > 0.2)) {
              ctx.fillRect(wx, wy, 8, 14);
            }
          }
        }

        // Red Hazard Beacon Lights on tall buildings
        if (i % 2 === 0) {
          ctx.fillStyle = Math.sin(time * 3) > 0 ? '#D6001C' : '#550000';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#D6001C';
          ctx.beginPath();
          ctx.arc(currX + bw / 2, by - 4, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        currX += bw;
      });

      // 4. Rain Particles Animation
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      rainDrops.forEach((drop) => {
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - 3, drop.y + drop.len);

        drop.y += drop.speed;
        drop.x -= 1;

        if (drop.y > height) {
          drop.y = -20;
          drop.x = Math.random() * width;
        }
      });
      ctx.stroke();

      // 5. Draw Hanging Upside-Down Canvas Spider-Man
      const spideyX = width * 0.84;
      const swingY = Math.sin(time * 1.5) * 12;
      const webAnchorY = 0;
      const spideyCenterY = height * 0.38 + swingY;

      // Web Line hanging from ceiling
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#42C9FF';
      ctx.beginPath();
      ctx.moveTo(spideyX, webAnchorY);
      ctx.lineTo(spideyX, spideyCenterY - 40);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Eye Blink Logic
      eyeBlinkTimer += 0.02;
      if (eyeBlinkTimer > 3.5) {
        isBlinking = true;
        if (eyeBlinkTimer > 3.7) {
          isBlinking = false;
          eyeBlinkTimer = 0;
        }
      }

      // Draw Spider-Man Body Silhouette Upside Down
      ctx.save();
      ctx.translate(spideyX, spideyCenterY);
      ctx.rotate(Math.sin(time * 1.5) * 0.05); // Sway in wind

      // Head (Upside down)
      const headRadius = 24;
      ctx.fillStyle = '#D6001C';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#D6001C';
      ctx.beginPath();
      ctx.arc(0, 10, headRadius, 0, Math.PI * 2);
      ctx.fill();

      // Body & Torso
      ctx.fillStyle = '#0058FF';
      ctx.beginPath();
      ctx.roundRect(-20, -35, 40, 45, 10);
      ctx.fill();

      // Red Chest Emblem
      ctx.fillStyle = '#D6001C';
      ctx.beginPath();
      ctx.arc(0, -15, 12, 0, Math.PI * 2);
      ctx.fill();

      // Glowing Eyes
      ctx.fillStyle = isBlinking ? '#000' : '#FFFFFF';
      ctx.shadowBlur = isBlinking ? 0 : 15;
      ctx.shadowColor = '#42C9FF';
      ctx.beginPath();
      // Left Eye
      ctx.ellipse(-8, 12, isBlinking ? 8 : 8, isBlinking ? 1 : 12, 0.3, 0, Math.PI * 2);
      // Right Eye
      ctx.ellipse(8, 12, isBlinking ? 8 : 8, isBlinking ? 1 : 12, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleHeroButtonClick = (e) => {
    e.preventDefault();
    sound.playThwip();
    const regSection = document.getElementById('register');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#040404]"
    >
      {/* Live NYC Skyline Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Radial Hero Lighting Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-[#040404]/70 z-10 pointer-events-none" />

      {/* Main Hero Content */}
      <motion.div
        style={{ opacity, scale, y: yShift }}
        className="relative z-20 max-w-7xl mx-auto px-4 text-center flex flex-col items-center justify-center pt-16"
      >
        {/* TEAM SRM HACKATHON LOGO EMBLEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-4 group"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#0B0D13]/90 border-2 border-[#D6001C]/60 p-3 backdrop-blur-2xl shadow-[0_0_40px_rgba(214,0,28,0.6)] flex items-center justify-center group-hover:scale-105 group-hover:border-[#42C9FF] transition-all duration-300">
            <img
              src={hackLogo}
              alt="Team SRM Hackathon Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_#42C9FF]"
            />
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D6001C] via-[#42C9FF] to-[#0058FF] opacity-30 blur-md -z-10 group-hover:opacity-70 transition-opacity" />
          </div>
        </motion.div>

        {/* MASSIVE BOLD "TEAM SRM HACKATHON" MARVEL TITLE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center font-marvel tracking-tight leading-none text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
        >
          <span className="text-5xl sm:text-7xl md:text-[7.5rem] lg:text-[8.5rem] text-white tracking-widest font-black">
            TEAM SRM
          </span>
          <span className="text-6xl sm:text-8xl md:text-[8.5rem] lg:text-[10rem] marvel-title-gradient tracking-tight font-black -mt-2 sm:-mt-6">
            HACKATHON
          </span>
        </motion.h1>

        {/* Subtitle / Theme Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="px-5 py-1.5 rounded-full bg-[#D6001C]/20 border border-[#D6001C]/60 text-[#D6001C] font-marvel text-base tracking-widest uppercase">
            SPIDER-MAN: BRAND NEW DAY
          </span>
          <span className="text-white/40">•</span>
          <span className="font-display text-sm sm:text-base text-white/80 font-medium tracking-wide">
            RECRUITMENT PORTAL 2026
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-3 font-display text-base sm:text-xl text-white/70 max-w-xl font-light tracking-wide drop-shadow-md"
        >
          Become part of something bigger.{' '}
          <span className="text-[#42C9FF] font-semibold">Every hero starts with one decision.</span>
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="#register"
            onClick={handleHeroButtonClick}
            onMouseEnter={() => sound.playSpiderSense()}
            className="group relative px-9 py-4 rounded-full font-marvel text-2xl tracking-wider uppercase bg-gradient-to-r from-[#D6001C] via-[#0058FF] to-[#D6001C] text-white shadow-[0_0_35px_rgba(214,0,28,0.75)] hover:shadow-[0_0_60px_rgba(66,201,255,0.9)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-3">
              JOIN THE SPIDER TEAM
              <svg className="w-5 h-5 text-[#FFC400] group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>

          <a
            href="#journey"
            onMouseEnter={() => sound.playClick()}
            className="px-8 py-4 rounded-full font-marvel text-xl tracking-wider uppercase spider-glass hover:border-[#42C9FF]/60 text-white/90 hover:text-white transition-all duration-300"
          >
            EXPLORE THE MISSION
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="font-display text-[10px] uppercase tracking-[0.3em]">Scroll To Swing</span>
          <div className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-[#D6001C] animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpiderHeroSection;

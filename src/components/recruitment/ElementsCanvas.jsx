import React, { useEffect, useRef } from "react";

// Four-element color set — cyan and blue theme
const ELEMENTS = [
  { name: "fire", color: "#06b6d4" },
  { name: "water", color: "#3b82f6" },
  { name: "earth", color: "#0284c7" },
  { name: "air", color: "#38bdf8" },
];

export default function ElementsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    // Gentle mouse drift — the Avatar State glow follows the cursor at a distance
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Elemental motes — small drifting orbs in cyan and electric blue
    const motes = Array.from({ length: 56 }, (_, i) => {
      const el = ELEMENTS[i % ELEMENTS.length];
      const isAir = el.name === "air";
      const isFire = el.name === "fire";
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isAir ? 0.6 : 0.9),
        vy: isFire ? -(Math.random() * 0.5 + 0.15) : (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 1.8 + (isAir ? 1.2 : 1),
        color: el.color,
        alpha: Math.random() * 0.5 + 0.25,
        wobble: Math.random() * Math.PI * 2,
      };
    });

    // Three soft anchor auras — slow-breathing cyan and cobalt rings
    const auras = [
      { x: width * 0.15, y: height * 0.2, radius: 160, color: "#06b6d4" },
      { x: width * 0.85, y: height * 0.3, radius: 190, color: "#3b82f6" },
      { x: width * 0.5, y: height * 0.78, radius: 200, color: "#38bdf8" },
    ];

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      pulse += 0.015;

      // Breathing auras
      auras.forEach((aura, idx) => {
        const breathe = 0.85 + Math.sin(pulse + idx) * 0.15;
        const grad = ctx.createRadialGradient(
          aura.x, aura.y, 0,
          aura.x, aura.y, aura.radius * breathe
        );
        grad.addColorStop(0, `${aura.color}22`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(aura.x, aura.y, aura.radius * breathe, 0, Math.PI * 2);
        ctx.fill();
      });

      // Faint connecting arcs toward the cursor
      const cursorDist = Math.hypot(mouse.x - width / 2, mouse.y - height / 2);
      if (cursorDist < 650) {
        auras.forEach((aura) => {
          const d = Math.hypot(aura.x - mouse.x, aura.y - mouse.y);
          const glowAlpha = Math.max(0, 1 - d / 700) * 0.3;
          ctx.beginPath();
          ctx.moveTo(aura.x, aura.y);
          const midX = (aura.x + mouse.x) / 2 + Math.sin(pulse * 2) * 20;
          const midY = (aura.y + mouse.y) / 2 + Math.cos(pulse * 2) * 20;
          ctx.quadraticCurveTo(midX, midY, mouse.x, mouse.y);
          ctx.strokeStyle = `${aura.color}${Math.floor(glowAlpha * 255).toString(16).padStart(2, "0")}`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      }

      // Drift the motes
      motes.forEach((m) => {
        m.wobble += 0.02;
        m.x += m.vx + Math.sin(m.wobble) * 0.15;
        m.y += m.vy;

        if (m.x < -10) m.x = width + 10;
        if (m.x > width + 10) m.x = -10;
        if (m.y < -10) m.y = height + 10;
        if (m.y > height + 10) m.y = -10;

        ctx.beginPath();
        ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
        ctx.fillStyle = m.color;
        ctx.globalAlpha = m.alpha * (0.6 + 0.4 * Math.sin(pulse * 3 + m.x));
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}

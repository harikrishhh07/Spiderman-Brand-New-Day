import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../../utils/sound';

const timelineNodes = [
  { id: 1, title: 'Registrations Open', date: 'AUG 05, 2026', status: 'ACTIVE', desc: 'Spider-Verse portal opens worldwide for applicant registrations.', x: 15, y: 30 },
  { id: 2, title: 'Superpower Audit', date: 'AUG 15, 2026', status: 'UPCOMING', desc: 'Shortlisting based on GitHub, portfolio, and spider-sense submissions.', x: 38, y: 70 },
  { id: 3, title: 'Technical Hack Arena', date: 'AUG 22, 2026', status: 'UPCOMING', desc: '24-hour Oscorp web hackathon to test problem-solving agility.', x: 62, y: 25 },
  { id: 4, title: '1-on-1 Interviews', date: 'AUG 28, 2026', status: 'UPCOMING', desc: 'Direct interview with Team SRM leads and Marvel mentors.', x: 85, y: 65 },
  { id: 5, title: 'Final Team Reveal', date: 'SEP 01, 2026', status: 'UPCOMING', desc: 'Suiting up! Official team induction ceremony & Spider-Verse welcome.', x: 50, y: 50 },
];

const SpiderWebTimeline = () => {
  const [selectedNode, setSelectedNode] = useState(timelineNodes[0]);

  const handleNodeClick = (node) => {
    sound.playThwip();
    setSelectedNode(node);
  };

  return (
    <section id="timeline" className="relative min-h-screen py-24 bg-[#0B0D13] overflow-hidden bg-comic-grid">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-md bg-[#0058FF] text-white font-comic text-base tracking-widest uppercase mb-4"
          >
            TEMPORAL WEB • MILESTONES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-marvel text-5xl sm:text-7xl text-white tracking-tight"
          >
            SPIDER WEB <span className="text-[#D6001C]">TIMELINE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-white/70 text-lg mt-4"
          >
            Click any spider web node to inspect key recruitment dates.
          </motion.p>
        </div>

        {/* Interactive SVG Spider Web Container */}
        <div className="relative w-full h-[550px] rounded-3xl spider-glass border border-white/10 p-6 overflow-hidden flex items-center justify-center">
          
          {/* SVG Web Lines Connecting Nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Concentric Web Rings */}
            <circle cx="50%" cy="50%" r="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />
            <circle cx="50%" cy="50%" r="220" stroke="rgba(214,0,28,0.15)" strokeWidth="1.5" fill="none" />
            <circle cx="50%" cy="50%" r="320" stroke="rgba(66,201,255,0.15)" strokeWidth="1.5" fill="none" />

            {/* Connecting lines between nodes */}
            {timelineNodes.map((node, i) => {
              const nextNode = timelineNodes[(i + 1) % timelineNodes.length];
              return (
                <line
                  key={i}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${nextNode.x}%`}
                  y2={`${nextNode.y}%`}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="6 3"
                />
              );
            })}
          </svg>

          {/* Interactive Web Nodes */}
          {timelineNodes.map((node) => {
            const isSelected = selectedNode?.id === node.id;
            return (
              <motion.button
                key={node.id}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                whileHover={{ scale: 1.3 }}
                onClick={() => handleNodeClick(node)}
                onMouseEnter={() => sound.playClick()}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group flex flex-col items-center`}
              >
                {/* Node Outer Ring */}
                <div className={`relative p-3 rounded-full transition-all duration-300 ${
                  isSelected 
                    ? 'bg-[#D6001C] shadow-[0_0_25px_#D6001C] scale-125' 
                    : 'bg-[#0B0D13] border-2 border-[#42C9FF] group-hover:border-[#D6001C]'
                }`}>
                  <svg className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-[#42C9FF]'}`} viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="5" />
                  </svg>
                </div>

                {/* Node Label Tooltip */}
                <span className={`mt-2 font-marvel text-xs tracking-wider uppercase px-2.5 py-1 rounded-md transition-colors ${
                  isSelected ? 'bg-[#D6001C] text-white' : 'bg-black/60 text-white/80'
                }`}>
                  {node.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Milestone Detail Display */}
        <AnimatePresence mode="wait">
          {selectedNode && (
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 p-8 rounded-3xl spider-glass border border-[#42C9FF]/40 max-w-2xl mx-auto text-center shadow-[0_10px_30px_rgba(66,201,255,0.2)]"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-[#D6001C]/20 border border-[#D6001C] text-[#D6001C] font-marvel text-xs tracking-widest mb-3">
                {selectedNode.status} • {selectedNode.date}
              </div>
              <h3 className="font-marvel text-4xl text-white mb-2">{selectedNode.title}</h3>
              <p className="font-display text-white/70">{selectedNode.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SpiderWebTimeline;

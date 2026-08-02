import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../../utils/sound';

const teamsData = [
  {
    id: 'technical',
    name: 'TECHNICAL',
    comicSound: 'THWIP!',
    location: 'Oscorp Web & Neural Research Lab',
    desc: 'Full-stack development, AI model integration, WebGL graphics, and system architecture for hackathons.',
    skills: ['React 19', 'Next.js 15', 'TypeScript', 'Python', 'Three.js'],
    badgeColor: '#D6001C',
    accentGrad: 'from-[#D6001C]/20 to-[#0058FF]/10',
    icon: '⚡',
  },
  {
    id: 'non-tech',
    name: 'NON TECH',
    comicSound: 'BAM!',
    location: 'S.H.I.E.L.D. Strategic Ops HQ',
    desc: 'Overall management, operational strategy, team coordination, and hackathon execution leadership.',
    skills: ['Leadership', 'Project Management', 'Ops Strategy', 'Team Lead'],
    badgeColor: '#0058FF',
    accentGrad: 'from-[#0058FF]/20 to-[#42C9FF]/10',
    icon: '🛡️',
  },
  {
    id: 'content',
    name: 'CONTENT',
    comicSound: 'WRITE!',
    location: 'Daily Bugle Editorial Desk',
    desc: 'Crafting compelling narratives, technical blogs, promotional scripts, and Spider-Verse storytelling.',
    skills: ['Copywriting', 'Creative Writing', 'Scriptwriting', 'Technical Blogs'],
    badgeColor: '#FFC400',
    accentGrad: 'from-[#FFC400]/20 to-[#D6001C]/10',
    icon: '✍️',
  },
  {
    id: 'creatives',
    name: 'CREATIVES',
    comicSound: 'BOOM!',
    location: 'Miles Morales Brooklyn Studio',
    desc: 'UI/UX glassmorphism design, 3D visual assets, motion graphics, and Marvel Studios aesthetics.',
    skills: ['Figma', 'Blender', 'Photoshop', 'After Effects', 'UI/UX'],
    badgeColor: '#42C9FF',
    accentGrad: 'from-[#42C9FF]/20 to-[#0058FF]/10',
    icon: '🎨',
  },
  {
    id: 'logistics',
    name: 'LOGISTICS',
    comicSound: 'ZIP!',
    location: 'Spider-Verse Supply Depot',
    desc: 'Venue setup, hardware management, hackathon food stalls, participant check-in, and infrastructure.',
    skills: ['Event Logistics', 'Supply Chain', 'Venue Ops', 'Resource Planning'],
    badgeColor: '#FFFFFF',
    accentGrad: 'from-white/20 to-gray-800/10',
    icon: '📦',
  },
  {
    id: 'sponsorships',
    name: 'SPONSORSHIPS',
    comicSound: 'CASH!',
    location: 'Stark Industries Corporate Hub',
    desc: 'Pitching to tech giants, securing financial sponsorships, prize pool partners, and corporate deals.',
    skills: ['Corporate Pitching', 'B2B Sales', 'Negotiation', 'Partnerships'],
    badgeColor: '#FFC400',
    accentGrad: 'from-[#FFC400]/20 to-[#D6001C]/10',
    icon: '💎',
  },
  {
    id: 'social-media',
    name: 'SOCIAL MEDIA',
    comicSound: 'POST!',
    location: 'Spider-Verse Digital Broadcasting',
    desc: 'Managing Instagram reels, X campaigns, LinkedIn growth, and viral Spider-Man promotional content.',
    skills: ['Social Strategy', 'Reels Editing', 'Community Growth', 'Analytics'],
    badgeColor: '#42C9FF',
    accentGrad: 'from-[#42C9FF]/20 to-[#0058FF]/10',
    icon: '📱',
  },
  {
    id: 'publicity',
    name: 'PUBLICITY',
    comicSound: 'NEWS!',
    location: 'Daily Bugle Global Press',
    desc: 'Campus outreach, PR releases, media partnerships, and spreading Spider-Verse recruitments worldwide.',
    skills: ['Public Relations', 'Campus Outreach', 'Marketing', 'Media Relations'],
    badgeColor: '#D6001C',
    accentGrad: 'from-[#D6001C]/20 to-[#0058FF]/10',
    icon: '📢',
  },
];

const SpiderTeamsComic = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleCardClick = (team) => {
    sound.playThwip();
    setSelectedTeam(team);
  };

  return (
    <section id="teams" className="relative min-h-screen py-24 bg-[#0B0D13] overflow-hidden bg-comic-grid">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-md bg-[#D6001C] text-white font-comic text-base tracking-widest uppercase mb-4 rotate-[-1deg]"
          >
            ISSUE #02 • RECRUITMENT DOMAINS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-marvel text-5xl sm:text-7xl text-white tracking-tight"
          >
            SPIDER <span className="text-[#42C9FF]">DOMAINS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-white/70 text-lg mt-4"
          >
            Choose your superpower from 8 core teams. Click any panel for dossier details.
          </motion.p>
        </div>

        {/* Comic Panel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamsData.map((team, idx) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.04, rotate: idx % 2 === 0 ? 1 : -1 }}
              onClick={() => handleCardClick(team)}
              onMouseEnter={() => sound.playClick()}
              className="relative cursor-pointer group p-6 rounded-3xl spider-glass border border-white/10 hover:border-[#D6001C] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between"
            >
              {/* Halftone Overlay */}
              <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

              {/* Comic Action Sound FX Tag */}
              <div
                className="absolute top-4 right-4 px-2.5 py-0.5 font-comic text-base text-black bg-[#FFC400] rounded-md shadow-md transform rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-transform"
              >
                {team.comicSound}
              </div>

              <div>
                {/* Icon & Location */}
                <div className="text-4xl mb-3">{team.icon}</div>
                <div className="font-display text-[10px] text-white/50 uppercase tracking-widest mb-1">
                  {team.location}
                </div>

                {/* Team Name */}
                <h3 className="font-marvel text-2xl text-white mb-2 group-hover:text-[#42C9FF] transition-colors">
                  {team.name}
                </h3>

                {/* Short Description */}
                <p className="font-display text-xs text-white/70 leading-relaxed mb-4">
                  {team.desc}
                </p>
              </div>

              <div>
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {team.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-[10px] font-display bg-white/10 text-white/90 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Click CTA Indicator */}
                <div className="flex items-center justify-between text-xs font-marvel text-[#42C9FF] border-t border-white/10 pt-3">
                  <span>INSPECT DOSSIER →</span>
                  <span className="w-2 h-2 rounded-full bg-[#D6001C] group-hover:animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comic Detail Modal */}
      <AnimatePresence>
        {selectedTeam && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedTeam(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full p-8 rounded-3xl spider-glass border border-[#D6001C]/60 shadow-[0_0_50px_rgba(214,0,28,0.5)] overflow-hidden"
            >
              <button
                onClick={() => setSelectedTeam(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{selectedTeam.icon}</span>
                <div>
                  <span className="font-comic text-sm text-[#FFC400] uppercase tracking-wider">CLASSIFIED DOSSIER</span>
                  <h3 className="font-marvel text-4xl text-white">{selectedTeam.name} DOMAIN</h3>
                </div>
              </div>

              <p className="font-display text-white/80 leading-relaxed mb-6 text-sm">
                {selectedTeam.desc}
              </p>

              <h4 className="font-marvel text-xl text-[#42C9FF] mb-3">REQUIRED SUPERPOWERS & STACK:</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedTeam.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-[#D6001C]/20 border border-[#D6001C]/40 text-white font-display text-xs">
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="#register"
                onClick={() => {
                  setSelectedTeam(null);
                  sound.playThwip();
                }}
                className="block text-center w-full py-4 rounded-full font-marvel text-xl bg-gradient-to-r from-[#D6001C] to-[#0058FF] text-white shadow-lg hover:shadow-[0_0_30px_#42C9FF] transition-all"
              >
                APPLY FOR {selectedTeam.name} NOW
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpiderTeamsComic;

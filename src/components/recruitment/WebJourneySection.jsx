import React from 'react';
import { motion } from 'framer-motion';
import { sound } from '../../utils/sound';

const journeyStages = [
  {
    step: '01',
    title: 'Registration',
    desc: 'Fill Peter Parker’s web cocoon form with your details, tech stack, and GitHub profile.',
    icon: '📝',
    color: '#D6001C',
  },
  {
    step: '02',
    title: 'Shortlisting',
    desc: 'Our Spider-Sense scans your superpowers, portfolio, and creative problem-solving skills.',
    icon: '🔍',
    color: '#0058FF',
  },
  {
    step: '03',
    title: 'Technical Round',
    desc: 'Solve real-world web challenges inside Oscorp-level coding arenas and hackathons.',
    icon: '⚡',
    color: '#42C9FF',
  },
  {
    step: '04',
    title: 'Interview',
    desc: '1-on-1 Spider-Verse conversation with club leads & Marvel tech mentors.',
    icon: '🎙️',
    color: '#FFC400',
  },
  {
    step: '05',
    title: 'Selection',
    desc: 'Receive your official Spider suit offer letter and domain assignment.',
    icon: '🏆',
    color: '#D6001C',
  },
  {
    step: '06',
    title: 'Welcome to the Team',
    desc: 'Onboard into Team SRM, build flagship hackathons, and swing into action!',
    icon: '🕸️',
    color: '#42C9FF',
  },
];

const WebJourneySection = () => {
  return (
    <section id="journey" className="relative min-h-screen py-24 bg-[#040404] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#D6001C]/10 via-[#0058FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#42C9FF]/30 bg-[#0B0D13] mb-4"
          >
            <span className="text-[#42C9FF] text-xs font-marvel tracking-widest uppercase">THE ROAD TO THE SUIT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-marvel text-5xl sm:text-7xl text-white tracking-tight"
          >
            RECRUITMENT <span className="text-[#D6001C]">JOURNEY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-white/70 text-lg mt-4"
          >
            Six stages connected by elastic spider webs. Hover each node to trigger Spider-Sense.
          </motion.p>
        </div>

        {/* Journey Process Cards suspended by Web Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {journeyStages.map((stage, idx) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, rotate: idx % 2 === 0 ? 1.5 : -1.5 }}
              onMouseEnter={() => sound.playSpiderSense()}
              className="relative group p-8 rounded-3xl spider-glass border border-white/10 hover:border-[#D6001C]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Web line string connecting card to ceiling */}
              <svg className="absolute -top-12 left-1/2 -translate-x-1/2 w-full h-12 overflow-visible pointer-events-none">
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke={stage.color}
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  className="group-hover:stroke-[#42C9FF] transition-colors"
                />
                <circle cx="50%" cy="0" r="4" fill={stage.color} />
              </svg>

              {/* Step Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-marvel text-4xl text-white/30 group-hover:text-[#42C9FF] transition-colors">
                  {stage.step}
                </span>
                <span className="text-3xl p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {stage.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-marvel text-3xl text-white mb-3 group-hover:text-[#FFC400] transition-colors">
                {stage.title}
              </h3>

              {/* Description */}
              <p className="font-display text-sm text-white/65 leading-relaxed">
                {stage.desc}
              </p>

              {/* Bottom Web Strand Glow */}
              <div className="mt-6 h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#D6001C] transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebJourneySection;

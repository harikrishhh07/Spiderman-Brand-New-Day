import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

const domainOptions = [
  'Technical',
  'Non Tech',
  'Content',
  'Creatives',
  'Logistics',
  'Sponsorships',
  'Social Media',
  'Publicity',
];

const WebCocoonRegistration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'Technical',
    superpower: '',
    github: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFocus = () => {
    sound.playClick();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playThwip();
    sound.playHeroicSting();

    // Trigger Spider-Verse Confetti Burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#D6001C', '#0058FF', '#42C9FF', '#FFC400', '#FFFFFF'],
    });

    setSubmitted(true);
  };

  return (
    <section id="register" className="relative min-h-screen py-24 bg-[#040404] overflow-hidden flex items-center justify-center">
      {/* Cocoon Background Web Threads */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6001C]/50 bg-[#0B0D13] mb-4"
          >
            <span className="text-[#D6001C] font-marvel text-sm tracking-widest uppercase">THE WEB COCOON PORTAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-marvel text-5xl sm:text-7xl text-white tracking-tight"
          >
            SUIT UP & <span className="marvel-title-gradient">APPLY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-white/70 text-base mt-2"
          >
            Every hero starts with one decision. Select your domain and join the Spider-Verse.
          </motion.p>
        </div>

        {/* Web Cocoon Form Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 sm:p-12 rounded-3xl spider-glass border border-[#D6001C]/40 shadow-[0_15px_60px_rgba(214,0,28,0.2)] overflow-hidden"
        >
          {/* Animated Cocoon Web Corner Effects */}
          <svg className="absolute -top-12 -left-12 w-40 h-40 text-[#D6001C]/30 pointer-events-none">
            <path d="M0 0 L160 0 L0 160 Z" fill="currentColor" />
          </svg>
          <svg className="absolute -bottom-12 -right-12 w-40 h-40 text-[#0058FF]/30 pointer-events-none">
            <path d="M160 160 L0 160 L160 0 Z" fill="currentColor" />
          </svg>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-marvel text-lg text-white/90 mb-2">FULL NAME (HERO ALIAS)</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      placeholder="e.g. Peter Parker"
                      className="w-full px-5 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#42C9FF] focus:ring-2 focus:ring-[#42C9FF]/30 transition-all font-display text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-marvel text-lg text-white/90 mb-2">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      placeholder="peter.parker@dailybugle.com"
                      className="w-full px-5 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#42C9FF] focus:ring-2 focus:ring-[#42C9FF]/30 transition-all font-display text-sm"
                    />
                  </div>
                </div>

                {/* Preferred Spider Domain & GitHub */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-marvel text-lg text-white/90 mb-2">TARGET DOMAIN</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      className="w-full px-5 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#42C9FF] focus:ring-2 focus:ring-[#42C9FF]/30 transition-all font-display text-sm"
                    >
                      {domainOptions.map((domain) => (
                        <option key={domain} value={domain} className="bg-[#0B0D13] text-white">
                          {domain}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-marvel text-lg text-white/90 mb-2">PORTFOLIO / GITHUB LINK</label>
                    <input
                      type="url"
                      name="github"
                      required
                      value={formData.github}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      placeholder="https://github.com/peterparker"
                      className="w-full px-5 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#42C9FF] focus:ring-2 focus:ring-[#42C9FF]/30 transition-all font-display text-sm"
                    />
                  </div>
                </div>

                {/* Superpower Description */}
                <div>
                  <label className="block font-marvel text-lg text-white/90 mb-2">WHAT IS YOUR MAIN SUPERPOWER?</label>
                  <textarea
                    name="superpower"
                    required
                    rows="3"
                    value={formData.superpower}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    placeholder="Tell us about your technical skills, design portfolio, writing, or management experience..."
                    className="w-full px-5 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#42C9FF] focus:ring-2 focus:ring-[#42C9FF]/30 transition-all font-display text-sm resize-none"
                  />
                </div>

                {/* Custom Spider Icon Checkbox */}
                <div className="flex items-center gap-3 pt-2">
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreed"
                      required
                      checked={formData.agreed}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 rounded-lg border transition-all flex items-center justify-center ${
                      formData.agreed ? 'bg-[#D6001C] border-[#D6001C]' : 'border-white/30 bg-black/40'
                    }`}>
                      {formData.agreed && (
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                      )}
                    </div>
                  </label>
                  <span className="font-display text-xs text-white/70">
                    I pledge to uphold the Spider-Verse oath: <span className="text-[#FFC400]">With great power comes great responsibility.</span>
                  </span>
                </div>

                {/* Elastic Stretch Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-full font-marvel text-2xl tracking-wider uppercase bg-gradient-to-r from-[#D6001C] via-[#0058FF] to-[#42C9FF] text-white shadow-[0_0_30px_rgba(214,0,28,0.7)] hover:shadow-[0_0_50px_rgba(66,201,255,0.9)] transition-all flex items-center justify-center gap-3"
                >
                  SUBMIT REGISTRATION (THWIP!)
                  <svg className="w-6 h-6 text-[#FFC400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </form>
            ) : (
              /* Success Celebration State */
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-6"
              >
                <div className="w-24 h-24 rounded-full bg-[#D6001C] p-4 flex items-center justify-center shadow-[0_0_50px_#D6001C] animate-bounce">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>

                <h3 className="font-marvel text-5xl text-white">
                  WELCOME TO THE <span className="text-[#42C9FF]">SPIDER-VERSE!</span>
                </h3>

                <p className="font-display text-white/80 max-w-lg text-base leading-relaxed">
                  Your application for <span className="text-[#FFC400] font-semibold">{formData.role}</span> has been zipped into the cocoon database! Our mentors will review your portfolio and reach out via web-dispatch.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-full font-marvel text-lg border border-white/20 hover:border-[#42C9FF] text-white transition-all"
                >
                  SUBMIT ANOTHER HERO
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default WebCocoonRegistration;

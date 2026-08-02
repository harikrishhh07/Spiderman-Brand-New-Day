import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../../utils/sound';

const faqs = [
  {
    q: 'Who can apply for Team SRM recruitment?',
    a: 'Any student with a passion for web development, AI, design, cybersecurity, or event management! Beginners to experienced heroes are welcome.',
  },
  {
    q: 'Do I need prior web-slinging or coding experience?',
    a: 'Not necessarily! We look for raw potential, problem-solving mindset, and dedication. We conduct workshops to hone your skills.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'The entire journey from registration to team induction takes approximately 3 to 4 weeks across 6 connected web stages.',
  },
  {
    q: 'Can I apply for multiple domains?',
    a: 'Yes, you can specify your primary target domain and mention secondary superpowers in your application form.',
  },
];

const SpiderFAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    sound.playClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#040404] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-marvel text-5xl sm:text-7xl text-white"
          >
            FREQUENTLY ASKED <span className="text-[#42C9FF]">QUESTIONS</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl spider-glass border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full p-6 text-left flex items-center justify-between font-marvel text-2xl text-white hover:text-[#42C9FF] transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-2xl text-[#D6001C]">{openIdx === idx ? '−' : '+'}</span>
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 font-display text-white/70 text-base leading-relaxed border-t border-white/5 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpiderFAQ;

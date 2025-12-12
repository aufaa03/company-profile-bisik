import React from 'react';
import { appData } from '../data/appData';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import InteractiveBackground from '../components/InteractiveBackground';

const Hero = () => {
  const { hero, ui } = appData;
  const { language } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Effects */}
      <InteractiveBackground />
      <div className="absolute inset-0 bg-background/40 pointer-events-none"> {/* Increased overlay opacity */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles size={14} className="mr-2" />
          <span>{ui.common.transform[language]}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-heading font-bold text-text-main dark:text-white leading-tight mb-6 tracking-tight"
        >
          {ui.common.digitalSolutions[language]} <span className="text-gradient">{ui.common.innovative[language]}</span> <br />
          {ui.common.forBusiness[language]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {hero.subHeadline[language]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          {hero.ctaButtons.map((btn, index) => (
            <a
              key={index}
              href={btn.link}
              className={`px-8 py-4 rounded-full font-medium text-base transition-all flex items-center ${index === 0
                  ? 'bg-text-main dark:bg-white text-background hover:opacity-90 shadow-lg shadow-black/10 dark:shadow-white/10'
                  : 'bg-surface border border-black/10 dark:border-white/10 text-text-main dark:text-white hover:bg-surfaceHighlight'
                }`}
            >
              {btn.text[language]}
              {index === 0 && <ArrowRight size={18} className="ml-2" />}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted uppercase tracking-widest">{ui.common.scroll[language]}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

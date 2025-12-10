import React from 'react';
import { appData } from '../data/appData';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import aboutVisual from '../assets/about-visual.png';

const About = () => {
  const { about, ui } = appData;
  const { language } = useLanguage();

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-main dark:text-white mb-6">
              {ui.nav.about[language]} <span className="text-gradient">{ui.common.team[language] === 'Team' ? 'Us' : 'Kami'}</span>
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              {about.description[language]}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {about.values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-text-main dark:text-white font-bold mb-2">{value.title[language]}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {value.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-background/50 backdrop-blur-sm">
              <img 
                src={aboutVisual} 
                alt="Digital Innovation" 
                className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

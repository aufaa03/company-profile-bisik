import React from 'react';
import { appData } from '../data/appData';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { testimonials, ui } = appData;
  const { language } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-main dark:text-white mb-4">
          {ui.common.whatTheySay[language]} <span className="text-gradient">{ui.common.theySay[language]}</span>
        </h2>
      </div>

      <div className="relative w-full">
        {/* Gradients for scroll indication */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-6 overflow-x-auto px-6 pb-8 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-[400px] md:w-[500px] p-8 rounded-2xl bg-surface border border-black/10 dark:border-white/5 shadow-lg dark:shadow-none whitespace-normal hover:shadow-xl transition-all duration-300"
            >
              <Quote className="text-primary mb-4 opacity-50" size={32} />
              <p className="text-lg text-text-muted mb-6 leading-relaxed italic">
                "{item.quote[language]}"
              </p>
              <div>
                <h4 className="text-text-main dark:text-white font-bold text-lg">{item.name}</h4>
                <p className="text-primary text-sm">{item.title[language] || item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

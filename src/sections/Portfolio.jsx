import React from 'react';
import { appData } from '../data/appData';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const { portfolio, ui } = appData;
  const { language } = useLanguage();

  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-main dark:text-white mb-4">
              {ui.common.work[language]} <span className="text-gradient">{ui.common.contribution[language]}</span>
            </h2>
            <p className="text-text-muted max-w-xl">
              {ui.common.trackRecord[language]}
            </p>
          </div>
          <a href="#" className="text-primary hover:text-primaryDark font-medium flex items-center transition-colors">
            {ui.common.seeAll[language]} <ExternalLink size={16} className="ml-2" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-surface border border-black/10 dark:border-white/5 shadow-lg dark:shadow-none aspect-video flex flex-col justify-end p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Placeholder Gradient Background since no images provided */}
              <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/10 to-accent/10' : 'from-secondary/10 to-primary/10'} group-hover:scale-105 transition-transform duration-700`} />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-text-main dark:text-white mb-3 border border-black/10 dark:border-white/10">
                  {item.category[language]}
                </span>
                <h3 className="text-2xl font-heading font-bold text-text-main dark:text-white mb-2">
                  {item.title[language]}
                </h3>
                <p className="text-text-muted dark:text-gray-300 text-sm max-w-md">
                  {item.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

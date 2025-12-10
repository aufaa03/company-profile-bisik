import React from 'react';
import { appData } from '../data/appData';
import { motion } from 'framer-motion';
import { Code, Layout, Users, BookOpen, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { services, ui } = appData;
  const { language } = useLanguage();

  const getIcon = (title) => {
    if (title.includes('Website')) return <Layout size={32} />;
    if (title.includes('Sistem') || title.includes('System')) return <Code size={32} />;
    if (title.includes('Workshop')) return <Users size={32} />;
    if (title.includes('TEFA')) return <BookOpen size={32} />;
    return <Code size={32} />;
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-main dark:text-white mb-4">
            {ui.common.services[language]} <span className="text-gradient">{ui.common.featured[language]}</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            {ui.common.comprehensive[language]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-surface hover:bg-surfaceHighlight transition-all duration-300 ${
                index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <div className="absolute top-8 right-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={24} />
              </div>
              
              <div className="mb-6 p-4 rounded-2xl bg-primary/10 w-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {getIcon(service.title[language])}
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-text-main dark:text-white mb-3">
                {service.title[language]}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {service.description[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

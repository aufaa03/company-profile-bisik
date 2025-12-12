import React from 'react';
import { appData } from '../data/appData';
import { motion } from 'framer-motion';
import { Linkedin, User } from 'lucide-react';
import pakHanifImg from '../assets/Pak-Hanif.jpg';
import { useLanguage } from '../context/LanguageContext';

const Team = () => {
  const { team, ui } = appData;
  const { language } = useLanguage();

  return (
    <section id="team" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-main dark:text-white mb-4">
            {ui.common.team[language]} <span className="text-gradient">{ui.common.expert[language]}</span>
          </h2>
          <p className="text-text-muted">
            {ui.common.behindInnovation[language]}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative w-full max-w-sm bg-background rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-800 relative">
                {/* Use imported image if name matches, otherwise placeholder */}
                {member.name.includes('Hanif') ? (
                  <img
                    src={pakHanifImg}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <User size={64} />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position[language]}</p>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary text-white transition-colors backdrop-blur-sm"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

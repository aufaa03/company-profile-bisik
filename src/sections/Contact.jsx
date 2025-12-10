import React from 'react';
import { appData } from '../data/appData';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { contact } = appData;
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-main dark:text-white mb-6">
              {contact.title[language].split(' ')[0]} <span className="text-gradient">{contact.title[language].split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-text-muted text-lg mb-12">
              {contact.subtitle[language]}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-surface border border-black/10 dark:border-white/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-text-main dark:text-white font-bold mb-1">Alamat</h4>
                  <p className="text-text-muted">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-surface border border-black/10 dark:border-white/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-text-main dark:text-white font-bold mb-1">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-text-muted hover:text-primary transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>

              {contact.phone && (
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-surface border border-black/10 dark:border-white/10 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-text-main dark:text-white font-bold mb-1">Telepon</h4>
                    <p className="text-text-muted">{contact.phone}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-surface border border-black/5 dark:border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">{contact.form.name[language]}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-black/10 dark:border-white/10 text-text-main dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder={contact.form.name[language]}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">{contact.form.email[language]}</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-black/10 dark:border-white/10 text-text-main dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">{contact.form.subject[language]}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-background border border-black/10 dark:border-white/10 text-text-main dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder={contact.form.subject[language]}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">{contact.form.message[language]}</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-black/10 dark:border-white/10 text-text-main dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder={contact.form.message[language]}
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-primary hover:bg-primaryDark text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25"
              >
                <Send size={18} />
                {contact.form.btn[language]}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { appData } from '../data/appData';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import logoImg from '../assets/logo.png';

const Footer = () => {
  const { general, contact, ui } = appData;
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="Logo" className="h-10 w-auto" />
              <span className="text-2xl font-heading font-bold text-text-main tracking-tighter">
                {general.nickname}
                <span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-text-muted mb-6 leading-relaxed">
              {general.tagline[language]}
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-surface border border-black/10 dark:border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-primary hover:border-primary transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-text-main font-bold mb-6">{ui.footer.company[language]}</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Portfolio', 'Team'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-text-muted hover:text-primary transition-colors">
                    {ui.nav[item.toLowerCase()][language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text-main font-bold mb-6">{ui.footer.services[language]}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary transition-colors">System Information</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary transition-colors">IT Training</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-main font-bold mb-6">{ui.footer.contact[language]}</h4>
            <ul className="space-y-4 text-text-muted">
              <li>{contact.email}</li>
              <li>{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {currentYear} {general.companyName}. {ui.footer.rights[language]}
          </p>
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-white transition-colors">{ui.footer.privacy[language]}</a>
            <a href="#" className="hover:text-white transition-colors">{ui.footer.terms[language]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

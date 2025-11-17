// src/sections/Portfolio.jsx

import { appData } from '../data/appData';
import SectionHeading from '../components/SectionHeading';

import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Portfolio() {
  const projects = appData.portfolio;
    const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, // Animasi hanya berjalan sekali
    amount: 0.1  // Trigger saat 10% elemen terlihat
  });

  // 3. DEFINISIKAN VARIAN ANIMASI
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Mulai dari: transparan, 50px di bawah
    visible: { opacity: 1, y: 0 },  // Selesai di: terlihat, posisi normal (y: 0)
  };
  return (
    <Motion.section 
      id="portfolio" 
      className="py-20 px-6 bg-light dark:bg-dark relative z-10 overflow-hidden" // Pastikan 'relative'
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      
      {/* 1. INI DIA DOT GRID PATTERN KITA */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          // Ini adalah trik CSS untuk buat dot grid
         backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-dot-grid) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          opacity: 0.5, // Kita buat SANGAT halus
        }}
        aria-hidden="true"
      ></div>


      {/* 2. KONTEN KITA (HARUS relative z-10) */}
      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Portofolio Kami"
          subtitle="Beberapa proyek dan kemitraan yang telah kami jalankan."
        />

        {/* ... (sisa kode .map kartu portofolio SAMA PERSIS) ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              // Kita buat kartu ini semi-transparan juga (frost-glass)
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-8">
                <p className="text-secondary dark:text-secondary font-semibold text-sm mb-2 uppercase">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold dark:text-white text-dark mb-4 font-heading">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}

export default Portfolio;
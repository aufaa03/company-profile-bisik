// src/sections/Services.jsx

import { appData } from '../data/appData';
import SectionHeading from '../components/SectionHeading';

import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Services() {
  const services = appData.services;
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
      id="services" 
      // 1. TAMBAHKAN 'relative' DI SINI
      className="py-20 px-6 bg-white dark:bg-gray-900 relative z-10 overflow-hidden" 
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      
      {/* 2. INI DIA "BLOB" KITA */}
      {/* Ini adalah SVG besar yang kita posisikan di background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" 
        aria-hidden="true"
      >
        <svg 
          width="1360" 
          height="578" 
          viewBox="0 0 1360 578" 
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20 md:opacity-10" // Opacity halus
        >
          <defs>
            <linearGradient id="blob-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
              {/* Ini pakai warna kustom 'primary' & 'secondary' kita */}
              <stop stopColor="var(--color-primary, #0D47A1)" offset="0%" />
              <stop stopColor="var(--color-secondary, #00897B)" offset="100%" />
            </linearGradient>
          </defs>
          <path 
            fill="url(#blob-gradient)" 
            d="M361.325 110.421c-46.12 40.24-91.37 80.14-134.8 120.04-43.43 39.9-84.4 79.74-121.78 120.24-37.38 40.5-71.16 81.64-97.77 124.64C-19.62 518.34-39.7 561 24.33 561H1360V0H24.33C116.33 0 212.33 110.421 361.325 110.421z" 
          />
        </svg>
      </div>
      {/* Catatan: Kita perlu definisikan warna di CSS agar terbaca SVG */}


      {/* 3. KONTEN KITA BUAT 'relative' agar di atas BLOB */}
      <div className="container mx-auto relative z-10">
        <SectionHeading 
          title="Layanan Kami"
          subtitle="Fokus kami adalah menyediakan solusi digital yang efisien dan inovatif."
        />

        {/* ... (sisa kode .map kartu layanan SAMA PERSIS, tidak usah diubah) ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              // Kita buat kartu ini semi-transparan agar blob di belakangnya
              // samar-samar terlihat. Ini efek "frost-glass"
              className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-dark dark:text-secondary mb-4 font-heading">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}

export default Services;
// src/sections/Team.jsx

import { appData } from '../data/appData';
import SectionHeading from '../components/SectionHeading';
import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
// Kita pakai placeholder untuk foto, nanti ganti di /assets/
const AVATAR_PLACEHOLDER = "https://via.placeholder.com/400"; 
import pakHanif from '../assets/Pak-Hanif.jpg';
function Team() {
  const team = appData.team;
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
      id="team" 
      className="py-20 px-6 bg-white dark:bg-gray-900 relative z-10 overflow-hidden" // Pastikan 'relative'
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      
      {/* 1. INI DIA "GRADIENT SPOTLIGHT" KITA */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" 
        aria-hidden="true"
      >
        <div 
          className="
            w-[400px] h-[400px] md:w-[600px] md:h-[600px]
            bg-primary 
            rounded-full 
            opacity-5 
            blur-3xl 
          "
        >
          {/* Ini cuma div biasa yang kita styling pakai Tailwind */}
        </div>
      </div>


      {/* 2. KONTEN KITA (HARUS relative z-10) */}
      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Tim Kami"
          subtitle="Dipimpin oleh profesional berpengalaman di bidangnya."
        />

        {/* ... (sisa kode .map kartu tim SAMA) ... */}
        <div className="flex justify-center">
          {team.map((member, index) => (
            <div
              key={index}
              // Kita buat kartu ini semi-transparan (frost-glass)
              className="bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-lg shadow-lg text-center p-8 w-full max-w-sm"
            >
              <img
                src={pakHanif} // Nanti ganti dengan foto asli
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-dark dark:text-white font-heading">
                {member.name}
              </h3>
              <p className="text-secondary font-semibold mb-4">
                {member.position}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400  dark:hover:text-primary transition-colors"
              >
                Lihat LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}

export default Team;
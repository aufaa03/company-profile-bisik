// src/sections/About.jsx

import { appData } from '../data/appData';
// Kita tidak pakai SectionHeading di sini karena kita mau layout custom
// import SectionHeading from '../components/SectionHeading'; 

// 1. IMPOR DARI FRAMER-MOTION DAN REACT
import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import fotoTim from '../assets/ilustrasi_kerja-tim.webp';

function About() {
  const { description, values } = appData.about;

  // 2. SETUP REF DAN HOOK useInView (Sama seperti sebelumnya)
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1
  });

  // 3. DEFINISIKAN VARIAN ANIMASI (Sama seperti sebelumnya)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Motion.section 
      id="about" 
      className="py-20 px-6 bg-light relative z-10 overflow-hidden dark:bg-dark" // Pakai warna 'light'
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        {/* Ini dia layout 2 kolom kita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* == KOLOM KIRI (VISUAL/GAMBAR) == */}
          <div className="w-full h-80 md:h-full bg-gray-300 rounded-lg shadow-xl">
              <img src={fotoTim} alt="Tim CV BISIK" 
                   className="w-full h-full object-cover rounded-lg shadow-xl" />
            {/* Nanti kamu bisa ganti div ini dengan:
            */}
          </div>

          {/* == KOLOM KANAN (TEKS & POIN) == */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4 font-heading">
              Tentang Kami
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {description}
            </p>

            {/* Poin Nilai/Keunggulan (Kita buat 2x2 grid di sini) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-3 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm"> {/* Teks kita kecilkan */}
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Motion.section>
  );
}

export default About;
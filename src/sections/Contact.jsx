// src/sections/Contact.jsx

import { appData } from '../data/appData';
// Kita tidak pakai SectionHeading lagi, kita buat custom
// import SectionHeading from '../components/SectionHeading';

// 1. IMPOR DARI FRAMER-MOTION DAN REACT
import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import toast from 'react-hot-toast';
function Contact() {
  const { address, email, phone } = appData.contact;

  // 2. SETUP REF DAN HOOK useInView
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1
  });

  // 3. DEFINISIKAN VARIAN ANIMASI
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (event) => {
    // 2a. Cegah halaman me-refresh (INI SANGAT PENTING!)
    event.preventDefault(); 
    
    // 2b. TAMPILKAN NOTIFIKASI SUKSES!
    toast.success('Pesan Anda terkirim!');
    
    // 2c. (Opsional) Kosongkan form-nya
    event.target.reset();
  };

  return (
    <Motion.section 
      id="contact" 
      // 4. UBAH BACKGROUND JADI GELAP
      className="py-20 px-6 bg-white text-gray-700 dark:bg-dark dark:text-gray-300 relative z-10 overflow-hidden" 
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        
        {/* JUDUL KUSTOM UNTUK BACKGROUND GELAP */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4 font-heading">
            Hubungi Kami
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Siap untuk memulai proyek Anda? Hubungi kami melalui formulir di bawah atau detail kontak di samping.
          </p>
        </div>

        {/* 5. LAYOUT 2 KOLOM BARU */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* KOLOM KIRI: Info Kontak */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2 font-heading">
                Alamat
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{address}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2 font-heading">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                {email || "Email akan segera tersedia"}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2 font-heading">
                Telepon
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                {phone || "Telepon akan segera tersedia"}
              </p>
            </div>
          </div>

          {/* KOLOM KANAN: Formulir Kontak (Dummy) */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nama</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-gray-100 border-gray-300 text-dark dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg p-3 focus:border-primary focus:ring-primary transition-colors"
                placeholder="Nama Anda" required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-gray-100 border-gray-300 text-dark dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg p-3  focus:border-primary focus:ring-primary transition-colors"
                placeholder="Email Anda" required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Pesan</label>
              <textarea 
                id="message" 
                rows="4"
                className="w-full bg-gray-100 border-gray-300 text-dark dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg p-3  focus:border-primary focus:ring-primary transition-colors"
                placeholder="Tulis pesan Anda..." required
              ></textarea>
            </div>
            <div>
              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Kirim Pesan
              </button>
            </div>
          </form>

        </div>
      </div>
    </Motion.section>
  );
}

export default Contact;
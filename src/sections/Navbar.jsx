// src/sections/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { appData } from '../data/appData';
import { useTheme } from '../context/ThemeContext';

// Ikon Bulan (Moon) - Salin SVG ini
const IconMoon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

// Ikon Matahari (Sun) - Salin SVG ini
const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25c0 1.38.5 2.5 1.5 3.062A8.989 8.989 0 0112 21a8.989 8.989 0 01-4.562-1.5H12A2.25 2.25 0 0012 12z" />
  </svg>
);
function Navbar() {
  const companyNickname = appData.general.nickname;

  // State untuk tahu apakah menu mobile (hamburger) sedang dibuka
  const [isOpen, setIsOpen] = useState(false);
  
  // State untuk tahu apakah navbar harus ganti background (setelah scroll)
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();
  // Daftar link navigasi
  const navLinks = [
    { name: 'Home', href: '#hero' }, // Kita tambahkan ID 'hero' nanti
    { name: 'Tentang', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Kontak', href: '#contact' },
  ];
  const getTextColor = () => {
    if (isScrolled) return 'text-gray-700 dark:text-gray-200'; // Saat di-scroll
    return 'text-white'; // Saat di atas Hero (transparan)
  };

  const getHoverColor = () => {
    if (isScrolled) return 'hover:text-primary dark:hover:text-secondary';
    return 'hover:text-gray-200';
  }

  // Efek ini akan berjalan saat komponen dimuat
  useEffect(() => {
    // Fungsi untuk cek posisi scroll
    const handleScroll = () => {
      // Jika scroll Y lebih dari 50px, set 'isScrolled' jadi true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Daftarkan event listener 'scroll'
    window.addEventListener('scroll', handleScroll);

    // Ini penting: Hapus event listener saat komponen dihancurkan
    // agar tidak terjadi memory leak
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array kosong [] berarti efek ini hanya jalan sekali (saat mount)

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-md dark:bg-dark dark:border-b dark:border-gray-700' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* 1. Logo */}
          <a href="#hero" className={`
            font-bold text-2xl 
            ${isScrolled ? 'text-dark dark:text-white' : 'text-white'}
          `}>
            {companyNickname}
          </a>

          {/* 2. Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`
                  font-medium transition-colors
                  ${getTextColor()}
                  ${getHoverColor()}
                `}
              >
                {link.name}
              </a>
            ))}

            {/* 3. TOMBOL TOGGLE DARK MODE (Desktop) */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${getTextColor()} ${getHoverColor()}`}
            >
              {theme === 'light' ? <IconMoon /> : <IconSun />}
            </button>
          </div>

          {/* 3. Grup Tombol Mobile (Hamburger & Toggle) */}
          <div className="md:hidden flex items-center space-x-4">
            
            {/* TOMBOL TOGGLE DARK MODE (Mobile) */}
            <button 
              onClick={toggleTheme}
              className={`p-1 rounded-full transition-colors ${getTextColor()}`}
            >
              {theme === 'light' ? <IconMoon /> : <IconSun />}
            </button>

            {/* Tombol Hamburger */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={getTextColor()}
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Menu Dropdown Mobile */}
      <div 
        className={`
          md:hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          overflow-hidden
          ${isScrolled ? 'bg-white dark:bg-dark' : 'bg-gray-900 bg-opacity-80 backdrop-blur-sm'}
        `}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                font-medium transition-colors
                ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-200 hover:text-white'}
                dark:hover:text-secondary
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
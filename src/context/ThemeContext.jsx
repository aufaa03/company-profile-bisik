// src/context/ThemeContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Buat Context-nya
const ThemeContext = createContext();

// 2. Buat "Provider" (Penyedia)
// Ini adalah komponen yang akan "membungkus" aplikasi kita
export function ThemeProvider({ children }) {
  // 3. Buat state untuk tema
  // Kita cek 'localStorage' dulu, kalau tidak ada, default-nya 'light'
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  // 4. Buat 'useEffect' untuk MENGUBAH <html>
  useEffect(() => {
    const root = window.document.documentElement; // Ini tag <html>
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // 5. Simpan pilihan user ke localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Efek ini jalan SETIAP KALI state 'theme' berubah

  // 6. Buat fungsi untuk 'toggle'
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // 7. Sediakan 'theme' dan 'toggleTheme' ke semua 'children'
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 8. Buat "Hook" kustom (Biar gampang dipanggil)
// Ini adalah cara kita nanti "mengambil" data di komponen lain
export function useTheme() {
  return useContext(ThemeContext);
}
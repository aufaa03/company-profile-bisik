import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import Footer from './sections/Footer';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Toaster
        position="bottom-center" // set posisinya di bawah-tengah
        toastOptions={{
          duration: 3000, // Hilang setelah 3 detik
        }}
      />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <div key="content">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Team />
            <Contact />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
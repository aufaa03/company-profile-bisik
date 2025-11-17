


import { appData } from '../data/appData';
import { Parallax } from 'react-scroll-parallax';


const HERO_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1769&auto=format&fit=crop";

function Hero() {
  const { headline, subHeadline, ctaButtons } = appData.hero;

  return (
    
    <div id='hero' className="relative min-h-screen">
      
      {/* 1. LAYER BACKGROUND (Parallax Bergerak Lambat) */}
      <Parallax speed={-20} className="absolute inset-0 z-0">
        <img
          src={HERO_BACKGROUND_IMAGE}
          alt="Hero background"
          className="object-cover w-full h-full"
        />
        {/* Overlay gelap agar teks terbaca */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </Parallax>

      {/* 2. LAYER KONTEN TEKS (Parallax Bergerak Normal/Cepat) */}
      <Parallax speed={10} className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 py-20 text-white">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
            {headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {subHeadline}
          </p>
          
          <div className="flex gap-4">
            <a
              href={ctaButtons[0].link}
              className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {ctaButtons[0].text}
            </a>
            <a
              href={ctaButtons[1].link}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {ctaButtons[1].text}
            </a>
          </div>

        </div>
      </Parallax>

    </div>
  );
}

export default Hero;
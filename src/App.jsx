// src/App.jsx
import { Toaster } from 'react-hot-toast';
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
  return (
    <div>
      <Toaster 
        position="bottom-center" // set posisinya di bawah-tengah
        toastOptions={{
          duration: 3000, // Hilang setelah 3 detik
        }}
      />
      <Navbar/>
      <Hero />
      <About />      
      <Services />   
      <Portfolio/> 
      <Testimonials/>
      <Team />
      <Contact />
      <Footer /> 
      {/* <Portfolio />
      */}
    </div>
  );
}

export default App;
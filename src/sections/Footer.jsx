// src/sections/Footer.jsx

import { appData } from '../data/appData';

function Footer() {
  const companyName = appData.general.companyName;
  const currentYear = new Date().getFullYear(); // Otomatis update tahun

  return (
    <footer className="bg-light text-gray-600 dark:bg-dark dark:text-gray-400 py-12 relative z-10">
      <div className="container mx-auto text-center">
        <p>
          &copy; {currentYear} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
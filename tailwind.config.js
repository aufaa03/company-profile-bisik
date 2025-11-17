/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],

        heading: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#0D47A1',   // Biru tua yang elegan
        'secondary': '#00897B', // Toska / Hijau "Bisnis"
        'dark': '#111827',      // Abu-abu tua (Tailwind Gray-900)
        'light': '#F9FAFB',     // Abu-abu muda (Tailwind Gray-50)
      }
    },
  },
  plugins: [],
};

# CV. Bina Sarana Insan Kamil (CV BISIK) - Company Profile Website

## 🚀 Project Overview

This repository contains the source code for the official Company Profile website of **CV. Bina Sarana Insan Kamil (CV BISIK)**. This project was developed as a final assignment for **Praktik Kerja Lapangan (PKL)**.

The website is designed to be a modern, high-performance Single Page Application (SPA) that showcases the company's services in IT Solutions and Web Development. It features a fully responsive design, interactive animations, and a comprehensive dark mode system.

**🔗 Live Demo:** [https://company-profile-bisik.vercel.app/](https://company-profile-bisik.vercel.app/)

---

## ✨ Key Features

This project goes beyond standard static websites by implementing modern web technologies:

* **🎨 Modern & Responsive UI:** Built with **Tailwind CSS**, ensuring a stunning look on mobile, tablet, and desktop devices.
* **🌓 Dark/Light Mode System:** Fully functional theme toggle using **React Context API** and local storage persistence.
* **✨ Parallax Hero Section:** Immersive visual effect using `react-scroll-parallax` where the background moves slower than the foreground.
* **🎭 Scroll Reveal Animations:** Smooth fade-in and slide-up animations for every section using **Framer Motion**.
* **💬 Interactive Testimonials:** Responsive touch-slider for client reviews powered by **Swiper.js**.
* **📩 Functional Contact Form:** Includes form validation and instant "Toast" notifications using `react-hot-toast`.
* **⚡ High Performance:** Built on top of **Vite**, ensuring lightning-fast load times and development experience.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Core** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | Component-based UI Library |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E) | Next Generation Frontend Tooling |
| **Styling** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Utility-first CSS framework |
| **Animation** | `framer-motion` | Production-ready motion library for React |
| **State Mgmt** | React Context API | For managing Global Theme State |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Cloud platform for static sites |

---

## 📂 Project Structure

The project follows a scalable and clean architecture:

```bash
src/
├── assets/          # Static assets (Images, Logos)
├── components/      # Reusable small components (e.g., SectionHeading)
├── context/         # Global State (ThemeContext for Dark Mode)
├── data/            # Separated data file (appData.js) for easy content updates
├── sections/        # Main page sections (Hero, About, Services, etc.)
├── App.jsx          # Main Application Layout
└── main.jsx         # Entry point & Providers setup

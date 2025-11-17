// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Impor ParallaxProvider
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from './context/ThemeContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
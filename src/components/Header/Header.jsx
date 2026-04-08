"use client"

import { useState, useEffect } from "react"
import "./Header.css"
import { useLanguage } from "../../context/LanguageContext"
import { useTheme } from "../../context/ThemeContext"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text">SAJIT_</span>
        </div>

        <div className="header-controls">
          <button className="control-btn pixel-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? 'DARK' : 'LIGHT'}
          </button>
          
          <button className="control-btn pixel-btn" onClick={toggleLanguage} aria-label="Toggle Language">
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          <div className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="menu-btn-line"></div>
            <div className="menu-btn-line"></div>
            <div className="menu-btn-line"></div>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>
                {t('nav.home') || "START"}
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>
                {t('nav.about') || "ABOUT"}
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>
                {t('nav.skills') || "SKILLS"}
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>
                {t('nav.portfolio') || "LEVELS"}
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                {t('nav.contact') || "CONTACT"}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

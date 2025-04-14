"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text">SAJIT</span>
          <div className="logo-glitch"></div>
        </div>

        <div className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="menu-btn-line"></div>
          <div className="menu-btn-line"></div>
          <div className="menu-btn-line"></div>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>
                SOBRE MÍ
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>
                HABILIDADES
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>
                PORTAFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

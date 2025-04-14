"use client"

import { useEffect, useRef } from "react"
import "./Hero.css"

const Hero = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current

    if (title && subtitle) {
      title.classList.add("animate-in")

      setTimeout(() => {
        subtitle.classList.add("animate-in")
      }, 800)
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div className="grid-bg"></div>
      <div className="hero-glitch-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 ref={titleRef} className="hero-title">
            <span className="hero-title-line">EDGAR SAJIT</span>
            <span className="hero-title-line">LOPEZ VENTURA</span>
          </h1>
          <div ref={subtitleRef} className="hero-subtitle">
            <span className="hero-subtitle-text">DESARROLLADOR</span>
            <span className="hero-subtitle-text">ESTUDIANTE</span>
            <span className="hero-subtitle-text">CREADOR</span>
          </div>
          <div className="hero-cta">
            <a href="#portfolio" className="btn">
              Ver Portafolio
            </a>
            <a href="#contact" className="btn">
              Contáctame
            </a>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="hero-circle"></div>
          <div className="hero-grid"></div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
        <span className="scroll-text">DESPLÁZATE</span>
      </div>
    </section>
  )
}

export default Hero

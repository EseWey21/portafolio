"use client"

import { useEffect, useRef } from "react"
import "./Hero.css"
import { useSpring, animated } from "react-spring"

const Hero = ({ scrollY }) => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  // Parallax effects
  const titleParallax = useSpring({
    transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
    config: { mass: 1, tension: 170, friction: 26 },
  })

  const circleParallax = useSpring({
    transform: `translate3d(0, ${scrollY * -0.1}px, 0) rotate(${scrollY * 0.05}deg)`,
    config: { mass: 1, tension: 170, friction: 26 },
  })

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
      <div className="hero-glitch-overlay"></div>
      <div className="container hero-container">
        <animated.div className="hero-content" style={titleParallax}>
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
        </animated.div>
        <animated.div className="hero-decoration" style={circleParallax}>
          <div className="hero-circle"></div>
          <div className="hero-grid"></div>
        </animated.div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
        <span className="scroll-text">DESPLÁZATE</span>
      </div>
    </section>
  )
}

export default Hero

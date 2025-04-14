"use client"

import { useEffect, useState, useRef } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import CRTEffect from "./components/CRTEffect/CRTEffect"
import Cursor from "./components/Cursor/Cursor"
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"
import { useSpring, animated } from "react-spring"

function App() {
  const [loading, setLoading] = useState(true)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const appRef = useRef(null)

  // Smooth scroll animation
  const smoothScroll = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll)
    })

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll)
      })
    }
  }, [])

  // Parallax effect for grid background
  const gridParallax = useSpring({
    transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
    config: { mass: 1, tension: 120, friction: 14 },
  })

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="page-wrapper">
      <div className="app" ref={appRef}>
        <CRTEffect />
        <Cursor position={cursorPosition} />
        <Header />
        <animated.div className="grid-bg" style={gridParallax}></animated.div>
        <main>
          <Hero scrollY={scrollY} />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Edgar Sajit Lopez Ventura</p>
            <p className="footer-crt-text">PRESIONA START PARA CONTINUAR</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

"use client"

import { useEffect, useState } from "react"
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

function App() {
  const [loading, setLoading] = useState(true)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="page-wrapper">
      <div className="app">
        <CRTEffect />
        <Cursor position={cursorPosition} />
        <Header />
        <main>
          <Hero />
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

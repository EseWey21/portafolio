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
import { useLanguage } from "./context/LanguageContext"
import cvPath from './components/assets/CV_English.pdf'

function App() {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(true)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const appRef = useRef(null)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

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
      <div className="app" ref={appRef}>
        {/* Retro Effects */}
        <CRTEffect />
        <Cursor position={cursorPosition} />
        
        {/* Main Content */}
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Edgar Sajit Lopez Ventura</p>
            <a href={cvPath} download="CV_Sajit_Lopez.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <p className="footer-crt-text" style={{ cursor: 'pointer' }}>{t('footer.start') || "PRESS START TO DOWNLOAD CV_"}</p>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

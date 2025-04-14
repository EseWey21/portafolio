"use client"

import { useEffect, useState } from "react"
import "./LoadingScreen.css"
import { useSpring, animated, config } from "react-spring"

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.floor(Math.random() * 10)
        return newProgress > 100 ? 100 : newProgress
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  const loadingBarProps = useSpring({
    width: `${progress}%`,
    config: config.gentle,
  })

  const titleProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-50px)" },
    config: config.gentle,
  })

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <animated.h1 className="loading-title" style={titleProps}>
          SAJIT OS
        </animated.h1>
        <div className="loading-bar-container">
          <animated.div className="loading-bar" style={loadingBarProps}></animated.div>
        </div>
        <div className="loading-text">
          <span>Cargando portafolio...</span>
          <span className="loading-percentage">{progress}%</span>
        </div>
        <div className="loading-message">
          {progress < 30 && "Iniciando sistemas..."}
          {progress >= 30 && progress < 60 && "Cargando recursos..."}
          {progress >= 60 && progress < 90 && "Preparando interfaz..."}
          {progress >= 90 && "Listo para iniciar..."}
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

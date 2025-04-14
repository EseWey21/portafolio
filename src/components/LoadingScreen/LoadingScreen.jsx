"use client"

import { useEffect, useState } from "react"
import "./LoadingScreen.css"

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

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-title">SAJIT OS</h1>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
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

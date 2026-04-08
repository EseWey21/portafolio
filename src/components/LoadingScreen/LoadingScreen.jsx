import { useEffect, useState } from "react"
import "./LoadingScreen.css"

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.floor(Math.random() * 15)
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-title">SAJIT_OS</h1>
        
        <div className="loading-bar-container retro-container">
          <div 
            className="loading-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="loading-text">
          <span>LOADING SYSTEM...</span>
          <span className="loading-percentage">{progress}%</span>
        </div>
        
        <div className="loading-message">
          {progress < 30 && "INITIALIZING BIOS..."}
          {progress >= 30 && progress < 60 && "LOADING ASSETS..."}
          {progress >= 60 && progress < 90 && "BUILDING WORLD..."}
          {progress >= 90 && "READY."}
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

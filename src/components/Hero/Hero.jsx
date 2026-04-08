import { useEffect, useRef } from "react"
import "./Hero.css"
import { useLanguage } from "../../context/LanguageContext"
import cvPath from '../assets/CV_English.pdf'
import gsap from "gsap"

const Hero = () => {
  const { t } = useLanguage()
  const heroRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(".retro-container", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.2 }
      )
      .fromTo(".hero-title-line", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power1.out" }
      )
      .fromTo(".hero-subtitle-text", 
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power1.out" }, 
        "-=0.2"
      )
      .fromTo(".hero-btn", 
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "back.out(1.5)" }, 
        "-=0.1"
      )
      .fromTo(".hero-decoration", 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.7)" }, 
        "-=0.8"
      );
    }, heroRef);

    return () => ctx.revert();
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container hero-container">
        <div className="hero-content retro-container">
          <h1 className="hero-title">
            <span className="hero-title-line">EDGAR SAJIT</span>
            <span className="hero-title-line">LOPEZ VENTURA</span>
          </h1>
          <div className="hero-subtitle">
            <span className="hero-subtitle-text">&gt; {t('hero.developer') || "DEVELOPER"}</span>
            <span className="hero-subtitle-text">&gt; {t('hero.student') || "STUDENT"}</span>
            <span className="hero-subtitle-text">&gt; {t('hero.creator') || "CREATOR"}</span>
          </div>
          <div className="hero-cta">
            <a href={cvPath} download="CV_Sajit_Lopez.pdf" className="btn hero-btn cv-btn" target="_blank" rel="noopener noreferrer">
              DOWNLOAD CV [PRESS HERE]
            </a>
          </div>
        </div>
        
        <div className="hero-decoration">
          <pre className="hero-ascii-art">
{`⠀⠀⠀⠀⢸⠓⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⠀⠀⠑⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠙⢤⡷⣤⣦⣀⠤⠖⠚⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣠⡿⠢⢄⡀⠀⡇⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠸⠷⣶⠂⠀⠀⠀⣀⣀⠀⠀⠀
⢸⣃⠀⠀⠉⠳⣷⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⢉⡭⠋
⠀⠘⣆⠀⠀⠀⠁⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀
⠀⠀⠘⣦⠆⠀⠀⢀⡎⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⡀⣠⠔⠋⠀⠀⠀⠀
⠀⠀⠀⡏⠀⠀⣆⠘⣄⠸⢧⠀⠀⠀⠀⢀⣠⠖⢻⠀⠀⠀⣿⢥⣄⣀⣀⣀⠀⠀
⠀⠀⢸⠁⠀⠀⡏⢣⣌⠙⠚⠀⠀⠠⣖⡛⠀⣠⠏⠀⠀⠀⠇⠀⠀⠀⠀⢙⣣⠄
⠀⠀⢸⡀⠀⠀⠳⡞⠈⢻⠶⠤⣄⣀⣈⣉⣉⣡⡔⠀⠀⢀⠀⠀⣀⡤⠖⠚⠀⠀
⠀⠀⡼⣇⠀⠀⠀⠙⠦⣞⡀⠀⢀⡏⠀⢸⣣⠞⠀⠀⠀⡼⠚⠋⠁⠀⠀⠀⠀⠀
⠀⢰⡇⠙⠀⠀⠀⠀⠀⠀⠉⠙⠚⠒⠚⠉⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢧⡀⠀⢠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠙⣶⣶⣿⠢⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠉⠀⠀⠀⠙⢿⣳⠞⠳⡄⠀⠀⠀⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠹⣄⣀⡤⠋⠀⠀⠀⠀⠀⠀`}
          </pre>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
        <span className="scroll-text">{t('hero.scroll') || "PRESS DOWN"}</span>
      </div>
    </section>
  )
}

export default Hero

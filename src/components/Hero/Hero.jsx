"use client"

import { useRef } from "react"
import "./Hero.css"
import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import cvPath from '../assets/CV_English.pdf'

const Hero = () => {
  const { t } = useLanguage()

  // Parallax effects
  const { scrollYProgress } = useScroll()
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const circleY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const circleRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-glitch-overlay"></div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content" 
          style={{ y: titleY }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="hero-title" variants={childVariants}>
            <span className="hero-title-line">EDGAR SAJIT</span>
            <span className="hero-title-line">LOPEZ VENTURA</span>
          </motion.h1>
          <motion.div className="hero-subtitle" variants={childVariants}>
            <span className="hero-subtitle-text">{t('hero.developer')}</span>
            <span className="hero-subtitle-text">{t('hero.student')}</span>
            <span className="hero-subtitle-text">{t('hero.creator')}</span>
          </motion.div>
          <motion.div className="hero-cta" variants={childVariants}>
            <a href="#portfolio" className="btn">
              {t('hero.viewPortfolio')}
            </a>
            <a href="#contact" className="btn">
              {t('hero.contactMe')}
            </a>
            <a href={cvPath} download="CV_Sajit_Lopez.pdf" className="btn" target="_blank" rel="noopener noreferrer">
              {t('hero.downloadCv')}
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-decoration" 
          style={{ y: circleY, rotate: circleRotate }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5, type: 'spring' }}
        >
          <div className="hero-circle"></div>
          <div className="hero-grid"></div>
        </motion.div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
        <span className="scroll-text">{t('hero.scroll')}</span>
      </div>
    </section>
  )
}

export default Hero

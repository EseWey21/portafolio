"use client"
import "./About.css"
import miImagen from '../assets/profile.jpg'
import { useLanguage } from "../../context/LanguageContext"
import { motion } from "framer-motion"

const About = () => {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {t('about.title')}
        </motion.h2>

        <motion.div 
          className="about-bento"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1: Intro */}
          <motion.div className="bento-card bento-intro" variants={cardVariants}>
            <p>
              {t('about.p1_1')}<span className="highlight">{t('about.p1_mock')}</span>{t('about.p1_2')}
            </p>
          </motion.div>

          {/* Card 2: Image */}
          <motion.div className="bento-card bento-image" variants={cardVariants}>
            <div className="about-image-placeholder">
              <div className="about-image-glitch"></div>
              <img src={miImagen} alt="Sajit" className="about-profile-image" />
            </div>
          </motion.div>

          {/* Card 3: Details */}
          <motion.div className="bento-card bento-details" variants={cardVariants}>
            <p>
              {t('about.p2_1')}<span className="highlight">{t('about.p2_mock')}</span>{t('about.p2_2')}
            </p>
            <p>{t('about.p3')}</p>
          </motion.div>

          {/* Card 4: Hobbies */}
          <motion.div className="bento-card bento-hobbies" variants={cardVariants}>
            <p>
              {t('about.p4_1')}<span className="highlight">{t('about.p4_mock')}</span>{t('about.p4_2')}
            </p>
          </motion.div>

          {/* Card 5: Soft Skills */}
          <motion.div className="bento-card bento-soft" variants={cardVariants}>
            <div className="about-more">
              <p>{t('about.p5')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
import { useEffect, useRef } from "react"
import "./About.css"
import miImagen from '../assets/profile.jpg'
import { useLanguage } from "../../context/LanguageContext"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const { t } = useLanguage()
  const aboutRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".section-title", 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        }
      );

      gsap.fromTo(".bento-card", 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".about-bento",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)"
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, [])

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">
          {t('about.title') || "ABOUT_ME"}
        </h2>

        <div className="about-bento">
          {/* Card 1: Intro */}
          <div className="bento-card bento-intro retro-container">
            <p>
              {t('about.p1_1') || "Hi, I am "}<span className="highlight">{t('about.p1_mock') || "Sajit"}</span>{t('about.p1_2') || " and I build things"}
            </p>
          </div>

          {/* Card 2: Image */}
          <div className="bento-card bento-image retro-container">
            <div className="about-image-header">PLAYER 1 PROFILE</div>
            <div className="about-image-placeholder">
              <img src={miImagen} alt="Sajit" className="about-profile-image" />
            </div>
          </div>

          {/* Card 3: Details */}
          <div className="bento-card bento-details retro-container">
            <p>
              {t('about.p2_1')}<span className="highlight">{t('about.p2_mock')}</span>{t('about.p2_2')}
            </p>
            <p>{t('about.p3')}</p>
          </div>

          {/* Card 4: Hobbies */}
          <div className="bento-card bento-hobbies retro-container">
            <div className="about-image-header">INVENTORY</div>
            <p>
              {t('about.p4_1')}<span className="highlight">{t('about.p4_mock')}</span>{t('about.p4_2')}
            </p>
          </div>

          {/* Card 5: Soft Skills */}
          <div className="bento-card bento-soft retro-container">
            <div className="about-more">
              <p>{t('about.p5')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
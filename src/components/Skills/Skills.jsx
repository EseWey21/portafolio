import { useEffect, useRef } from "react"
import "./Skills.css"
import { useLanguage } from "../../context/LanguageContext"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  FaPython,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaMicrosoft,
  FaCode,
  FaLanguage
} from "react-icons/fa"

import {
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiLatex,
  SiJavascript,
  SiDotnet
} from "react-icons/si"

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const { t } = useLanguage()
  const skillsRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".section-title", 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".skills",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        }
      );

      gsap.fromTo(".skill-category", 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".skills-bento",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out"
        }
      );
      
      gsap.fromTo(".skill-item", 
        { scale: 0.5, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".skills-bento",
            start: "top 60%",
          },
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.5)"
        }
      );
    }, skillsRef);

    return () => ctx.revert();
  }, [])

  const categories = [
    {
      title: t('skills.cat1') || "LANGUAGES",
      skills: [
        { name: "C", icon: <FaCode /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C#", icon: <FaCode /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "CSS", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: t('skills.cat2') || "FRAMEWORKS",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: ".NET", icon: <SiDotnet /> },
      ],
    },
    {
      title: t('skills.cat3') || "TOOLS/DB",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "LaTeX", icon: <SiLatex /> },
        { name: "Office", icon: <FaMicrosoft /> },
      ],
    },
    {
      title: t('skills.cat4') || "COMMUNICATION",
      skills: [
        { name: t('skills.esNat') || "ES", icon: <FaLanguage /> },
        { name: t('skills.enB1') || "EN", icon: <FaLanguage /> },
      ],
    },
  ]

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">
          {t('skills.title') || "SKILLS TREE"}
        </h2>

        <div className="skills-bento">
          {categories.map((category, index) => (
            <div className="skill-category retro-container" key={index}>
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-icon" title={skill.name}>
                      {skill.icon}
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

"use client"

import { useMemo } from "react"
import "./Skills.css"
import { motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"

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

const Skills = () => {
  const { t } = useLanguage()

  const blockVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const categories = [
    {
      title: t('skills.cat1'),
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
      title: t('skills.cat2'),
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: ".NET", icon: <SiDotnet /> },
      ],
    },
    {
      title: t('skills.cat3'),
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "LaTeX", icon: <SiLatex /> },
        { name: "Office", icon: <FaMicrosoft /> },
      ],
    },
    {
      title: t('skills.cat4'),
      skills: [
        { name: t('skills.esNat'), icon: <FaLanguage /> },
        { name: t('skills.enB1'), icon: <FaLanguage /> },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t('skills.title')}
        </motion.h2>

        <motion.div 
          className="skills-bento"
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((category, index) => (
            <motion.div className="bento-card skill-category" key={index} variants={itemVariants}>
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    className="skill-item" 
                    key={skillIndex}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <div className="skill-icon" title={skill.name}>
                      {skill.icon}
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

"use client"

import { useMemo } from "react"
import "./Skills.css"
import { useInView } from "react-intersection-observer"
import { useSpring, animated, config } from "react-spring"

const Skills = () => {
  const [sectionRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  // Animation for the section
  const sectionAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: config.gentle,
  })

  const categories = [
    {
      title: "Lenguajes de programación",
      skills: [
        { name: "C", icon: "C" },
        { name: "C++", icon: "C++" },
        { name: "Python", icon: "PY" },
        { name: "C#", icon: "C#" },
        { name: "JavaScript", icon: "JS" },
        { name: "CSS", icon: "CSS" },
      ],
    },
    {
      title: "Frameworks & Librerías",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: ".NET", icon: ".NET" },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "MySQL", icon: "SQL" },
        { name: "PostgreSQL", icon: "PG" },
        { name: "Postman", icon: "🔄" },
        { name: "LaTeX", icon: "LaTeX" },
        { name: "Office", icon: "📊" },
      ],
    },
    {
      title: "Idiomas",
      skills: [
        { name: "Español (nativo)", icon: "🇲🇽" },
        { name: "Inglés (B1)", icon: "🇬🇧" },
      ],
    },
  ]

  const categoryAnimations = useMemo(() => {
    return categories.map((category, index) =>
      useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        delay: 200 * index,
        config: config.gentle,
      }),
    )
  }, [inView, categories])

  const skillAnimations = useMemo(() => {
    return categories.map((category, index) =>
      category.skills.map((skill, skillIndex) =>
        useSpring({
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          delay: 200 * index + 100 * skillIndex,
          config: config.gentle,
        }),
      ),
    )
  }, [inView, categories])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Habilidades</h2>

        <animated.div className="skills-container" style={sectionAnimation}>
          {categories.map((category, index) => (
            <animated.div className="skills-category" key={index} style={categoryAnimations[index]}>
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <animated.div className="skill-item" key={skillIndex} style={skillAnimations[index][skillIndex]}>
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                  </animated.div>
                ))}
              </div>
            </animated.div>
          ))}
        </animated.div>
      </div>
    </section>
  )
}

export default Skills

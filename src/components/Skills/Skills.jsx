"use client"

import { useEffect, useRef } from "react"
import "./Skills.css"

const Skills = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Habilidades</h2>

        <div className="skills-container">
          <div className="skills-category">
            <h3 className="skills-category-title">Lenguajes de programación</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">C</div>
                <div className="skill-name">C</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">C++</div>
                <div className="skill-name">C++</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">PY</div>
                <div className="skill-name">Python</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">C#</div>
                <div className="skill-name">C#</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">JS</div>
                <div className="skill-name">JavaScript</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">CSS</div>
                <div className="skill-name">CSS</div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">Frameworks & Librerías</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">⚛️</div>
                <div className="skill-name">React</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🟢</div>
                <div className="skill-name">Node.js</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">.NET</div>
                <div className="skill-name">.NET</div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">Herramientas</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">SQL</div>
                <div className="skill-name">MySQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">PG</div>
                <div className="skill-name">PostgreSQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔄</div>
                <div className="skill-name">Postman</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">LaTeX</div>
                <div className="skill-name">LaTeX</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📊</div>
                <div className="skill-name">Office</div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">Idiomas</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">🇲🇽</div>
                <div className="skill-name">Español (nativo)</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🇬🇧</div>
                <div className="skill-name">Inglés (B1)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

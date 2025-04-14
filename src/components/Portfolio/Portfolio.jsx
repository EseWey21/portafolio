"use client"

import { useEffect, useRef } from "react"
import "./Portfolio.css"

const Portfolio = () => {
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

  const projects = [
    {
      id: 1,
      title: "Proyecto de Seguridad",
      description: "Sistema de análisis de vulnerabilidades desarrollado para la consultoría de seguridad.",
      tags: ["C#", ".NET", "SQL"],
      link: "#",
    },
    {
      id: 2,
      title: "Aplicación Web",
      description: "Desarrollo frontend con React para una plataforma de gestión de datos.",
      tags: ["React", "JavaScript", "CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Sistema de Monitoreo",
      description: "Herramienta para monitorear y analizar tráfico de red en tiempo real.",
      tags: ["Python", "PostgreSQL"],
      link: "#",
    },
    {
      id: 4,
      title: "API REST",
      description: "Desarrollo de servicios backend para aplicación móvil.",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "#",
    },
  ]

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Portafolio</h2>
        <p className="portfolio-note">
          Nota: Muchos de mis proyectos son privados por preferencia personal. Aquí hay algunos ejemplos
          representativos.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="project-tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-overlay">
                <a href={project.link} className="project-link">
                  Ver Detalles
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <a href="https://github.com/EseWey21" target="_blank" rel="noopener noreferrer" className="btn">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sajit-ventura-4197411b7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

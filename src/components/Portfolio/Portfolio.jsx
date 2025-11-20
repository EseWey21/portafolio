"use client"
import "./Portfolio.css"
import { useInView } from "react-intersection-observer"
import { useSpring, animated, config } from "react-spring"

const Portfolio = () => {
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

  const projects = [
    {
      id: 1,
      title: "Servidor P2P tipo Torrent",
      description:
        "Desarrollo de un programa en Python que implementa un sistema de compartición de archivos peer-to-peer similar a BitTorrent.",
      tags: ["Python"],
      link: "https://github.com/EseWey21/SD/tree/main/Proyecto",
    },
    {
      id: 2,
      title: "Plataforma de Inteligencia de Datos",
      description:
        "Plataforma de análisis de sábanas telefónicas para investigación y análisis de datos de comunicación.",
      tags: ["React", "C#", ".NET"],
      link: null,
    },
    {
      id: 3,
      title: "BestPCDeals",
      description: "Sitio web para encontrar las mejores ofertas en componentes y equipos de cómputo.",
      tags: ["React", "Node.js"],
      link: "https://bestpcdeals.febacode.com",
    },
    {
      id: 4,
      title: "Portafolio Personal",
      description: "Diseño y desarrollo de mi sitio web personal con estética cyberpunk/retro.",
      tags: ["React", "JavaScript", "CSS"],
      link: "#",
    },
  ]

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Portafolio</h2>
        <animated.p className="portfolio-note" style={sectionAnimation}>
          Algunos de mis proyectos personales y profesionales más destacados.
        </animated.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <animated.div
          className="portfolio-cta"
          style={useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            delay: 600,
            config: config.gentle,
          })}
        >
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
        </animated.div>
      </div>
    </section>
  )
}

// Extraído como componente separado y optimizado
const ProjectCard = ({ project, index }) => {
  // Usamos useInView con triggerOnce: true para que se active solo una vez
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  // Animación inicial de entrada (solo se ejecuta una vez)
  const projectAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30px)",
    delay: 150 * index,
    config: config.gentle,
  })

  return (
    <animated.div className="project-card" key={project.id} style={projectAnimation} ref={ref}>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, tagIndex) => (
            <span className="project-tag" key={tagIndex}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      {project.link && (
        <div className="project-overlay">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            Ver Detalles
          </a>
        </div>
      )}
    </animated.div>
  )
}

export default Portfolio

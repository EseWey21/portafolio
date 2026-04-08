import { useEffect, useRef } from "react"
import "./Portfolio.css"
import { useLanguage } from "../../context/LanguageContext"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Portfolio = () => {
  const { t } = useLanguage()
  const portfolioRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.p1.title'),
      description: t('portfolio.projects.p1.desc'),
      tags: ["React", "C#", ".NET"],
      link: null,
    },
    {
      id: 2,
      title: t('portfolio.projects.p2.title'),
      description: t('portfolio.projects.p2.desc'),
      tags: ["React", "Node.js"],
      link: null,
    },
    {
      id: 3,
      title: t('portfolio.projects.p3.title'),
      description: t('portfolio.projects.p3.desc'),
      tags: ["React", "React Native", "Node.js"],
      link: "https://macaracafe.com",
    },
    {
      id: 4,
      title: t('portfolio.projects.p4.title'),
      description: t('portfolio.projects.p4.desc'),
      tags: ["React", "Node.js"],
      link: "https://ecoprep.com.mx",
    },
    {
      id: 5,
      title: t('portfolio.projects.p5.title'),
      description: t('portfolio.projects.p5.desc'),
      tags: ["Python"],
      link: "https://github.com/EseWey21/SD/tree/main/Proyecto",
    },
  ]

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".section-title", 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".portfolio",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        }
      );

      gsap.fromTo(".portfolio-note", 
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".portfolio",
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        }
      );

      gsap.fromTo(".project-card", 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)"
        }
      );
      
      gsap.fromTo(".portfolio-cta .btn", 
        { scale: 0.8, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".portfolio-cta",
            start: "top 90%",
          },
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.5)"
        }
      );

    }, portfolioRef);

    return () => ctx.revert();
  }, [])

  return (
    <section id="portfolio" className="portfolio" ref={portfolioRef}>
      <div className="container">
        <h2 className="section-title">
          {t('portfolio.title') || "LEVELS"}
        </h2>
        
        <p className="portfolio-note">
          {t('portfolio.subtitle') || "Select your stage"}
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              viewDetailsText={t('portfolio.viewDetails') || "PLAY"} 
            />
          ))}
        </div>

        <div className="portfolio-cta">
          <a href="https://github.com/EseWey21" target="_blank" rel="noopener noreferrer">
            <button>GITHUB</button>
          </a>
          <a href="https://linkedin.com/in/sajit-ventura-4197411b7" target="_blank" rel="noopener noreferrer">
            <button>LINKEDIN</button>
          </a>
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, viewDetailsText }) => {
  return (
    <div className="project-card retro-container">
      <div className="project-header">STAGE {project.id}</div>
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
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-overlay">
          <span className="project-link-text">{viewDetailsText}</span>
        </a>
      )}
    </div>
  )
}

export default Portfolio

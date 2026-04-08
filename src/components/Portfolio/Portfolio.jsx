"use client"
import "./Portfolio.css"
import { motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"

const Portfolio = () => {
  const { t } = useLanguage()

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t('portfolio.title')}
        </motion.h2>
        
        <motion.p 
          className="portfolio-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t('portfolio.subtitle')}
        </motion.p>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={cardVariants} viewDetailsText={t('portfolio.viewDetails')} />
          ))}
        </motion.div>

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
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
        </motion.div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, viewDetailsText, variants }) => {
  return (
    <motion.div 
      className="bento-card project-card" 
      variants={variants}
    >
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
            {viewDetailsText}
          </a>
        </div>
      )}
    </motion.div>
  )
}

export default Portfolio

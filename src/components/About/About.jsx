"use client"

import { useEffect, useRef } from "react"
import "./About.css"

const About = () => {
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
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-frame">
              <div className="about-image-placeholder">
                <div className="about-image-glitch"></div>
                <span className="about-image-text">SAJIT</span>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p>
              Hola, soy <span className="highlight">Sajit (Edgar Sajit Lopez Ventura)</span>, tengo 22 años y soy
              estudiante de Ingeniería en Telemática en UPIITA – IPN. Actualmente también me desempeño como
              desarrollador junior en una consultoría enfocada en seguridad y protección informática.
            </p>
            <p>
              Soy una persona <span className="highlight">apasionada, entusiasta, imaginativa y dedicada</span>. Me
              esfuerzo por dejar una buena impresión en cada interacción, procurando siempre el respeto, la cordialidad
              y la amabilidad. Cuando una idea se me clava en la mente, no descanso hasta convertirla en acción. Me
              encanta aprender de forma autodidacta, aunque cuando es necesario, no dudo en buscar guía de las personas
              adecuadas.
            </p>
            <p>
              Valoro mucho formar vínculos fuertes y auténticos. Me rodeo de personas que me inspiran y me impulsan a
              crecer.
            </p>
            <p>
              Además de programar, disfruto de los{" "}
              <span className="highlight">videojuegos, el cine y escuchar música</span> —mi actividad favorita 24/7.
            </p>
            <div className="about-more">
              <p>
                Aunque suelo ser algo tímido al principio, soy una persona carismática, empática y muy comunicativa.
                Trabajo muy bien en equipo, sobre todo cuando hay un propósito en común. Me gusta escuchar, apoyar y
                siempre estar dispuesto a ayudar dentro de mis posibilidades. La justicia, el respeto y la colaboración
                son valores que guían mi forma de ser y trabajar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

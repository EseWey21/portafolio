"use client"
import "./About.css"
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"
// Importamos la imagen 
// Asumiendo que tienes una imagen en la carpeta assets o public
// Si usas Vite, puedes importarla directamente así:
import miImagen from '../assets/profile.jpg' // Ajusta la ruta según tu estructura de carpetas

const About = () => {
  const [sectionRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  // Animation for the image frame
  const imageAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.8)",
    config: { mass: 1, tension: 120, friction: 14 },
  })

  // Animation for the text content
  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: 300,
    config: { mass: 1, tension: 120, friction: 14 },
  })

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <animated.div className="about-image" style={imageAnimation}>
            <div className="about-image-frame">
              <div className="about-image-placeholder">
                <div className="about-image-glitch"></div>
                {/* Reemplazamos el texto por la imagen */}
                <img src={miImagen} alt="Sajit" className="about-profile-image" />
              </div>
            </div>
          </animated.div>
          <animated.div className="about-text" style={textAnimation}>
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
            <animated.div
              className="about-more"
              style={useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                delay: 600,
                config: { mass: 1, tension: 120, friction: 14 },
              })}
            >
              <p>
                Aunque suelo ser algo tímido al principio, soy una persona carismática, empática y muy comunicativa.
                Trabajo muy bien en equipo, sobre todo cuando hay un propósito en común. Me gusta escuchar, apoyar y
                siempre estar dispuesto a ayudar dentro de mis posibilidades. La justicia, el respeto y la colaboración
                son valores que guían mi forma de ser y trabajar.
              </p>
            </animated.div>
          </animated.div>
        </div>
      </div>
    </section>
  )
}

export default About
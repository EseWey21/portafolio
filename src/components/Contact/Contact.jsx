"use client"

import { useState } from "react"
import "./Contact.css"
import { useInView } from "react-intersection-observer"
import { useSpring, animated, config } from "react-spring"

const Contact = () => {
  const [sectionRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState(null)

  // Animation for the section
  const sectionAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: config.gentle,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus("sending")

    setTimeout(() => {
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        message: "",
      })

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus(null)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <animated.div className="contact-container" style={sectionAnimation}>
          <animated.div
            className="contact-info"
            style={useSpring({
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-50px)",
              delay: 300,
              config: config.gentle,
            })}
          >
            <div className="contact-item">
              <div className="contact-item-icon">📧</div>
              <div className="contact-item-content">
                <h3 className="contact-item-title">Correo</h3>
                <p className="contact-item-value">sajitlove@hotmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📱</div>
              <div className="contact-item-content">
                <h3 className="contact-item-title">Teléfono</h3>
                <p className="contact-item-value">551 725 3335</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">🔗</div>
              <div className="contact-item-content">
                <h3 className="contact-item-title">Redes</h3>
                <div className="contact-social-links">
                  <a
                    href="https://github.com/EseWey21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/sajit-ventura-4197411b7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </animated.div>

          <animated.div
            className="contact-form-container"
            style={useSpring({
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(50px)",
              delay: 300,
              config: config.gentle,
            })}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <span className="form-title">ENVIAR_MENSAJE.exe</span>
                <div className="form-controls">
                  <span className="form-control">_</span>
                  <span className="form-control">□</span>
                  <span className="form-control">×</span>
                </div>
              </div>

              <div className="form-body">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <span className="form-label-text">NOMBRE:</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span className="form-label-text">CORREO:</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <span className="form-label-text">MENSAJE:</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit" disabled={formStatus === "sending"}>
                  {formStatus === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                </button>

                {formStatus === "success" && (
                  <div className="form-success">
                    <span className="success-icon">✓</span>
                    <span className="success-text">¡Mensaje enviado con éxito!</span>
                  </div>
                )}
              </div>
            </form>
          </animated.div>
        </animated.div>
      </div>
    </section>
  )
}

export default Contact

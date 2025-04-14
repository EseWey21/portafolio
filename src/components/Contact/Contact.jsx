"use client"

import { useEffect, useRef, useState } from "react"
import "./Contact.css"

const Contact = () => {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState(null)

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

        <div className="contact-container">
          <div className="contact-info">
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
          </div>

          <div className="contact-form-container">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

"use client"
import "./Contact.css"
import { useInView } from "react-intersection-observer"
import { useSpring, animated, config } from "react-spring"

const Contact = () => {
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
            {/* Comentamos el formulario de contacto original */}
            {/* ... código comentado del formulario ... */}

            {/* Agregamos el arte ASCII en su lugar */}
            <div className="ascii-art-container">
              <div className="ascii-art-header">
                <span className="form-title">ASCII_ART.exe</span>
                <div className="form-controls">
                  <span className="form-control">_</span>
                  <span className="form-control">□</span>
                  <span className="form-control">×</span>
                </div>
              </div>
              <div className="ascii-art-content">
                <pre className="ascii-art">
                  {`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⣤⣤⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡉⠉⠉⠉⠉⠉⠉⠉⠙⠓⠒⠲⠤⢄⣀⡀⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⠀⠀⠀⠀⠀⠀⠀⠀⡴⠋⠙⢦⡀⠀⠉⠛⠲⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀⡾⠁⢠⠶⣄⠙⣄⠀⠀⠀⠀⠈⠑⠦⣄⠀⢠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⡤⠀⠀⠀⡼⠀⢠⡏⠀⠈⢧⠸⡄⠀⠀⠀⠀⠀⠀⠈⠳⢄⡟⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⡶⠚⠉⠁⠀⠀⠀⢸⠁⠀⡼⠀⠀⠀⠘⡆⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⣄⠙⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣀⣤⣶⡾⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⡇⠀⣀⡤⠴⠃⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠈⢦⣀⡤⠤⠒⠒⠒⢲⠂⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀
⢀⣀⣠⣴⣶⡿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠻⠋⠀⣠⡶⠾⠓⠲⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠖⠉⠀⠀⠀⣀⠴⢲⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠻⣿⣯⡉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢀⡾⠉⠀⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⢠⢧⡧⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠻⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⣸⠀⠀⠀⠀⠀⢀⡴⢤⠀⠀⠹⡄⠀⠀⡤⠚⠀⠀⠀⠀⠈⢧⣤⣯⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⡏⠀⠀⠀⠀⠀⢸⣸⢿⠀⠀⠀⠙⣆⠚⠀⠀⣠⣤⠶⢶⣤⣈⣿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⢿⣾⢿⠀⠀⠀⠀⠘⡷⠒⣿⣶⢸⣠⠴⣾⣿⣿⠀⠀⠀⠀⢀⡴⠚⢻⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⡀⠀⠀⠀⣸⣇⣸⣤⠤⠴⠶⠖⠓⠶⣿⡼⠊⠁⢀⣼⣿⢹⠀⠀⠀⣰⠏⠀⠀⡞⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣈⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠋⠉⠉⠉⠉⠉⢀⣦⣀⠀⠀⠀⠀⠀⠀⠀⠿⠤⠤⠶⣏⣡⠇⢸⠀⠀⢰⡟⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠨⠛⠷⣅⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⡟⠀⢀⣿⣁⣠⠤⣏⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠉⢣⠭⡀⠀⠀⠀⠉⠙⠒⠒⠒⢒⠀⠀⠀⠀⠀⠀⣸⠁⢀⣿⣏⡁⠀⢀⣀⠙⠲⢤⣀⠀⠀⠀
⠀⠀⠀⠀⢀⣴⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⢸⠀⠀⠈⠙⠲⠄⠀⠀⠀⠀⠀⡅⠀⠀⠀⠀⣰⡟⠀⣼⠛⠉⢹⠟⠉⠁⠀⠀⣠⠈⠳⣄⠀
⠀⠀⠀⠀⠻⢿⣷⣦⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⡀⠀⠀⠀⠀⠘⢤⠀⠀⠀⠀⠀⠀⠀⡀⠎⠀⠀⠀⠀⠀⣰⢟⡴⠚⠁⠀⢠⣿⠀⠀⠀⢠⡞⠁⠀⠀⠈⣧
⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠿⠷⣶⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⡀⠀⠀⠀⠈⠑⠢⠤⠤⠂⠀⠀⠀⠀⠀⠀⢀⣠⡾⠋⡟⠀⠀⣠⢶⠋⢿⣄⡀⢰⠋⠀⠀⢠⡆⢈⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠿⠶⠤⣤⣄⣀⡀⠀⠀⠙⢲⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠴⠛⠁⠀⣠⣇⠀⠀⠀⠈⡇⠀⠀⠉⠉⠦⠤⢤⠎⢉⡜⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣩⡽⣿⡿⣻⠿⣧⠉⠉⠙⠛⣳⠶⠚⠛⠛⠻⢶⣄⠀⠀⣰⠃⠹⣄⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⢀⣰⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⠴⠚⠉⣤⣞⠗⠉⣰⡿⠁⠀⠀⠀⣸⠃⠀⠀⠀⠀⠀⠀⠹⣿⠏⠹⡆⠀⠈⠓⢦⡀⠀⠀⠀⠀⠀⣀⣴⠟⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣆⠀⣾⡟⠁⠤⣿⣉⣀⡀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠸⡇⠀⠳⠀⠀⠀⠀⠙⠲⠶⢶⣾⠛⠉⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⢀⠀⠀⢀⣤⠈⣧⣿⣂⣀⣈⣛⠷⠎⢻⣀⠀⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣠⠶⠟⠟⢀⡞⠁⠀⠀⠀⠀⠀⠀⠀⣸⠋⢳⡀⠈⢧⠀⠀⠀⠀⠀⠀⠀⢰⣏⣧⡀⠀⠀⢀⡴⠒⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠇⡅⠀⠑⠦⠀⠀⠀⠀⠀⢟⠁⠀⠉⠙⠚⢁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`}
                </pre>
              </div>
            </div>
          </animated.div>
        </animated.div>
      </div>
    </section>
  )
}

export default Contact

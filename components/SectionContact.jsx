"use client"

import { useState, useEffect, useRef } from "react"
import { Mail, Phone, Linkedin, Instagram, PhoneIcon as Whatsapp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SectionContact({ show, onClose }) {
  const [isDark, setIsDark] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("") // 'idle', 'submitting', 'success', 'error'

  // Referencia al contenedor scrolleable
  const scrollContainerRef = useRef(null)

  // Reset scroll cuando se abre el componente
  useEffect(() => {
    if (show && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [show])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Formulario enviado:", data)
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        console.error("Error al enviar el formulario:", data.error)
        setStatus("error")
      }
    } catch (error) {
      console.error("Error de red o inesperado:", error)
      setStatus("error")
    }
  }

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/56923927777",
      icon: Whatsapp,
      className: "btn-whatsapp",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/maurizio-caballero/",
      icon: Linkedin,
      className: "btn-linkedin",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/devmauriz?igsh=eWo4dTFtcHhmeXpm",
      icon: Instagram,
      className: "btn-instagram",
    },
  ]

  return (
    <section
      ref={scrollContainerRef}
      className={`fixed inset-0 w-screen h-screen font-azonix z-40 transition-all duration-1000 ease-in-out overflow-y-auto noise-overlay ${
        show ? "transform translate-y-0" : "transform translate-y-full"
      } ${isDark ? "dark bg-gray-900 text-white" : "bg-stone-200 text-zinc-800"}`}
    >
      {/* Header */}
      <div
        className={`sticky top-0 backdrop-blur-lg border-b p-4 z-20 ${
          isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="title-section mb-0">Contacto</h1>
          <div className="flex items-center gap-3">
            <button onClick={toggleDarkMode} className="btn-toggle">
              {isDark ? "☀️" : "🌙"}
            </button>
            <button onClick={onClose} className="btn-primary">
              <span className="text-xl">←</span> Volver
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-6xl mx-auto p-4 md:p-6 space-y-12 md:space-y-16 z-10">
        {/* Introducción */}
        <div className="text-center space-y-4 md:space-y-6 py-6 md:py-8">
          <h2 className="title-main mb-4">¡Hablemos!</h2>
          <p className="text-intro max-w-4xl mx-auto font-sans">
            Estoy disponible para nuevos proyectos, colaboraciones o simplemente para charlar sobre tecnología.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* Formulario de Contacto */}
          <div className="card-primary">
            <h3 className="title-section flex items-center gap-3">
              <Mail className="w-6 h-6 md:w-8 md:h-8" /> Envíame un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                  className="form-input disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                  className="form-input disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  disabled={status === "submitting"}
                  className="form-textarea disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="form-success"
                  >
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    key="error-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="form-error"
                  >
                    Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Redes Sociales */}
          <div className="card-secondary">
            <h3 className="title-section flex items-center gap-3">
              <Phone className="w-6 h-6 md:w-8 md:h-8" /> O encuéntrame en:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-social ${social.className}`}
                  >
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                    <span className="text-sm md:text-base">{social.name}</span>
                  </a>
                )
              })}
            </div>
            <p className="text-zinc-600 mt-6 text-center font-sans text-sm md:text-base">
              Respondo rápidamente en todas las plataformas. ¡Elige la que prefieras!
            </p>
          </div>

          {/* Información adicional */}
          <div className="card-primary">
            <h3 className="title-section flex items-center gap-3">
              <span className="text-2xl md:text-4xl">💼</span> ¿En qué puedo ayudarte?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 font-sans">
              <div className="space-y-4">
                <h4 className="title-subsection">Servicios que ofrezco:</h4>
                <ul className="space-y-2 text-responsive text-zinc-600">
                  <li>• Desarrollo de aplicaciones web con React y Next.js</li>
                  <li>• Diseño y desarrollo de interfaces de usuario</li>
                  <li>• Optimización de rendimiento web</li>
                  <li>• Integración de APIs y servicios</li>
                  <li>• Consultoría en tecnologías frontend</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="title-subsection">Tiempo de respuesta:</h4>
                <ul className="space-y-2 text-responsive text-zinc-600">
                  <li>• WhatsApp: Inmediato (horario laboral)</li>
                  <li>• Email: Dentro de 24 horas</li>
                  <li>• LinkedIn: 1-2 días hábiles</li>
                  <li>• Instagram: 2-3 días</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

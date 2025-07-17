"use client"

import { useState } from "react"
import { Mail, Phone, Linkedin, Instagram, PhoneIcon as Whatsapp } from "lucide-react"

export default function SectionContact({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("") // 'idle', 'submitting', 'success', 'error'

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
        setFormData({ name: "", email: "", message: "" }) // Limpiar formulario
      } else {
        console.error("Error al enviar el formulario:", data.error)
        setStatus("error")
      }
    } catch (error) {
      console.error("Error de red o inesperado:", error)
      setStatus("error")
    }
  }

  return (
    <section
      className={`fixed inset-0 w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white font-azonix z-40 transition-transform duration-1000 ease-in-out overflow-y-auto ${
        show ? "transform translate-y-0" : "transform translate-y-full"
      }`}
    >
      {/* Header con botón de volver */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-sm border-b border-cyan-400/20 p-4 z-10 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">Contacto</h1>
          <button
            onClick={onClose}
            className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
          >
            <span>←</span> Volver
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto p-6 space-y-10 py-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">¡Hablemos!</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Estoy disponible para nuevos proyectos, colaboraciones o simplemente para charlar.
          </p>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/20 shadow-lg">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6" /> Envíame un mensaje
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-white/90 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-white/90 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-white/90 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-black"
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
            {status === "success" && (
              <p className="text-green-400 text-center mt-4">¡Mensaje enviado con éxito! Te responderé pronto.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center mt-4">
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente.
              </p>
            )}
          </form>
        </div>

        {/* Botones de Redes Sociales */}
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/20 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center justify-center gap-2">
            <Phone className="w-6 h-6" /> O encuéntrame en:
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://wa.me/56923927777" // ¡Cambia esto por tu número de WhatsApp!
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-green-600 text-white hover:bg-green-500 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Whatsapp className="w-8 h-8" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a
              href="https://www.linkedin.com/in/maurizio-caballero/" // ¡Cambia esto por tu perfil de LinkedIn!
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-blue-700 text-white hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Linkedin className="w-8 h-8" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/devmauriz?igsh=eWo4dTFtcHhmeXpm" // ¡Cambia esto por tu usuario de Instagram!
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-pink-600 text-white hover:bg-pink-500 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Instagram className="w-8 h-8" />
              <span className="text-sm">Instagram</span>
            </a>
            {/* Puedes añadir más redes sociales aquí */}
          </div>
        </div>
      </div>
    </section>
  )
}

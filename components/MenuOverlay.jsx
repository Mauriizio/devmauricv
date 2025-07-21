"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projectsData } from "@/data/projects"

const projectIcons = [
  { id: "mecanica-int", name: "Mecanica Intercontinental", icon: "/assets/proyecto1.png", color: "bg-orange-500" },
  { id: "css3", name: "CSS3", icon: "/logos/lcss.png", color: "bg-blue-500" },
  { id: "javascript", name: "JavaScript", icon: "/logos/ljs.png", color: "bg-yellow-400" },
  { id: "react", name: "React", icon: "/logos/lwor.png", color: "bg-cyan-400" },
  { id: "nextjs", name: "Next.js", icon: "/logos/lnext.png", color: "bg-gray-700" },
  { id: "tailwind", name: "Tailwind", icon: "/logos/ltailwind.png", color: "bg-teal-500" },
]

export default function MenuOverlay({ show, onClose, onProjectSelect }) {
  const [isDark, setIsDark] = useState(false)

  // Referencia al contenedor scrolleable
  const scrollContainerRef = useRef(null)

  // Reset scroll cuando se abre el componente
  useEffect(() => {
    if (show && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [show])

  const handleProjectClick = (projectId) => {
    const project = projectsData.find((p) => p.id === projectId)
    if (project) {
      onProjectSelect(project)
      onClose()
    }
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          ref={scrollContainerRef}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`fixed inset-0 w-screen h-screen font-azonix z-50 transition-all duration-1000 ease-in-out overflow-y-auto noise-overlay ${
            isDark ? "dark bg-gray-900 text-white" : "bg-stone-200 text-zinc-800"
          }`}
        >
          {/* Header */}
          <div
            className={`sticky top-0 backdrop-blur-lg border-b p-4 z-20 ${
              isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"
            }`}
          >
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <h1 className="title-section mb-0">Proyectos</h1>
              <div className="flex items-center gap-3">
                <button onClick={toggleDarkMode} className="btn-toggle">
                  {isDark ? "☀️" : "🌙"}
                </button>
                <button onClick={onClose} className="btn-primary">
                  <span className="text-xl">✕</span> Cerrar
                </button>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="relative max-w-6xl mx-auto p-4 md:p-6 space-y-12 md:space-y-16 z-10">
            {/* Introducción */}
            <div className="text-center space-y-4 md:space-y-6 py-6 md:py-8">
              <h2 className="title-main mb-4">Mis Proyectos</h2>
              <p className="text-intro max-w-4xl mx-auto font-sans">
                Explora mi portafolio de proyectos desarrollados con las últimas tecnologías web.
              </p>
            </div>

            <div className="space-y-12 md:space-y-16">
              {/* Grid de proyectos */}
              <div className="card-secondary">
                <h3 className="title-section flex items-center gap-3">
                  <span className="text-2xl md:text-4xl">🚀</span> Selecciona un proyecto
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {projectIcons.map((proj, index) => (
                    <motion.div
                      key={proj.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleProjectClick(proj.id)}
                      className="project-card"
                    >
                      <div className="project-icon-container mx-auto">
                        <img
                          src={proj.icon || "/placeholder.svg"}
                          alt={proj.name}
                          className="w-8 h-8 md:w-12 md:h-12 object-contain mx-auto"
                        />
                      </div>
                      <h4 className="title-subsection text-center text-sm md:text-base font-sans">{proj.name}</h4>
                    </motion.div>
                  ))}
                </div>
                <p className="text-zinc-600 mt-6 text-center font-sans text-sm md:text-base">
                  Haz clic en cualquier proyecto para ver más detalles.
                </p>
              </div>

              {/* Información adicional */}
              <div className="card-primary">
                <h3 className="title-section flex items-center gap-3">
                  <span className="text-2xl md:text-4xl">💡</span> Sobre mis proyectos
                </h3>
                <div className="grid md:grid-cols-2 gap-6 font-sans">
                  <div className="space-y-4">
                    <h4 className="title-subsection">Tecnologías principales:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"].map((tech) => (
                        <div key={tech} className="tag-tech">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="title-subsection">Enfoque de desarrollo:</h4>
                    <ul className="space-y-2 text-responsive text-zinc-600">
                      <li>• Diseño responsive y mobile-first</li>
                      <li>• Optimización de rendimiento</li>
                      <li>• Código limpio y mantenible</li>
                      <li>• Experiencia de usuario intuitiva</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action final */}
            <div className="text-center py-6 md:py-8">
              <p className="text-responsive text-zinc-600 mb-4 md:mb-6 font-sans">
                ¿Te interesa algún proyecto? ¡Hablemos!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">Contactar</button>
                <button onClick={onClose} className="btn-secondary">
                  Volver al inicio
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

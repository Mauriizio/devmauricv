// components/MenuOverlay.jsx
"use client"

import { useEffect, useRef } from "react"
import Head from "next/head"
import { motion, AnimatePresence } from "framer-motion"
import { projectsData } from "@/data/projects"
import { useTheme } from "@/context/ThemeContext"

export default function MenuOverlay({ show, onClose, onProjectSelect }) {
  const { isDark, toggleDarkMode } = useTheme()
  const scrollContainerRef = useRef(null)

  // Reset scroll al abrir
  useEffect(() => {
    if (show && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [show])

  // Manejo de teclado (ESC para cerrar)
  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose?.()
  }

  const menuProjects = Array.isArray(projectsData) ? projectsData : []

  // SEO (solo al abrir para no duplicar metas)
  const seoDescription =
    "Explora el portafolio de proyectos de Maurizio Caballero: React, Next.js, Tailwind y más."
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Proyectos de Maurizio Caballero",
    itemListElement: menuProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: p.title || p.id,
      url: `#project-${p.id}`,
    })),
  }

  return (
    <AnimatePresence>
      {show && (
        <>
          <Head>
            <title>Proyectos — devMauriz</title>
            <meta name="description" content={seoDescription} />
            <meta name="robots" content="index,follow" />
            <meta name="author" content="Maurizio Caballero" />
            <meta name="theme-color" content={isDark ? "#0b0b0b" : "#f5f5f4"} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="devMauriz" />
            <meta property="og:title" content="Proyectos — devMauriz" />
            <meta property="og:description" content={seoDescription} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Proyectos — devMauriz" />
            <meta name="twitter:description" content={seoDescription} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          </Head>

          <motion.section
            ref={scrollContainerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="overlay-title"
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 w-screen h-screen font-azonix z-50 overflow-y-auto noise-overlay bg-stone-200 text-zinc-800 dark:bg-gray-900 dark:text-white"
          >
            {/* Header */}
            <div className="sticky top-0 backdrop-blur-lg border-b p-4 z-20 bg-stone-200/60 border-stone-300/50 dark:bg-gray-900/60 dark:border-white/10">
              <div className="flex items-center justify-between max-w-6xl mx-auto px-2 gap-2 overflow-hidden">
                <h1 id="overlay-title" className="title-section mb-0 min-w-0 truncate">
                  Proyectos
                </h1>
                <div className="shrink-0 flex items-center gap-3">
                  <button onClick={toggleDarkMode} className="btn-toggle" aria-label="Cambiar tema">
                    {isDark ? "☀️" : "🌙"}
                  </button>
                  <button onClick={onClose} className="btn-primary">
                    <span className="text-xl" aria-hidden>✕</span> Cerrar
                  </button>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="relative max-w-6xl mx-auto p-4 md:p-6 space-y-8 md:space-y-12 z-10">
              {/* Intro */}
              <div className="text-center space-y-3 md:space-y-4 py-4 md:py-6">
                <h2 className="title-main mb-3">Mis Proyectos</h2>
                <p className="text-intro  max-w-4xl mx-6 font-orbitron">
                  Explora mi portafolio de proyectos desarrollados con las últimas tecnologías web.
                </p>
              </div>

              <div className="space-y-8 md:space-y-12">
                {/* Grid de proyectos */}
                <div className="card-secondary">
                  <h3 className="title-section flex items-center gap-3">
                    <span className="text-xl md:text-2xl">🚀</span> Selecciona un proyecto
                  </h3>

                  {/* 1 col en mobile, 2 cols en md+; cards grandes y consistentes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {menuProjects.map((proj, index) => (
                      <motion.button
                        type="button"
                        key={proj.id}
                        id={`project-${proj.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06, duration: 0.22 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => { onProjectSelect(proj) }}
                        className="group rounded-2xl overflow-hidden border border-stone-300/70 dark:border-white/10 shadow-lg bg-white/60 dark:bg-white/5 text-left"
                      >
                        {/* Imagen con aspect-video para que siempre llene el card */}
                       <div className="relative w-full aspect-video overflow-hidden bg-white dark:bg-white">
                          <img
                            src={proj.icon || proj.image || "/placeholder.svg"}
                            alt={proj.title || proj.id}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => { e.currentTarget.src = "/placeholder.svg" }}
                          />
                        </div>

                        {/* Título */}
                        <div className="px-4 py-3 bg-white">
                          <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 font-orbitron text-center text-base md:text-lg  truncate">
                            {proj.title || proj.id}
                          </h4>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <p className="text-zinc-200dark:text-white mt-4 text-center font-orbitron text-xs md:text-sm">
                    Haz clic en cualquier proyecto para ver más detalles.
                  </p>
                </div>
              </div>

              {/* Información adicional */}
                <div className="card-primary">
                  <h3 className="title-section flex items-center text-center gap-3">
                    <span className="text-xl md:text-2xl">💡</span> Sobre mis proyectos
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 font-sans">
                    <div className="space-y-3">
                      <h4 className="title-subsection text-center">Tecnologías principales:</h4>
                      <div className="flex flex-wrap text-center gap-2">
                        {["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"].map((tech) => (
                          <div key={tech} className="tag-tech">
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-0">
                      <h4 className="title-subsection text-center">Enfoque de desarrollo:</h4>
                      <ul className="space-y-1 text-responsive text-center text-zinc-600 dark:text-gray-300">
                        <li>• Diseño responsive y mobile-first</li>
                        <li>• Optimización de rendimiento</li>
                        <li>• Código limpio y mantenible</li>
                        <li>• Experiencia de usuario intuitiva</li>
                      </ul>
                    </div>
                  </div>
                </div>
              

              {/* CTA final */}
              <div className="text-center py-4 md:py-6">
                <p className="text-responsive text-zinc-600 dark:text-gray-300 mb-3 md:mb-4 font-sans">
                  ¿Te interesa algún proyecto? ¡Hablemos!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="btn-primary">Contactar</button>
                  <button onClick={onClose} className="btn-secondary">
                    Volver al inicio
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  )
}

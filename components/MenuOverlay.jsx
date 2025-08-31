// components/MenuOverlay.jsx
"use client"

import { useEffect, useRef } from "react"
import Head from "next/head"
import { motion, AnimatePresence } from "framer-motion"
import { projectsData } from "@/data/projects"
import { useTheme } from "@/context/ThemeContext"
import { useFocusTrap } from "@/components/useFocusTrap"

export default function MenuOverlay({ show, onClose, onProjectSelect }) {
  const { isDark, toggleDarkMode } = useTheme()
  const scrollContainerRef = useRef(null)
  const dialogRef = useRef(null)
  useFocusTrap(dialogRef, show)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const canonical = siteUrl ? `${siteUrl}?view=projects` : undefined

  // Reset scroll al abrir
  useEffect(() => {
    if (show && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [show])

  // ESC para cerrar
  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose?.()
  }

  const menuProjects = Array.isArray(projectsData) ? projectsData : []

  // SEO sólo cuando se muestra el overlay
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
      url: siteUrl ? `${siteUrl}#project-${p.id}` : `#project-${p.id}`,
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
            {canonical ? <link rel="canonical" href={canonical} /> : null}

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="devMauriz" />
            <meta property="og:title" content="Proyectos — devMauriz" />
            <meta property="og:description" content={seoDescription} />
            {canonical ? <meta property="og:url" content={canonical} /> : null}
            <meta property="og:image" content="/assets/avatar-right2.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Proyectos — devMauriz" />
            <meta name="twitter:description" content={seoDescription} />

            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          </Head>

          <motion.section
            ref={(node) => {
              scrollContainerRef.current = node
              dialogRef.current = node
            }}
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
                <h1 id="overlay-title" className="title-section mb-0 min-w-0 truncate text-center w-full">
                  Proyectos
                </h1>
                <div className="absolute right-4 top-3 flex items-center gap-3">
                  <button onClick={toggleDarkMode} className="btn-toggle" aria-label="Cambiar tema">
                    {isDark ? "☀️" : "🌙"}
                  </button>
                  <button onClick={onClose} className="btn-primary">
                    <span className="text-xl" aria-hidden>✕</span> Cerrar
                  </button>
                </div>
              </div>
            </div>

            {/* Intro breve */}
            <div className="text-center space-y-3 md:space-y-4 py-4 md:py-6">
              <h2 className="title-main mb-2">Mis Proyectos</h2>
              <p className="text-responsive max-w-3xl mx-auto">
                Una selección curada de trabajos con tecnologías modernas.
              </p>
            </div>

            {/* GRID de proyectos — sin “box” alrededor */}
            <div className="relative max-w-6xl mx-auto px-4 md:px-6 pb-8 md:pb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {menuProjects.map((proj, index) => (
                  <motion.button
                    type="button"
                    key={proj.id}
                    id={`project-${proj.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.22 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onProjectSelect(proj)}
                    aria-label={`Abrir proyecto: ${proj.title || proj.id}`}
                    className="group project-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    {/* Miniatura */}
                    <div className="relative w-full aspect-video overflow-hidden bg-white">
                      {proj.category && (
                        <span
                          className="absolute top-2 left-2 z-10 inline-flex items-center px-2 py-1 rounded-md bg-white/80 text-gray-900 text-[10px] md:text-xs uppercase tracking-wide ring-1 ring-black/10 shadow-sm max-w-[70%] truncate"
                          title={proj.category}
                        >
                          {proj.category}
                        </span>
                      )}

                      <img
                        src={proj.icon || proj.image || "/placeholder.svg"}
                        alt={proj.title || proj.id}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                        onError={(e) => { e.currentTarget.src = "/placeholder.svg" }}
                      />

                      {/* Overlay sutil en hover */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Título */}
                    <div className="px-4 py-3 bg-white dark:bg-gray-900">
                      <h4 className="font-azonix text-gray-900 dark:text-white text-center text-sm sm:text-base md:text-lg truncate">
                        {proj.title || proj.id}
                      </h4>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* CTA final */}
              <div className="text-center pt-8 md:pt-10">
                <p className="text-responsive mb-3 md:mb-4">
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

// components/MenuOverlay.jsx
"use client"

import { useEffect, useRef } from "react"
import Head from "next/head"
import { motion, AnimatePresence } from "framer-motion"
import { projectsData } from "@/data/projects"
import { useTheme } from "@/context/ThemeContext"
import { useFocusTrap } from "@/components/useFocusTrap"
import LogoMC from "@/components/LogoMC"
import { Menu, X as IconX, Sun, Moon } from "lucide-react"

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
           {/* Header */}
<div className="sticky top-0 backdrop-blur-lg border-b p-4 z-20 bg-stone-200/60 border-stone-300/50 dark:bg-gray-900/60 dark:border-white/10">
  <div className="max-w-6xl mx-auto px-2 sm:px-4">
    <div className="flex items-center gap-2 sm:gap-3 min-h-[56px] md:min-h-[64px]">
      {/* IZQ: Logo */}
      <div className="flex-1 min-w-0 flex items-center">
        <div className="h-7 md:h-8 flex items-center">
          <LogoMC />
        </div>
      </div>

      {/* DER: Acciones (derecha → izquierda: Toggle menú, X, tema, WhatsApp) */}
      <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
        {/* WhatsApp (queda más a la izquierda dentro del grupo para que se vea derecha→izquierda como pediste) */}
        <a
          href="https://wa.me/56923927777"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
              : "text-cyan-700 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-800/30 hover:border-cyan-800/60"
          }`}
        >
          {/* pequeño ícono WA */}
          <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z"/>
          </svg>
        </a>

        {/* Tema claro/oscuro */}
        <button
          onClick={toggleDarkMode}
          aria-label="Cambiar tema"
          aria-pressed={isDark}
          title={isDark ? "Tema claro" : "Tema oscuro"}
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
              : "text-cyan-700 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-800/30 hover:border-cyan-800/60"
          }`}
        >
          {isDark ? <Sun size={16} className="fill-current" /> : <Moon size={16} className="fill-current" />}
        </button>

        {/* Cerrar (X) */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          title="Cerrar"
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
              : "text-cyan-700 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-800/30 hover:border-cyan-800/60"
          }`}
        >
          <IconX size={16} />
        </button>

        
      </div>
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

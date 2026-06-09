// components/MenuOverlay.jsx
"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Head from "next/head"
import { motion, AnimatePresence } from "framer-motion"
import { getProjectCardData, normalizeProjects } from "@/data/contentHelpers"
import { projectsData } from "@/data/projects"
import { useTheme } from "@/context/ThemeContext"
import { useFocusTrap } from "@/components/useFocusTrap"
import LogoMC from "@/components/LogoMC"
import { Menu, X as IconX, Sun, Moon, Download } from "lucide-react"

const PROJECT_FILTERS = ["Todos", "Tecnológicos", "Académicos", "Artísticos"]
const MOBILE_PROJECT_FILTERS = PROJECT_FILTERS.filter((filter) => filter !== "Todos")
const MOBILE_DEFAULT_PROJECT_FILTER = "Tecnológicos"
const MOBILE_FILTER_MEDIA_QUERY = "(max-width: 639px)"

const PROJECT_FILTER_RULES = {
  Tecnológicos: {
    types: ["web-project"],
    contentKinds: [
      "client-website",
      "fullstack-client-project",
      "web",
      "frontend",
      "database",
      "software",
      "tool",
    ],
    terms: ["web", "desarrollo", "frontend", "base de datos", "sistema", "tecnología", "tecnologia"],
  },
  Académicos: {
    types: ["academic"],
    contentKinds: ["engineering-note", "technical-drawing", "academic", "bitacora", "bitácora"],
    terms: [
      "académico",
      "academico",
      "bitácora",
      "bitacora",
      "física",
      "fisica",
      "electrotecnia",
      "autocad",
      "plano",
      "universidad",
    ],
  },
  Artísticos: {
    types: ["creative"],
    contentKinds: ["music-production", "music", "creative", "audiovisual", "design"],
    terms: ["música", "musica", "producción", "produccion", "artístico", "artistico", "creativo", "audiovisual"],
  },
}

const normalizeText = (value) =>
  String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

const toFilterText = (value) => {
  if (Array.isArray(value)) {
    return value.join(" ")
  }

  return value || ""
}

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

const includesFilterTerm = (text, term) => {
  const normalizedTerm = normalizeText(term)

  if (normalizedTerm.includes(" ")) {
    return text.includes(normalizedTerm)
  }

  return new RegExp(`(^|[^a-z0-9])${escapeRegExp(normalizedTerm)}([^a-z0-9]|$)`).test(text)
}

const projectMatchesFilter = (project, filter) => {
  if (filter === "Todos") {
    return true
  }

  const rules = PROJECT_FILTER_RULES[filter]

  if (!rules) {
    return true
  }

  const raw = project.raw || {}
  const type = normalizeText(project.type || raw.type)
  const contentKind = normalizeText(project.contentKind || raw.contentKind)
  const searchableText = normalizeText(
    [
      project.categoryLabel,
      toFilterText(project.categories),
      toFilterText(project.tags),
      raw.category,
      toFilterText(raw.categories),
      toFilterText(raw.tags),
      toFilterText(raw.technologies),
    ].join(" "),
  )

  return (
    rules.types.some((ruleType) => normalizeText(ruleType) === type) ||
    rules.contentKinds.some((ruleKind) => contentKind.includes(normalizeText(ruleKind))) ||
    rules.terms.some((term) => includesFilterTerm(searchableText, term))
  )
}

export default function MenuOverlay({ show, onClose, onProjectSelect, onContactOpen }) {
  const { isDark, toggleDarkMode } = useTheme()
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [isMobileFilterView, setIsMobileFilterView] = useState(false)
  const scrollContainerRef = useRef(null)
  const dialogRef = useRef(null)
  useFocusTrap(dialogRef, show)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const canonical = siteUrl ? `${siteUrl}?view=projects` : undefined

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_FILTER_MEDIA_QUERY)

    const syncFilterViewport = () => {
      const isMobile = mediaQuery.matches
      setIsMobileFilterView(isMobile)
      setActiveFilter((currentFilter) =>
        isMobile && currentFilter === "Todos" ? MOBILE_DEFAULT_PROJECT_FILTER : currentFilter,
      )
    }

    syncFilterViewport()
    mediaQuery.addEventListener("change", syncFilterViewport)

    return () => mediaQuery.removeEventListener("change", syncFilterViewport)
  }, [])

  const visibleProjectFilters = isMobileFilterView ? MOBILE_PROJECT_FILTERS : PROJECT_FILTERS

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

  const menuProjects = useMemo(() => {
    const normalizedProjects = normalizeProjects(projectsData)

    return normalizedProjects.map((project, index) => {
      const cardData = getProjectCardData(project.raw || project)
      const safeId = cardData.id || cardData.slug || `project-${index + 1}`
      const safeTitle = cardData.title || safeId || `Proyecto ${index + 1}`

      return {
        ...cardData,
        id: safeId,
        title: safeTitle,
        categoryLabel: cardData.categoryLabel || "",
        coverImage: cardData.coverImage || "/placeholder.svg",
        coverAlt: cardData.coverAlt || safeTitle,
        contentKind: project.contentKind || cardData.raw?.contentKind || "",
        categories: cardData.categories || project.categories || [],
        tags: project.tags || cardData.raw?.tags || [],
        raw: cardData.raw || project.raw || project,
      }
    })
  }, [])

  const filteredProjects = useMemo(
    () => menuProjects.filter((project) => projectMatchesFilter(project, activeFilter)),
    [activeFilter, menuProjects],
  )

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

  // ✅ MISMA ctaBtn que en Section Two (con estados disabled)
const ctaBtn = [
  "inline-flex items-center justify-center gap-1.5",
  "w-[min(82vw,200px)] mx-auto sm:mx-0 px-5 py-2 my-1",
  "rounded-md border font-azonix font-extrabold transition-colors",
  "supports-[backdrop-filter]:backdrop-blur-sm",
  "disabled:opacity-60 disabled:pointer-events-none",
  isDark
    ? "text-cyan-300 hover:text-cyan-200 bg-black/30 border-cyan-700/40 hover:border-cyan-700/70"
    : "text-cyan-900 hover:text-cyan-700 bg-white/40 border-cyan-800/30 hover:border-cyan-800/60",
].join(" ");


  // Ir SIEMPRE a Section One sin depender del padre ni del historial.
const goHome = () => {
  try { document.activeElement?.blur?.() } catch {}
  // Navegación directa al inicio (evita history.back del padre)
  window.location.replace("/");
};



  return (
    <AnimatePresence>
      {show && (
        <>
           <Head>
    <meta name="robots" content="noindex,nofollow" />
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
            className="fixed inset-0 w-screen h-dvh font-azonix z-50 overflow-y-auto scroll-pb-[calc(96px+env(safe-area-inset-bottom,0px))] noise-overlay bg-stone-200 text-zinc-800 dark:bg-gray-900 dark:text-white"
          >
          
         {/* Header (Menu Overlay) */}
<div
  className={`sticky top-0 z-20 backdrop-blur-lg border-b p-4 ${
    isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"
  }`}
>
  <div className="max-w-6xl mx-auto px-2 sm:px-4">
    <div className="flex items-center gap-2 sm:gap-3 min-h-[56px] md:min-h-[64px]">
      {/* IZQ: Logo */}
      <div className="flex-1 min-w-0 flex items-center">
        <div className="h-7 md:h-8 flex items-center">
          <LogoMC />
        </div>
      </div>

      {/* DER (ordenado derecha→izquierda en desktop) */}
      <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
        {/* CV — solo desktop, queda más a la izquierda */}
        <a
          href="/cv.pdf"
          download
          aria-label="Descargar CV"
          className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-cyan-300 hover:text-cyan-200 bg-white/0 hover:bg-white/5 border-cyan-700/40 hover:border-cyan-700/70"
              : "text-cyan-800 hover:text-cyan-900 bg-white/40 hover:bg-white/60 border-cyan-900/30 hover:border-cyan-900/60"
          }`}
          title="CV"
        >
          <Download size={16} />
          <span className="hidden sm:inline font-sans font-extrabold text-xs">CV</span>
        </a>

        {/* WhatsApp — visible en mobile y desktop */}
        <a
          href="https://wa.me/56923927777"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-emerald-300 hover:text-emerald-200 bg-emerald-900/40 hover:bg-emerald-900/55 border-emerald-700/40 hover:border-emerald-600/70"
              : "text-emerald-800 hover:text-emerald-900 bg-emerald-100/70 hover:bg-emerald-100 border-emerald-900/30 hover:border-emerald-900/50"
          }`}
        >
          <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z" />
          </svg>
        </a>

        {/* Instagram — solo desktop */}
        <a
          href="https://www.instagram.com/devmauriz/"
          target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-pink-300 hover:text-pink-200 bg-pink-900/40 hover:bg-pink-900/55 border-pink-700/40 hover:border-pink-600/70"
              : "text-pink-700 hover:text-pink-800 bg-pink-100/70 hover:bg-pink-100 border-pink-900/20 hover:border-pink-900/40"
          }`}
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        </a>

        {/* Facebook — solo desktop */}
        <a
          href="https://web.facebook.com/profile.php?id=61580753613645"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
              : "text-blue-700 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/20 hover:border-blue-900/40"
          }`}
          title="Facebook"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
          </svg>
        </a>

        {/* GitHub — solo desktop (visible también en mobile según necesidad) */}
        <a
          href="https://github.com/Mauriizio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-zinc-200 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border-zinc-600/50 hover:border-zinc-500/70"
              : "text-zinc-800 hover:text-black bg-zinc-100/70 hover:bg-zinc-100 border-zinc-900/20 hover:border-zinc-900/40"
          }`}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
          </svg>
        </a>

        {/* LinkedIn — solo desktop */}
        <a
          href="https://www.linkedin.com/in/maurizio-caballero-286a56219/?originalSubdomain=cl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
              : "text-blue-800 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/30 hover:border-blue-900/50"
          }`}
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47C21.4 7.73 24 10 24 14.3V24h-5v-8.6c0-2.05-.04-4.68-2.85-4.68-2.86 0-3.3 2.23-3.3 4.53V24H8V8z" />
        </svg>
        </a>

        {/* X — SIEMPRE va a Section 1 */}
        <button
          onClick={goHome}
          aria-label="Cerrar"
          title="Cerrar"
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-rose-300 hover:text-rose-200 bg-rose-900/40 hover:bg-rose-900/55 border-rose-700/40 hover:border-rose-600/70"
              : "text-rose-700 hover:text-rose-900 bg-rose-100/70 hover:bg-rose-100 border-rose-900/20 hover:border-rose-900/40"
          }`}
        >
          <IconX size={16} />
        </button>

        {/* Toggle — extremo derecho, luna en claro / sol en oscuro */}
        <button
          type="button"
          onClick={toggleDarkMode}
          aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          aria-pressed={isDark}
          className={`relative shrink-0 inline-flex items-center rounded-full border
                      h-6 w-[2.50rem] min-w-[2.50rem] md:w-min-[2.50rem] md:max-w-[2.50rem]
                      ${isDark ? "bg-cyan-700 border-cyan-400/60 justify-end" : "bg-cyan-200 border-cyan-900/50 justify-start"}
                      shadow-[0_2px_10px_rgba(0,0,0,0.10)] transition-colors duration-200`}
        >
          <span className="h-5 w-5 mx-1 rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,.25)] relative grid place-items-center">
            {isDark ? (
              <Sun size={12} className="text-amber-500" aria-hidden="true" />
            ) : (
              <Moon size={12} className="text-cyan-700" aria-hidden="true" />
            )}
          </span>
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
            <div className="relative max-w-6xl mx-auto px-4 md:px-6 pb-[calc(96px+env(safe-area-inset-bottom,0px))] md:pb-12">
              <div className="mb-5 md:mb-7 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div
                  className={`mx-auto flex w-max min-w-full items-center gap-2 rounded-2xl border p-1.5 backdrop-blur-md sm:w-fit sm:min-w-0 ${
                    isDark
                      ? "border-white/10 bg-white/5 shadow-[0_16px_45px_rgba(0,0,0,0.22)]"
                      : "border-white/60 bg-white/35 shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
                  }`}
                  aria-label="Filtrar proyectos por categoría"
                >
                  {visibleProjectFilters.map((filter) => {
                    const isActive = activeFilter === filter

                    return (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        aria-pressed={isActive}
                        className={`min-h-11 shrink-0 rounded-xl border px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.055em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-[390px]:px-4 min-[390px]:text-xs sm:text-sm sm:tracking-[0.08em] ${
                          isActive
                            ? isDark
                              ? "border-cyan-300/70 bg-cyan-300/15 text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.16)]"
                              : "border-cyan-800/40 bg-cyan-100/80 text-cyan-950 shadow-[0_10px_24px_rgba(8,145,178,0.12)]"
                            : isDark
                              ? "border-white/10 bg-black/10 text-white/70 hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
                              : "border-stone-900/10 bg-white/35 text-stone-700 hover:border-cyan-900/25 hover:bg-white/65 hover:text-cyan-900"
                        }`}
                      >
                        {filter}
                      </button>
                    )
                  })}
                </div>
              </div>

              {filteredProjects.length === 0 ? (
                <div
                  className={`rounded-2xl border px-4 py-8 text-center text-sm ${
                    isDark
                      ? "border-white/10 bg-white/5 text-white/70"
                      : "border-stone-300/60 bg-white/40 text-stone-700"
                  }`}
                >
                  No hay proyectos disponibles para este filtro.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.button
                    type="button"
                    key={project.id}
                    id={`project-${project.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.22 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onProjectSelect(project.raw)}
                    aria-label={`Abrir proyecto: ${project.title}`}
                    className="group project-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    {/* Miniatura */}
                    <div className="relative w-full aspect-video overflow-hidden bg-white">
                      {project.categoryLabel && (
                        <span
                          className="absolute top-2 left-2 z-10 inline-flex items-center px-2 py-1 rounded-md bg-white/80 text-gray-900 text-[10px] md:text-xs uppercase tracking-wide ring-1 ring-black/10 shadow-sm max-w-[70%] truncate"
                          title={project.categoryLabel}
                        >
                          {project.categoryLabel}
                        </span>
                      )}

                      <img
                        src={project.coverImage}
                        alt={project.coverAlt}
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
                        {project.title}
                      </h4>
                    </div>
                  </motion.button>
                ))}
                </div>
              )}

              {/* CTA final */}
              <div className="text-center pt-8 md:pt-10">
                <p className="text-responsive mb-3 md:mb-4">
                  ¿Te interesa algún proyecto? ¡Hablemos!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={onContactOpen} className={ctaBtn}>Contactar</button>
                  <button onClick={goHome} className={ctaBtn}>
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

// components/ProjectDetail.jsx
"use client"

import { useEffect, useRef, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import { createPortal } from "react-dom"
import { useTheme } from "@/context/ThemeContext"
import { useFocusTrap } from "@/components/useFocusTrap"
import { ArrowLeft, X as IconX, Sun, Moon } from "lucide-react"
import LogoMC from "@/components/LogoMC"

export default function ProjectDetail({ show, project, onClose, onBackToProjects }) {
  const dialogRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const { isDark, toggleDarkMode } = useTheme()
  useFocusTrap(dialogRef, show)

  // Lightbox
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [zoomed, setZoomed] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { if (show && scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0 }, [show])

  useEffect(() => {
    if (!lightboxSrc) return
    const onKey = (e) => { if (e.key === "Escape") { setLightboxSrc(null); setZoomed(false) } }
    window.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev }
  }, [lightboxSrc])

  if (!project) return null

  // Imágenes con fallbacks
  const heroImage =
    project.detailImage || project.images?.hero || project.image || "/placeholder.svg?height=400&width=800"
  const contentImage =
    project.contentImage || project.images?.content || project.images?.section || project.image || heroImage
  const extraImage =
    project.extraImage || project.images?.extra || project.images?.afterChallenges || project.image || heroImage

  // SEO
  const description =
    project.seoDescription || project.description || `Proyecto "${project.title}" de Maurizio Caballero.`
  const ogImage = project.ogImage || heroImage
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const canonical = siteUrl && project?.id ? `${siteUrl}?view=project&id=${project.id}` : undefined

  const preconnectHosts = (() => {
    const hosts = []
    try { if (project.liveUrl) hosts.push(new URL(project.liveUrl).origin) } catch {}
    try { if (project.githubUrl) hosts.push(new URL(project.githubUrl).origin) } catch {}
    return Array.from(new Set(hosts))
  })()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title || "Proyecto",
    description,
    author: { "@type": "Person", name: "Maurizio Caballero" },
    programmingLanguage: project.technologies || [],
    codeRepository: project.githubUrl || undefined,
    url: project.liveUrl || undefined,
    image: ogImage,
    keywords: Array.isArray(project.technologies) ? project.technologies.join(", ") : undefined,
  }

  const openLightbox = (src) => { setLightboxSrc(src); setZoomed(false) }
  const closeLightbox = () => { setLightboxSrc(null); setZoomed(false) }
  const toggleZoom = () => setZoomed((z) => !z)

  const lightboxNode = lightboxSrc ? (
    <div role="dialog" aria-modal="true"
      className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-2 md:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}>
      <img
        src={lightboxSrc} alt="" draggable={false} onDoubleClick={toggleZoom}
        className={`max-w-full max-h-full object-contain select-none transition-transform duration-200 ${zoomed ? "scale-[1.5] md:scale-[2]" : "scale-100"}`}
        style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
      />
    </div>
  ) : null

  return (
    <section
      ref={(node) => { scrollContainerRef.current = node; dialogRef.current = node }}
      role="dialog" aria-modal="true" aria-labelledby="project-detail-title"
      className={`fixed inset-0 w-screen h-screen font-azonix z-50 overflow-y-auto transition-transform duration-500 ease-in-out
        ${show ? "translate-y-0" : "translate-y-full"} ${isDark ? "dark bg-gray-900 text-white" : "bg-stone-200 text-zinc-800"}`}
    >
      {show && (
        <Head>
          <title>{project.title ? `${project.title} — Proyecto` : "Proyecto — devMauriz"}</title>
          <meta name="description" content={description} />
          <meta name="author" content="Maurizio Caballero" />
          <meta name="robots" content="index,follow" />
          <meta name="theme-color" content={isDark ? "#0b0b0b" : "#f5f5f4"} />
          {canonical ? <link rel="canonical" href={canonical} /> : null}
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="devMauriz" />
          <meta property="og:title" content={project.title || "Proyecto"} />
          <meta property="og:description" content={description} />
          {ogImage && <meta property="og:image" content={ogImage} />}
          {canonical ? <meta property="og:url" content={canonical} /> : null}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={project.title || "Proyecto"} />
          <meta name="twitter:description" content={description} />
          {ogImage && <meta name="twitter:image" content={ogImage} />}
          <link rel="preload" as="font" href="/fonts/Azonix.otf" type="font/otf" crossOrigin="anonymous" />
          {preconnectHosts.map((origin) => (<link key={origin} rel="preconnect" href={origin} crossOrigin="anonymous" />))}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </Head>
      )}

      {/* Header */}
      <div className={`sticky top-0 backdrop-blur-lg border-b z-20 ${isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"}`}>
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          {/* 3 zonas: logo / título / acciones. Altura fija para alinear verticalmente */}
          <div className="flex items-center gap-2 sm:gap-3 min-h-[56px] md:min-h-[64px]">
            {/* IZQ: Logo */}
            <div className="flex-1 min-w-0 flex items-center">
              <div className="h-7 md:h-8 flex items-center">
                <LogoMC />
              </div>
            </div>

            {/* CENTRO: Título del proyecto (centrado siempre) */}
            {/* <h1
              id="project-detail-title"
              className="title-header !text-center leading-none m-0 truncate px-2"
            >
              {project.title || "Proyecto"}
            </h1> */}

            {/* DER: Acciones (mismo estilo que botón CV) */}
            <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
              {/* Volver */}
              <button
                onClick={onBackToProjects}
                aria-label="Volver a proyectos"
                className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors
                  ${isDark
                    ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
                    : "text-cyan-700 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-800/30 hover:border-cyan-800/60"}`}
              >
                <ArrowLeft size={16} />
              </button>

              {/* Toggle tema */}
              <button
                onClick={toggleDarkMode}
                aria-label="Cambiar tema"
                aria-pressed={isDark}
                className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors
                  ${isDark
                    ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
                    : "text-cyan-700 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-800/30 hover:border-cyan-800/60"}`}
              >
                {isDark
                  ? <Sun  size={16} className="fill-current" />
                  : <Moon size={16} className="fill-current" />}
              </button>

              {/* Cerrar */}
              <button
                onClick={onClose}
                aria-label="Cerrar detalle"
                className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors
                  ${isDark
                    ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
                    : "text-cyan-700 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-800/30 hover:border-cyan-800/60"}`}
              >
                <IconX size={16} />
              </button>

              
            </div>
          </div>
        </div>
      </div>

      {/* Contenido sin “boxes” */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12 md:space-y-16">
        <header className="text-center space-y-4 md:space-y-6">
          <h2 className="title-main mb-2">{project.title}</h2>
          {project.description && (<p className="text-responsive max-w-3xl mx-auto">{project.description}</p>)}
        </header>

        {/* Hero */}
        <figure className="mx-auto max-w-4xl">
          <button type="button" onClick={() => openLightbox(heroImage)}
            className="relative block w-full h-64 md:h-96 overflow-hidden rounded-2xl cursor-zoom-in" aria-label="Abrir imagen en grande">
            <Image src={heroImage} alt={`${project.title} — Hero`} fill sizes="(max-width: 768px) 100vw, 960px" className="object-cover object-center" />
          </button>
          <figcaption className="sr-only">Vista previa principal del proyecto</figcaption>
        </figure>

        {/* Tecnologías */}
        {Array.isArray(project.technologies) && project.technologies.length > 0 && (
          <section className="text-center space-y-4">
            <h3 className="title-section">Tecnologías Utilizadas</h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {project.technologies.map((tech, idx) => (<span key={idx} className="tag-tech tag-solid">{tech}</span>))}
            </div>
          </section>
        )}

        {/* Imagen de contenido */}
        <figure className="mx-auto max-w-4xl">
          <button type="button" onClick={() => openLightbox(contentImage)}
            className="relative block w-full h-64 md:h-96 overflow-hidden rounded-2xl cursor-zoom-in" aria-label="Abrir imagen en grande">
            <Image src={contentImage} alt={`${project.title} — Contenido`} fill sizes="(max-width: 768px) 100vw, 960px" className="object-cover object-center" />
          </button>
          <figcaption className="sr-only">Vista de contenido del proyecto</figcaption>
        </figure>

        {/* Retos */}
        {project.challenges && (
          <section className="text-center space-y-4">
            <h3 className="title-section">Retos y Soluciones</h3>
            <p className="text-responsive max-w-3xl mx-auto">{project.challenges}</p>
          </section>
        )}

        {/* Imagen extra */}
        <figure className="mx-auto max-w-4xl">
          <button type="button" onClick={() => openLightbox(extraImage)}
            className="relative block w-full h-64 md:h-96 overflow-hidden rounded-2xl cursor-zoom-in" aria-label="Abrir imagen en grande">
            <Image src={extraImage} alt={`${project.title} — Vista adicional`} fill sizes="(max-width: 768px) 100vw, 960px" className="object-cover object-center" />
          </button>
          <figcaption className="sr-only">Vista adicional del proyecto</figcaption>
        </figure>

        {/* Enlaces */}
        {(project.githubUrl || project.liveUrl) && (
          <section className="text-center space-y-4">
            <h3 className="title-section">Enlaces del Proyecto</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github inline-flex items-center justify-center gap-2">
                  <span aria-hidden>📂</span> Ver Código en GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2">
                  <span aria-hidden>🌐</span> Ver Proyecto en Vivo
                </a>
              )}
            </div>
            <p className="text-responsive mt-4">Explora el código fuente y la implementación en vivo.</p>
          </section>
        )}
      </div>

      {mounted && lightboxNode && createPortal(lightboxNode, document.body)}
    </section>
  )
}

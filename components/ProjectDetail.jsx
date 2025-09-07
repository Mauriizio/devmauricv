// components/ProjectDetail.jsx
"use client"

import { useEffect, useRef, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import { createPortal } from "react-dom"
import { useTheme } from "@/context/ThemeContext"
import { useFocusTrap } from "@/components/useFocusTrap"
import { ArrowLeft, X as IconX, Sun, Moon, Download } from "lucide-react"
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

  // 🔒 Cerrar lightbox cuando cambie el proyecto
  useEffect(() => {
    setLightboxSrc(null);
    setZoomed(false);
  }, [project?.id]);

  // 🔒 Cerrar lightbox cuando este panel deje de mostrarse
  useEffect(() => {
    if (!show) {
      setLightboxSrc(null);
      setZoomed(false);
    }
  }, [show]);

  // 🔒 Cerrar lightbox si el usuario usa "atrás" del navegador
  useEffect(() => {
    const onPop = () => {
      setLightboxSrc(null);
      setZoomed(false);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

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

  // ✅ Salidas seguras (cierran lightbox siempre)
  const handleClose = () => {
    setLightboxSrc(null);
    setZoomed(false);
    onClose?.();
  };

  const handleBackToProjects = () => {
    setLightboxSrc(null);
    setZoomed(false);
    onBackToProjects?.();
  };

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
  ) : null;

  // ✅ MISMA ctaBtn que en Section Two (con estados disabled)
  const ctaBtn = [
    "inline-flex items-center justify-center gap-1.5",
    "w-[min(82vw,300px)] mx-auto sm:mx-0 px-5 py-2 my-1",
    "rounded-md border font-azonix font-extrabold transition-colors",
    "supports-[backdrop-filter]:backdrop-blur-sm",
    "disabled:opacity-60 disabled:pointer-events-none",
    isDark
      ? "text-cyan-300 hover:text-cyan-200 bg-black/30 border-cyan-700/40 hover:border-cyan-700/70"
      : "text-cyan-900 hover:text-cyan-700 bg-white/40 border-cyan-800/30 hover:border-cyan-800/60",
  ].join(" ");

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

        {/* WhatsApp — visible en mobile y desktop (permanece) */}
        <a
          href="https://wa.me/56923927777" target="_blank" rel="noopener noreferrer"
          aria-label="WhatsApp" title="WhatsApp"
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
          href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
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

        
        {/* GitHub — solo desktop */}
        <a
          href="https://github.com/Mauriizio" target="_blank" rel="noopener noreferrer"
          aria-label="GitHub" title="GitHub"
          className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
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
          target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"
          className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
              : "text-blue-800 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/30 hover:border-blue-900/50"
          }`}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47C21.4 7.73 24 10 24 14.3V24h-5v-8.6c0-2.05-.04-4.68-2.85-4.68-2.86 0-3.3 2.23-3.3 4.53V24H8V8z" />
        </svg>
        </a>

        {/* Volver — visible en mobile y desktop, ICONO SOLO (sin texto) */}
        <button
          onClick={handleBackToProjects}
          aria-label="Volver a proyectos"
          title="Volver"
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-amber-300 hover:text-amber-200 bg-amber-900/40 hover:bg-amber-900/55 border-amber-700/40 hover:border-amber-600/70"
              : "text-amber-800 hover:text-amber-900 bg-amber-100/70 hover:bg-amber-100 border-amber-900/30 hover:border-amber-900/50"
          }`}
        >
          <ArrowLeft size={16} />
          <span className="sr-only">Volver</span>
        </button>

        {/* X — visible en mobile y desktop */}
        <button
          onClick={handleClose}
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

        {/* Toggle — extremo derecho, con icono contextual (luna en claro, sol en oscuro) */}
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


      {/* Contenido sin “boxes” */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12 md:space-y-16">
        <header className="text-center space-y-4 md:space-y-6">
          <h2 className="title-main mb-2" id="project-detail-title">{project.title}</h2>
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
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={ctaBtn}>
                  <span aria-hidden>📂</span> Ver Código en GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={ctaBtn}>
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

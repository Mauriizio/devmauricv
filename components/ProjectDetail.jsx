"use client"

import { useEffect, useRef } from "react"
import Head from "next/head"
import Image from "next/image"
import { useTheme } from "@/context/ThemeContext"

export default function ProjectDetail({ show, project, onClose, onBackToProjects }) {
  const scrollContainerRef = useRef(null)
  const { isDark, toggleDarkMode } = useTheme()

  // Reset scroll cuando se abre el componente
  useEffect(() => {
    if (show && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [show])

  if (!project) return null

  // ------- SEO dinámico (sin hooks extras) -------
  const description =
    project.seoDescription ||
    project.description ||
    `Proyecto "${project.title}" de Maurizio Caballero: características, stack y enlaces.`
  const ogImage = project.image || "/placeholder.svg?height=400&width=800"

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
    author: {
      "@type": "Person",
      name: "Maurizio Caballero",
    },
    programmingLanguage: project.technologies || [],
    codeRepository: project.githubUrl || undefined,
    url: project.liveUrl || undefined,
    image: ogImage,
    keywords: Array.isArray(project.technologies) ? project.technologies.join(", ") : undefined,
  }

  return (
    <section
      ref={scrollContainerRef}
      className={`fixed inset-0 w-screen h-screen font-azonix z-50 transition-all duration-1000 ease-in-out overflow-y-auto noise-overlay ${
        show ? "transform translate-y-0" : "transform translate-y-full"
      } ${isDark ? "dark bg-gray-900 text-white" : "bg-stone-200 text-zinc-800"}`}
    >
      {/* SEO solo cuando está visible para evitar duplicados */}
      {show && (
        <Head>
          <meta name="description" content={description} />
          <meta name="author" content="Maurizio Caballero" />
          <meta name="robots" content="index,follow" />

          {/* Open Graph */}
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="devMauriz" />
          <meta property="og:title" content={project.title || "Proyecto"} />
          <meta property="og:description" content={description} />
          {ogImage && <meta property="og:image" content={ogImage} />}

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={project.title || "Proyecto"} />
          <meta name="twitter:description" content={description} />
          {ogImage && <meta name="twitter:image" content={ogImage} />}

          {/* Theme color dinámico */}
          <meta name="theme-color" content={isDark ? "#0b0b0b" : "#f5f5f4"} />

          {/* Preload de la fuente */}
          <link rel="preload" as="font" href="/fonts/Azonix.otf" type="font/otf" crossOrigin="anonymous" />

          {/* Preconnect a dominios externos si existen */}
          {preconnectHosts.map((origin) => (
            <link key={origin} rel="preconnect" href={origin} crossOrigin="anonymous" />
          ))}

          {/* JSON-LD */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </Head>
      )}

      {/* Header */}
      <div
        className={`sticky top-0 backdrop-blur-lg border-b p-4 z-20 ${
          isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4 gap-3 overflow-hidden">
          <h1 className="title-section mb-0 min-w-0 truncate">{project.title}</h1>
          <div className="shrink-0 flex items-center gap-3">
            <button onClick={toggleDarkMode} className="btn-toggle" aria-label="Cambiar tema">
              {isDark ? "☀️" : "🌙"}
            </button>
            <button onClick={onBackToProjects} className="btn-warning">
              <span className="text-xl" aria-hidden>←</span> Proyectos
            </button>
            <button onClick={onClose} className="btn-primary">
              <span className="text-xl" aria-hidden>✕</span> Cerrar
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-6xl mx-auto p-4 md:p-6 space-y-12 md:space-y-16 z-10">
        {/* Introducción */}
        <div className="text-center space-y-4 md:space-y-6 py-6 md:py-8">
          <h2 className="title-main mb-4">{project.title}</h2>
          <p className="text-intro max-w-4xl mx-auto font-sans">{project.description}</p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* Imagen principal del proyecto */}
          <div className="card-secondary">
            <h3 className="title-section flex items-center gap-3">
              <span className="text-2xl md:text-4xl">🖼️</span> Vista previa
            </h3>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-stone-300 shadow-lg">
              <Image
                src={ogImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 960px"
                priority={false}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Descripción detallada */}
          <div className="card-primary">
            <h3 className="title-section flex items-center gap-3">
              <span className="text-2xl md:text-4xl">📋</span> Descripción del Proyecto
            </h3>
            <p className="text-responsive text-zinc-600 font-sans">{project.description}</p>
          </div>

          {/* Tecnologías utilizadas */}
          <div className="card-primary">
            <h3 className="title-section flex items-center gap-3">
              <span className="text-2xl md:text-4xl">🛠️</span> Tecnologías Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.technologies?.map((tech, index) => (
                <div key={index} className="tag-tech">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Retos y soluciones */}
          <div className="card-secondary">
            <h3 className="title-section flex items-center gap-3">
              <span className="text-2xl md:text-4xl">⚡</span> Retos y Soluciones
            </h3>
            <div className="card-primary">
              <p className="text-responsive text-zinc-600 font-sans">{project.challenges}</p>
            </div>
          </div>

          {/* Características destacadas */}
          {project.features && (
            <div className="card-primary">
              <h3 className="title-section flex items-center gap-3">
                <span className="text-2xl md:text-4xl">✨</span> Características Destacadas
              </h3>
              <div className="grid md:grid-cols-2 gap-4 font-sans">
                {project.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="text-xl">•</span>
                    <p className="text-zinc-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Botones de acción */}
          <div className="card-secondary">
            <h3 className="title-section flex items-center gap-3">
              <span className="text-2xl md:text-4xl">🔗</span> Enlaces del proyecto
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-github flex items-center justify-center gap-2"
                >
                  <span aria-hidden>📂</span> Ver Código en GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <span aria-hidden>🌐</span> Ver Proyecto en Vivo
                </a>
              )}
            </div>
            <p className="text-zinc-600 mt-4 text-center font-sans text-sm md:text-base">
              Explora el código fuente y la implementación en vivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

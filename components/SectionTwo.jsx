"use client"

import { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useTheme } from "@/context/ThemeContext"

// Partículas en lazy y solo en cliente
const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground"), {
  ssr: false,
  loading: () => null,
})

export default function SectionTwo({ onMenuOpen, onVerMas }) {
  const { isDark, toggleDarkMode } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [canonicalUrl, setCanonicalUrl] = useState("")

  // SEO (básico por sección)
  const description =
    "Sección de bienvenida del portafolio de Maurizio Caballero (Frontend Developer): stack, enfoque y acciones rápidas."
  const ogImage = "/assets/avatar-left2.png"

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") setCanonicalUrl(window.location.href)
  }, [])

  // JSON-LD simple (lo robustecemos luego en layout)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maurizio Caballero",
    jobTitle: "Frontend Developer",
    url: canonicalUrl || "",
  }

  return (
    <section
      className={`relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Head — SEO básico de esta sección (sin <title> para no sobrescribir) */}
      <Head>
        <meta name="description" content={description} />
        <meta name="author" content="Maurizio Caballero" />
        <meta name="robots" content="index,follow" />
        {/* Canonical provisional (lo fijamos bien en layout) */}
        {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

        {/* Open Graph */}
        <meta property="og:site_name" content="devMauriz" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImage && <meta property="og:image:alt" content="Retrato lateral de Maurizio (sección izquierda)" />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}

        {/* Theme color dinámico */}
        <meta name="theme-color" content={isDark ? "#0b0b0b" : "#f9fafb"} />

        {/* Preload de la fuente principal (rápido; luego migramos a next/font) */}
        <link rel="preload" as="font" href="/fonts/Azonix.otf" type="font/otf" crossOrigin="anonymous" />

        {/* JSON-LD básico */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Header con botón toggle */}
      <div
        className={`absolute top-0 left-0 right-0 z-30 backdrop-blur-lg border-b p-4 ${
          isDark ? "bg-black/60 border-white/10" : "bg-white/60 border-gray-300/50"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto font-azonix">
          <h1 className={`text-lg font-bold ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>Dev</h1>
          <button onClick={toggleDarkMode} className="btn-toggle" aria-label="Cambiar tema">
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Fondo base */}
      <div className={`absolute inset-0 z-5 transition-colors duration-500 ${isDark ? "bg-black" : "bg-gray-50"}`} />

      {/* Partículas (solo tras mount) */}
      {mounted && <ParticlesBackground />}

      {/* Imagen fondo lado izquierdo */}
      <div
        className={`absolute inset-0 z-10 p-0 overflow-hidden transition-colors duration-500 ${
          isDark ? "bg-black/70" : "bg-gray-50/70"
        }`}
      >
        <Image
          src="/assets/avatar-left2.png"
          alt="Avatar mitad"
          fill
          sizes="100vw"
          priority={false}
          className="object-contain object-right-top scale-[1.7] origin-right z-30"
        />
      </div>

      {/* Overlay sin neblina en modo claro */}
      <div
        className={`absolute inset-0 z-20 transition-colors duration-500 ${isDark ? "bg-black/10" : "bg-gray-900/20"}`}
      />

      {/* Contenido principal */}
      <div className="relative z-20 w-full h-full flex items-start justify-start pl-5 pr-10 pt-20">
        <div className="flex flex-col items-start gap-4 text-left">
          {/* Título principal */}
          <h1
            className={`text-3xl mb-0 md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)] font-azonix transition-colors duration-500 ${
              isDark ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            ¡Hola! Soy <br />
            <span
              className={`px-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)] transition-colors duration-500 ${
                isDark ? "bg-cyan-200 text-black" : "bg-cyan-100 text-gray-900"
              }`}
            >
              Maurizio Caballero
            </span>
            , <br />
            Frontend Developer
          </h1>

          {/* Lista de tecnologías */}
          <ul
            className={`text-lg mt-0 md:text-xl space-y-2 backdrop-blur-sm p-4 rounded-md leading-relaxed max-w-3xl drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] transition-colors duration-500 ${
              isDark ? "text-white/90 bg-black/30" : "text-gray-800 bg-white/80"
            }`}
          >
            <li>🕸️React</li>
            <li>🚀Next.Js</li>
            <li>🧠Tailwind/CSS</li>
            <li>🎯AI-Powered Development</li>
            <li>🤝Mobile-First Design</li>
            <li>🤝API Integrations</li>
          </ul>

          {/* Botones / acciones */}
          <div className="flex gap-4 mt-0 flex-wrap">
            {/* Si ya tienes el PDF en /public, esto descarga directo */}
            <a
              href="/Maurizio_CV.pdf"
              className={`border px-4 py-2 rounded-md text-base font-semibold transition-all duration-300 hover:bg-cyan-500 hover:text-white ${
                isDark ? "bg-black border-white text-white" : "bg-white border-gray-400 text-gray-900"
              }`}
              download
            >
              Descargar CV
            </a>

            <button
              onClick={onMenuOpen}
              className="bg-yellow-500 text-black px-4 py-2 rounded-md text-base font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
              Ver proyectos
            </button>
            <button
              onClick={onVerMas}
              className={`px-4 py-2 rounded-md text-base font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-white ${
                isDark ? "bg-white text-black" : "bg-gray-900 text-white"
              }`}
            >
              Más sobre mí
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

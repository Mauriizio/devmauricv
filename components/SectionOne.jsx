"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/context/ThemeContext"
import CodeParticlesBackground from "./CodeParticlesBackground"
import { Download, ChevronsRight } from "lucide-react"

import LogoMCFancy from "@/components/LogoMCFancy"
import LogoMarkShimmer from "@/components/LogoMarkShimmer"

export default function SectionOne({ onMenuOpen, onVerMas, onContactOpen }) {
  const [contentVisible, setContentVisible] = useState(false)
  const { isDark, toggleDarkMode } = useTheme()

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className={`relative w-screen h-dvh snap-start snap-always flex-shrink-0 overflow-hidden overscroll-none transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Header (alto z-index y clickeable) */}
      <div
        className={`absolute top-0 left-0 right-0 z-50 backdrop-blur-lg border-b p-4 ${
          isDark ? "bg-black/60 border-white/10" : "bg-white/60 border-gray-300/50"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <LogoMCFancy className="h-12 w-auto text-gray-900 dark:text-cyan-300" />
          <div className="flex items-center gap-3">
            <button className="btn-primary flex items-center gap-2 text-sm px-3 py-1.5" aria-label="CV">
              <Download size={16} />
              <span className="hidden sm:inline">CV</span>
            </button>
            <button onClick={toggleDarkMode} className="btn-toggle" aria-label="Cambiar tema">
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>

      {/* Fondo base */}
      <div className={`absolute inset-0 z-0 ${isDark ? "bg-black" : "bg-gray-50"}`} />

      {/* Partículas de código */}
      <CodeParticlesBackground />

      {/* Watermark del logo (más notorio) */}
      <LogoMarkShimmer
  isDark={isDark}
  className="
    pointer-events-none absolute z-10
    left-1/2 -translate-x-1/2
    top-[24vh] md:top-[12vh]
    w-[140vw] md:w-[110vw] lg:w-[65vw]
    text-slate-900 dark:text-slate-100
    opacity-[0.9]
  "
/>



      {/* Overlay para contraste */}
      <div
        aria-hidden
        className={`absolute inset-0 z-20 transition-colors duration-500 pointer-events-none ${
          isDark ? "bg-black/35" : "bg-white/40"
        }`}
      />

      {/* Ruido fuerte (sin random → no hay hydration mismatch) */}
      <div className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay">
        {/* Claro */}
        <div
          aria-hidden
          className={`
            absolute inset-0 ${isDark ? "hidden" : "block"}
            opacity-90
            [background-image:radial-gradient(rgba(0,0,0,0.26)_1px,transparent_1px),
                              radial-gradient(rgba(0,0,0,0.16)_1px,transparent_1px)]
            bg-[length:3px_3px,7px_7px] bg-[position:0_0,1px_1px]
          `}
        />
        {/* Oscuro */}
        <div
          aria-hidden
          className={`
            absolute inset-0 ${isDark ? "block" : "hidden"}
            opacity-30
            [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),
                              radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)]
            bg-[length:3px_3px,7px_7px] bg-[position:0_0,1px_1px]
          `}
        />
      </div>

      {/* Hint de scroll (izquierda) */}
      <div
        aria-hidden
        className="hidden sm:flex items-center gap-1 absolute left-3 top-1/2 -translate-y-1/2 z-40
                   text-gray-800 dark:text-white/80 opacity-70 animate-pulse select-none"
      >
        <span className="text-3xl md:text-4xl">»</span>
      </div>

      {/* Contenido centrado (mobile y desktop) */}
      <div
        className={`relative z-40 w-full h-full transition-opacity duration-700 ease-out ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`
            mx-auto h-full max-w-6xl flex flex-col
            pt-24 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 lg:px-8
            items-center justify-start text-center
            font-azonix ${isDark ? "text-white" : "text-gray-900"}
          `}
        >
          {/* Nombre (Maurizio sobre Caballero) */}
          <div className="flex flex-col gap-0">
            <button
              className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black transition-all duration-300
                          hover:scale-x-[1.02] hover:translate-y-0.5 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Maurizio
            </button>
            <button
              className={`mt-1 inline-block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black transition-all duration-300
                          hover:scale-x-[1.02] hover:translate-y-0.5 hover:text-cyan-400
                          ${isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"} px-1`}
            >
              Caballero
            </button>
          </div>

          {/* CTA principal más grande */}
          <div className="mt-8 md:mt-10">
            <button
              id="ver-portfolio"
              onClick={onMenuOpen}
              className="group inline-flex items-center gap-2 text-black dark:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="mt-40 md:mt-8 text-6xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans">
                Ver Portfolio
              </span>
              <ChevronsRight size={36} className=" mt-40 md:mt-8 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Botones secundarios centrados y pegados abajo */}
          <div className="mt-auto w-full flex flex-col items-center gap-4 sm:gap-5 pb-[env(safe-area-inset-bottom)]">
            <button
              onClick={onContactOpen}
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-700 dark:text-cyan-300 transition-transform duration-300 hover:translate-y-0.5"
            >
              Contacto
            </button>
            <button
              onClick={onVerMas}
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-700 dark:text-cyan-300 transition-transform duration-300 hover:translate-y-0.5"
            >
              Sobre mí
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

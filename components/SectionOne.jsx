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
      {/* Header */}
      <div
        className={`absolute top-0 left-0 right-0 z-50 backdrop-blur-lg border-b p-4 ${
          isDark ? "bg-black/60 border-white/10" : "bg-white/60 border-gray-300/50"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <LogoMCFancy
            className="h-12 w-auto text-gray-900 dark:text-cyan-300 hover:text-fuchsia-500 transition-colors"
            gap={0.5}
            shift={0.08}
            duration={500}
          />
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

      {/* Marca de agua (ajustada para no generar scroll horizontal) */}
      <LogoMarkShimmer
        isDark={isDark}
        className={[
          "pointer-events-none absolute z-30",
          "left-1/2 -translate-x-1/2",
          "top-[24vh] md:top-[20vh]",
          // Tamaños prudentes para evitar overflow horizontal en cualquier breakpoint
          "w-[88vw] md:w-[76vw] lg:w-[68vw]",
          // Opacidad separada por tema
          isDark ? "opacity-85" : "opacity-70",
        ].join(" ")}
      />

      {/* Overlay global para contraste */}
      <div
        aria-hidden
        className={`absolute inset-0 z-20 transition-colors duration-500 pointer-events-none ${
          isDark ? "bg-black/35" : "bg-white/35"
        }`}
      />

      {/* Ruido fino global (determinístico, sin random en runtime) */}
      <div className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay">
        {/* Claro */}
        <div
          aria-hidden
          className={[
            "absolute inset-0",
            isDark ? "hidden" : "block",
            "opacity-80",
            "[background-image:radial-gradient(rgba(0,0,0,0.22)_1px,transparent_1px),radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)]",
            "bg-[length:3px_3px,7px_7px] bg-[position:0_0,1px_1px]",
          ].join(" ")}
        />
        {/* Oscuro */}
        <div
          aria-hidden
          className={[
            "absolute inset-0",
            isDark ? "block" : "hidden",
            "opacity-30",
            "[background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)]",
            "bg-[length:3px_3px,7px_7px] bg-[position:0_0,1px_1px]",
          ].join(" ")}
        />
      </div>

      {/* Hint scroll lateral */}
      <div
        aria-hidden
        className="hidden sm:flex items-center gap-2 absolute left-3 top-1/2 -translate-y-1/2 z-40
                   text-gray-800 dark:text-white/80 opacity-70 animate-pulse select-none"
      >
        <span className="text-3xl md:text-4xl">»</span>
      </div>

      {/* Contenido */}
      <div
        className={`relative z-40 w-full h-full transition-opacity duration-700 ease-out ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`mx-auto h-full max-w-6xl flex flex-col
                      pt-24 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 lg:px-8
                      items-center justify-start text-center
                      font-azonix ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {/* Nombre */}
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

          {/* CTA con scrim local para legibilidad */}
          <div className="relative mt-52 md:mt-10">
            {/* Scrim/halo detrás del CTA para que nunca compita con el fondo */}
            <div
              aria-hidden
              className="absolute -inset-x-8 -inset-y-3 rounded-xl
                         bg-gradient-to-b from-white/70 to-white/0
                         dark:from-black/40 dark:to-transparent
                         blur-md pointer-events-none"
            />
            <button
              id="ver-portfolio"
              onClick={onMenuOpen}
              className="group relative inline-flex items-center gap-3 text-black dark:text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold font-azonix leading-none">
                Ver Portfolio
              </span>
              <ChevronsRight
                size={40}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
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

"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/context/ThemeContext"
import CodeParticlesBackground from "./CodeParticlesBackground"
import { Download, ChevronsRight } from "lucide-react"

export default function SectionOne({ onMenuOpen, onVerMas, onContactOpen }) {
  const [contentVisible, setContentVisible] = useState(false)
  const { isDark, toggleDarkMode } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className={`relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Header con botón toggle */}
      <div
        className={`absolute top-0 left-0 right-0 z-30 backdrop-blur-lg border-b p-4 ${
          isDark ? "bg-black/60 border-white/10" : "bg-white/60 border-gray-300/50"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className={`text-lg font-bold font-azonix ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>@devMauriz</h1>

          <div className="flex items-center gap-3">
            <button className="btn-primary flex items-center gap-2 text-sm px-3 py-1.5">
              <Download size={16} />
              <span className="hidden sm:inline">CV</span>
            </button>

            <button onClick={toggleDarkMode} className="btn-toggle">
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>

      {/* Fondo base */}
      <div className={`absolute inset-0 z-5 transition-colors duration-500 ${isDark ? "bg-black" : "bg-gray-50"}`} />

      {/* Partículas de fondo */}
      <CodeParticlesBackground />

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-10 p-0 overflow-hidden">
        <img
          src="/assets/avatar-right2.png"
          alt="Avatar mitad"
          className="absolute top-0 left-0 h-full w-auto object-contain scale-[1.7] origin-left z-10"
        />
      </div>

      {/* Overlay mejorado - sin neblina en modo claro */}
      <div
        className={`absolute inset-0 z-20 transition-colors duration-500 ${isDark ? "bg-black/50" : "bg-gray-900/20"}`}
      />

      {/* Contenido */}
      <div
        className={`relative z-20 w-full h-full flex items-start justify-between ml-2 pt-20 pb-5 pr-3 lg:pr-10 transition-opacity duration-1000 ease-out ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`flex flex-col justify-between h-full w-full items-end text-right mr-4 font-azonix transition-colors duration-500 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {/* Bloque de nombre */}
          <div className="flex flex-col items-end gap-0">
            <button
              className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black transition-all duration-300 ease-out hover:scale-x-[1.03] hover:skew-x-2 hover:translate-x-2 hover:text-cyan-400 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Maurizio
            </button>
            <button
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black transition-all duration-300 ease-out hover:scale-x-[1.03] hover:skew-x-2 hover:translate-x-2 hover:text-cyan-400 hover:underline ${
                isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
              }`}
            >
              Caballero
            </button>
          </div>

          {/* Bloque de Proyectos con icono */}
          <div className="flex flex-col items-end gap-4 mb-2">
            
            <button id="ver-portfolio"
              onClick={onMenuOpen}
              className="group flex items-center gap-0 text-black transition-all duration-300 ease-out hover:scale-110 hover:text-fuchsia-400 hover:translate-x-2"
            >
              <span className="text-4xl md:text-3xl font-bold font-sans">Ver Portfolio</span>
              <ChevronsRight
                size={32}
                className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
              />
            </button>
          </div>

          {/* Botones de navegación */}
          <div className="flex flex-col items-end gap-5 mb-2 mt-0">
            <button
              onClick={onContactOpen}
              className="text-3xl md:text-4xl font-black text-cyan-700 transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
            >
              Contacto
            </button>
            <button
              onClick={onVerMas}
              className="text-3xl md:text-3xl mt-0 font-black text-cyan-700 transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
            >
              Sobre mí
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

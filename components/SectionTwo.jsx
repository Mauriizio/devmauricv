"use client"

import { useTheme } from "@/context/ThemeContext"
import ParticlesBackground from "@/components/ParticlesBackground"

export default function SectionTwo({ onMenuOpen, onVerMas }) {
  const { isDark } = useTheme()

  return (
    <section
      className={`relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Fondo base */}
      <div className={`absolute inset-0 z-5 transition-colors duration-500 ${isDark ? "bg-black" : "bg-white"}`} />

      {/* Partículas de fondo */}
      <ParticlesBackground />

      {/* Imagen fondo lado izquierdo */}
      <div
        className={`absolute inset-0 z-10 p-0 overflow-hidden transition-colors duration-500 ${
          isDark ? "bg-black/70" : "bg-white/70"
        }`}
      >
        <img
          src="/assets/avatar-left2.png"
          alt="Avatar mitad"
          className="absolute top-0 right-0 h-full w-auto object-contain scale-[1.7] origin-right z-30"
        />
      </div>

      {/* Overlay translúcido */}
      <div
        className={`absolute inset-0 z-20 transition-colors duration-500 ${
          isDark ? "bg-black opacity-50" : "bg-white opacity-30"
        }`}
      />

      {/* Contenido principal */}
      <div className="relative z-20 w-full h-full flex items-start justify-start pl-5 pr-10 pt-5">
        <div className="flex flex-col items-start gap-4 text-left">
          {/* Título principal */}
          <h1
            className={`text-4xl mb-0 md:text-6xl font-black leading-tight drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)] font-azonix transition-colors duration-500 ${
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
            className={`text-xl mt-0 md:text-xl space-y-2 backdrop-blur-sm p-4 rounded-md leading-relaxed max-w-3xl drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] transition-colors duration-500 ${
              isDark ? "text-white/90 bg-black/30" : "text-gray-800 bg-white/60"
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
          <div className="flex gap-6 mt-0 flex-wrap">
            <button
              className={`border px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-cyan-500 ${
                isDark ? "bg-black border-white text-white" : "bg-white border-gray-300 text-gray-900 hover:text-white"
              }`}
            >
              Descargar CV
            </button>
            <button
              onClick={onMenuOpen}
              className="bg-yellow-500 text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
              Ver proyectos
            </button>
            <button
              onClick={onVerMas}
              className={`px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-white ${
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

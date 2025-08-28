"use client"

import { useTheme } from "@/context/ThemeContext"
import ParticlesBackground from "@/components/ParticlesBackground"
import LogoMCFancy from "@/components/LogoMCFancy"
import LogoMC from "@/components/LogoMC"    
import LogoSplitBg from "@/components/LogoSplitBg"  
export default function SectionTwo({ onMenuOpen, onVerMas, onContactOpen }) {
  const { isDark, toggleDarkMode } = useTheme()

  return (
    <section
      className={`relative w-screen h-dvh snap-start snap-always flex-shrink-0 overflow-hidden overscroll-none transition-colors duration-150 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Header */}
      <div
        className={`absolute top-0 left-0 right-0 z-30 backdrop-blur-lg border-b p-4 ${
          isDark ? "bg-black/60 border-white/10" : "bg-white/60 border-gray-300/50"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4 gap-6 overflow-hidden font-azonix">

           <LogoMCFancy
        className="h-10 w-auto text-gray-900 hover:text-fuchsia-500 transition-colors"
        gap={0.5}      // grosor de “hendidura” (px aprox visual)
        shift={0.08}   // separación relativa en hover (0.08 = 8%)
        duration={500} // ms
      />

          <button onClick={toggleDarkMode} className="btn-toggle" aria-label="Cambiar tema">
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Fondo base */}
      <div className={`absolute inset-0 z-5 transition-colors duration-150 ${isDark ? "bg-black" : "bg-gray-50"}`} />

      {/* Partículas */}
      <ParticlesBackground />

      {/* Imagen lado izquierdo (mitad de la cara) */}
      {/* <div
        className={`absolute inset-0 z-10 p-0 overflow-hidden transition-colors duration-150 ${
          isDark ? "bg-black/70" : "bg-gray-50/70"
        }`}
      >
        <img
          src="/assets/avatar-left2.png"
          alt="Avatar mitad"
          className="absolute top-0 right-0 h-full w-auto object-contain scale-[1.7] origin-right z-30"
        />
      </div> */}

      <div className="absolute inset-0 z-10 group">
  {/* Mostrar la MITAD IZQUIERDA, anclada a la DERECHA */}
  <LogoSplitBg half="left" dock="right" className="text-cyan-600/25 dark:text-cyan-300/20" />
</div>

      {/* Overlay unificado con SectionOne */}
      <div
        className={`absolute inset-0 z-20 transition-colors duration-150 ${
          isDark ? "bg-black/50" : "bg-gray-900/20"
        }`}
      />

      {/* Contenido principal (sin scroll vertical) */}
      <div className="relative z-20 w-full h-full px-5 md:px-10 pt-20">
        <div className="h-full min-h-0">
          <div className="flex flex-col items-start gap-3 md:gap-4 max-w-[92%] font-azonix">
            {/* Título */}
            <h1
              className={`text-[1.6rem] leading-[1.15] md:text-4xl lg:text-5xl font-black drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)] ${
                isDark ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              ¡Hola! Soy <br />
              <span
                className={`px-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)] ${
                  isDark ? "bg-cyan-200 text-black" : "bg-cyan-100 text-gray-900"
                }`}
              >
                Maurizio Caballero
              </span>
              , <br />
              Frontend Developer
            </h1>

            {/* Lista de skills (se mantiene) */}
            <div className="mt-0">
              <ul
                className={`text-sm md:text-base space-y-1 backdrop-blur-sm p-3 md:p-4 rounded-md leading-relaxed drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]
                            w-[260px] sm:w-[280px] md:w-[340px] lg:w-[320px] xl:w-[360px] shrink-0
                            ${isDark ? "text-white/90 bg-black/30" : "text-gray-800 bg-white/80"}`}
              >
                <li>🕸️ React</li>
                <li>🚀 Next.js</li>
                <li>🧠 Tailwind/CSS</li>
                <li>🎯 AI-Powered Development</li>
                <li>📱 Mobile-First Design</li>
                <li>🔗 API Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* === Botones estilo SectionOne, fijados en esquina inferior izquierda === */}
      <div
        className=" font-azonix absolute z-30 left-4 bottom-4 md:left-8 md:bottom-6"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}  // respeta notch en iOS
      >
        <div className="flex flex-col items-start gap-4 md:gap-5">
          <button
            type="button"
            className="text-left whitespace-nowrap leading-none tracking-tight
                       text-3xl md:text-4xl font-black text-cyan-700
                       transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
          >
            Descargar CV
          </button>

          <button
            type="button"
            onClick={onMenuOpen}
            className="text-left whitespace-nowrap leading-none tracking-tight
                       text-3xl md:text-4xl font-black text-cyan-700
                       transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
          >
            Ver proyectos
          </button>

          <button
            type="button"
            onClick={onVerMas}
            className="text-left whitespace-nowrap leading-none tracking-tight
                       text-3xl md:text-4xl font-black text-cyan-700
                       transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
          >
            Más sobre mí
          </button>

          <button
            type="button"
            onClick={onContactOpen}
            className="text-left whitespace-nowrap leading-none tracking-tight
                       text-3xl md:text-4xl font-black text-cyan-700
                       transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
          >
            Contacto
          </button>
        </div>
      </div>
    </section>
  )
}

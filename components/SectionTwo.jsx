"use client";

import { useTheme } from "@/context/ThemeContext";
import ParticlesBackground from "@/components/ParticlesBackground";
import LogoMCFancy from "@/components/LogoMCFancy";

export default function SectionTwo({ onMenuOpen, onVerMas, onContactOpen }) {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <section
      className={`relative w-screen h-dvh snap-start snap-always flex-shrink-0 overscroll-none transition-colors duration-150 ${
        isDark ? "bg-black" : "bg-gray-50"
      } overflow-hidden overflow-y-hidden touch-pan-x`}
    >
      {/* Header */}
      <div
        className={`absolute top-0 left-0 right-0 z-30 backdrop-blur-lg border-b p-4 ${
          isDark ? "bg-black/60 border-white/10" : "bg-white/60 border-gray-300/50"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4 gap-6 overflow-hidden font-azonix">
          <LogoMCFancy
            className="h-12 w-auto text-gray-900 dark:text-cyan-300 hover:text-fuchsia-500 transition-colors"
            gap={0.5}
            shift={0.08}
            duration={500}
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

      {/* Avatar a la derecha */}
      <div
        className={`absolute inset-0 z-10 p-0 overflow-hidden transition-colors duration-150 ${
          isDark ? "bg-black/70" : "bg-gray-50/70"
        }`}
      >
        <img
          src="/assets/avatar.png"
          alt="Avatar Maurizio Caballero"
          className="absolute top-0 right-0 h-full w-auto object-cover scale-[1.06] origin-left z-30"
        />
      </div>

      {/* Scrim izquierdo */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-0 z-[15]
                    w-[46vw] md:w-[40vw] lg:w-[36vw]
                    ${isDark
                      ? "bg-gradient-to-r from-black/75 via-black/20 to-transparent"
                      : "bg-gradient-to-r from-white/60 via-white/30 to-transparent"
                    }`}
      />

      {/* Overlay general */}
      <div
        className={`absolute inset-0 z-20 transition-colors duration-150 ${
          isDark ? "bg-black/45" : "bg-white/6"
        }`}
      />

      {/* Contenido */}
      <div className="relative z-20 w-full h-full px-5 md:px-10 pt-20">
        <div className="h-full min-h-0">
          <div className="flex flex-col items-start gap-3 md:gap-4 max-w-[92%] font-azonix">
            <h1
              className={`text-[1.6rem] leading-[1.15] md:text-4xl lg:text-5xl font-black drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)] ${
                isDark ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              ¡Hola! Soy <br />
              <span className={`${isDark ? "bg-cyan-200 text-black" : "bg-cyan-100 text-gray-900"} px-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]`}>
                Maurizio Caballero
              </span>
              , <br />
              Frontend Developer
            </h1>

            {/* Chips md+ */}
            <div className="hidden md:flex flex-wrap gap-2 mt-1 z-20">
              {["React","Next.js","Tailwind/CSS","AI-Powered Dev","Mobile-First","API Integrations"].map((s) => (
                <span
                  key={s}
                  className={`px-3 py-1 rounded-full text-[0.85rem] tracking-tight backdrop-blur-sm ring-1 ${
                    isDark ? "bg-white/8 ring-white/10 text-white/90" : "bg-white/60 ring-black/5 text-slate-800"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Acciones esquina inferior izquierda */}
      <div
        className="font-azonix absolute z-30 left-4 bottom-4 md:left-8 md:bottom-6"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex flex-col items-start gap-4 md:gap-5">
          <button
            type="button"
            className="text-left whitespace-nowrap leading-none tracking-tight
                       text-3xl md:text-4xl font-black text-cyan-700 dark:text-cyan-300
                       transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
          >
            Descargar CV
          </button>
          <button
            type="button"
            onClick={onMenuOpen}
            className="text-left whitespace-nowrap leading-none tracking-tight
                       text-3xl md:text-4xl font-black text-cyan-700 dark:text-cyan-300
                       transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
          >
            Ver proyectos
          </button>
          <button
            type="button"
            onClick={onVerMas}
            className="text-left whitespace-nowrap leading-none tracking-tight
                       text-3xl md:text-4xl font-black text-cyan-700 dark:text-cyan-300
                       transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
          >
            Más sobre mí
          </button>
          <button
            type="button"
            onClick={onContactOpen}
            className="text-left whitespace-nowrap leading-none tracking-tight
                       text-3xl md:text-4xl font-black text-cyan-700 dark:text-cyan-300
                       transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
          >
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}

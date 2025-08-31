"use client";

import { useTheme } from "@/context/ThemeContext";
// import ParticlesBackground from "@/components/ParticlesBackground";
import LogoMCFancy from "@/components/LogoMCFancy";
import dynamic from "next/dynamic"
import Image from "next/image"
import { Sun, Moon, X as IconX, Download } from "lucide-react"

const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground"), { ssr: false })

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
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex items-center gap-2 sm:gap-3 min-h-[56px] md:min-h-[64px]">
      {/* IZQ: Logo */}
      <div className="flex-1 min-w-0 flex items-center">
        <LogoMCFancy
          className="h-12 w-auto text-gray-900 dark:text-cyan-300 hover:text-fuchsia-500 transition-colors"
          gap={0.5}
          shift={0.08}
          duration={500}
        />
      </div>

      {/* DER: Acciones (derecha → izquierda: toggle, WhatsApp) */}
      <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/56923927777"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
              : "text-cyan-700 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-800/30 hover:border-cyan-800/60"
          }`}
        >
          <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z"/>
          </svg>
        </a>

        {/* Tema claro/oscuro */}
        <button
          onClick={toggleDarkMode}
          aria-label="Cambiar tema"
          aria-pressed={isDark}
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
              : "text-cyan-700 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-800/30 hover:border-cyan-800/60"
          }`}
        >
          {isDark ? <Sun size={16} className="fill-current" /> : <Moon size={16} className="fill-current" />}
        </button>
      </div>
    </div>
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

        <Image src="/assets/avatar.png" alt="Avatar Maurizio Caballero"
        fill priority sizes="(min-width: 1024px) 50vw, 100vw"
         className="absolute top-0 right-0 object-cover  scale-[1.06] origin-left z-30" />

        {/* <img
          src="/assets/avatar.png"
          alt="Avatar Maurizio Caballero"
          className="absolute top-0 right-0 h-full w-auto object-cover scale-[1.06] origin-left z-30"
        /> */}
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

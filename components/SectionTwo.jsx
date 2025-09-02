// components/SectionTwo.jsx
"use client";

import { useTheme } from "@/context/ThemeContext";
import LogoMCFancy from "@/components/LogoMCFancy";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Sun, Moon, X as IconX, Download } from "lucide-react";

const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground"), { ssr: false });

export default function SectionTwo({
  onMenuOpen,
  onVerMas,
  onContactOpen,
  onClose,          // usado para volver a Section One con la X
  onDownloadCV,     // opcional
}) {
  const { isDark, toggleDarkMode } = useTheme();

  // Paleta de acento (texto principal)
  const accentText = isDark ? "text-cyan-300" : "text-cyan-800";

  // Color de texto para CTAs “cristal”
  const actionColor = isDark
    ? "text-cyan-300 hover:text-cyan-200"
    : "text-cyan-800 hover:text-cyan-900";

  // Base de botón “glass” del header (misma altura para todos)
  const glassBase =
    "flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors";

  // CV (igual a Section One: transparente suave)
  const btnCV =
    `${glassBase} ` +
    (isDark
      ? "text-cyan-300 hover:text-cyan-200 bg-white/0 hover:bg-white/5 border-cyan-700/40 hover:border-cyan-700/70"
      : "text-cyan-800 hover:text-cyan-900 bg-white/40 hover:bg-white/60 border-cyan-900/30 hover:border-cyan-900/60");

  // WhatsApp (verde suave)
  const btnWA =
    `${glassBase} ` +
    (isDark
      ? "text-emerald-300 hover:text-emerald-200 bg-emerald-900/40 hover:bg-emerald-900/55 border-emerald-700/40 hover:border-emerald-600/70"
      : "text-emerald-800 hover:text-emerald-900 bg-emerald-100/70 hover:bg-emerald-100 border-emerald-900/30 hover:border-emerald-900/50");

  // LinkedIn (azul suave)
  const btnLI =
    `${glassBase} ` +
    (isDark
      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
      : "text-blue-800 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/30 hover:border-blue-900/50");

  // Toggle tema (como venías)
  const btnToggle =
    `${glassBase} ` +
    (isDark
      ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
      : "text-cyan-800 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-900/30 hover:border-cyan-900/60");

  // X (roja suave)
  const btnX =
    `${glassBase} ` +
    (isDark
      ? "text-rose-300 hover:text-rose-200 bg-rose-900/40 hover:bg-rose-900/55 border-rose-700/40 hover:border-rose-600/70"
      : "text-rose-700 hover:text-rose-900 bg-rose-100/70 hover:bg-rose-100 border-rose-900/20 hover:border-rose-900/40");

  // CTA iguales (mismo look en mobile y desktop)
  const ctaBtn = [
    "inline-flex items-center justify-center gap-1.5",
    "w-[min(82vw,200px)] mx-auto md:mx-0 px-5 py-2 my-2",
    "rounded-md border font-azonix font-black transition-colors",
    "supports-[backdrop-filter]:backdrop-blur-sm",
    actionColor,
    isDark
      ? "bg-black/30 border-cyan-700/40 hover:border-cyan-700/70"
      : "bg-white/40 border-cyan-800/30 hover:border-cyan-800/60",
  ].join(" ");

  return (
    <section
      className={`relative w-screen h-dvh snap-start snap-always flex-shrink-0 overscroll-none transition-colors duration-150 ${
        isDark ? "bg-black" : "bg-gray-50"
      } overflow-hidden`}
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

            {/* DER (visual de derecha→izquierda): X, Toggle, LinkedIn, WhatsApp, CV
                Para lograrlo, los renderizamos de izquierda a derecha: CV, WA, LI, Toggle, X */}
            <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
              {/* CV */}
              <a
                href="/cv.pdf"
                download
                aria-label="Descargar CV"
                onClick={(e) => {
                  if (onDownloadCV) {
                    e.preventDefault();
                    onDownloadCV();
                  }
                }}
                className={btnCV}
              >
                <Download size={16} />
                <span className="hidden sm:inline">CV</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/56923927777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className={btnWA}
              >
                <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/maurizio-caballero-286a56219/?originalSubdomain=cl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className={btnLI}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47C21.4 7.73 24 10 24 14.3V24h-5v-8.6c0-2.05-.04-4.68-2.85-4.68-2.86 0-3.3 2.23-3.3 4.53V24H8V8z" />
                </svg>
              </a>

              {/* Toggle */}
              <button onClick={toggleDarkMode} aria-label="Cambiar tema" aria-pressed={isDark} className={btnToggle}>
                {isDark ? <Sun size={16} className="fill-current" /> : <Moon size={16} className="fill-current" />}
              </button>

              {/* X (volver a Section One) */}
              <button type="button" onClick={() => onClose?.()} aria-label="Cerrar" className={btnX}>
                <IconX size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fondo base */}
      <div className={`absolute inset-0 z-[5] transition-colors duration-150 ${isDark ? "bg-black" : "bg-gray-50"}`} />

      {/* Partículas */}
      <div className="absolute inset-0 z-[6] pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Avatar: mobile cover; md+ contain a la derecha */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Mobile */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/assets/avatar.png"
            alt="Avatar Maurizio Caballero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Desktop */}
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[60vw] max-w-[900px]">
          <Image
            src="/assets/avatar.png"
            alt="Avatar Maurizio Caballero"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 80vw"
            className="object-contain object-right"
          />
        </div>
      </div>

      {/* Scrim izquierdo (más tenue) */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-0 z-[15]
                    w-[46vw] md:w-[40vw] lg:w-[36vw]
                    ${
                      isDark
                        ? "bg-gradient-to-r from-black/60 via-black/15 to-transparent"
                        : "bg-gradient-to-r from-white/25 via-white/10 to-transparent"
                    }`}
      />

      {/* Overlay general (más suave) */}
      <div
        className={`absolute inset-0 z-20 transition-colors duration-150 ${
          isDark ? "bg-black/45 md:bg-black/35" : "bg-black/30 md:bg-white/20"
        }`}
      />

      {/* Contenido: centrado en mobile / a la IZQUIERDA en desktop */}
      <div className="relative z-20 w-full h-full px-5 md:px-10 pt-24">
        <div className="h-full min-h-0">
          <div
            className="
              font-azonix flex flex-col gap-3
              items-center text-center
              mx-auto max-w-[92%]
              md:items-start md:text-left md:mx-0 md:max-w-[52%]
            "
          >
            <h1
              className={`text-[1.6rem] leading-[1.15] md:text-4xl lg:text-5xl font-black drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)] ${accentText}`}
            >
              ¡Hola! Soy <br />
              <span
                className={`${
                  isDark ? "bg-cyan-200 text-black" : "bg-cyan-100 text-gray-900"
                } px-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]`}
              >
                Maurizio Caballero
              </span>
              , <br />
              <span
                className={`${
                  isDark ? "text-cyan-900 text-base md:text-3xl" : "text-gray-900 text-base md:text-3xl"
                } px-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]`}
              >
                Frontend Developer
              </span>
            </h1>

            <p
  className={`relative mt-[1vh] md:mt-2 mb-6 md:mb-3
              font-extrabold text-lg md:text-2xl leading-relaxed md:leading-tight
              text-slate-900/95 dark:text-white/90
              max-w-[48ch] text-center md:text-left mx-auto md:mx-0
              drop-shadow-[0_1px_0.5px_rgba(255,255,255,0.30)]
              dark:drop-shadow-[0_1px_0.5px_rgba(0,0,0,0.30)]
              before:content-[''] before:absolute before:inset-[-8px] before:rounded-2xl
              before:bg-white/30 dark:before:bg-black/20
              before:bg-gradient-to-br
              before:from-white/70 before:to-white/20
              dark:before:from-black/55 dark:before:to-black/15
              supports-[backdrop-filter]:before:backdrop-blur-xl
              before:shadow-[0_10px_30px_rgba(0,0,0,0.10)]
              dark:before:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              before:ring before:ring-black/10 dark:before:ring-white/10
              before:border before:border-white/30 dark:before:border-white/10
              before:z-[-1]`}
>
  Frontend con <span className="text-cyan-800 dark:text-cyan-300">React</span>,{" "}
  <span className="text-cyan-800 dark:text-cyan-300">Next.js</span> y{" "}
  <span className="text-cyan-800 dark:text-cyan-300">Vite</span>;{" "}
  <span className="text-cyan-800 dark:text-cyan-300">TypeScript</span>,{" "}
  <span className="text-cyan-800 dark:text-cyan-300">Tailwind</span> y{" "}
  <span className="text-cyan-800 dark:text-cyan-300">Framer Motion</span>, estado con{" "}
  <span className="text-cyan-800 dark:text-cyan-300">Zustand/Redux</span> y técnicas avanzadas
  (SSR/ISR, code-splitting, accesibilidad). IA y workflows en{" "}
  <span className="text-cyan-800 dark:text-cyan-300">Make (n8n)</span> conectados a{" "}
  <span className="text-cyan-800 dark:text-cyan-300">SQL</span>; piezas ligeras en{" "}
  <span className="text-cyan-800 dark:text-cyan-300">Inkscape</span>. Entrego soluciones digitales
  completas y efectivas.
</p>


          </div>
        </div>
      </div>

      {/* CTAs iguales y centradas (mobile) / a la izquierda (desktop) */}
      <div
        className="font-azonix absolute z-30 left-0 right-0 bottom-4 md:bottom-6
                   flex flex-col items-center gap-1 md:items-start md:left-8 md:right-auto"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href="/cv.pdf"
          download
          onClick={(e) => {
            if (onDownloadCV) { e.preventDefault(); onDownloadCV(); }
          }}
          className={ctaBtn}
        >
          <span className="inline-flex items-center gap-1">
            <Download size={12} />
            Descargar CV
          </span>
        </a>

        <button type="button" onClick={onMenuOpen} className={ctaBtn}>
          Ver proyectos
        </button>

        <button type="button" onClick={onVerMas} className={ctaBtn}>
          Más sobre mí
        </button>

        <button type="button" onClick={onContactOpen} className={ctaBtn}>
          Contacto
        </button>
      </div>
    </section>
  );
}

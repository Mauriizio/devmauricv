// components/SectionTwo.jsx
"use client";

import { useTheme } from "@/context/ThemeContext";
import LogoMCFancy from "@/components/LogoMCFancy";
import dynamic from "next/dynamic";
import Image from "next/image";
import { X as IconX, Download } from "lucide-react";

const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground"), { ssr: false });

export default function SectionTwo({
  onMenuOpen,
  onVerMas,
  onContactOpen,
  onClose,        // opcional
  onDownloadCV,   // opcional
}) {
  const { isDark, toggleDarkMode } = useTheme();

  // volver a Section One con scroll
  const scrollToSectionOne = () => {
    const main = document.querySelector("main");
    if (main) main.scrollTo({ left: main.scrollWidth, behavior: "smooth" });
    onClose?.();
  };

  const accentText = isDark ? "text-cyan-600" : "text-cyan-900";

  // base “glass” del header
  const glassBase =
    "flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors";

  const btnCV =
    `${glassBase} ` +
    (isDark
      ? "text-cyan-300 hover:text-cyan-200 bg-white/0 hover:bg-white/5 border-cyan-700/40 hover:border-cyan-700/70"
      : "text-cyan-800 hover:text-cyan-900 bg-white/40 hover:bg-white/60 border-cyan-900/30 hover:border-cyan-900/60");

  const btnWA =
    `${glassBase} ` +
    (isDark
      ? "text-emerald-300 hover:text-emerald-200 bg-emerald-900/40 hover:bg-emerald-900/55 border-emerald-700/40 hover:border-emerald-600/70"
      : "text-emerald-800 hover:text-emerald-900 bg-emerald-100/70 hover:bg-emerald-100 border-emerald-900/30 hover:border-emerald-900/50");

  // SOLO DESKTOP
  const btnLI =
    `${glassBase} hidden md:flex ` +
    (isDark
      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
      : "text-blue-800 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/30 hover:border-blue-900/50");

  const btnIG =
    `${glassBase} hidden md:flex ` +
    (isDark
      ? "text-pink-300 hover:text-pink-200 bg-pink-900/40 hover:bg-pink-900/55 border-pink-700/40 hover:border-pink-600/70"
      : "text-pink-700 hover:text-pink-800 bg-pink-100/70 hover:bg-pink-100 border-pink-900/20 hover:border-pink-900/40");

  const btnFB =
    `${glassBase} hidden md:flex ` +
    (isDark
      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
      : "text-blue-700 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/20 hover:border-blue-900/40");

  const btnGH =
    `${glassBase} hidden md:flex ` +
    (isDark
      ? "text-zinc-200 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border-zinc-600/50 hover:border-zinc-500/70"
      : "text-zinc-800 hover:text-black bg-zinc-100/70 hover:bg-zinc-100 border-zinc-900/20 hover:border-zinc-900/40");

  const btnX =
    `${glassBase} ` +
    (isDark
      ? "text-rose-300 hover:text-rose-200 bg-rose-900/40 hover:bg-rose-900/55 border-rose-700/40 hover:border-rose-600/70"
      : "text-rose-700 hover:text-rose-900 bg-rose-100/70 hover:bg-rose-100 border-rose-900/20 hover:border-rose-900/40");

  // Toggle tipo palanquita (mejor contraste + tamaños responsivos)
const switchTrackBase = isDark
  ? "bg-cyan-700 border-cyan-400/60"
  : "bg-cyan-200 border-cyan-900/50";

const switchBtn =
  `relative shrink-0 inline-flex items-center rounded-full border
   h-5 min-w-[2.8rem] max-w-[2.8rem]        /* móvil: más ancho */
   md:w-11 md:min-w-[2.75rem]             /* desktop: un pelín más pequeño */
   ${switchTrackBase}
   ${isDark ? "justify-end" : "justify-start"}
   shadow-[0_2px_10px_rgba(0,0,0,0.10)]
   transition-colors duration-200`;

const switchKnob =
  "h-5 w-5 mx-1 rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,.25)] " +
  "transition-transform duration-200";


  // ✅ CTAs: MISMO color/peso que Section One en mobile claro (forzado)
  const ctaBase =
    "inline-flex items-center justify-center gap-1.5 w-[min(82vw,200px)] mx-auto md:mx-0 px-5 py-2 my-2 " +
    "rounded-md border font-azonix !font-black subpixel-antialiased transition-colors supports-[backdrop-filter]:backdrop-blur-sm leading-none";
  const ctaTheme = isDark
    ? "text-cyan-300 hover:text-cyan-200 bg-black/30 border-cyan-700/40 hover:border-cyan-700/70"
    : "!text-cyan-900 hover:!text-cyan-900 bg-white/40 border-cyan-800/30 hover:border-cyan-800/60";
  // fuerza absoluta en mobile claro
  const ctaLightInline = !isDark ? { color: "#164e63", fontWeight: 800 } : undefined; // cyan-900

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

            {/* DER (derecha→izquierda) */}
            <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
              {/* CV */}
              <a
                href="/cv.pdf"
                download
                aria-label="Descargar CV"
                onClick={(e) => {
                  if (onDownloadCV) { e.preventDefault(); onDownloadCV(); }
                }}
                className={btnCV}
              >
                <Download size={12} />
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
                  <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z"/>
                </svg>
              </a>

              {/* Extras desktop */}
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={btnFB}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z"/>
                </svg>
              </a>
              <a href="https://github.com/Mauriizio" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={btnGH}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/devmauriz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={btnIG}>
                {/* outline para que no sea bloque */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/maurizio-caballero-286a56219/?originalSubdomain=cl"
                target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={btnLI}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47C21.4 7.73 24 10 24 14.3V24h-5v-8.6c0-2.05-.04-4.68-2.85-4.68-2.86 0-3.3 2.23-3.3 4.53V24H8V8z"/>
                </svg>
              </a>

              {/* X */}
              <button type="button" onClick={scrollToSectionOne} aria-label="Cerrar" className={btnX}>
                <IconX size={16} />
              </button>

              {/* Toggle extremo derecho */}
              <button
  type="button"
  onClick={toggleDarkMode}
  aria-label="Cambiar tema"
  aria-pressed={isDark}
  className={switchBtn}
>
  <span className={switchKnob} />
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

      {/* Avatar */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 md:hidden">
          <Image src="/assets/avatar.png" alt="Avatar Maurizio Caballero" fill priority sizes="100vw" className="object-cover object-center z-10" />
        </div>
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[60vw] max-w-[900px]">
          <Image src="/assets/avatar.png" alt="Avatar Maurizio Caballero" fill priority sizes="(min-width: 1024px) 60vw, 80vw" className="object-contain object-right z-10" />
        </div>
      </div>

      {/* Scrim izquierdo */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-0 z-[15]
                    w-[46vw] md:w-[40vw] lg:w-[36vw]
                    ${isDark ? "bg-gradient-to-r from-black/60 via-black/15 to-transparent"
                             : "bg-gradient-to-r from-white/25 via-white/10 to-transparent"}`}
      />

      {/* Overlay general */}
      <div className={`absolute inset-0 z-20 transition-colors duration-150 ${isDark ? "bg-black/65 md:bg-black/70" : "bg-black/30 md:bg-white/20"}`} />

      {/* Contenido */}
      <div className="relative z-20 w-full h-full px-5 md:px-10 pt-24">
        <div className="h-full min-h-0">
          <div className="font-azonix flex flex-col gap-3 items-center text-center mx-auto max-w-[92%] md:items-start md:text-left md:mx-0 md:max-w-[52%]">
            <h1 className={`text-[1.6rem] leading-[1.15] md:text-4xl lg:text-5xl font-black drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)] ${accentText}`}>
              ¡Hola! Soy <br />
              <span className={`${isDark ? "bg-cyan-200/10 text-black" : "bg-cyan-100 text-gray-900"} px-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]`}>
                Maurizio Caballero
              </span>
              , <br />
            </h1>

            {/* Frase resumen – más CERCA de los CTAs en mobile (mt grande) y ANGOSTA en desktop */}
            <p
              className={`relative mt-[14vh] md:mt-2 mb-2 md:mb-1
                          font-black text-lg md:text-2xl leading-relaxed md:leading-tight
                          text-slate-900/95 dark:text-white/90
                          max-w-[48ch] md:max-w-[38ch] lg:max-w-[34ch]
                          text-center md:text-left mx-auto md:mx-0
                          drop-shadow-[0_1px_0.5px_rgba(255,255,255,0.30)]
                          dark:drop-shadow-[0_1px_0.5px_rgba(0,0,0,0.30)]
                          before:content-[''] before:absolute before:inset-[-8px] before:rounded-2xl
                          before:bg-white/30 dark:before:bg-black/20
                          before:bg-gradient-to-br before:from-white/70 before:to-white/20
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

      {/* CTAs */}
      <div
        className="font-azonix absolute z-30 left-0 right-0 bottom-4 md:bottom-6
                   flex flex-col items-center gap-1 md:items-start md:left-8 md:right-auto"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <button type="button" onClick={onMenuOpen} className={`${ctaBase} ${ctaTheme}`} style={ctaLightInline}>
          Ver proyectos
        </button>
        <button type="button" onClick={onVerMas} className={`${ctaBase} ${ctaTheme}`} style={ctaLightInline}>
          Más sobre mí
        </button>
        <button type="button" onClick={onContactOpen} className={`${ctaBase} ${ctaTheme}`} style={ctaLightInline}>
          Contacto
        </button>
      </div>
    </section>
  );
}

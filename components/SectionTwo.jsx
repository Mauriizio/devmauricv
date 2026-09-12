// components/SectionTwo.jsx
"use client";

import { useTheme } from "@/context/ThemeContext";
import LogoMarkShimmer from "@/components/LogoMarkShimmer";
import ParticlesBackground from "@/components/ParticlesBackground";
import Image from "next/image";
import { ArrowRight, Download, GraduationCap, Mail, Moon, Sun, UserRound, Youtube } from "lucide-react";

export default function SectionTwo({
  onMenuOpen,
  onVerMas,
  onContactOpen,
  onTutoringOpen,
  onDownloadCV,   // opcional
}) {
  const { isDark, toggleDarkMode } = useTheme();

  // base “glass” del header
  const glassBase =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border p-0 text-sm transition-colors";

  const btnLI =
    `${glassBase} flex ` +
    (isDark
      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
      : "text-blue-800 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/30 hover:border-blue-900/50");

  const btnIG =
    `${glassBase} flex ` +
    (isDark
      ? "text-pink-300 hover:text-pink-200 bg-pink-900/40 hover:bg-pink-900/55 border-pink-700/40 hover:border-pink-600/70"
      : "text-pink-700 hover:text-pink-800 bg-pink-100/70 hover:bg-pink-100 border-pink-900/20 hover:border-pink-900/40");

  const btnFB =
    `${glassBase} hidden md:flex ` +
    (isDark
      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
      : "text-blue-700 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/20 hover:border-blue-900/40");

  const btnGH =
    `${glassBase} flex ` +
    (isDark
      ? "text-zinc-200 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border-zinc-600/50 hover:border-zinc-500/70"
      : "text-zinc-800 hover:text-black bg-zinc-100/70 hover:bg-zinc-100 border-zinc-900/20 hover:border-zinc-900/40");

  const btnYT =
    `${glassBase} flex ` +
    (isDark
      ? "text-red-300 hover:text-red-200 bg-red-950/35 hover:bg-red-950/55 border-red-700/35 hover:border-red-600/65"
      : "text-red-700 hover:text-red-800 bg-red-50/75 hover:bg-red-100 border-red-900/20 hover:border-red-900/35");

  // ✅ CTAs unificados (mismo estilo que About/Contact)
  const ctaBtn = [
    "hidden md:inline-flex items-center justify-center gap-1.5",
    "min-w-[130px] px-4 py-2.5 lg:min-w-[145px]",
    "rounded-md border font-azonix font-extrabold transition-colors",
    "supports-[backdrop-filter]:backdrop-blur-sm",
    "disabled:opacity-60 disabled:pointer-events-none",
    isDark
      ? "text-cyan-300 hover:text-cyan-200 bg-black/30 border-cyan-700/40 hover:border-cyan-700/70"
      : "text-cyan-900 hover:text-cyan-700 bg-white/70 border-cyan-800/30 hover:border-cyan-800/60",
  ].join(" ");

  const mobileCtaBtn = [
    "inline-flex w-full items-center justify-between rounded-xl border px-4 py-2.5",
    "font-azonix text-[0.62rem] font-bold uppercase tracking-[0.08em] transition-[background-color,border-color,transform]",
    isDark
      ? "border-cyan-300/60 bg-cyan-300/5 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,.15)] hover:bg-cyan-300/10"
      : "border-cyan-700/45 bg-white/35 text-cyan-950 shadow-[0_0_20px_rgba(8,145,178,.12)] hover:bg-white/60",
  ].join(" ");

  return (
    <section
      className={`relative h-dvh w-full max-w-full snap-start snap-always flex-shrink-0 overscroll-none transition-colors duration-150 ${
        isDark ? "bg-black" : "bg-gray-50"
      } overflow-hidden`}
    >
      {/* Header */}
      <div
        className={`absolute top-0 left-0 right-0 z-30 border-b p-3 backdrop-blur-lg md:p-4 ${
          isDark ? "bg-black/60 border-white/10" : "bg-white/60 border-gray-300/50"
        }`}
      >
        <div className="mx-auto max-w-6xl px-2 md:px-4">
          <div className="flex items-center gap-2 sm:gap-3 min-h-[56px] md:min-h-[64px]">
            {/* IZQ: Logo */}
            <div className="mr-auto flex shrink-0 items-center">
              <LogoMarkShimmer isDark={isDark} className="h-9 w-auto md:h-14" />
            </div>

            {/* DER (derecha→izquierda) */}
            <div className="flex shrink-0 items-center justify-end gap-2">
              {/* Extras desktop */}
              <a href="https://web.facebook.com/profile.php?id=61565151473870" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={btnFB}>
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
              <a href="https://www.youtube.com/@Devmauri" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" className={btnYT}>
                <Youtube size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/maurizio-caballero-286a56219/?originalSubdomain=cl"
                target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={btnLI}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47C21.4 7.73 24 10 24 14.3V24h-5v-8.6c0-2.05-.04-4.68-2.85-4.68-2.86 0-3.3 2.23-3.3 4.53V24H8V8z"/>
                </svg>
              </a>

              {/* Toggle extremo derecho */}
              {/* Toggle — extremo derecho, con icono contextual (luna en claro / sol en oscuro) */}
              <button
                type="button"
                onClick={toggleDarkMode}
                aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                aria-pressed={isDark}
                className={`relative shrink-0 inline-flex items-center rounded-full border
                            h-6 w-9 min-w-9 md:w-[2.50rem] md:min-w-[2.50rem]
                            ${isDark ? "bg-cyan-700 border-cyan-400/60 justify-end" : "bg-cyan-200 border-cyan-900/50 justify-start"}
                            shadow-[0_2px_10px_rgba(0,0,0,0.10)] transition-colors duration-200`}
              >
                <span className="relative mx-1 grid h-4 w-4 place-items-center rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,.25)] md:h-5 md:w-5">
                  {isDark ? (
                    <Sun size={12} className="text-amber-500" aria-hidden="true" />
                  ) : (
                    <Moon size={12} className="text-cyan-700" aria-hidden="true" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Escena técnica inspirada en la referencia visual */}
      <div
        className={`absolute inset-0 z-[5] transition-colors duration-150 ${
          isDark ? "bg-zinc-950" : "bg-slate-50"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 z-[9]">
        <ParticlesBackground />
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-[8] ${
          isDark
            ? "bg-[radial-gradient(circle_at_76%_42%,rgba(6,182,212,.22),transparent_31%),linear-gradient(90deg,rgba(9,9,11,.82)_0%,rgba(9,9,11,.58)_48%,rgba(9,9,11,.12)_100%)]"
            : "bg-[radial-gradient(circle_at_76%_42%,rgba(34,211,238,.20),transparent_31%),linear-gradient(90deg,rgba(248,250,252,.94)_0%,rgba(248,250,252,.78)_48%,rgba(248,250,252,.18)_100%)]"
        }`}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-28 z-[9] h-24 w-24 opacity-35 [background-image:radial-gradient(circle,#22d3ee_1.4px,transparent_1.4px)] [background-size:14px_14px] md:left-auto md:right-7 md:top-32"
      />

      {/* Avatar: las dos variantes comparten exactamente la misma caja */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[8.5rem] top-[10.5rem] z-10 md:bottom-0 md:left-auto md:right-0 md:top-24 md:w-[48vw] md:max-w-[760px] lg:right-[2vw] xl:right-[3vw]">
        <Image
          src={isDark ? "/assets/new-avtar-oscuro.png" : "/assets/new-avtar-claro.png"}
          alt="Retrato profesional de Maurizio Caballero"
          fill
          sizes="(min-width: 1280px) 760px, (min-width: 768px) 48vw, 100vw"
          className="object-contain object-bottom md:object-right-bottom"
        />
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-[11] h-[52%] md:hidden ${
          isDark
            ? "bg-gradient-to-b from-transparent via-zinc-950/45 to-zinc-950/95"
            : "bg-gradient-to-b from-transparent via-slate-50/45 to-slate-50/95"
        }`}
      />

      {/* Firma: misma posición y dimensiones; solo cambia el asset del tema */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-2 top-[34%] z-[23] h-24 w-36 opacity-55 sm:left-5 sm:w-40 md:left-auto md:right-2 md:top-[27%] md:h-32 md:w-52 lg:right-4 lg:top-[28%] lg:h-36 lg:w-60 ${
          isDark ? "text-cyan-300" : "text-cyan-700"
        }`}
      >
        <svg viewBox="0 0 300 150" className="h-full w-full" fill="none">
          <path d="M18 116H104L127 93H267" stroke="currentColor" strokeWidth="1.2" opacity=".48" />
          <path d="M72 132H178L205 105H287" stroke="currentColor" strokeWidth=".8" opacity=".28" />
          <path d="M187 28h54l27 27-27 27h-54l-27-27 27-27Z" stroke="currentColor" strokeWidth="1" opacity=".34" />
          <circle cx="18" cy="116" r="3.5" fill="currentColor" opacity=".68" />
          <circle cx="127" cy="93" r="3" fill="currentColor" opacity=".48" />
          <circle cx="267" cy="93" r="3.5" fill="currentColor" opacity=".62" />
          <circle cx="72" cy="132" r="2.5" fill="currentColor" opacity=".42" />
          <circle cx="205" cy="105" r="2.5" fill="currentColor" opacity=".4" />
          <path d="M225 38v34M208 55h34" stroke="currentColor" strokeWidth=".8" opacity=".25" />
        </svg>
      </div>
      <div className="pointer-events-none absolute left-5 top-[36%] z-[24] w-24 sm:left-8 sm:w-28 md:left-auto md:right-4 md:top-[29%] md:w-36 lg:right-7 lg:top-[30%] lg:w-44 xl:right-10 xl:w-48">
        <Image
          src={isDark ? "/assets/firma-oscuro.png" : "/assets/firma-claro.png"}
          alt="Firma de Maurizio Caballero"
          width={1536}
          height={1024}
          sizes="(min-width: 1024px) 208px, (min-width: 768px) 160px, 144px"
          className="h-auto w-full object-contain opacity-90"
        />
      </div>

      {/* Presentación */}
      <div className="relative z-20 h-full w-full px-4 pt-24 md:px-10 md:pt-28">
        <div className="flex h-full min-h-0 items-start pt-3 md:items-center md:pt-0">
          <div className="mx-auto flex w-full min-w-0 flex-col items-start text-left md:mx-0 md:max-w-[55%] lg:max-w-[52%]">
            <p className="mb-2 whitespace-nowrap font-sans text-[0.48rem] font-bold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-300 min-[390px]:text-[0.52rem] md:mb-3 md:text-xs md:tracking-[0.28em]">
              <span className="md:hidden">Ingeniería • Automatización • Tecnología</span>
              <span className="hidden md:inline">
              Ingeniería <span className="px-1 text-cyan-400">•</span> Automatización <span className="px-1 text-cyan-400">•</span> Software aplicado
              </span>
            </p>

            <h1 className="max-w-full font-azonix text-[1.62rem] font-black leading-[1.02] text-slate-950 dark:text-white md:text-4xl lg:text-5xl">
              <span className="md:hidden">
                ¡Hola! Soy
                <span className="mt-1 block w-fit max-w-full bg-cyan-200/35 px-2 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,.10)] dark:bg-cyan-300/15 dark:text-cyan-100 dark:shadow-[0_0_24px_rgba(34,211,238,.18)]">
                  Maurizio Caballero
                </span>
              </span>
              <span className="hidden md:inline">
                ¡Hola! Soy
                <span className="mt-1 block max-w-full bg-cyan-200/35 px-2 text-slate-950 shadow-[0_0_28px_rgba(34,211,238,.10)] dark:bg-cyan-300/15 dark:text-cyan-100 dark:shadow-[0_0_28px_rgba(34,211,238,.18)]">
                  Maurizio Caballero
                </span>
              </span>
            </h1>

            <div
              className={`absolute bottom-[calc(4.75rem+env(safe-area-inset-bottom))] left-4 right-4 min-w-0 overflow-hidden rounded-2xl border p-3.5 text-left backdrop-blur-xl md:static md:mt-7 md:w-full md:max-w-[52rem] md:p-6 ${
                isDark
                  ? "border-cyan-300/40 bg-zinc-950/[0.68] shadow-[0_0_28px_rgba(34,211,238,.16),0_18px_48px_rgba(0,0,0,.32)] md:border-cyan-300/20 md:bg-black/[0.40]"
                  : "border-white/85 bg-white/[0.72] shadow-[0_0_26px_rgba(8,145,178,.12),0_18px_48px_rgba(15,23,42,.12)] md:bg-white/[0.58]"
              }`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent"
              />
              <span className="mb-2 hidden h-8 w-8 place-items-center rounded-lg bg-cyan-400/10 font-mono text-sm font-bold text-cyan-700 dark:text-cyan-300 md:mb-3 md:grid md:h-9 md:w-9 md:rounded-xl md:text-base">
                {"</>"}
              </span>
              <h2 className="font-sans text-[0.72rem] font-bold leading-snug text-slate-900 dark:text-white md:text-lg">
                <span className="whitespace-nowrap text-[clamp(0.62rem,2.75vw,0.72rem)] md:hidden">Estudiante de Ing. en Electricidad y Automatización Industrial.</span>
                <span className="hidden md:inline">Este portafolio es mi bitácora profesional: un espacio donde documento el camino que estoy construyendo dentro de la Ingeniería en Electricidad y Automatización Industrial.</span>
              </h2>
              <p className="mt-1.5 font-sans text-[0.7rem] leading-[1.35] text-slate-700 dark:text-zinc-200 md:mt-3 md:text-base md:leading-relaxed">
                <span className="md:hidden">Aquí reúno proyectos de desarrollo de software, documentación técnica, sistemas, bases de datos, automatización y trabajos académicos.</span>
                <span className="hidden md:inline">
                Soy estudiante y aquí reúno proyectos de desarrollo web, documentación técnica, sistemas, bases de datos, automatización y trabajos académicos. No es solo una vitrina de servicios: es un registro honesto de mis aprendizajes, proyectos y evolución hacia una base profesional sólida.
                </span>
              </p>
              <p className="mt-3 hidden break-words font-sans text-xs font-bold uppercase leading-relaxed tracking-[0.18em] text-cyan-800 dark:text-cyan-300 md:block">
                Aprender <span className="px-1 text-cyan-400">+</span> Construir <span className="px-1 text-cyan-400">+</span> Documentar <span className="px-1 text-cyan-400">=</span> Evolucionar
              </p>

              <div className="mt-2.5 grid grid-cols-4 gap-1.5 border-y border-cyan-700/15 py-2.5 dark:border-cyan-300/15 md:hidden">
                <button type="button" onClick={onVerMas} className="group flex min-w-0 flex-col items-center text-center" aria-label="Más sobre mí">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-cyan-700/20 bg-cyan-400/10 text-cyan-700 transition-colors group-hover:bg-cyan-400/20 dark:border-cyan-300/20 dark:text-cyan-200">
                    <UserRound size={16} aria-hidden="true" />
                  </span>
                  <span className="mt-1 font-sans text-[0.5rem] font-semibold leading-tight text-slate-700 dark:text-zinc-200">Sobre mí</span>
                </button>
                <button type="button" onClick={onContactOpen} className="group flex min-w-0 flex-col items-center text-center" aria-label="Abrir contacto">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-cyan-700/20 bg-cyan-400/10 text-cyan-700 transition-colors group-hover:bg-cyan-400/20 dark:border-cyan-300/20 dark:text-cyan-200">
                    <Mail size={16} aria-hidden="true" />
                  </span>
                  <span className="mt-1 font-sans text-[0.5rem] font-semibold leading-tight text-slate-700 dark:text-zinc-200">Contacto</span>
                </button>
                <a
                  href="/cv.pdf"
                  download
                  onClick={(event) => {
                    if (onDownloadCV) {
                      event.preventDefault();
                      onDownloadCV();
                    }
                  }}
                  className="group flex min-w-0 flex-col items-center text-center"
                  aria-label="Descargar CV"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-cyan-700/20 bg-cyan-400/10 text-cyan-700 transition-colors group-hover:bg-cyan-400/20 dark:border-cyan-300/20 dark:text-cyan-200">
                    <Download size={16} aria-hidden="true" />
                  </span>
                  <span className="mt-1 font-sans text-[0.5rem] font-semibold leading-tight text-slate-700 dark:text-zinc-200">Descargar CV</span>
                </a>
                <button type="button" onClick={onTutoringOpen} className="group flex min-w-0 flex-col items-center text-center" aria-label="Abrir tutorías">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-cyan-700/20 bg-cyan-400/10 text-cyan-700 transition-colors group-hover:bg-cyan-400/20 dark:border-cyan-300/20 dark:text-cyan-200">
                    <GraduationCap size={16} aria-hidden="true" />
                  </span>
                  <span className="mt-1 font-sans text-[0.5rem] font-semibold leading-tight text-slate-700 dark:text-zinc-200">Tutorías</span>
                </button>
              </div>

              <div className="mt-2.5 md:hidden">
                <button type="button" onClick={onMenuOpen} className={mobileCtaBtn}>
                  <span>Ver proyectos</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-6 hidden flex-wrap gap-3 md:flex">
              <button type="button" onClick={onMenuOpen} className={ctaBtn}>Ver proyectos</button>
              <button type="button" onClick={onVerMas} className={ctaBtn}>Más sobre mí</button>
              <button type="button" onClick={onContactOpen} className={ctaBtn}>Contacto</button>
              <button type="button" onClick={onTutoringOpen} className={ctaBtn}>Tutorías</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

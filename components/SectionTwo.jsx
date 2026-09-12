// components/SectionTwo.jsx
"use client";

import { useTheme } from "@/context/ThemeContext";
import LogoMCFancy from "@/components/LogoMCFancy";
import dynamic from "next/dynamic";
import Image from "next/image";
import { X as IconX, Sun, Moon, Download } from "lucide-react";

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
     h-6 w-[2.50rem] min-w-[2.50rem]       /* móvil: más ancho */
     md:w-11 md:min-w-[2.75rem]            /* desktop: un pelín más pequeño */
     ${switchTrackBase}
     ${isDark ? "justify-end" : "justify-start"}
     shadow-[0_2px_10px_rgba(0,0,0,0.10)]
     transition-colors duration-200`;

  const switchKnob =
    "h-5 w-5 mx-1 rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,.25)] transition-transform duration-200";

  // ✅ CTAs unificados (mismo estilo que About/Contact)
  const ctaBtn = [
    "hidden md:inline-flex items-center justify-center gap-1.5",
    "min-w-[150px] lg:min-w-[175px] px-5 py-2.5",
    "rounded-md border font-azonix font-extrabold transition-colors",
    "supports-[backdrop-filter]:backdrop-blur-sm",
    "disabled:opacity-60 disabled:pointer-events-none",
    isDark
      ? "text-cyan-300 hover:text-cyan-200 bg-black/30 border-cyan-700/40 hover:border-cyan-700/70"
      : "text-cyan-900 hover:text-cyan-700 bg-white/70 border-cyan-800/30 hover:border-cyan-800/60",
  ].join(" ");

  const mobileCtaBtn = [
    "inline-flex min-w-0 items-center justify-center rounded-lg border px-2 py-2.5",
    "font-azonix text-[0.56rem] font-bold leading-tight transition-colors",
    isDark
      ? "border-cyan-300/20 bg-cyan-300/5 text-cyan-200 hover:bg-cyan-300/10"
      : "border-cyan-800/20 bg-white/55 text-cyan-900 hover:bg-white/80",
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
                className={glassBase + " " + (isDark
                  ? "text-cyan-300 hover:text-cyan-200 bg-white/0 hover:bg-white/5 border-cyan-700/40 hover:border-cyan-700/70"
                  : "text-cyan-800 hover:text-cyan-900 bg-white/40 hover:bg-white/60 border-cyan-900/30 hover:border-cyan-900/60")}
              >
                <Download size={16} />
                <span className="hidden sm:inline text-xs font-sans font-bold">CV</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/56935446606"
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
              {/* Toggle — extremo derecho, con icono contextual (luna en claro / sol en oscuro) */}
              <button
                type="button"
                onClick={toggleDarkMode}
                aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                aria-pressed={isDark}
                className={`relative shrink-0 inline-flex items-center rounded-full border
                            h-6 w-[2.50rem] min-w-[2.50rem] md:w-[2.50rem]
                            ${isDark ? "bg-cyan-700 border-cyan-400/60 justify-end" : "bg-cyan-200 border-cyan-900/50 justify-start"}
                            shadow-[0_2px_10px_rgba(0,0,0,0.10)] transition-colors duration-200`}
              >
                <span className="h-5 w-5 mx-1 rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,.25)] relative grid place-items-center">
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

      <div className="pointer-events-none absolute inset-0 z-[6]">
        <ParticlesBackground />
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-[8] ${
          isDark
            ? "bg-[radial-gradient(circle_at_76%_42%,rgba(6,182,212,.18),transparent_31%),linear-gradient(90deg,rgba(9,9,11,.97)_0%,rgba(9,9,11,.88)_48%,rgba(9,9,11,.24)_100%)]"
            : "bg-[radial-gradient(circle_at_76%_42%,rgba(34,211,238,.18),transparent_31%),linear-gradient(90deg,rgba(248,250,252,.98)_0%,rgba(248,250,252,.90)_48%,rgba(248,250,252,.24)_100%)]"
        }`}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-28 z-[9] h-24 w-24 opacity-35 [background-image:radial-gradient(circle,#22d3ee_1.4px,transparent_1.4px)] [background-size:14px_14px] md:left-auto md:right-7 md:top-32"
      />

      {/* Avatar: las dos variantes comparten exactamente la misma caja */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[8.5rem] top-[10.5rem] z-10 md:bottom-0 md:left-auto md:right-0 md:top-24 md:w-[48vw] md:max-w-[760px]">
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
      <div className="pointer-events-none absolute right-2 top-[31%] z-[24] w-28 sm:right-6 sm:w-36 md:right-3 md:top-[22%] md:w-40 lg:right-8 lg:w-52">
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
            <p className="mb-2 font-sans text-[0.62rem] font-bold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300 md:mb-3 md:text-xs">
              <span className="md:hidden">Sobre mí</span>
              <span className="hidden md:inline">
              Ingeniería <span className="px-1 text-cyan-400">•</span> Automatización <span className="px-1 text-cyan-400">•</span> Software aplicado
              </span>
            </p>

            <h1 className="max-w-[13ch] font-azonix text-[1.72rem] font-black leading-[1.02] text-slate-950 dark:text-white md:max-w-full md:text-4xl lg:text-5xl">
              <span className="md:hidden">
                Más que código,
                <span className="block text-cyan-600 dark:text-cyan-300">es propósito.</span>
              </span>
              <span className="hidden md:inline">
                ¡Hola! Soy
                <span className="mt-1 block max-w-full bg-cyan-200/75 px-2 text-slate-950 shadow-[0_0_28px_rgba(34,211,238,.18)] dark:bg-cyan-300/15 dark:text-cyan-100">
                  Maurizio Caballero
                </span>
              </span>
            </h1>

            <div
              className={`absolute bottom-[calc(4.75rem+env(safe-area-inset-bottom))] left-4 right-4 min-w-0 overflow-hidden rounded-2xl border p-4 text-left backdrop-blur-md md:static md:mt-7 md:w-full md:max-w-[52rem] md:p-6 ${
                isDark
                  ? "border-cyan-300/25 bg-zinc-950/90 shadow-[0_0_32px_rgba(34,211,238,.12)] md:bg-black/35"
                  : "border-cyan-700/20 bg-white/90 shadow-[0_16px_45px_rgba(8,145,178,.16)] md:border-white/80 md:bg-white/65"
              }`}
            >
              <span className="mb-2 grid h-8 w-8 place-items-center rounded-lg bg-cyan-400/10 font-mono text-sm font-bold text-cyan-700 dark:text-cyan-300 md:mb-3 md:h-9 md:w-9 md:rounded-xl md:text-base">
                {"</>"}
              </span>
              <h2 className="font-sans text-sm font-bold leading-snug text-slate-900 dark:text-white md:text-lg">
                <span className="md:hidden">Soy estudiante de Ingeniería en Electricidad y Automatización Industrial.</span>
                <span className="hidden md:inline">
                Este portafolio es mi bitácora profesional: un espacio donde documento el camino que estoy construyendo dentro de la Ingeniería en Electricidad y Automatización Industrial.
                </span>
              </h2>
              <p className="mt-2 font-sans text-[0.72rem] leading-[1.35] text-slate-700 dark:text-zinc-200 md:mt-3 md:text-base md:leading-relaxed">
                <span className="md:hidden">Esta bitácora reúne desarrollo web, documentación técnica, sistemas, bases de datos, automatización y trabajos académicos. Aquí documento mis proyectos, aprendizajes y evolución profesional.</span>
                <span className="hidden md:inline">
                Soy estudiante y aquí reúno proyectos de desarrollo web, documentación técnica, sistemas, bases de datos, automatización y trabajos académicos. No es solo una vitrina de servicios: es un registro honesto de mis aprendizajes, proyectos y evolución hacia una base profesional sólida.
                </span>
              </p>
              <p className="mt-3 hidden break-words font-sans text-xs font-bold uppercase leading-relaxed tracking-[0.18em] text-cyan-800 dark:text-cyan-300 md:block">
                Aprender <span className="px-1 text-cyan-400">+</span> Construir <span className="px-1 text-cyan-400">+</span> Documentar <span className="px-1 text-cyan-400">=</span> Evolucionar
              </p>

              <div className="mt-3 grid grid-cols-3 gap-2 md:hidden">
                <button type="button" onClick={onMenuOpen} className={mobileCtaBtn}>Proyectos</button>
                <button type="button" onClick={onVerMas} className={mobileCtaBtn}>Sobre mí</button>
                <button type="button" onClick={onContactOpen} className={mobileCtaBtn}>Contacto</button>
              </div>
            </div>

            <div className="mt-6 hidden flex-wrap gap-3 md:flex">
              <button type="button" onClick={onMenuOpen} className={ctaBtn}>Ver proyectos</button>
              <button type="button" onClick={onVerMas} className={ctaBtn}>Más sobre mí</button>
              <button type="button" onClick={onContactOpen} className={ctaBtn}>Contacto</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";
// import CodeParticlesBackground from "./CodeParticlesBackground";
import { Download, ChevronsLeft,  Sun, Moon, X as IconX, ChevronsRight } from "lucide-react";
import LogoMarkShimmer from "@/components/LogoMarkShimmer";
import dynamic from "next/dynamic"


const CodeParticlesBackground = dynamic(() => import("@/components/CodeParticlesBackground"), { ssr: false })

export default function SectionOne({ onMenuOpen, onVerMas, onContactOpen }) {
  const rootRef = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);
  const { isDark, toggleDarkMode } = useTheme();

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Encuentra scroller horizontal (para ir a SectionTwo con "Más")
  const findHorizontalScroller = (el) => {
    let node = el?.parentElement ?? null;
    for (let i = 0; i < 6 && node; i++) {
      const cs = window.getComputedStyle(node);
      const mayScrollX =
        (cs.overflowX === "auto" ||
          cs.overflowX === "scroll" ||
          cs.overflowX === "overlay") &&
        node.scrollWidth > node.clientWidth + 1;
      if (mayScrollX) return node;
      node = node.parentElement;
    }
    return null;
  };

  const goSectionTwo = useCallback(() => {
    let target = null;
    const here = rootRef.current;
    if (here?.nextElementSibling && here.nextElementSibling.tagName === "SECTION") {
      target = here.nextElementSibling;
    }
    if (!target) {
      target =
        document.getElementById("section-two") ||
        document.querySelector('[data-section="two"]') ||
        document.querySelector('[data-section="SectionTwo"]') ||
        document.querySelector("section#two");
    }
    if (!target) return;

    const scroller = findHorizontalScroller(target);
    if (scroller) {
      const left = target.offsetLeft - scroller.offsetLeft;
      scroller.scrollTo({ left, behavior: "smooth" });
      return;
    }
    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, []);

  // Glass y color
  const glassCircle = isDark
    ? "bg-white/8 ring-1 ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
    : "bg-white/20 supports-[backdrop-filter]:bg-white/15 ring-1 ring-black/10 shadow-[0_10px_25px_rgba(0,0,0,0.15)] backdrop-blur-xl";

  const actionColor = isDark ? "text-cyan-300" : "text-cyan-900";


  // CTA iguales (mismo look en mobile y desktop)
  const ctaBtn = [
    " inline-flex items-center justify-center gap-1.5",
    "w-[min(82vw,200px)] mx-auto md:mx-0 px-5 py-2 my-2",
    "rounded-md border font-azonix font-black transition-colors",
    "supports-[backdrop-filter]:backdrop-blur-sm",
    actionColor,
    isDark
      ? "bg-black/30 border-cyan-700/40 hover:border-cyan-700/70  hover:text-cyan-200"
      : "bg-white/40 border-cyan-800/30 hover:border-cyan-800/60  hover:text-cyan-200",
  ].join(" ");

  return (
    <section
      ref={rootRef}
      className={`relative w-screen h-dvh snap-start snap-always flex-shrink-0 overscroll-none transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-50"
      } overflow-hidden overflow-y-hidden touch-pan-x`}
      style={{ overflowX: "clip" }}
    >
      {/* Header (Section One) */}
<div
  className={`absolute top-0 left-0 right-0 z-50 backdrop-blur-lg border-b p-4 ${
    isDark ? "bg-black/60 border-white/10" : "bg-white/60 border-gray-300/50"
  }`}
>


  <div className="max-w-6xl mx-auto px-4">
    <div className="flex items-center gap-2 sm:gap-3 min-h-[56px] md:min-h-[64px]">
      {/* IZQ: Logo */}
      <div className="flex-1 min-w-0 flex items-center">
        <LogoMarkShimmer isDark={isDark} className="h-12 w-auto md:h-14" />
      </div>

      {/* DER (visual derecha→izquierda). Render: CV, IG, FB, WA, GH, LI, Toggle */}
      <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
        {/* CV — solo desktop */}
        <a
          href="/cv.pdf"
          download
          aria-label="Descargar CV"
          className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-cyan-300 hover:text-cyan-200 bg-white/0 hover:bg-white/5 border-cyan-700/40 hover:border-cyan-700/70"
              : "text-cyan-800 hover:text-cyan-900 bg-white/40 hover:bg-white/60 border-cyan-900/30 hover:border-cyan-900/60"
          }`}
        >
          <Download size={16} />
          <span className="hidden sm:inline text-xs font-sans font-bold">CV</span>
        </a>

        {/* Instagram — solo desktop */}
        <a
          href="https://www.instagram.com/devmauriz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-pink-300 hover:text-pink-200 bg-pink-900/40 hover:bg-pink-900/55 border-pink-700/40 hover:border-pink-600/70"
              : "text-pink-700 hover:text-pink-800 bg-pink-100/70 hover:bg-pink-100 border-pink-900/20 hover:border-pink-900/40"
          }`}
          title="Instagram"
        >
          {/* outline para que no sea bloque sólido */}
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        </a>

        {/* Facebook — solo desktop */}
        <a
          href="https://web.facebook.com/profile.php?id=61565151473870"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
              : "text-blue-700 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/20 hover:border-blue-900/40"
          }`}
          title="Facebook"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
          </svg>
        </a>

        {/* WhatsApp — siempre visible */}
        <a
          href="https://wa.me/56935446606"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-emerald-300 hover:text-emerald-200 bg-emerald-900/40 hover:bg-emerald-900/55 border-emerald-700/40 hover:border-emerald-600/70"
              : "text-emerald-800 hover:text-emerald-900 bg-emerald-100/70 hover:bg-emerald-100 border-emerald-900/30 hover:border-emerald-900/50"
          }`}
        >
          <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z" />
          </svg>
        </a>

        {/* GitHub — siempre visible */}
        <a
          href="https://github.com/Mauriizio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-zinc-200 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border-zinc-600/50 hover:border-zinc-500/70"
              : "text-zinc-800 hover:text-black bg-zinc-100/70 hover:bg-zinc-100 border-zinc-900/20 hover:border-zinc-900/40"
          }`}
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
          </svg>
        </a>

        {/* LinkedIn — siempre visible */}
        <a
          href="https://www.linkedin.com/in/maurizio-caballero-286a56219/?originalSubdomain=cl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
              : "text-blue-800 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/30 hover:border-blue-900/50"
          }`}
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47C21.4 7.73 24 10 24 14.3V24h-5v-8.6c0-2.05-.04-4.68-2.85-4.68-2.86 0-3.3 2.23-3.3 4.53V24H8V8z" />
          </svg>
        </a>

        {/* Toggle — extremo derecho, con icono contextual (luna en claro / sol en oscuro) */}
<button
  type="button"
  onClick={toggleDarkMode}
  aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
  aria-pressed={isDark}
  className={`relative shrink-0 inline-flex items-center rounded-full border
              h-6 w-[2.50rem] min-w-[2.50rem] md:w-min-[2.50rem] md:max-w-[2.50rem]
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



      {/* Fondo + partículas */}
      <div className={`absolute inset-0 z-0 ${isDark ? "bg-black" : "bg-gray-50"}`} />
      <CodeParticlesBackground />

      {/* Overlay sutil */}
      <div
        aria-hidden
        className={`absolute inset-0 z-20 pointer-events-none transition-colors duration-500 ${
          isDark ? "bg-black/35" : "bg-white/10"
        }`}
      />

     {/* Contenido – SIN scroll vertical */}
<div
  className={`relative z-40 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
              pt-24 pb-16 grid grid-rows-[auto_auto_minmax(0,1fr)] items-start text-center
              font-azonix ${isDark ? "text-white" : "text-gray-900"}
              ${contentVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700 ease-out`}
>
  {/* Nombre */}
  <div className="flex flex-col items-center gap-1 sm:gap-1.5">
    <div className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black ${isDark ? "text-white" : "text-gray-900"}`}>
      Maurizio
    </div>
    <div
      className={`mt-1 inline-block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black px-1
                  ${isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"}`}
    >
      Caballero
    </div>
  </div>

  {/* Subtítulo (más respiración) */}
  <p className={`mt-4 w-full max-w-full px-2 text-sm leading-relaxed break-words sm:mt-6 sm:text-lg md:mt-8 ${actionColor}`}>
    Ingeniería en Electricidad y Automatización Industrial.
  </p>

  {/* Zona flexible: logo + CTAs móviles (no empuja) */}
  <div className="mt-6 sm:mt-8 md:mt-6 mb-4 min-h-0 flex flex-col items-center justify-start overflow-hidden">
    {/* Logo SIEMPRE entre subtítulo y botón de contacto, sin solapar */}
    <div className="flex items-center justify-center flex-none ">
      <LogoMarkShimmer
        isDark={isDark}
        className={` pointer-events-none
                    w-[90vw] sm:w-[52vw] lg:w-[40vw] xl:w-[30vw] max-w-[680px]
                    ${isDark ? "opacity-85" : "opacity-90"}`}
      />
    </div>

    {/* CTAs móviles bajo el logo */}
    <div className="mt-10 flex w-full max-w-sm items-center justify-between px-8 sm:px-12 md:hidden">
      <button
        type="button"
        onClick={goSectionTwo}
        className={`group flex flex-col items-center ${actionColor} focus:outline-none`}
      ><ChevronsLeft className="w-9 h-9 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2.6} />
        {/* <span className={`grid place-items-center rounded-full w-16 h-16 ${glassCircle}`}>
          
        </span> */}
        <span className="mt-2 text-xs tracking-wider uppercase">mas</span>
      </button>

      <button
        type="button"
        onClick={onMenuOpen}
        className={`group flex flex-col items-center ${actionColor} focus:outline-none`}
      ><ChevronsRight className="w-9 h-9 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.6} />
        {/* <span className={`grid place-items-center rounded-full w-16 h-16 ${glassCircle}`}>
          
        </span> */}
        <span className="mt-2 text-xs tracking-wider uppercase">Portfolio</span>
      </button>
    </div>
  </div>
</div>


{/* Chevrones laterales (desktop) */}
<button
  type="button"
  onClick={goSectionTwo}
  className={`hidden md:flex group absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-40
              flex-col items-center select-none focus:outline-none ${actionColor}`}
  aria-label="Ir a la sección siguiente"
>
   <ChevronsLeft className="mx-8 w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:translate-x-1 text-cyan-900  hover:text-cyan-500 " strokeWidth={2.6} />
  
  
  <span className="mt-2 text-[24px] tracking-wider uppercase hover:text-cyan-200">Mas</span>
</button>

<button
  type="button"
  onClick={onMenuOpen}
  className={`hidden md:flex group absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 z-40
              flex-col items-center select-none focus:outline-none ${actionColor}`}
  aria-label="Abrir portfolio"
>

  {/* <div className="absolute left-0 right-0 bottom-3 z-40 pb-[env(safe-area-inset-bottom)] flex justify-center">  </div> */}

  <ChevronsRight className="w-10 h-10 lg:w-12 lg:h-12 transition-transform  duration-300 group-hover:translate-x-1 text-cyan-900  hover:text-cyan-500  " strokeWidth={2.6} />
  {/* <span className={`grid place-items-center rounded-full w-16 h-16 lg:w-20 lg:h-20 ${glassCircle}`}>
    
  </span> */}
  <span className="mt-2 text-[24px] font-bold tracking-wider uppercase hover:text-cyan-500 ">Portfolio</span>
</button>


      
      {/* CONTACTO fijo abajo (Azonix) */}
<div className="absolute left-0 right-0 bottom-3 z-40 pb-[env(safe-area-inset-bottom)] flex justify-center">
  <button
    onClick={onContactOpen}
    className={`w-[min(82vw,200px)]  px-5 py-2 my-2 rounded-md border backdrop-blur-sm font-azonix font-black ${actionColor} transition-colors
                ${isDark
                  ? "bg-black/30 border-cyan-700/40 hover:border-cyan-700/70  hover:text-cyan-200"
                  : "bg-white/40 border-cyan-800/30 hover:border-cyan-800/60  hover:text-cyan-500"}`}
  >
    Contacto
  </button>
</div>

    </section>
  );
}

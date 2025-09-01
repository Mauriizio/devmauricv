"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";
// import CodeParticlesBackground from "./CodeParticlesBackground";
import { Download, ChevronsLeft,  Sun, Moon, X as IconX, ChevronsRight } from "lucide-react";
import LogoMCFancy from "@/components/LogoMCFancy";
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

  const actionColor = isDark ? "text-cyan-700" : "text-cyan-800";

  return (
    <section
      ref={rootRef}
      className={`relative w-screen h-dvh snap-start snap-always flex-shrink-0 overscroll-none transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-50"
      } overflow-hidden overflow-y-hidden touch-pan-x`}
      style={{ overflowX: "clip" }}
    >
      {/* Header */}
     {/* Header */}
<div
  className={`absolute top-0 left-0 right-0 z-50 backdrop-blur-lg border-b p-4 ${
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

      {/* DER: Acciones (derecha → izquierda: X, tema, CV, WhatsApp) */}
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

        {/* Descargar CV (mantiene tu `actionColor`) */}
        <button
          className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${actionColor} ${
            isDark
              ? "border-cyan-700/40 hover:border-cyan-700/70"
              : "border-cyan-800/30 hover:border-cyan-800/60"
          }`}
          aria-label="CV"
        >
          <Download size={16} />
          <span className="hidden sm:inline">CV</span>
        </button>

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
  <p className={`mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg ${actionColor}`}>
    Frontend Developer | Tec. Mantenimiento de Equipos Informáticos.
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
    <div className="md:hidden mt-16 flex items-center justify-center gap-36 sm:gap-12">
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
        <span className="mt-2 text-xs tracking-wider uppercase">portfolio</span>
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
   <ChevronsLeft className="mx-8 w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2.6} />
  
  
  <span className="mt-2 text-[11px] tracking-wider uppercase">mas</span>
</button>

<button
  type="button"
  onClick={onMenuOpen}
  className={`hidden md:flex group absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 z-40
              flex-col items-center select-none focus:outline-none ${actionColor}`}
  aria-label="Abrir portfolio"
>

  {/* <div className="absolute left-0 right-0 bottom-3 z-40 pb-[env(safe-area-inset-bottom)] flex justify-center">  </div> */}

  <ChevronsRight className="w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.6} />
  {/* <span className={`grid place-items-center rounded-full w-16 h-16 lg:w-20 lg:h-20 ${glassCircle}`}>
    
  </span> */}
  <span className="mt-2 text-[11px] tracking-wider uppercase">portfolio</span>
</button>


      
      {/* CONTACTO fijo abajo (Azonix) */}
<div className="absolute left-0 right-0 bottom-3 z-40 pb-[env(safe-area-inset-bottom)] flex justify-center">
  <button
    onClick={onContactOpen}
    className={`px-5 py-2 my-2 rounded-md border backdrop-blur-sm font-azonix font-black ${actionColor} transition-colors
                ${isDark
                  ? "bg-black/30 border-cyan-700/40 hover:border-cyan-700/70"
                  : "bg-white/40 border-cyan-800/30 hover:border-cyan-800/60"}`}
  >
    Contacto
  </button>
</div>

    </section>
  );
}

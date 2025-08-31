"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";
import CodeParticlesBackground from "./CodeParticlesBackground";
import { Download, ChevronsLeft, ChevronsRight } from "lucide-react";
import LogoMCFancy from "@/components/LogoMCFancy";
import LogoMarkShimmer from "@/components/LogoMarkShimmer";

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
      <div
        className={`absolute top-0 left-0 right-0 z-50 backdrop-blur-lg border-b p-4 ${
          isDark ? "bg-black/60 border-white/10" : "bg-white/60 border-gray-300/50"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <LogoMCFancy
            className="h-12 w-auto text-gray-900 dark:text-cyan-300 hover:text-fuchsia-500 transition-colors"
            gap={0.5}
            shift={0.08}
            duration={500}
          />

          <div className="flex items-center gap-3">
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

            <button onClick={toggleDarkMode} className="btn-toggle" aria-label="Cambiar tema">
              {isDark ? "☀️" : "🌙"}
            </button>
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
        <div className="flex flex-col gap-0 items-center">
          <div className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black ${isDark ? "text-white" : "text-gray-900"}`}>
            Maurizio
          </div>
          <div className={`mt-1 inline-block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black px-1 ${
            isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
          }`}>
            Caballero
          </div>
        </div>

        {/* Subtítulo */}
        <p className={`mt-3 text-base sm:text-lg ${actionColor}`}>
          Frontend Developer | Tec. Mantenimiento de Equipos Informáticos.
        </p>

        {/* Zona flexible: logo + CTAs móviles (no empuja) */}
        <div className="mt-2 sm:mt-4 min-h-0 flex flex-col items-center justify-start">
          {/* >> Tu versión de logo (o LogoMarkShimmer). Mantengo el wrapper; reemplaza el contenido si quieres. */}
          <div className="flex items-center justify-center">
            <LogoMarkShimmer
              isDark={isDark}
              className={`pointer-events-none w-[70vw] sm:w-[56vw] lg:w-[44vw] xl:w-[38vw] ${
                isDark ? "opacity-85" : "opacity-90"
              }`}
            />
          </div>

          {/* CTAs móviles bajo el logo */}
          <div className="md:hidden mt-4 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={goSectionTwo}
              className={`group flex flex-col items-center ${actionColor} focus:outline-none`}
            >
              <span className={`grid place-items-center rounded-full w-16 h-16 ${glassCircle}`}>
                <ChevronsLeft className="w-9 h-9 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2.6} />
              </span>
              <span className="mt-2 text-xs tracking-wider uppercase">mas</span>
            </button>

            <button
              type="button"
              onClick={onMenuOpen}
              className={`group flex flex-col items-center ${actionColor} focus:outline-none`}
            >
              <span className={`grid place-items-center rounded-full w-16 h-16 ${glassCircle}`}>
                <ChevronsRight className="w-9 h-9 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.6} />
              </span>
              <span className="mt-2 text-xs tracking-wider uppercase">portfolio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chevrones laterales (desktop) */}
      <button
        type="button"
        onClick={goSectionTwo}
        className={`hidden md:flex group absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none focus:outline-none ${actionColor}`}
        aria-label="Ir a la sección siguiente"
      >
        <span className={`grid place-items-center rounded-full w-20 h-20 lg:w-24 lg:h-24 ${glassCircle}`}>
          <ChevronsLeft className="w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2.6} />
        </span>
        <span className="mt-3 text-sm tracking-wider uppercase">mas</span>
      </button>

      <button
        type="button"
        onClick={onMenuOpen}
        className={`hidden md:flex group absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none focus:outline-none ${actionColor}`}
        aria-label="Abrir portfolio"
      >
        <span className={`grid place-items-center rounded-full w-20 h-20 lg:w-24 lg:h-24 ${glassCircle}`}>
          <ChevronsRight className="w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.6} />
        </span>
        <span className="mt-3 text-sm tracking-wider uppercase">portfolio</span>
      </button>

      {/* CONTACTO fijo abajo (Azonix) */}
      <div className="absolute left-0 right-0 bottom-3 z-40 pb-[env(safe-area-inset-bottom)] flex justify-center">
        <button
          onClick={onContactOpen}
          className={`px-5 py-2 rounded-md border backdrop-blur-sm font-azonix font-black ${actionColor} transition-colors ${
            isDark
              ? "bg-black/30 border-cyan-700/40 hover:border-cyan-700/70"
              : "bg-white/40 border-cyan-800/30 hover:border-cyan-800/60"
          }`}
        >
          Contacto
        </button>
      </div>
    </section>
  );
}

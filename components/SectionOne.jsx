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

  // Local helper: sube por el árbol buscando un contenedor que realmente scrollee horizontalmente
  const findHorizontalScroller = (el) => {
    let node = el?.parentElement ?? null;
    for (let i = 0; i < 6 && node; i++) {
      const cs = window.getComputedStyle(node);
      const mayScrollX =
        (cs.overflowX === "auto" || cs.overflowX === "scroll" || cs.overflowX === "overlay") &&
        node.scrollWidth > node.clientWidth + 1;
      if (mayScrollX) return node;
      node = node.parentElement;
    }
    return null;
  };

  // IZQUIERDA: ir a Section Two (como scroll horizontal real). NO usa onVerMas.
  const goSectionTwo = useCallback(() => {
    // 1) Probar el siguiente <section> hermano
    let target = null;
    const here = rootRef.current;
    if (here?.nextElementSibling && here.nextElementSibling.tagName === "SECTION") {
      target = here.nextElementSibling;
    }

    // 2) Selectores de respaldo (#section-two o data-section)
    if (!target) {
      target =
        document.getElementById("section-two") ||
        document.querySelector('[data-section="two"]') ||
        document.querySelector('[data-section="SectionTwo"]') ||
        document.querySelector('section#two');
    }

    if (!target) return;

    // 3) Intentar scroll en contenedor horizontal si existe
    const scroller = findHorizontalScroller(target);
    if (scroller) {
      const left = target.offsetLeft - scroller.offsetLeft;
      scroller.scrollTo({ left, behavior: "smooth" });
      return;
    }

    // 4) Fallback: scrollIntoView (también sirve con snap-x)
    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, []);

  return (
    <section
      ref={rootRef}
      className={`relative w-screen h-dvh snap-start snap-always flex-shrink-0 overflow-hidden overscroll-none transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
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
            <button className="btn-primary flex items-center gap-2 text-sm px-3 py-1.5" aria-label="CV">
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

      {/* Marca de agua (oro + ruido) */}
      <LogoMarkShimmer
        isDark={isDark}
        className={[
          "pointer-events-none absolute z-30",
          "left-1/2 -translate-x-1/2",
          "top-[24vh] md:top-[20vh]",
          "w-[88vw] md:w-[72vw] lg:w-[64vw] max-w-[100vw]",
          isDark ? "opacity-80" : "opacity-90",
        ].join(" ")}
      />

      {/* Overlay para contraste */}
      <div
        aria-hidden
        className={`absolute inset-0 z-20 transition-colors duration-500 pointer-events-none ${
          isDark ? "bg-black/35" : "bg-white/10"
        }`}
      />

      {/* Ruido fino global (determinístico) */}
      <div className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay">
        {/* Claro */}
        <div
          aria-hidden
          className={[
            "absolute inset-0",
            isDark ? "hidden" : "block",
            "opacity-70",
            "[background-image:radial-gradient(rgba(0,0,0,0.20)_1px,transparent_1px),radial-gradient(rgba(0,0,0,0.10)_1px,transparent_1px)]",
            "bg-[length:3px_3px,7px_7px] bg-[position:0_0,1px_1px]",
          ].join(" ")}
        />
        {/* Oscuro */}
        <div
          aria-hidden
          className={[
            "absolute inset-0",
            isDark ? "block" : "hidden",
            "opacity-25",
            "[background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)]",
            "bg-[length:3px_3px,7px_7px] bg-[position:0_0,1px_1px]",
          ].join(" ")}
        />
      </div>

      {/* Contenido */}
      <div
        className={`relative z-40 w-full h-full transition-opacity duration-700 ease-out ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`mx-auto h-full max-w-6xl flex flex-col
                      pt-24 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 lg:px-8
                      items-center justify-start text-center
                      font-azonix ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {/* Nombre */}
          <div className="flex flex-col gap-0">
            <button
              className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black transition-all duration-300
                          hover:scale-x-[1.02] hover:translate-y-0.5 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Maurizio
            </button>
            <button
              className={`mt-1 inline-block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black transition-all duration-300
                          hover:scale-x-[1.02] hover:translate-y-0.5 hover:text-cyan-400
                          ${isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"} px-1`}
            >
              Caballero
            </button>
          </div>

          {/* Botones secundarios (abajo, centrados) */}
          <div className="mt-auto w-full flex flex-col items-center gap-4 sm:gap-5 pb-[env(safe-area-inset-bottom)]">
            <button
              onClick={onContactOpen}
              className="text-2xl bg-gray-200 mb-16 sm:text-3xl lg:text-2xl font-black text-gray-600 dark:text-cyan-300 transition-transform duration-300 hover:translate-y-0.5"
            >
              Contacto
            </button>
            {/* <button
              onClick={onVerMas}
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-400 dark:text-cyan-300 transition-transform duration-300 hover:translate-y-0.5"
            >
              Sobre mí
            </button> */}
          </div>
        </div>
      </div>

      {/* === CHEVRONS PRINCIPALES === */}

      {/* IZQUIERDA → SIEMPRE a Section Two */}
      <button
        type="button"
        onClick={goSectionTwo}
        className={[
          "group absolute mt-20 left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center select-none",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded-xl",
          isDark ? "text-white/90" : "text-gray-900/90",
        ].join(" ")}
        aria-label="Ir a la sección siguiente"
      >
        <span
          className={[
            "grid place-items-center rounded-full",
            "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
            "backdrop-blur-xl transition-all duration-300",
            isDark
              ? "bg-white/8 ring-1 ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:ring-cyan-400/40 hover:shadow-cyan-400/30"
              : "bg-gradient-to-b from-white/92 to-cyan-50/60 ring-1 ring-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.20)] hover:ring-cyan-500/40 hover:shadow-cyan-300/30",
          ].join(" ")}
        >
          <ChevronsLeft
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:-translate-x-1"
            strokeWidth={2.6}
          />
        </span>
        <span
          className={[
            "mt-3 text-sm sm:text-base tracking-wider uppercase font-azonix",
            isDark ? "text-white/85" : "text-gray-900/85",
          ].join(" ")}
        >
          más
        </span>
      </button>

      {/* DERECHA → Portfolio */}
      <button
        type="button"
        onClick={onMenuOpen}
        className={[
          "group absolute mt-20 right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center select-none",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded-xl",
          isDark ? "text-white/90" : "text-gray-900/90",
        ].join(" ")}
        aria-label="Abrir portfolio"
      >
        <span
          className={[
            "grid place-items-center rounded-full",
            "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
            "backdrop-blur-xl transition-all duration-300",
            isDark
              ? "bg-white/8 ring-1 ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:ring-cyan-400/40 hover:shadow-cyan-400/30"
              : "bg-gradient-to-b from-white/92 to-cyan-50/60 ring-1 ring-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.20)] hover:ring-cyan-500/40 hover:shadow-cyan-300/30",
          ].join(" ")}
        >
          <ChevronsRight
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.6}
          />
        </span>
        <span
          className={[
            "mt-3 text-sm sm:text-base tracking-wider uppercase font-azonix",
            isDark ? "text-white/85" : "text-gray-900/85",
          ].join(" ")}
        >
          portfolio
        </span>
      </button>
    </section>
  );
}

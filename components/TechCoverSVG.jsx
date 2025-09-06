"use client";

import React from "react";

/**
 * TechCoverSVG
 * - Fondo SVG decorativo + 2 filas animadas:
 *   1) Chips de tecnologías (marquee continuo, sin saltos)
 *   2) Ticker de texto (derecha→izquierda, legible y sin superposición)
 *
 * Props:
 *  - dark (bool): tema oscuro para colores de chips, bordes y fades.
 *  - className (string): clases extra para el contenedor externo.
 */
export default function TechCoverSVG({ dark = false, className = "" }) {
  // Contenido
  const chips = [
    "React", "Next.js", "TypeScript", "JavaScript ES6+",
    "Tailwind", "Framer Motion", "Zustand/Redux", "SSR/ISR",
    "Vite", "Accesibilidad", "Optimización", "Git/GitHub",
  ];

  // Frase del ticker (puedes cambiarla o hacerla dinámica)
  const ticker =
    "Frontend · React · Next.js · TypeScript · Tailwind · Framer Motion · SSR/ISR · Accesibilidad · Optimización · Git/GitHub";

  // Colores según tema
  const vars = {
    "--fadeColor": dark ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)",
    "--chipText": dark ? "#99f6e4" : "#0e7490",            // cyan-200 / cyan-700
    "--chipBg": dark ? "rgba(34,211,238,0.10)" : "rgba(8,145,178,0.08)",
    "--chipBorder": dark ? "rgba(34,211,238,0.40)" : "rgba(8,145,178,0.35)",
    "--tickerText": dark ? "rgba(255,255,255,0.80)" : "rgba(15,23,42,0.80)", // white/80 vs slate-900/80
    "--bgSolid": dark ? "#0b0b0b" : "#e7e5e4",             // gray-900 vs stone-200
    "--accent": dark ? "rgba(34,211,238,0.25)" : "rgba(8,145,178,0.25)",     // cian sutil
  };

  return (
    <div
      className={`relative h-full w-full ${className}`}
      style={vars}
      aria-hidden="true"
    >
      {/* Fondo SVG decorativo (dots + forma sutil) */}
      <svg
        viewBox="0 0 1600 400"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>

          <linearGradient id="diag" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="1600" height="400" fill="var(--bgSolid)" />
        <rect
          x="0"
          y="0"
          width="1600"
          height="400"
          fill="url(#dots)"
          opacity={dark ? 0.12 : 0.18}
          style={{ color: dark ? "#94a3b8" : "#334155" }} // dot color (slate)
        />
        {/* franja diagonal suave */}
        <rect x="0" y="0" width="1600" height="400" fill="url(#diag)" />
      </svg>

      {/* Contenido animado (chips + ticker) */}
      <div className="absolute inset-0 flex flex-col justify-center gap-3 px-3 sm:px-5 md:px-8 pointer-events-none select-none">
        {/* Fila 1: chips */}
        <div className="marquee mask-fade">
          <div className="track track-fast">
            {/* Bloque A */}
            <div className="block">
              {chips.map((t, i) => (
                <span key={`a-${i}`} className="chip">
                  {t}
                </span>
              ))}
            </div>
            {/* Bloque B (duplicado para loop perfecto) */}
            <div className="block" aria-hidden="true">
              {chips.map((t, i) => (
                <span key={`b-${i}`} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Fila 2: ticker texto (un poco más lento y tamaño mayor) */}
        <div className="marquee mask-fade ticker">
          <div className="track track-slow">
            <div className="block">
              <span className="ticker-chunk">{ticker}</span>
            </div>
            <div className="block" aria-hidden="true">
              <span className="ticker-chunk">{ticker}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Contenedores básicos */
        .marquee {
          position: relative;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        .mask-fade::before,
        .mask-fade::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 56px; /* fade edges */
          pointer-events: none;
          z-index: 2;
        }
        .mask-fade::before {
          left: 0;
          background: linear-gradient(to right, var(--fadeColor), transparent);
          opacity: 0.85;
        }
        .mask-fade::after {
          right: 0;
          background: linear-gradient(to left, var(--fadeColor), transparent);
          opacity: 0.85;
        }

        /* Pista animada:
           - 2 bloques de 50% cada uno
           - translateX(-50%) para un loop perfecto sin saltos */
        .track {
          display: flex;
          width: 200%;
          will-change: transform;
        }
        .block {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 50%;
          padding-inline: 6px;
        }

        /* Velocidades */
        .track-fast {
          animation: slide 18s linear infinite;
        }
        .track-slow {
          animation: slide 28s linear infinite;
        }

        /* Animación */
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Chips */
        .chip {
          display: inline-flex;
          align-items: center;
          padding: 6px 10px;
          border-radius: 9999px;
          border: 1px solid var(--chipBorder);
          background: var(--chipBg);
          color: var(--chipText);
          font-weight: 700;
          letter-spacing: 0.2px;
          line-height: 1;        /* evita “saltos” verticales */
          font-size: 11px;       /* legible y compacto */
        }
        @media (min-width: 480px) {
          .chip { font-size: 12px; padding: 6px 12px; }
        }
        @media (min-width: 768px) {
          .chip { font-size: 13px; padding: 7px 14px; }
        }

        /* Ticker texto */
        .ticker {
          /* separada de la fila superior */
        }
        .ticker .block {
          gap: 24px;
        }
        .ticker-chunk {
          color: var(--tickerText);
          font-weight: 800;
          letter-spacing: 0.4px;
          line-height: 1.15;
          white-space: nowrap;
          font-size: 12px;
        }
        @media (min-width: 480px) {
          .ticker-chunk { font-size: 13px; }
        }
        @media (min-width: 768px) {
          .ticker-chunk { font-size: 15px; }
        }

        /* Accesibilidad: respeta reduce-motion */
        @media (prefers-reduced-motion: reduce) {
          .track-fast, .track-slow {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

"use client";
import React from "react";

export default function TechCoverSVG({ dark = false, className = "" }) {
  const chips = [
    "React", "Next.js", "TypeScript", "JavaScript ES6+",
    "Tailwind", "Framer Motion", "SSR/ISR",
    "Vite", "Accesibilidad", "Optimización", "Git/GitHub", "n8n",
    "Node.js", "Express", "REST APIs", "GraphQL", "Apollo",
    "MongoDB", "PostgreSQL", "MySQL", "SQLite",
  ];

  const ticker = "Desarrollar sistemas de información · crear, administrar y proteger bases de datos · crear aplicaciones web y móviles · gestionar proyectos tecnológicos · brindar soporte técnico · capacitar usuarios · optimizar procesos TI · implementar soluciones en la nube . Automatización · APIs · Microservicios · SEO · Redes y Seguridad Informática · innovar con nuevas tecnologías ";

  const vars = {
    "--fadeColor": dark ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)",
    "--chipText": dark ? "#99f6e4" : "#0e7490",
    "--chipBg": dark ? "rgba(34,211,238,0.10)" : "rgba(8,145,178,0.08)",
    "--chipBorder": dark ? "rgba(34,211,238,0.40)" : "rgba(8,145,178,0.35)",
    "--tickerText": dark ? "rgba(255,255,255,0.80)" : "rgba(15,23,42,0.80)",
    "--bgSolid": dark ? "#0b0b0b" : "#e7e5e4",
    "--accent": dark ? "rgba(34,211,238,0.25)" : "rgba(8,145,178,0.25)",
  };

  // Path del logo (tu SVG)
  const LOGO_PATH =
    "M -4.2022406e-7,45.797323 H 9.8984556 L 25.686288,18.77733 l 15.763247,27.030453 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 9.839499,-18.557993 c 8.634193,-0.10105 6.653376,-0.01924 11.742801,-0.01887 L 51.319315,1.1367297 51.262715,-2.8265559e-7 38.68293,21.5211 38.69083,22.23818 26.184442,1.2516597 26.154672,0.04975972 Z";

  return (
    <div className={`relative h-full w-full ${className}`} style={vars} aria-hidden="true">
      {/* Fondo */}
      <svg viewBox="0 0 1600 400" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
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
        <rect x="0" y="0" width="1600" height="400" fill="url(#dots)" opacity={dark ? 0.12 : 0.18}
              style={{ color: dark ? "#94a3b8" : "#334155" }} />
        <rect x="0" y="0" width="1600" height="400" fill="url(#diag)" />

        {/* ✅ Marca de agua del logo (suave, centrada) */}
        <g
          className="wm"
          transform="translate(800 200) scale(8) translate(-38.3403585 -22.9038905)"
        >
          <path d={LOGO_PATH} />
        </g>
      </svg>

      {/* Contenido animado */}
      <div className="absolute inset-0 flex flex-col justify-center gap-6 px-3 sm:px-16 md:px-8 pointer-events-none select-none">
        {/* Fila chips */}
        <div className="marquee mask-fade">
          <div className="track fast">
            <div className="block">
              {chips.map((t, i) => <span key={`a-${i}`} className="chip">{t}</span>)}
            </div>
            <div className="block" aria-hidden="true">
              {chips.map((t, i) => <span key={`b-${i}`} className="chip">{t}</span>)}
            </div>
          </div>
        </div>

        {/* Fila ticker */}
        <div className="marquee mask-fade">
          <div className="track slow">
            <div className="block"><span className="ticker-chunk">{ticker}</span></div>
            <div className="block" aria-hidden="true"><span className="ticker-chunk">{ticker}</span></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee { position: relative; overflow: hidden; width: 100%; }
        .mask-fade::before, .mask-fade::after {
          content: ""; position: absolute; top: 0; bottom: 0; width: 56px; pointer-events: none; z-index: 2;
        }
        .mask-fade::before { left: 0; background: linear-gradient(to right, var(--fadeColor), transparent); opacity: .85; }
        .mask-fade::after  { right: 0; background: linear-gradient(to left,  var(--fadeColor), transparent); opacity: .85; }

        /* Pista = ancho real del contenido → sin solapes */
        .track { display: flex; width: max-content; will-change: transform; }
        .track.fast { animation: slide 20s linear infinite; }   /* un poco más lento para legibilidad */
        .track.slow { animation: slide 52s linear infinite; }
        @keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* Bloques auto, con más aire entre chips */
        .block { display: flex; align-items: center; gap: 22px; padding-inline: 10px; flex: 0 0 auto; }

        /* Chips un poco más grandes en desktop */
        .chip {
          display: inline-flex; align-items: center; justify-content: center;
          flex: 0 0 auto; white-space: nowrap;
          padding: 7px 14px; border-radius: 9999px;
          border: 1px solid var(--chipBorder); background: var(--chipBg); color: var(--chipText);
          font-weight: 800; letter-spacing: .2px; line-height: 1; font-size: 13px;
        }
        @media (min-width: 1024px) { .chip { font-size: 14px; padding: 8px 16px; } }

        .ticker-chunk {
          color: var(--tickerText); font-weight: 800; letter-spacing: .4px;
          line-height: 1.15; white-space: nowrap; font-size: 13px;
        }
        @media (min-width: 768px) { .ticker-chunk { font-size: 15px; } }

        /* Marca de agua (no distrae) */
        .wm { opacity: ${dark ? 0.08 : 0.07}; color: ${dark ? "#22d3ee" : "#0891b2"}; }
        .wm path { fill: currentColor; }

        @media (prefers-reduced-motion: reduce) {
          .track.fast, .track.slow { animation: none !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
}

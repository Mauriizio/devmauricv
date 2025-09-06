// components/TechCoverSVG.jsx
export default function TechCoverSVG({ dark = false, className = "" }) {
  return (
    <svg
      viewBox="0 0 1600 420"
      role="img"
      aria-label="Portada con tecnologías animadas"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Fondo con gradiente animado */}
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={dark ? "#0b132b" : "#ecfeff"}>
            <animate attributeName="offset" values="0;1" dur="12s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={dark ? "#1c2541" : "#e0f2fe"}>
            <animate attributeName="offset" values="1;0" dur="12s" repeatCount="indefinite" />
          </stop>
        </linearGradient>

        {/* Grid sutil */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke={dark ? "#0ea5a8" : "#164e63"}
            strokeOpacity="0.15"
            strokeWidth="1"
          />
        </pattern>

        {/* Sombra suave para los pills */}
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.35" />
        </filter>

        {/* Gradiente de los pills */}
        <linearGradient id="pillGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={dark ? "#0891b2" : "#22d3ee"} stopOpacity="0.25" />
          <stop offset="100%" stopColor={dark ? "#38bdf8" : "#0ea5e9"} stopOpacity="0.45" />
        </linearGradient>
      </defs>

      {/* Fondo + grid */}
      <rect width="1600" height="420" fill="url(#bgGrad)" />
      <rect width="1600" height="420" fill="url(#grid)" />

      {/* Línea dash animada (divide visualmente) */}
      <g opacity="0.35">
        <rect
          className="dash"
          y="210"
          width="1600"
          height="0.01"
          stroke={dark ? "#67e8f9" : "#155e75"}
          strokeWidth="1"
        />
      </g>

      <style>{`
        .tile { transform-box: fill-box; transform-origin: 50% 50%; }
        @keyframes float { from { transform: translateY(0px) } to { transform: translateY(-6px) } }
        .float-1 { animation: float 6s ease-in-out infinite alternate; }
        .float-2 { animation: float 7s 0.6s ease-in-out infinite alternate; }
        .float-3 { animation: float 8s 1.2s ease-in-out infinite alternate; }

        .dash { stroke-dasharray: 6 12; animation: dash 20s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -800; } }

        .marquee { transform-box: fill-box; animation: marquee 22s linear infinite; }
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-800px) } }

        text {
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Inter, Arial;
          letter-spacing: .5px;
        }
        .pillText { font-weight: 700; font-size: 24px; fill: ${dark ? "#cffafe" : "#083344"}; }
        .rowText  { font-weight: 800; font-size: 32px; fill: ${dark ? "#a5f3fc" : "#164e63"}; }
        .watermark{ font-weight: 800; font-size: 64px; fill: #0ea5a8; opacity: .10; }

        @media (prefers-reduced-motion: reduce) {
          .float-1, .float-2, .float-3, .marquee, .dash { animation: none !important; }
        }
      `}</style>

      {/* Pills flotando */}
      <g filter="url(#softShadow)">
        <g className="tile float-1" transform="translate(140 100)">
          <rect width="220" height="46" rx="14" fill="url(#pillGrad)" />
          <text className="pillText" x="110" y="31" textAnchor="middle">React</text>
        </g>
        <g className="tile float-2" transform="translate(420 60)">
          <rect width="220" height="46" rx="14" fill="url(#pillGrad)" />
          <text className="pillText" x="110" y="31" textAnchor="middle">Next.js</text>
        </g>
        <g className="tile float-3" transform="translate(700 110)">
          <rect width="220" height="46" rx="14" fill="url(#pillGrad)" />
          <text className="pillText" x="110" y="31" textAnchor="middle">TypeScript</text>
        </g>
        <g className="tile float-1" transform="translate(980 70)">
          <rect width="220" height="46" rx="14" fill="url(#pillGrad)" />
          <text className="pillText" x="110" y="31" textAnchor="middle">Tailwind</text>
        </g>
        <g className="tile float-2" transform="translate(1260 100)">
          <rect width="220" height="46" rx="14" fill="url(#pillGrad)" />
          <text className="pillText" x="110" y="31" textAnchor="middle">Framer Motion</text>
        </g>
      </g>

      {/* Marquee de tecnologías (doble grupo para loop continuo) */}
      <g transform="translate(0, 300)">
        <g className="marquee">
          <text className="rowText" x="0" y="0">
            React • Next.js • TypeScript • Tailwind • Framer Motion • Zustand • Redux • Vite • Node • PostgreSQL • REST • Vercel • GitHub • Figma •{" "}
          </text>
          <text className="rowText" x="800" y="0">
            React • Next.js • TypeScript • Tailwind • Framer Motion • Zustand • Redux • Vite • Node • PostgreSQL • REST • Vercel • GitHub • Figma •{" "}
          </text>
        </g>
      </g>

      {/* Watermark sutil con tu nombre */}
      <text className="watermark" x="50%" y="200" textAnchor="middle">
        Maurizio Caballero
      </text>
    </svg>
  );
}

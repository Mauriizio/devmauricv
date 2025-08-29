// components/LogoMarkShimmer.jsx
"use client";

export default function LogoMarkShimmer({ className = "" }) {
  // SVG del logomark completo (una sola pieza), sin SMIL ni aleatorios:
  return (
    <svg
      viewBox="0 0 76.680709 44.671051"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Gradiente oro base */}
        <linearGradient id="mc_gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F8E57C" />
          <stop offset="50%" stopColor="#E2C66E" />
          <stop offset="100%" stopColor="#B8954A" />
        </linearGradient>

        {/* Barra de shimmer que se anima por CSS (no por JS) */}
        <linearGradient id="mc_shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.75)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Ruido suave determinístico (sin random en runtime) */}
        <filter id="mc_noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.45" />
          </feComponentTransfer>
        </filter>

        {/* Clip con el contorno del logomark */}
        <clipPath id="mc_clip">
          <path d="m 0,44.660594 h 9.898456 l 16.289424,-27.018189 15.261656,27.028649 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 10.63598,-18.996697 9.813098,-7.45e-4 L 51.319316,1.7976846e-7 38.682931,20.384371 26.184443,0.11493018 Z"
     />
        </clipPath>
      </defs>

      {/* Oro base */}
      <path
        d="m 0,44.660594 h 9.898456 l 16.289424,-27.018189 15.261656,27.028649 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 10.63598,-18.996697 9.813098,-7.45e-4 L 51.319316,1.7976846e-7 38.682931,20.384371 26.184443,0.11493018 Z"
        fill="url(#mc_gold)"
      />

      {/* Ruido fino dentro del logo */}
      <g clipPath="url(#mc_clip)">
        <rect width="100%" height="100%" filter="url(#mc_noise)" opacity="0.7" />
      </g>

      {/* Barra shimmer que atraviesa el logo lentamente */}
      <g clipPath="url(#mc_clip)">
        <rect
          className="mc-shimmer"
          x="-30%"
          y="-10%"
          width="160%"
          height="120%"
          fill="url(#mc_shimmer)"
          opacity="0.8"
        />
      </g>
    </svg>
  );
}

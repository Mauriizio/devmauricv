// components/LogoMarkShimmer.jsx
"use client";

/**
 * Logo con relleno "oro + ruido" y shimmer.
 * - Ruido animado via <animate> en 'seed' (determinista, sin Math.random)
 * - Dos pipelines: claro (multiply) y oscuro (screen)
 * - Cambia oro/mezcla según 'isDark'
 */
export default function LogoMarkShimmer({ className = "", isDark = false }) {
  const gradId = isDark ? "mc_gold_dark" : "mc_gold_light";
  const filterId = isDark ? "mc_grain_dark" : "mc_grain_light";

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
        {/* Oro claro */}
        <linearGradient id="mc_gold_light" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#999999ff" />
          <stop offset="45%" stopColor="#ffffffff" />
          <stop offset="100%" stopColor="#868686ff" />
        </linearGradient>

        {/* Oro oscuro (un poco más frío y contrastado) */}
        <linearGradient id="mc_gold_dark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#BFA157" />
          <stop offset="50%" stopColor="#9A7B37" />
          <stop offset="100%" stopColor="#6F5425" />
        </linearGradient>

        {/* Barra shimmer */}
        <linearGradient id="mc_shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="50%"  stopColor="rgba(255, 255, 255, 0.26)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Clip del contorno del logomark */}
        <clipPath id="mc_clip">
          <path d="m 0,44.660594 h 9.898456 l 16.289424,-27.018189 15.261656,27.028649 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 10.63598,-18.996697 9.813098,-7.45e-4 L 51.319316,1.7976846e-7 38.682931,20.384371 26.184443,0.11493018 Z"/>
        </clipPath>

        {/* ===== Ruido + mezcla (CLARO) =====
           SourceGraphic -> rect con gradiente oro
           feTurbulence  -> grano muy fino (flicker variando 'seed')
           Mezcla final  -> multiply para oscurecer puntitos */}
        <filter id="mc_grain_light" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="turbulence"
            baseFrequency="2"
            numOctaves="5"
            seed="0"
            stitchTiles="stitch"
            result="grain"
          >
            <animate attributeName="seed" values="0;8;16;24;32;40;0" dur="0.38s" repeatCount="indefinite"/>
          </feTurbulence>

          {/* Subo contraste del ruido para que parezca “TV static” */}
          <feColorMatrix
            in="grain"
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 2 -0.8
            "
            result="grainHi"
          />
          {/* Mezcla puntitos sobre el oro */}
          <feBlend in="SourceGraphic" in2="grainHi" mode="multiply" />
        </filter>

        {/* ===== Ruido + mezcla (OSCURO) =====
           Igual grano, pero invertido y mezclado en 'screen'
           para granitos luminosos sobre fondo oscuro */}
        <filter id="mc_grain_dark" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="turbulence"
            baseFrequency="9"
            numOctaves="9"
            seed="0"
            stitchTiles="stitch"
            result="grain"
          >
            <animate attributeName="seed" values="0;8;16;24;32;40;0" dur="0.38s" repeatCount="indefinite"/>
          </feTurbulence>

          {/* Invierto/graduo para que el grano levante luz */}
          <feComponentTransfer in="grain">
            <feFuncR type="table" tableValues="1 0"/>
            <feFuncG type="table" tableValues="1 0"/>
            <feFuncB type="table" tableValues="1 0"/>
            <feFuncA type="gamma" amplitude="1" exponent="1.8" offset="0"/>
          </feComponentTransfer>

          {/* Un poco más de contraste */}
          <feColorMatrix
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 2 -0.9
            "
            result="grainInv"
          />
          {/* Granito claro encima del oro */}
          <feBlend in="SourceGraphic" in2="grainInv" mode="screen" />
        </filter>
      </defs>

      {/* Relleno oro + ruido dentro del contorno */}
      <g clipPath="url(#mc_clip)">
        <rect width="100%" height="100%" fill={`url(#${gradId})`} filter={`url(#${filterId})`} />
      </g>

      {/* Barra shimmer que cruza el logo */}
      <g clipPath="url(#mc_clip)">
        <rect
          className="mc-shimmer"
          x="-30%"
          y="-10%"
          width="160%"
          height="120%"
          fill="url(#mc_shimmer)"
          opacity="0.50"
        />
      </g>
    </svg>
  );
}

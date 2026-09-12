// components/LogoMarkShimmer.jsx
"use client";

import { useId } from "react";

/**
 * Logo blanco/plata con ruido y shimmer.
 * - Ruido animado via <animate> en 'seed' (determinista, sin Math.random)
 * - La misma apariencia se conserva en modo claro y oscuro
 */
export default function LogoMarkShimmer({
  className = "",
  title = "Maurizio Caballero",
  animated = true,
}) {
  const instanceId = useId().replace(/:/g, "");
  const lightGradientId = `${instanceId}-mc-gold-light`;
  const shimmerId = `${instanceId}-mc-shimmer`;
  const clipId = `${instanceId}-mc-clip`;
  const lightFilterId = `${instanceId}-mc-grain-light`;

  return (
    <svg
      viewBox="0 0 76.680709 44.671051"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title}</title>
      <defs>
        {/* Blanco/plata */}
        <linearGradient id={lightGradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#999999ff" />
          <stop offset="45%" stopColor="#ffffffff" />
          <stop offset="100%" stopColor="#868686ff" />
        </linearGradient>

        {/* Barra shimmer */}
        <linearGradient id={shimmerId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="50%"  stopColor="rgba(255, 255, 255, 0.26)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Clip del contorno del logomark */}
        <clipPath id={clipId}>
          <path d="m 0,44.660594 h 9.898456 l 16.289424,-27.018189 15.261656,27.028649 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 10.63598,-18.996697 9.813098,-7.45e-4 L 51.319316,1.7976846e-7 38.682931,20.384371 26.184443,0.11493018 Z"/>
        </clipPath>

        {/* ===== Ruido + mezcla =====
           SourceGraphic -> rect con gradiente blanco/plata
           feTurbulence  -> grano muy fino (flicker variando 'seed')
           Mezcla final  -> multiply para oscurecer puntitos */}
        <filter id={lightFilterId} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="turbulence"
            baseFrequency="2"
            numOctaves="5"
            seed="0"
            stitchTiles="stitch"
            result="grain"
          >
            {animated ? <animate attributeName="seed" values="0;8;16;24;32;40;0" dur="0.38s" repeatCount="indefinite" /> : null}
          </feTurbulence>

          {/* Subo contraste del ruido para que parezca “TV static” */}
          <feColorMatrix
            in="grain"
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              1 0 0 2 -0.8
            "
            result="grainHi"
          />
          {/* Mezcla puntitos sobre el gradiente */}
          <feBlend in="SourceGraphic" in2="grainHi" mode="multiply" />
        </filter>

      </defs>

      {/* Relleno blanco/plata + ruido dentro del contorno */}
      <g clipPath={`url(#${clipId})`}>
        <rect width="100%" height="100%" fill={`url(#${lightGradientId})`} filter={`url(#${lightFilterId})`} />
      </g>

      {/* Barra shimmer que cruza el logo */}
      <g clipPath={`url(#${clipId})`}>
        <rect
          className={animated ? "mc-shimmer" : undefined}
          x="-30%"
          y="-10%"
          width="160%"
          height="120%"
          fill={`url(#${shimmerId})`}
          opacity="0.50"
        />
      </g>
    </svg>
  );
}

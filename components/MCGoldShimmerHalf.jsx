// components/MCGoldShimmerHalf.jsx
"use client";

import React from "react";
import clsx from "clsx";

/**
 * Rellena el trazado del logo "MC" con una textura dorada + chispas animadas.
 * Sin librerías externas, 100% SVG, determinista (no usa Math.random),
 * por lo que es estable para SSR/CSR y no genera hydration mismatch.
 *
 * Props:
 * - half: "left" | "right"   → qué mitad se muestra.
 * - dock: "left" | "right"   → a qué borde se "pega" dentro del section.
 * - className                → clases extra Tailwind si quieres (opacidad, blend, etc.)
 * - opacity                  → 0..1 para controlar fuerza del efecto. Default 0.25
 */
export default function MCGoldShimmerHalf({
  half = "right",
  dock = "left",
  className = "",
  opacity = 0.25,
}) {
  // viewBox del SVG original (el monograma "MC")
  const VB_W = 76.680717;
  const VB_H = 45.807781;
  const MID_X = VB_W / 2;

  // recorte por mitad (no tocamos tu clip de forma, añadimos otro de “media pantalla”)
  const clipRect = {
    left: { x: 0, w: MID_X },
    right: { x: MID_X, w: MID_X },
  }[half];

  // Ajuste de anclaje al borde del section (left/right) sin interferir con tu layout
  const dockStyle =
    dock === "left"
      ? { left: 0, right: "auto" }
      : { right: 0, left: "auto" };

  // Lista determinista de “chispas” (x,y,radio,delay,dur)
  const sparks = [
    [7.53, 37.94, 0.29, 0.07, 6.6],
    [32.12, 19.89, 0.57, 1.26, 6.9],
    [55.08, 33.11, 0.42, 0.63, 7.4],
    [18.44, 10.72, 0.36, 2.05, 5.9],
    [64.33, 14.18, 0.34, 0.92, 6.2],
    [25.66, 28.40, 0.50, 1.55, 7.1],
    [41.72, 12.66, 0.28, 2.25, 5.8],
    [59.92, 22.30, 0.46, 0.18, 6.6],
    [10.26, 24.10, 0.33, 0.88, 7.0],
    [47.55, 7.90, 0.40, 1.78, 6.3],
  ];

  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-y-0 w-[100vw] max-w-none",
        className
      )}
      style={{
        ...dockStyle,
        opacity,
      }}
    >
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        className="block w-full h-full"
      >
        <defs>
          {/* ---- Clip del logo "MC" (TU MISMA RUTA) ---- */}
          <clipPath id="mcShape">
            <path
              // Ruta exacta de tu mclogo.svg
              d="M -4.2022406e-7,45.797323 H 9.8984556 L 25.686288,18.77733 l 15.763247,27.030453 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 9.839499,-18.557993 c 8.634193,-0.10105 6.653376,-0.01924 11.742801,-0.01887 L 51.319315,1.1367297 51.262715,-2.8265559e-7 38.68293,21.5211 38.69083,22.23818 26.184442,1.2516597 26.154672,0.04975972 Z"
              fill="black"
            />
          </clipPath>

          {/* Clip adicional de mitad */}
          <clipPath id="halfClip">
            <rect x={clipRect.x} y="0" width={clipRect.w} height={VB_H} />
          </clipPath>

          {/* Gradiente “oro” principal */}
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3a2e00" />
            <stop offset="25%" stopColor="#8d6f1f" />
            <stop offset="50%" stopColor="#e2c678" />
            <stop offset="75%" stopColor="#fff6c6" />
            <stop offset="100%" stopColor="#a37e28" />
            <animate
              attributeName="x1"
              values="0; 0.1; 0"
              dur="12s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y1"
              values="0; 0.2; 0"
              dur="12s"
              repeatCount="indefinite"
            />
          </linearGradient>

          {/* Ruido sutil para textura metálica */}
          <filter id="goldNoise" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              seed="8"
              result="turb"
            />
            <feColorMatrix
              in="turb"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.25 0"
              result="noise"
            />
            <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
          </filter>

          {/* Suavizado sutil para las chispas */}
          <filter id="softGlow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="0.35" />
          </filter>
        </defs>

        {/* Capa recortada por logo y por mitad */}
        <g clipPath="url(#mcShape)">
          <g clipPath="url(#halfClip)">
            {/* Fondo oro con ruido */}
            <rect
              x="0"
              y="0"
              width={VB_W}
              height={VB_H}
              fill="url(#goldGrad)"
              filter="url(#goldNoise)"
            />

            {/* Reflejo barrido (shimmer) */}
            <rect
              x="-76.68"
              y="0"
              width={VB_W}
              height={VB_H}
              fill="url(#goldGrad)"
              opacity="0.15"
            >
              <animate
                attributeName="x"
                values="-76.68; 0; 76.68"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>

            {/* Chispas doradas deterministas */}
            <g filter="url(#softGlow)">
              {sparks.map(([cx, cy, r, delay, dur], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="#fff6cc"
                  opacity="0.7"
                >
                  <animate
                    attributeName="cx"
                    values={`${cx}; ${cx + 1.2}; ${cx}`}
                    dur={`${dur}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`${cy}; ${cy - 0.6}; ${cy}`}
                    dur={`${dur}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.35; 0.95; 0.35"
                    dur={`${dur * 0.8}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

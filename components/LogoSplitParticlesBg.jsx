// components/LogoSplitParticlesBg.jsx
"use client";

import { useMemo } from "react";

/**
 * Fondo del logo partido con relleno “oro + partículas” nativo SVG,
 * SIN Math.random() en render → sin hydration mismatch.
 * API estable: { half: "left" | "right", dock: "left" | "right", className, density }
 */
export default function LogoSplitParticlesBg({
  half = "right",
  dock = "left",
  className = "text-cyan-700/20 dark:text-cyan-300/15",
  zIndex = 5,
  density = 18,
}) {
  // Máscara 50/50 para mostrar sólo la mitad
  const maskLeft =
    "linear-gradient(to right, black 0, black 50%, transparent 50%, transparent 100%)";
  const maskRight =
    "linear-gradient(to right, transparent 0, transparent 50%, black 50%, black 100%)";
  const maskImage = half === "left" ? maskLeft : maskRight;

  // Centro del logo clavado en el borde del viewport (constante 200vw / -100vw)
  const sideStyle =
    dock === "left" ? { left: "-100vw", right: "auto" } : { right: "-100vw", left: "auto" };

  // ---------- PRNG determinista (sin Math.random) ----------
  // hash simple de string → seed entero
  function hashStr(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  // mulberry32
  function mulberry32(a) {
    return function () {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const stars = useMemo(() => {
    // misma semilla para SSR y cliente, derivada de props (half/dock/density)
    const seed = hashStr(`mc|${half}|${dock}|${density}|v1`);
    const rand = mulberry32(seed);

    const arr = [];
    for (let i = 0; i < density; i++) {
      // viewBox aprox 76.7 x 45.8 → marco seguro algo más pequeño
      const cx = 6 + rand() * 64;    // 6..70
      const cy = 6 + rand() * 34;    // 6..40
      const dx = (rand() * 6 - 3).toFixed(1); // -3..3
      const dy = (rand() * 6 - 3).toFixed(1);
      const r  = (0.18 + rand() * 0.42).toFixed(2);   // 0.18..0.60
      const d  = (6 + rand() * 4).toFixed(1);         // 6.0..10.0 s
      const delay = (rand() * 1.5).toFixed(2);        // 0..1.5 s
      const palette = ["#fff6cc", "#ffe9a6", "#f7d26b", "#e6b64a", "#d99d2b"];
      const fill = palette[Math.floor(rand() * palette.length)];
      arr.push({ id: i, cx, cy, dx, dy, r, d, delay, fill });
    }
    return arr;
  }, [half, dock, density]);

  // IDs estables por mitad (dos instancias: left/right)
  const ID = half === "left" ? "L" : "R";

  return (
    <div
      aria-hidden
      className="pointer-events-none select-none absolute inset-y-0 w-[200vw] h-[140vh]"
      style={{
        ...sideStyle,
        zIndex,
        WebkitMaskImage: maskImage,
        maskImage,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        willChange: "transform",
      }}
    >
      <svg
        viewBox="0 0 76.680717 45.807781"
        xmlns="http://www.w3.org/2000/svg"
        className={["block w-full h-full", className].join(" ")}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Silueta */}
          <clipPath id={`clip_${ID}`}>
            <path d="M -4.2022406e-7,45.797323 H 9.8984556 L 25.686288,18.77733 l 15.763247,27.030453 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 9.839499,-18.557993 c 8.634193,-0.10105 6.653376,-0.01924 11.742801,-0.01887 L 51.319315,1.1367297 51.262715,-2.8265559e-7 38.68293,21.5211 38.69083,22.23818 26.184442,1.2516597 26.154672,0.04975972 Z"/>
          </clipPath>

          {/* Gradientes “oro” */}
          <radialGradient id={`goldRad_${ID}`} cx="30%" cy="35%" r="80%">
            <stop offset="0%"  stopColor="#fff6cc"/>
            <stop offset="45%" stopColor="#f7d26b"/>
            <stop offset="75%" stopColor="#e6b64a"/>
            <stop offset="100%" stopColor="#d99d2b"/>
          </radialGradient>
          <linearGradient id={`goldLin_${ID}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="#fff2b0" stopOpacity=".85"/>
            <stop offset="40%" stopColor="#f1c761" stopOpacity=".9"/>
            <stop offset="100%" stopColor="#b9892e" stopOpacity=".9"/>
          </linearGradient>

          {/* Ruido/grano */}
          <filter id={`goldNoise_${ID}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7" result="n"/>
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.08"/>
            </feComponentTransfer>
            <feBlend mode="overlay" in2="SourceGraphic"/>
          </filter>

          {/* Glow sutil para partículas */}
          <filter id={`softGlow_${ID}`} x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="0.5" result="b"/>
            <feMerge>
              <feMergeNode in="b"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Desactiva partículas si usuario pide menos animación */}
          <style>{`
            @media (prefers-reduced-motion: reduce){
              #stars_${ID} { display: none; }
            }
          `}</style>
        </defs>

        {/* Relleno oro dentro del logo */}
        <g clipPath={`url(#clip_${ID})`}>
          <rect x="-5" y="-5" width="90" height="60" fill={`url(#goldRad_${ID})`}/>
          <rect x="-5" y="-5" width="90" height="60" fill={`url(#goldLin_${ID})`} opacity=".55"/>
          <rect x="-5" y="-5" width="90" height="60" fill="transparent" filter={`url(#goldNoise_${ID})`}/>

          {/* Partículas deterministas */}
          <g id={`stars_${ID}`} filter={`url(#softGlow_${ID})`}>
            {stars.map((s) => (
              <g key={s.id}>
                <circle r={s.r} cx={s.cx} cy={s.cy} fill={s.fill} opacity="0.85">
                  <animate attributeName="cx" values={`${s.cx}; ${(+s.cx + +s.dx).toFixed(2)}; ${s.cx}`} dur={`${s.d}s`} begin={`${s.delay}s`} repeatCount="indefinite" />
                  <animate attributeName="cy" values={`${s.cy}; ${(+s.cy + +s.dy).toFixed(2)}; ${s.cy}`} dur={`${s.d}s`} begin={`${s.delay}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4; 0.95; 0.4" dur={`${(s.d * 0.8).toFixed(1)}s`} begin={`${s.delay}s`} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
          </g>
        </g>

        {/* Borde con currentColor (integra con tema) */}
        <path
          d="M -4.2022406e-7,45.797323 H 9.8984556 L 25.686288,18.77733 l 15.763247,27.030453 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 9.839499,-18.557993 c 8.634193,-0.10105 6.653376,-0.01924 11.742801,-0.01887 L 51.319315,1.1367297 51.262715,-2.8265559e-7 38.68293,21.5211 38.69083,22.23818 26.184442,1.2516597 26.154672,0.04975972 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity=".9"
        />
      </svg>
    </div>
  );
}

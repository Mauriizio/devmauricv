// components/LogoSplitBg.jsx
// Muestra media silueta del logo “anclada” a un borde de pantalla, SIN animación idle.
// half: "left" | "right"  (mitad recortada)
// dock: "left" | "right"  (borde donde se coloca esa mitad)

export default function LogoSplitBg({
  half = "left",
  dock = "left",
  className = "text-cyan-600/25 dark:text-cyan-300/20",
  title = "Logo Maurizio Caballero",
}) {
  const d =
    "M -4.2022406e-7,45.797323 H 9.8984556 L 25.686288,18.77733 l 15.763247,27.030453 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 9.839499,-18.557993 c 8.634193,-0.10105 6.653376,-0.01924 11.742801,-0.01887 L 51.319315,1.1367297 51.262715,-2.8265559e-7 38.68293,21.5211 38.69083,22.23818 26.184442,1.2516597 26.154672,0.04975972 Z";

  // ViewBox width (para calcular el cruce)
  const vbW = 76.680717;

  // Clip rects con leve solape para evitar “costura”
  const leftClipRect  = <rect x="0"    y="0" width="0.52" height="1" />;
  const rightClipRect = <rect x="0.48" y="0" width="0.52" height="1" />;

  // Traslación para cruzar la mitad mostrada al lado opuesto
  let transform = undefined;
  if (half === "right" && dock === "left") transform = `translate(${-vbW / 2} 0)`;
  if (half === "left"  && dock === "right") transform = `translate(${ vbW / 2} 0)`;

  // Solo efecto de separación en hover del contenedor .group (sin idle)
  const css = `
    .mc-wrap { pointer-events: none; }
    .mc-shape { transform-box: fill-box; transform-origin: 50% 50%; }
    .group:hover .mc-left  { transform: translateX(-1.5%); transition: transform .35s cubic-bezier(.2,0,.2,1); }
    .group:hover .mc-right { transform: translateX( 1.5%); transition: transform .35s cubic-bezier(.2,0,.2,1); }
    @media (prefers-reduced-motion: reduce) {
      .group:hover .mc-left, .group:hover .mc-right { transform: none; }
    }
  `;

  const isLeft  = half === "left";
  const clipId  = isLeft ? "mc-clip-left" : "mc-clip-right";
  const clsSide = isLeft ? "mc-left" : "mc-right";

  return (
    <svg
      className={`mc-wrap absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 76.680717 45.807781"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{css}</style>
      <title>{title}</title>

      <defs>
        <clipPath id="mc-clip-left"  clipPathUnits="objectBoundingBox">{leftClipRect}</clipPath>
        <clipPath id="mc-clip-right" clipPathUnits="objectBoundingBox">{rightClipRect}</clipPath>
      </defs>

      <g className={`mc-shape ${clsSide}`} clipPath={`url(#${clipId})`} transform={transform}>
        <path d={d} fill="currentColor" />
      </g>
    </svg>
  );
}

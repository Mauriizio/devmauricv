// components/LogoSplitBg.jsx
// Muestra media silueta del logo y permite "anclarla" al borde opuesto.
// half: "left" | "right"  (mitad recortada del logo)
// dock: "left" | "right"  (borde de la pantalla donde se coloca esa mitad)

export default function LogoSplitBg({
  half = "left",
  dock = "left",
  className = "text-cyan-600/25 dark:text-cyan-300/20",
  title = "Logo Maurizio Caballero",
}) {
  // Path del logo (igual al tuyo)
  const d =
    "M -4.2022406e-7,45.797323 H 9.8984556 L 25.686288,18.77733 l 15.763247,27.030453 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 9.839499,-18.557993 c 8.634193,-0.10105 6.653376,-0.01924 11.742801,-0.01887 L 51.319315,1.1367297 51.262715,-2.8265559e-7 38.68293,21.5211 38.69083,22.23818 26.184442,1.2516597 26.154672,0.04975972 Z";

  // ViewBox (tus unidades)
  const vbW = 76.680717;

  // Clip rects en porcentaje (con leve solape para evitar costura)
  const leftClipRect  = <rect x="0"    y="0" width="0.52" height="1" />;
  const rightClipRect = <rect x="0.48" y="0" width="0.52" height="1" />;

  // Transform para "cruzar" la mitad: desplaza media ViewBox en X según half/dock
  // - right + dock left => mueve -50% del ancho para que la mitad derecha quede a la IZQ
  // - left  + dock right => mueve +50% del ancho para que la mitad izquierda quede a la DER
  let transform = undefined;
  if (half === "right" && dock === "left") transform = `translate(${-vbW / 2} 0)`;
  if (half === "left"  && dock === "right") transform = `translate(${ vbW / 2} 0)`;

  // CSS interno: respiración sutil + separación ligera en hover (opcional)
  const css = `
    .mc-wrap { pointer-events: none; }
    .mc-shape { transform-box: fill-box; transform-origin: 50% 50%; }
    @keyframes breathe { 0%{transform:scale(1)} 50%{transform:scale(1.005)} 100%{transform:scale(1)} }
    .mc-idle { animation: breathe 7s ease-in-out infinite; }
    .group:hover .mc-left  { transform: translateX(-1.5%); transition: transform .35s cubic-bezier(.2,0,.2,1); }
    .group:hover .mc-right { transform: translateX( 1.5%); transition: transform .35s cubic-bezier(.2,0,.2,1); }
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
        <clipPath id="mc-clip-left" clipPathUnits="objectBoundingBox">
          {leftClipRect}
        </clipPath>
        <clipPath id="mc-clip-right" clipPathUnits="objectBoundingBox">
          {rightClipRect}
        </clipPath>
      </defs>

      <g className="mc-idle">
        <g className={`mc-shape ${clsSide}`} clipPath={`url(#${clipId})`} transform={transform}>
          <path d={d} fill="currentColor" />
        </g>
      </g>
    </svg>
  );
}

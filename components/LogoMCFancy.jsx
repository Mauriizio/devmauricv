// components/LogoMCFancy.jsx
// Logo MC "sliced" en 3 piezas con animación en hover (sin libs)
// - Color hereda de currentColor (usa Tailwind: text-*)
// - Tamaño via h-* w-* (gracias al viewBox)

export default function LogoMCFancy({
  className = "h-12 w-auto text-cyan-600",
  title = "Maurizio.Dev",
  gap = 0,             // px de separación visual entre slices (0 = sin gap)
  shift = 0.02,        // cuánto se desplaza cada slice (porcentaje del tamaño)
  duration = 350       // ms de la animación
}) {
  // Path original: tu mismo "d"
  const d="m 0,44.660594 h 9.898456 l 16.289424,-27.018189 15.261656,27.028649 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 10.63598,-18.996697 9.813098,-7.45e-4 L 51.319316,1.7976846e-7 38.682931,20.384371 26.184443,0.11493018 Z"
    

  // CSS incrustado para que sea portable (sin tocar tu globals.css)
  const css = `
    .mc-sliced { display:block; }
    .mc-slice { transition: transform ${duration}ms cubic-bezier(.2,0,.2,1); transform-box: fill-box; transform-origin: 50% 50%; }
    .mc-slice--L { }
    .mc-slice--M { }
    .mc-slice--R { }
    /* Hover: separa las piezas */
    .mc-sliced:hover .mc-slice--L { transform: translate(${-shift * 100}%, 0); }
    .mc-sliced:hover .mc-slice--M { transform: translate(0, ${-shift * 60}%); }
    .mc-sliced:hover .mc-slice--R { transform: translate(${shift * 100}%, 0); }
  `;

  // con gap > 0 agregamos un trazo del color del fondo actual mediante currentColor invertido.
  // truco: usamos stroke del mismo color que el background via CSS fuera del svg;
  // para no complicar, damos un borde "recortador" blanco semi-transparente que simula el gap.
  const hasGap = gap > 0;

  return (
    <svg
      className={`mc-sliced ${className} select-none`}
      viewBox="0 0 76.680709 44.671051"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <style>{css}</style>

      {/* 3 clipPaths en coordenadas relativas (0..1) para cortar el mismo path en 3 */}
      <defs>
        <clipPath id="mc-clip-L" clipPathUnits="objectBoundingBox">
          {/* izquierda: 0..0.34  */}
          <rect x="0" y="0" width="0.34" height="1" />
        </clipPath>
        <clipPath id="mc-clip-M" clipPathUnits="objectBoundingBox">
          {/* medio: 0.33..0.67 con leve solape para no dejar huecos al no-hover */}
          <rect x="0.33" y="0" width="0.34" height="1" />
        </clipPath>
        <clipPath id="mc-clip-R" clipPathUnits="objectBoundingBox">
          {/* derecha: 0.66..1 */}
          <rect x="0.66" y="0" width="0.34" height="1" />
        </clipPath>
      </defs>

      {/* Slice izquierda */}
      <g className="mc-slice mc-slice--L" clipPath="url(#mc-clip-L)">
        <path d={d} fill="currentColor" />
        {hasGap && <path d={d} fill="none" stroke="white" opacity="0.65" strokeWidth={gap} />}
      </g>

      {/* Slice medio */}
      <g className="mc-slice mc-slice--M" clipPath="url(#mc-clip-M)">
        <path d={d} fill="currentColor" />
        {hasGap && <path d={d} fill="none" stroke="white" opacity="0.65" strokeWidth={gap} />}
      </g>

      {/* Slice derecha */}
      <g className="mc-slice mc-slice--R" clipPath="url(#mc-clip-R)">
        <path d={d} fill="currentColor" />
        {hasGap && <path d={d} fill="none" stroke="white" opacity="0.65" strokeWidth={gap} />}
      </g>
    </svg>
  );
}

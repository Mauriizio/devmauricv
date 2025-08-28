"use client";

/**
 * Logo partido que se alinea perfecto al borde del viewport en TODOS los tamaños.
 * - half: "left" | "right"  → qué mitad del logo se ve
 * - dock: "left" | "right"  → a qué borde se pega esa mitad
 * - className: color/opacidad (usa currentColor)
 */
export default function LogoSplitBg({
  half = "right",
  dock = "left",
  className = "text-cyan-700/20 dark:text-cyan-300/15",
  zIndex = 5,
}) {
  // Máscaras al 50%
  const maskLeft =
    "linear-gradient(to right, black 0, black 50%, transparent 50%, transparent 100%)";
  const maskRight =
    "linear-gradient(to right, transparent 0, transparent 50%, black 50%, black 100%)";

  const maskImage = half === "left" ? maskLeft : maskRight;

  // Offset siempre = -100vw para 200vw de ancho (o espejo a la derecha)
  const sideStyle =
    dock === "left" ? { left: "-100vw", right: "auto" } : { right: "-100vw", left: "auto" };

  return (
    <div
      aria-hidden
      className={[
        "pointer-events-none select-none",
        "absolute inset-y-0",
        // ¡Constante! 200vw en todos los breakpoints
        "w-[200vw] h-[100vh]",
      ].join(" ")}
      style={{
        ...sideStyle,
        zIndex,
        WebkitMaskImage: maskImage,
        maskImage,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
      }}
    >
      <svg
        viewBox="0 0 76.680709 44.671051"
        xmlns="http://www.w3.org/2000/svg"
        className={["block w-full h-full", className].join(" ")}
        preserveAspectRatio="xMidYMid slice"
      >
        <path
      fill="currentColor"
     d="m 0,44.660594 h 9.898456 l 16.289424,-27.018189 15.261656,27.028649 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 10.63598,-18.996697 9.813098,-7.45e-4 L 51.319316,1.7976846e-7 38.682931,20.384371 26.184443,0.11493018 Z"
     />
      </svg>
    </div>
  );
}

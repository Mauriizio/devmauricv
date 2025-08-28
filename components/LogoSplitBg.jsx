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
        "w-[200vw] h-[140vh]",
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
        viewBox="0 0 76.680717 45.807781"
        xmlns="http://www.w3.org/2000/svg"
        className={["block w-full h-full", className].join(" ")}
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M -4.2022406e-7,45.797323 H 9.8984556 L 25.686288,18.77733 l 15.763247,27.030453 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 9.839499,-18.557993 c 8.634193,-0.10105 6.653376,-0.01924 11.742801,-0.01887 L 51.319315,1.1367297 51.262715,-2.8265559e-7 38.68293,21.5211 38.69083,22.23818 26.184442,1.2516597 26.154672,0.04975972 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

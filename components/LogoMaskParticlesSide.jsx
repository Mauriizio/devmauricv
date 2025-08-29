// components/LogoMaskParticlesSide.jsx
"use client";

export default function LogoMaskParticlesSide({
  side = "right",                  // "right" en SectionOne, "left" en SectionTwo
  maskUrl = "/logos/mclogo.svg",   // ruta a tu logo completo
  className = "",
  children,                        // aquí renderizas TU fondo de partículas existente
}) {
  // 200% de ancho para mostrar “media figura”. En mobile lo ampliamos.
  const pos = side === "left" ? "0% 50%" : "100% 50%";

  const css = `
    .mc-mask {
      position: absolute; inset: 0;
      pointer-events: none; z-index: 0;
      /* CSS mask para recortar con el logo */
      -webkit-mask-image: url('${maskUrl}');
              mask-image: url('${maskUrl}');
      -webkit-mask-repeat: no-repeat;
              mask-repeat: no-repeat;
      -webkit-mask-size: 200% 100%;
              mask-size: 200% 100%;
      -webkit-mask-position: ${pos};
              mask-position: ${pos};
    }
    @media (max-width: 640px){
      .mc-mask{
        -webkit-mask-size: 260% 100%;
                mask-size: 260% 100%;
      }
    }
  `;

  return (
    <div className={`mc-mask ${className}`}>
      <style jsx>{css}</style>
      <div className="absolute inset-0">{/* Tu canvas existente */}
        {children}
      </div>
    </div>
  );
}

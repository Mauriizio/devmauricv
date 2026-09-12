"use client";

import Image from "next/image";

const PARTICLES = [
  { text: "const", x: 8, y: 18, color: "#22d3ee", duration: 24, delay: -4 },
  { image: "/logos/lhtml.png", x: 18, y: 74, size: 24, duration: 29, delay: -18 },
  { text: "let", x: 27, y: 38, color: "#f0abfc", duration: 26, delay: -12 },
  { image: "/logos/lcss.png", x: 36, y: 86, size: 23, duration: 31, delay: -8 },
  { text: "return", x: 43, y: 13, color: "#67e8f9", duration: 28, delay: -21 },
  { image: "/logos/ljs.png", x: 51, y: 57, size: 24, duration: 25, delay: -6 },
  { text: "PLC", x: 59, y: 28, color: "#86efac", duration: 30, delay: -15 },
  { image: "/logos/loff.png", x: 68, y: 79, size: 25, duration: 27, delay: -2 },
  { text: "Ω", x: 76, y: 12, color: "#ffffff", duration: 32, delay: -24 },
  { image: "/logos/lcuba.png", x: 84, y: 48, size: 25, duration: 28, delay: -10 },
  { text: "=>", x: 91, y: 88, color: "#22d3ee", duration: 25, delay: -19 },
  { image: "/logos/lwor.png", x: 95, y: 24, size: 24, duration: 30, delay: -7 },
  { text: "if", x: 13, y: 52, color: "#86efac", duration: 27, delay: -22, mobileHidden: true },
  { text: "class", x: 32, y: 66, color: "#ffffff", duration: 31, delay: -13, mobileHidden: true },
  { text: "V", x: 48, y: 91, color: "#67e8f9", duration: 24, delay: -17, mobileHidden: true },
  { text: "import", x: 63, y: 45, color: "#f0abfc", duration: 29, delay: -5, mobileHidden: true },
  { text: "∑", x: 73, y: 67, color: "#ffffff", duration: 26, delay: -20, mobileHidden: true },
  { text: "export", x: 88, y: 62, color: "#22d3ee", duration: 32, delay: -11, mobileHidden: true },
];

export default function ParticlesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {PARTICLES.map((particle, index) => (
        <span
          key={`${particle.text || particle.image}-${index}`}
          className={`tech-particle absolute grid place-items-center font-mono font-semibold ${
            particle.mobileHidden ? "hidden md:grid" : ""
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            color: particle.color,
            fontSize: particle.text?.length > 3 ? "0.72rem" : "0.9rem",
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.image ? (
            <Image
              src={particle.image}
              alt=""
              width={particle.size}
              height={particle.size}
              sizes={`${particle.size}px`}
              className="h-auto w-auto object-contain"
            />
          ) : (
            particle.text
          )}
        </span>
      ))}

      <style jsx>{`
        .tech-particle {
          opacity: 0.78;
          filter: drop-shadow(0 0 5px currentColor);
          will-change: transform, opacity;
          animation-name: tech-particle-drift;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes tech-particle-drift {
          0% {
            transform: translate3d(52px, 52px, 0) rotate(0deg);
            opacity: 0;
          }
          12% {
            opacity: 0.78;
          }
          88% {
            opacity: 0.78;
          }
          100% {
            transform: translate3d(-86px, -86px, 0) rotate(-8deg);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-particle {
            animation: none;
            opacity: 0.55;
            will-change: auto;
          }
        }
      `}</style>
    </div>
  );
}

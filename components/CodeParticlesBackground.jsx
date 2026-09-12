// components/CodeParticlesBackground.jsx
"use client";

import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadParticlesEngine } from "@/components/loadParticlesEngine";

export default function CodeParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadParticlesEngine(engine);
  }, []);

  // Respeta preferencias de movimiento reducido (cliente)
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const codeOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      detectRetina: false,
      fpsLimit: 30,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: { value: 7, density: { enable: true, area: 900 } },
        color: { value: ["#000000ff", "#ffffffff"] },
        shape: {
          type: ["char"],
          character: [
            { value: [";", "{", "}", "()", "=>"], font: "Courier New", fill: true },
            { value: ["function", "const", "let", "var"], font: "Courier New", fill: true },
          ],
        },
        opacity: {
          value: 1,
          random: { enable: true, minimumValue: 0.3 },
          animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false },
        },
        size: {
          value: { min: 8, max: 16 },
          random: { enable: true, minimumValue: 6 },
          animation: { enable: false },
        },
        move: {
          direction: "top",
          enable: !prefersReduced,
          speed: prefersReduced ? 0 : 1.5,
          outModes: { default: "out" },
        },
      },
    }),
    [prefersReduced]
  );

  if (prefersReduced) return null;

  return (
    <Particles
      id="tsparticles-code"
      init={particlesInit}
      options={codeOptions}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // mantener detrás
      }}
    />
  );
}

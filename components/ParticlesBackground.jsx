// components/ParticlesBackground.jsx
"use client";

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadParticlesEngine } from "@/components/loadParticlesEngine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadParticlesEngine(engine);
  }, []);

  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Estrellas de fondo (capa 0)
  const starsOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      detectRetina: false,
      fpsLimit: 30,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: { value: 150, density: { enable: true, area: 1050 } },
        color: { value: ["#ffffff", "#22d3ee", "#67e8f9"] },
        shape: { type: "circle" },
        size: {
          value: { min: 0.1, max: 2.2 },
          random: { enable: true, minimumValue: 0.3 },
        },
        move: {
          enable: !prefersReduced,
          speed: prefersReduced ? 0 : 0.1,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        opacity: {
          value: { min: 0.58, max: 1 },
          random: { enable: true, minimumValue: 0.5 },
          animation: {
            enable: !prefersReduced,
            speed: prefersReduced ? 0 : 3,
            minimumValue: 0.3,
            sync: false,
          },
        },
      },
      // Si ya venías usando twinkle/shadow y funcionan con slim en tu proyecto, los mantenemos
      twinkle: {
        particles: { enable: !prefersReduced, frequency: 0.1, opacity: 1 },
      },
      shadow: {
        enable: true,
        color: "#F3F8FF",
        blur: 12,
        offset: { x: 0, y: 0 },
      },
      interactivity: {
        detectsOn: "window",
        events: { onHover: { enable: false }, onClick: { enable: false }, resize: true },
      },
    }),
    [prefersReduced]
  );

  // Partículas técnicas visibles (capa 1). Formas nativas de slim: sin imágenes ni plugins extra.
  const mainOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      detectRetina: false,
      fpsLimit: 30,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: { value: 26, density: { enable: true, area: 620 } },
        color: { value: ["#22d3ee", "#67e8f9", "#ffffff"] },
        shape: { type: ["circle", "square"] },
        size: { value: { min: 1.5, max: 4.5 } },
        move: {
          enable: !prefersReduced,
          speed: prefersReduced ? 0 : 0.45,
          direction: "top-left",
          random: false,
          straight: true,
          outModes: { default: "out" },
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
        angle: { value: 120, offset: 0 },
        gravity: { enable: false },
        opacity: {
          value: 0.82,
          random: false,
          animation: { enable: !prefersReduced, speed: prefersReduced ? 0 : 1, minimumValue: 1, sync: true },
        },
        shadow: {
          enable: true,
          color: "#F3F8FF",
          blur: 4,
          offset: { x: 0, y: 0 },
        },
      },
      interactivity: {
        events: { onHover: { enable: false }, onClick: { enable: false }, resize: true },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 18, density: { enable: true, area: 560 } },
              size: { value: { min: 1.5, max: 3.5 } },
            },
          },
        },
      ],
    }),
    [prefersReduced]
  );

  if (prefersReduced) return null;

  return (
    <>
      {/* Estrellas de fondo */}
      <Particles
        id="tsparticles-stars"
        init={particlesInit}
        options={starsOptions}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Partículas técnicas de mayor tamaño */}
      <Particles
        id="tsparticles-main"
        init={particlesInit}
        options={mainOptions}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
    </>
  );
}

// components/ParticlesBackground.jsx
"use client";

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
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
      detectRetina: true,
      fpsLimit: 60,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: { value: 400, density: { enable: true, area: 900 } },
        color: { value: ["#ffffff", "#00ffff", "#ff00ff"] },
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
          value: { min: 0.4, max: 1 },
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

  // Letras & logos (capa 1)
  const mainOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      detectRetina: true,
      fpsLimit: 60,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: { value: 20, density: { enable: true, area: 200 } },
        color: { value: ["#00ffea", "#ff00f7", "#00ff00", "#ffffff"] },
        shape: {
          type: ["image", "char"],
          character: {
            value: [
              "{", "}", "<", ">", "/", "*", "const", "let", "return", "(=)", "==", "+", "</>",
              "===", "[ ]", "=>", "&&", "||", "if", "else", "for", "while", "do", "case",
              "break", "class", "import", "export",
            ],
            font: "monospace",
            weight: "400",
            fill: true,
          },
          image: [
            { src: "/logos/lhtml.png", width: 20, height: 20, preload: true },
            { src: "/logos/lcss.png",  width: 20, height: 20, preload: true },
            { src: "/logos/ljs.png",   width: 20, height: 20, preload: true },
            { src: "/logos/loff.png",  width: 20, height: 20, preload: true },
            { src: "/logos/lcuba.png", width: 20, height: 20, preload: true },
            { src: "/logos/lwor.png",  width: 20, height: 20, preload: true },
          ],
        },
        size: { value: { min: 10, max: 20 } },
        move: {
          enable: !prefersReduced,
          speed: prefersReduced ? 0 : 2,
          direction: "top-left",
          random: false,
          straight: true,
          outModes: { default: "out" },
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
        angle: { value: 120, offset: 0 },
        gravity: { enable: false },
        opacity: {
          value: 0.8,
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
        detectsOn: "window",
        events: {
          onHover: { enable: !prefersReduced, mode: "repulse" },
          onClick: { enable: !prefersReduced, mode: "none" },
          ontouchmove: { enable: !prefersReduced, mode: "repulse" },
          resize: true,
          touchstart: { enable: !prefersReduced, mode: "repulse" },
          touchmove: { enable: !prefersReduced, mode: "repulse" },
          touchend: { enable: !prefersReduced, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 300, duration: 0.6, speed: 4, maxSpeed: 5, easing: "ease-out" },
          push: { quantity: 2 },
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 60 },
              size: { value: { min: 4, max: 10 } },
            },
          },
        },
      ],
    }),
    [prefersReduced]
  );

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

      {/* Partículas de letras e imágenes */}
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

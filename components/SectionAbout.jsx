// components/SectionAbout.jsx
"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Head from "next/head"
import {
  ArrowLeft,
  X as IconX,
  Sun,
  Moon,
  MessageCircle,
  ZoomIn,
  Download
} from "lucide-react"
import { useTheme } from "@/context/ThemeContext"
import LogoMC from "@/components/LogoMC"
import TechCoverSVG from "@/components/TechCoverSVG"

export default function SectionAbout({ show, onVolverArriba, onContactOpen, onClose }) {
  const { isDark, toggleDarkMode } = useTheme()
  const [selectedDiploma, setSelectedDiploma] = useState(null)

  // Contenedores
  const scrollContainerRef = useRef(null)
  const diplomasRowRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  // Reset scroll al abrir
  useEffect(() => {
    if (show && scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0
  }, [show])

  // ESC para cerrar (usa tu handler)
  const handleKeyDown = (e) => { if (e.key === "Escape") onVolverArriba?.() }

  // Datos (tuyos, intactos)
  const diplomas = [
    {
      id: 1,
      title:
        "Iniciación a HTML, CSS y JavaScript - Centro de Desarrollo de Competencias Digitales de Castilla-La Mancha.",
      image: "/certificados/n1Certificado_Iniciacin_a_HTML_CSS_y_JavaScript.jpg",
      provider: "Centro de Desarrollo de Competencias Digitales de Castilla-La Mancha",
    },
    { id: 2, title: "Fundamentos de Ingeniería de Software - Platzi Academy", image: "/certificados/n2diploma-ingenieria.jpg", provider: "Platzi" },
    { id: 3, title: "Diseño y Programacion Web – AIEP / Fundación Telefonica Movistar / SENCE", image: "/certificados/n3.jpg", provider: "AIEP / Fundación Telefónica Movistar / SENCE" },
    { id: 4, title: "Programacion con JavaScript– AIEP / Fundación Telefonica Movistar / SENCE", image: "/certificados/n4.jpg", provider: "AIEP / Fundación Telefónica Movistar / SENCE" },
    { id: 5, title: "Diseño Web con HTML5+CSS– AIEP / Fundación Telefonica Movistar / SENCE", image: "/certificados/n5.jpg", provider: "AIEP / Fundación Telefónica Movistar / SENCE" },
    { id: 6, title: "Fundamentos de CyberSeguridad / Coursera Google", image: "/certificados/n6.jpg", provider: "Google via Coursera" },
  ]

  const technologies = [
    "React.js","Next.js","JavaScript ES6+","TypeScript",
    "Tailwind CSS","HTML5 & CSS3","Framer Motion","React Hooks",
  ]
  const tools = ["Git & GitHub","VS Code","Figma","Cubase","Deploy","Chrome DevTools","Google ADS","GIMP"]

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Proyectos Freelance",
      period: "2023 - Presente",
      description:
        "Desarrollo de aplicaciones web modernas con React y Next.js. Implementación de interfaces responsivas y optimización de rendimiento.",
    },
    {
      title: "Desarrollador Web - Freelance",
      company: "Proyectos Personales",
      period: "2022 - Presente",
      description:
        "Creación de portfolios interactivos, landing pages y aplicaciones web con enfoque en UX/UI y tecnologías modernas. Sitios web para resolver problemas específicos de clientes.",
    },
    {
      title: "Técnico de Software & Producción Digital",
      company: "Litocopias.com (El Vigía, Mérida - Venezuela)",
      period: "2012 - 2016",
      description:
        "Instalación y configuración de sistemas operativos (Windows), drivers y software especializado. Soporte técnico a usuarios, mantenimiento de equipos y optimización de rendimiento. Diseño de piezas gráficas en Illustrator y edición de documentos académicos.",
    },
    {
      title: "Técnico de Sistemas Informáticos",
      company: "TDH Studios - Mérida, Venezuela",
      period: "2010-2012",
      description:
        "Mantenimiento y soporte de sistemas informáticos. Participación en proyectos de diseño gráfico y producción audiovisual. Colaboración en soluciones técnicas para entornos creativos y digitales.",
    },
  ]

  const characteristics = [
    { icon: "🔧", text: "Adaptación rápida a nuevas herramientas y entornos" },
    { icon: "🚀", text: "Proactivo para aprender, proponer y ejecutar soluciones" },
    { icon: "🧠", text: "Aprovecho la IA para ser más eficiente sin depender de ella" },
    { icon: "🎯", text: "Enfocado en resultados reales y productividad sostenible" },
    { icon: "🤝", text: "Trabajo bien en equipo y asumo liderazgo cuando hace falta" },
    { icon: "🛠️", text: "Resuelvo problemas con criterio técnico y pensamiento estratégico" },
  ]

  const interests = [
    { icon: "👪", text: "Tiempo de calidad con mi familia" },
    { icon: "🏍️", text: "Salir a motoquear a la periferia." },
    { icon: "💪", text: "Ir al Gym o hacer deporte. Me gusta el Baseball, Team MLB Atlanta Braves." },
    { icon: "🎞️", text: "Me gusta ver series y peliculas de historias basadas en hechos reales." },
    { icon: "🎤", text: "Me apasiona la musica, a veces puedo rapear bien." },
    {
      icon: "🗣️",
      text: "Me gustan las conversaciones profundas con personas cultas sobre temas como historia, geopolitica, religiones, el bien el mal, etc",
    },
  ]

  const education = [
    { title: "Desarrollo Web Frontend", institution: "Autodidacta • Diversos Cursos Online", period: "2020 - Presente" },
    { title: "Octavo Semestre aprobados en Pedagogia en Lenguaje", institution: "Universidad Pedagogica Experimental Libertador UPEL", period: "2013-2016" },
    { title: "Técnico en Mantenimiento de Equipos Informáticos", institution: "Instituto Nacional de Capacitación y Educación INCE", period: "2010-2013" },
  ]

  // Handlers
  const openDiplomaModal = (d) => setSelectedDiploma(d)
  const closeDiplomaModal = () => setSelectedDiploma(null)

  // ✅ Scroll a Section One + cerrar overlay
 // ✅ cierra overlay y vuelve a Section One con scroll (fallback seguro)
const scrollToSectionOne = () => {
  const main =
    document.querySelector("main") ||
    document.querySelector("[data-main-scroll]") ||
    document.querySelector("#main-scroll");

  if (main?.scrollTo) {
    main.scrollTo({ left: main.scrollWidth, behavior: "smooth" });
  }

  // usa onClose si está, si no usa onVolverArriba
  if (typeof onClose === "function") onClose();
  else if (typeof onVolverArriba === "function") onVolverArriba();
};

  const glassBase =
    "flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors";

  /* Botones */
  const btnCV =
    `${glassBase} hidden md:flex ` +
    (isDark
      ? "text-cyan-300 hover:text-cyan-200 bg-white/0 hover:bg-white/5 border-cyan-700/40 hover:border-cyan-700/70"
      : "text-cyan-800 hover:text-cyan-900 bg-white/40 hover:bg-white/60 border-cyan-900/30 hover:border-cyan-900/60");

  const btnWA =
    `${glassBase} ` +
    (isDark
      ? "text-emerald-300 hover:text-emerald-200 bg-emerald-900/40 hover:bg-emerald-900/55 border-emerald-700/40 hover:border-emerald-600/70"
      : "text-emerald-800 hover:text-emerald-900 bg-emerald-100/70 hover:bg-emerald-100 border-emerald-900/30 hover:border-emerald-900/50");

  const btnGH =
    `${glassBase} ` +
    (isDark
      ? "text-zinc-200 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border-zinc-600/50 hover:border-zinc-500/70"
      : "text-zinc-800 hover:text-black bg-zinc-100/70 hover:bg-zinc-100 border-zinc-900/20 hover:border-zinc-900/40");

  const btnLI =
    `${glassBase} hidden md:flex ` +
    (isDark
      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
      : "text-blue-800 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/30 hover:border-blue-900/50");

  const btnIG =
    `${glassBase} hidden md:flex ` +
    (isDark
      ? "text-pink-300 hover:text-pink-200 bg-pink-900/40 hover:bg-pink-900/55 border-pink-700/40 hover:border-pink-600/70"
      : "text-pink-700 hover:text-pink-800 bg-pink-100/70 hover:bg-pink-100 border-pink-900/20 hover:border-pink-900/40");

  const btnFB =
    `${glassBase} hidden md:flex ` +
    (isDark
      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
      : "text-blue-700 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/20 hover:border-blue-900/40");

  const btnX =
    `${glassBase} ` +
    (isDark
      ? "text-rose-300 hover:text-rose-200 bg-rose-900/40 hover:bg-rose-900/55 border-rose-700/40 hover:border-rose-600/70"
      : "text-rose-700 hover:text-rose-900 bg-rose-100/70 hover:bg-rose-100 border-rose-900/20 hover:border-rose-900/40");

  /* Toggle palanquita */
  const switchBtn = `relative shrink-0 inline-flex items-center rounded-full border
                     h-6 w-[3.1rem] min-w-[3.1rem] md:h-[22px] md:w-10 md:min-w-10
                     ${isDark ? "bg-cyan-700 border-cyan-400/60 justify-end" : "bg-cyan-200 border-cyan-900/50 justify-start"}
                     shadow-[0_2px_10px_rgba(0,0,0,0.10)] transition-colors duration-200`;
  const switchKnob = "h-5 w-5 md:h-[18px] md:w-[18px] mx-1 rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,.25)] transition-transform duration-200";

  // ✅ MISMA ctaBtn que en Section Two
const ctaBtn = [
  "inline-flex text-sm items-center justify-center gap-1.5",
  "w-[min(82vw,200px)] mx-auto sm:mx-0 px-5 py-2 my-1",
  "rounded-md border font-azonix font-extrabold transition-colors",
  "supports-[backdrop-filter]:backdrop-blur-sm",
  isDark
    ? "text-cyan-300 hover:text-cyan-200 bg-black/30 border-cyan-700/40 hover:border-cyan-700/70"
    : "text-cyan-900 hover:text-cyan-700 bg-white/40 border-cyan-800/30 hover:border-cyan-800/60",
].join(" ");

  // Chips visibles también en tema claro
  const chipClass = useMemo(
    () =>
      "rounded-full px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm font-medium " +
      (isDark
        ? "bg-cyan-900/40 text-cyan-200 border border-cyan-700/50"
        : "bg-cyan-50 text-cyan-900 border border-cyan-200/80"),
    [isDark]
  )

  // --- Diplomas: chevrón & fades cuando hay overflow ---
  const updateScrollShadows = () => {
    const el = diplomasRowRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }
  useEffect(() => {
    updateScrollShadows()
    const el = diplomasRowRef.current
    if (!el) return
    const onScroll = () => updateScrollShadows()
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])
  const scrollByAmount = (amt) => {
    const el = diplomasRowRef.current
    if (!el) return
    el.scrollBy({ left: amt, behavior: "smooth" })
  }

  // --------- SEO (solo cuando está visible) ----------
  const aboutTitle = "Sobre mí — Maurizio Caballero"
  const aboutDesc =
    "Conoce a Maurizio Caballero: Frontend Developer (React, Next.js). Experiencia, habilidades, educación y diplomas."
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maurizio Caballero",
    jobTitle: "Frontend Developer",
    description: aboutDesc,
    knowsAbout: [...technologies, ...tools],
    skills: technologies,
    hasCredential: diplomas.map((d) => ({
      "@type": "EducationalOccupationalCredential",
      name: d.title,
      recognizedBy: d.provider ? { "@type": "Organization", name: d.provider } : undefined,
      url: d.image?.startsWith("/") ? undefined : d.image,
    })),
  }

  // Btns previos (no tocamos su uso en el resto)
  const btnBase =
    "flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors " +
    (isDark
      ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
      : "text-cyan-700 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-800/30 hover:border-cyan-800/60")

  const btnGreen =
    "flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors " +
    (isDark
      ? "text-emerald-300 hover:text-emerald-200 bg-emerald-950/30 hover:bg-emerald-900/50 border-emerald-700/40 hover:border-emerald-700/70"
      : "text-emerald-700 hover:text-emerald-900 bg-emerald-100/60 hover:bg-emerald-100 border-emerald-800/30 hover:border-emerald-800/60")

  // --- Modal diplomas ---
  const DiplomaModal = () => {
    if (!selectedDiploma) return null
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        onClick={closeDiplomaModal}
      >
        <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={closeDiplomaModal}
            className={`absolute -top-12 right-0 p-2 rounded-full transition-colors z-10 ${
              isDark ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-white hover:bg-gray-100 text-gray-800"
            }`}
            aria-label="Cerrar diploma"
          >
            <IconX size={24} />
          </button>

          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <img
              src={selectedDiploma.image || "/placeholder.svg"}
              alt={selectedDiploma.title}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-auto max-h-[80vh] object-contain"
              onError={(e) => { e.currentTarget.src = "/placeholder.svg" }}
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-sans">{selectedDiploma.title}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {show && (
        <Head>
          <title>{aboutTitle}</title>
          <meta name="description" content={aboutDesc} />
          <meta name="author" content="Maurizio Caballero" />
          <meta name="robots" content="index,follow" />
          <meta name="theme-color" content={isDark ? "#0b0b0b" : "#f5f5f4"} />
          <meta property="og:type" content="profile" />
          <meta property="og:site_name" content="devMauriz" />
          <meta property="og:title" content={aboutTitle} />
          <meta property="og:description" content={aboutDesc} />
          <meta property="og:image" content="/assets/avatar-right2.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={aboutTitle} />
          <meta name="twitter:description" content={aboutDesc} />
          <meta name="twitter:image" content="/assets/avatar-right2.png" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
        </Head>
      )}

      <section
        ref={scrollContainerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-title"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className={`fixed inset-0 w-screen h-screen font-azonix z-40 transition-all duration-1000 ease-in-out overflow-y-auto noise-overlay ${
          show ? "translate-y-0" : "translate-y-full"
        } ${isDark ? "dark bg-gray-900 text-white" : "bg-stone-200 text-zinc-800"}`}
      >
        {/* Header (Menu Overlay) */}
        <div
          className={`sticky top-0 z-20 backdrop-blur-lg border-b p-4 ${
            isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"
          }`}
        >
          <div className="max-w-6xl mx-auto px-2 sm:px-4">
            <div className="flex items-center gap-2 sm:gap-3 min-h-[56px] md:min-h-[64px]">
              {/* IZQ: Logo */}
              <div className="flex-1 min-w-0 flex items-center">
                <div className="h-7 md:h-8 flex items-center">
                  <LogoMC />
                </div>
              </div>

              {/* DER (visual derecha→izquierda). Render: CV, IG, FB, WA, GH, LI, X, Toggle */}
              <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
                {/* CV — solo desktop */}
                <a
          href="/cv.pdf"
          download
          aria-label="Descargar CV"
          className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
            isDark
              ? "text-cyan-300 hover:text-cyan-200 bg-white/0 hover:bg-white/5 border-cyan-700/40 hover:border-cyan-700/70"
              : "text-cyan-800 hover:text-cyan-900 bg-white/40 hover:bg-white/60 border-cyan-900/30 hover:border-cyan-900/60"
          }`}
          title="CV"
        >
          <Download size={16} />
          <span className="hidden sm:inline text-xs font-sans font-bold">CV</span>
        </a>

                {/* Instagram — solo desktop */}
                <a
                  href="https://www.instagram.com/devmauriz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-pink-300 hover:text-pink-200 bg-pink-900/40 hover:bg-pink-900/55 border-pink-700/40 hover:border-pink-600/70"
                      : "text-pink-700 hover:text-pink-800 bg-pink-100/70 hover:bg-pink-100 border-pink-900/20 hover:border-pink-900/40"
                  }`}
                  title="Instagram"
                >
                  {/* outline para que no sea bloque sólido */}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                {/* Facebook — solo desktop */}
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
                      : "text-blue-700 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/20 hover:border-blue-900/40"
                  }`}
                  title="Facebook"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                  </svg>
                </a>

                {/* WhatsApp — visible en mobile y desktop */}
                <a
                  href="https://wa.me/56923927777"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-emerald-300 hover:text-emerald-200 bg-emerald-900/40 hover:bg-emerald-900/55 border-emerald-700/40 hover:border-emerald-600/70"
                      : "text-emerald-800 hover:text-emerald-900 bg-emerald-100/70 hover:bg-emerald-100 border-emerald-900/30 hover:border-emerald-900/50"
                  }`}
                >
                  <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z" />
                  </svg>
                </a>

                {/* GitHub — visible en mobile y desktop */}
                <a
                  href="https://github.com/Mauriizio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-zinc-200 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border-zinc-600/50 hover:border-zinc-500/70"
                      : "text-zinc-800 hover:text-black bg-zinc-100/70 hover:bg-zinc-100 border-zinc-900/20 hover:border-zinc-900/40"
                  }`}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                  </svg>
                </a>

                {/* LinkedIn — solo desktop */}
                <a
                  href="https://www.linkedin.com/in/maurizio-caballero-286a56219/?originalSubdomain=cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
                      : "text-blue-800 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/30 hover:border-blue-900/50"
                  }`}
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47C21.4 7.73 24 10 24 14.3V24h-5v-8.6c0-2.05-.04-4.68-2.85-4.68-2.86 0-3.3 2.23-3.3 4.53V24H8V8z" />
                  </svg>
                </a>

                {/* X — ✅ ahora sí vuelve a Section One con scroll y cierra */}
                <button
  type="button"
  onClick={scrollToSectionOne}
  aria-label="Cerrar"
  title="Cerrar"
  className={btnX}
>
  <IconX size={16} />
</button>

                {/* Toggle — extremo derecho */}
                 <button
          type="button"
          onClick={toggleDarkMode}
          aria-label="Cambiar tema"
          aria-pressed={isDark}
          className={`relative shrink-0 inline-flex items-center rounded-full border
                      h-6 w-[2.50rem] min-w-[2.50rem] md:w-min-[2.50rem] md:max-w-[2.50rem]
                      ${isDark ? "bg-cyan-700 border-cyan-400/60 justify-end" : "bg-cyan-200 border-cyan-900/50 justify-start"}
                      shadow-[0_2px_10px_rgba(0,0,0,0.10)] transition-colors duration-200`}
        >
          <span className="h-5 w-5 mx-1 rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,.25)] transition-transform duration-200" />
        </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12 md:space-y-16">
          {/* Intro */}
         
         {/* Intro — portada SVG + avatar superpuesto + datos debajo */}
<div className="relative mb-14 sm:mb-16">
  {/* Portada SVG animada */}
  <div className="relative h-36 sm:h-44 md:h-56 rounded-2xl overflow-hidden">
    <TechCoverSVG dark={isDark} className="absolute inset-0 h-full w-full" />
    {/* Scrim para contraste */}
    <div className={isDark ? "absolute inset-0 bg-black/25" : "absolute inset-0 bg-white/20"} />
  </div>

  {/* Avatar circular montado sobre la portada */}
  <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
    <div
      className={`h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full overflow-hidden ring-4 shadow-xl
        ${isDark ? "ring-gray-900 bg-gray-800" : "ring-white bg-white"}`}
    >
      <img
        src="/assets/perfil.jpg"
        alt="Foto de Maurizio Caballero"
        className="h-full w-full object-cover object-top"
        onError={(e) => { e.currentTarget.src = "/placeholder.svg" }}
      />
    </div>
  </div>
</div>

{/* Datos debajo del avatar */}
<div className="text-center space-y-2 md:space-y-3 pt-2">
  {/* <h1 id="about-title" className="title-main !mb-0">Sobre mí</h1> */}
  <h2 className="title-section !mb-1"> Hola, Soy Maurizio Caballero</h2>

  <p className="text-responsive max-w-3xl mx-auto font-sans leading-relaxed">
    <span className="font-bold">Analista de Sistemas · Desarrollador de Software ·</span><br/>
    Universidad Pedagógica Experimental Libertador · <br/> Instituto Nacional de Capacitación y Educación Socialista (INCES) · <br/>
    Frontend Developer con experiencia en creación de interfaces web atractivas y funcionales.
  </p>

  {/* Extra opcional — borra o ajusta si no lo quieres */}
  <p className="text-sm md:text-base text-zinc-600 dark:text-white/70">
    Santiago, Chile · Disponibilidad: Remoto / Hibrido· Idiomas: Español / Inglés A1
  </p>
</div>

          {/* Tecnologías & Herramientas (chips visibles) */}
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <section className="section-flat">
              <h3 className="title-section text-center">Tecnologías</h3>
              <div className="flex flex-wrap gap-2 md:gap-3 font-sans">
                {technologies.map((t) => (<span key={t} className={chipClass}>{t}</span>))}
              </div>
            </section>
            
            <section className="section-flat">
              <h3 className="title-section text-center">Herramientas</h3>
              <div className="flex flex-wrap gap-2 md:gap-3 font-sans">
                {tools.map((t) => (<span key={t} className={chipClass}>{t}</span>))}
              </div>
            </section>
          </div>

          {/* Experiencia */}
          <section className="section-flat">
            <h3 className="title-section text-center mb-6 md:mb-8"> Experiencia</h3>

            <div className="space-y-6 md:space-y-8 font-sans">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-6 md:pl-7 text-left">
                  {/* línea y punto */}
                  <span className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-cyan-400/70 to-transparent" />
                  <span className="absolute -left-1 top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_0_3px_rgba(34,211,238,0.25)]" />

                  <h4 className="title-subsection !text-left">{exp.title}</h4>
                  <p className="text-cyan-700 dark:text-cyan-300 font-medium mb-2 !text-left">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-responsive !text-left">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Educación */}
          <section className="section-flat">
            <h3 className="title-section text-center"> Educación & Certificaciones</h3>
            <div className="space-y-4 font-sans">
              {education.map((edu, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="title-subsection">{edu.title}</h4>
                    <p className="text-cyan-700 dark:text-cyan-300">{edu.institution}</p>
                  </div>
                  <span className="text-zinc-600 dark:text-white/80 text-sm">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Diplomas – carrusel */}
          <div className="">
            <h3 className="title-section flex items-center gap-2 text-center">
              Mis Diplomas y Cursos
            </h3>

            {/* Wrapper relativo para chevrones y fades */}
            <div className="relative">
              {/* Carrusel horizontal */}
              <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 z-10
                              scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-stone-200">
                {diplomas.map((diploma) => (
                  <div
                    key={diploma.id}
                    className="flex-none w-56 md:w-64 bg-white rounded-lg overflow-hidden shadow-md border border-stone-200
                               hover:scale-105 transition-transform duration-300 cursor-pointer group"
                    onClick={() => openDiplomaModal(diploma)}
                  >
                    <div className="relative">
                      <img
                        src={diploma.image || "/placeholder.svg"}
                        alt={diploma.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-32 md:h-36 object-contain"
                        onError={(e) => { e.currentTarget.src = "/placeholder.svg" }}
                      />
                      {/* Overlay con icono de zoom */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300
                                      flex items-center justify-center">
                        <ZoomIn
                          size={28}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-3 md:p-4">
                      <h4 className="text-xs md:text-lg font-orbitron font-semibold text-zinc-800 line-clamp-3">
                        {diploma.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fades laterales */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-8
                           bg-gradient-to-r from-stone-200 to-transparent
                           dark:from-gray-900 z-20"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 w-8
                           bg-gradient-to-l from-stone-200 to-transparent
                           dark:from-gray-900 z-20"
              />

              {/* Chevrones sutiles */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 z-30
                           text-base md:text-base text-zinc-600/60 dark:text-white/60
                           select-none"
              >
                ‹
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 z-30
                           text-xs md:text-sm text-zinc-600/60 dark:text-white/60
                           select-none"
              >
                ›
              </span>
            </div>

            <p className="text-responsive mt-4 text-center font-orbitron text-sm md:text-base">
              Desliza lateralmente para ver más diplomas.
            </p>
          </div>

          {/* Características */}
          <section className="section-flat">
            <h3 className="title-section text-center"> Lo que me caracteriza</h3>
            <div className="grid md:grid-cols-2 gap-4 font-sans">
              {characteristics.map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-0">
                  <span className="text-xl">{c.icon}</span>
                  <p className="text-responsive">{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Intereses */}
          <section className="section-flat">
            <h3 className="title-section text-center"> Intereses y Pasatiempos</h3>
            <div className="grid md:grid-cols-2 gap-4 font-sans">
              {interests.map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-0">
                  <span className="text-xl">{c.icon}</span>
                  <p className="text-responsive">{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA final — ✅ mismo estilo que Section Two */}
          <div className="text-center py-6 md:py-8">
            <p className="text-responsive mb-4 md:mb-6 font-sans">
              ¿Listo para trabajar juntos en tu próximo proyecto?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="/cv.pdf" download className={ctaBtn}>
                <span className="inline-flex items-center gap-1 text-sm">
                  <Download size={20} />
                  Descargar CV
                </span>
              </a>
              <button onClick={onContactOpen} className={ctaBtn} >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de diplomas */}
      <DiplomaModal />
    </>
  )
}

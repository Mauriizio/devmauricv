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
  ZoomIn
} from "lucide-react"
import { useTheme } from "@/context/ThemeContext"
import LogoMC from "@/components/LogoMC"

export default function SectionAbout({ show, onVolverArriba, onContactOpen }) {
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

  // Btn estilo CV (reutilizado)
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
        {/* Header uniforme (logo izq, acciones der) */}
        <div className={`sticky top-0 backdrop-blur-lg border-b z-20 ${isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"}`}>
          <div className="max-w-6xl mx-auto px-2 sm:px-4">
            <div className="flex items-center gap-2 sm:gap-3 min-h-[56px] md:min-h-[64px]">
              {/* Logo izq */}
              <div className="flex-1 min-w-0 flex items-center">
                <div className="h-7 md:h-8 flex items-center"><LogoMC /></div>
              </div>

              {/* (Sin título en header; el título va en el contenido) */}

              {/* Acciones der */}
              <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
                <button onClick={onVolverArriba} aria-label="Volver" className={btnBase}>
                  <ArrowLeft size={16} />
                </button>
                <button onClick={onContactOpen} aria-label="WhatsApp" className={btnGreen} title="WhatsApp">
                  <MessageCircle size={16} />
                </button>
                <button onClick={toggleDarkMode} aria-label="Cambiar tema" aria-pressed={isDark} className={btnBase}>
                  {isDark ? <Sun size={16} className="fill-current" /> : <Moon size={16} className="fill-current" />}
                </button>
                <button onClick={onVolverArriba} aria-label="Cerrar" className={btnBase}>
                  <IconX size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12 md:space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4 md:space-y-6">
            <h1 id="about-title" className="title-main mb-2">Sobre mí</h1>
            <h2 className="title-section text-center">Maurizio Caballero</h2>
            <ul className="text-intro max-w-4xl mx-auto font-sans space-y-2">
              <li>Desarrollador Frontend especializado en React y Next.js</li>
              <li>Apasionado por crear experiencias web intuitivas y atractivas</li>
              <li>Siempre aprendiendo y explorando nuevas tecnologías</li>
            </ul>
          </div>

          {/* Tecnologías & Herramientas (chips visibles) */}
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <section className="section-flat">
              <h3 className="title-section text-center">🚀 Tecnologías</h3>
              <div className="flex flex-wrap gap-2 md:gap-3 font-sans">
                {technologies.map((t) => (<span key={t} className={chipClass}>{t}</span>))}
              </div>
            </section>
            <section className="section-flat">
              <h3 className="title-section text-center">🛠️ Herramientas</h3>
              <div className="flex flex-wrap gap-2 md:gap-3 font-sans">
                {tools.map((t) => (<span key={t} className={chipClass}>{t}</span>))}
              </div>
            </section>
          </div>

          {/* Experiencia (timeline a la izquierda, con adornos) */}
          <section className="section-flat">
  <h3 className="title-section text-center mb-6 md:mb-8">💼 Experiencia</h3>

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
            <h3 className="title-section text-center">🎓 Educación & Certificaciones</h3>
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

          {/* Diplomas – fuera de caja, carrusel horizontal con chevrón */}
          {/* Diplomas: AQUÍ SÍ CAJA (mantener visual, modal ya existe) */}
         <div className="">
  <h3 className="title-section flex items-center gap-2 text-center">
    <span>📜</span> Mis Diplomas y Cursos
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

    {/* Fades laterales (pista de desplazamiento) */}
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
            <h3 className="title-section text-center">⚡ Lo que me caracteriza</h3>
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
            <h3 className="title-section text-center">🎮 Intereses y Pasatiempos</h3>
            <div className="grid md:grid-cols-2 gap-4 font-sans">
              {interests.map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-0">
                  <span className="text-xl">{c.icon}</span>
                  <p className="text-responsive">{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <div className="text-center py-6 md:py-8">
            <p className="text-responsive mb-4 md:mb-6 font-sans">
              ¿Listo para trabajar juntos en tu próximo proyecto?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Descargar CV</button>
              <button onClick={onContactOpen} className="btn-secondary">Contactar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de diplomas */}
      <DiplomaModal />
    </>
  )
}

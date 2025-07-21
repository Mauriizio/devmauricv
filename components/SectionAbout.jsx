"use client"

import { useState, useEffect, useRef } from "react"
import { X, ZoomIn } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export default function SectionAbout({ show, onVolverArriba, onContactOpen }) {
  const { isDark, toggleDarkMode } = useTheme()
  const [selectedDiploma, setSelectedDiploma] = useState(null)

  // Referencia al contenedor scrolleable
  const scrollContainerRef = useRef(null)

  // Reset scroll cuando se abre el componente
  useEffect(() => {
    if (show && scrollContainerRef.current) {
      // Reset inmediato del scroll del contenedor
      scrollContainerRef.current.scrollTop = 0
    }
  }, [show])

  // Datos optimizados
  const diplomas = [
    {
      id: 1,
      title:
        "Iniciación a HTML, CSS y JavaScript - Centro de Desarrollo de Competencias Digitales de Castilla-La Mancha.",
      image: "/certificados/n1Certificado_Iniciacin_a_HTML_CSS_y_JavaScript.jpg",
    },
    {
      id: 2,
      title: "Fundamentos de Ingeniería de Software - Platzi Academy",
      image: "/certificados/n2diploma-ingenieria.jpg",
    },
    {
      id: 3,
      title: "Diseño y Programacion Web – AIEP / Fundación Telefonica Movistar / SENCE",
      image: "/certificados/n3.jpg",
    },
    {
      id: 4,
      title: "Programacion con JavaScript– AIEP / Fundación Telefonica Movistar / SENCE",
      image: "/certificados/n4.jpg",
    },
    {
      id: 5,
      title: "Diseño Web con HTML5+CSS– AIEP / Fundación Telefonica Movistar / SENCE",
      image: "/certificados/n5.jpg",
    },
    { id: 6, title: "Fundamentos de CyberSeguridad / Coursera Google", image: "/certificados/n6.jpg" },
  ]

  const technologies = [
    "React.js",
    "Next.js",
    "JavaScript ES6+",
    "TypeScript",
    "Tailwind CSS",
    "HTML5 & CSS3",
    "Framer Motion",
    "React Hooks",
  ]
  const tools = ["Git & GitHub", "VS Code", "Figma", "Cubase", "Deploy", "Chrome DevTools", "Google ADS", "GIMP"]

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
    {
      title: "Desarrollo Web Frontend",
      institution: "Autodidacta • Diversos Cursos Online",
      period: "2020 - Presente",
    },
    {
      title: "Octavo Semestre aprobados en Pedagogia en Lenguaje",
      institution: "Universidad Pedagogica Experimental Libertador UPEL",
      period: "2013-2016",
    },
    {
      title: "Técnico en Mantenimiento de Equipos Informáticos",
      institution: "Instituto Nacional de Capacitación y Educación INCE",
      period: "2010-2013",
    },
  ]

  const openDiplomaModal = (diploma) => {
    setSelectedDiploma(diploma)
  }

  const closeDiplomaModal = () => {
    setSelectedDiploma(null)
  }

  // Componentes auxiliares
  const TagList = ({ items, className }) => (
    <div className="flex flex-wrap gap-2 md:gap-3 font-sans">
      {items.map((item) => (
        <div key={item} className={className}>
          {item}
        </div>
      ))}
    </div>
  )

  const FeatureGrid = ({ items }) => (
    <div className="grid md:grid-cols-2 gap-4 font-sans text-responsive text-zinc-600">
      {items.map((item, index) => (
        <div key={index} className="feature-item">
          <span className="text-xl">{item.icon}</span>
          <p className="text-zinc-700">{item.text}</p>
        </div>
      ))}
    </div>
  )

  // Modal para diplomas
  const DiplomaModal = () => {
    if (!selectedDiploma) return null

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onClick={closeDiplomaModal}
      >
        <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
          {/* Botón cerrar */}
          <button
            onClick={closeDiplomaModal}
            className={`absolute -top-12 right-0 p-2 rounded-full transition-colors z-10 ${
              isDark ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-white hover:bg-gray-100 text-gray-800"
            }`}
          >
            <X size={24} />
          </button>

          {/* Imagen */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <img
              src={selectedDiploma.image || "/placeholder.svg"}
              alt={selectedDiploma.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Título */}
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
      <section
        ref={scrollContainerRef}
        className={`fixed inset-0 w-screen h-screen font-azonix z-40 transition-all duration-1000 ease-in-out overflow-y-auto noise-overlay ${
          show ? "transform translate-y-0" : "transform translate-y-full"
        } ${isDark ? "dark bg-gray-900 text-white" : "bg-stone-200 text-zinc-800"}`}
      >
        {/* Header */}
        <div
          className={`sticky top-0 backdrop-blur-lg border-b p-4 z-20 ${
            isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"
          }`}
        >
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <h1 className="title-section mb-0">Sobre mí</h1>
            <div className="flex items-center gap-3">
              <button onClick={toggleDarkMode} className="btn-toggle">
                {isDark ? "☀️" : "🌙"}
              </button>
              <button onClick={onVolverArriba} className="btn-primary">
                <span className="text-xl">←</span> Volver
              </button>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="relative max-w-6xl mx-auto p-4 md:p-6 space-y-12 md:space-y-16 z-10">
          {/* Introducción */}
          <div className="text-center space-y-4 md:space-y-6 py-6 md:py-8">
            <h2 className="title-main mb-4">Maurizio Caballero</h2>
            <ul className="text-intro max-w-4xl mx-auto font-sans space-y-2">
              <li>Desarrollador Frontend especializado en React y Next.js</li>
              <li>Apasionado por crear experiencias web intuitivas y atractivas</li>
              <li>Siempre aprendiendo y explorando nuevas tecnologías</li>
            </ul>
          </div>

          <div className="space-y-12 md:space-y-16">
            {/* Habilidades y Herramientas */}
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              <div className="card-primary">
                <h3 className="title-section flex items-center gap-3">
                  <span className="text-2xl md:text-4xl">🚀</span> Tecnologías
                </h3>
                <TagList items={technologies} className="tag-tech" />
              </div>

              <div className="card-primary">
                <h3 className="title-section flex items-center gap-3">
                  <span className="text-2xl md:text-3xl">🛠️</span> Herramientas
                </h3>
                <TagList items={tools} className="tag-tool" />
              </div>
            </div>

            {/* Experiencia */}
            <div className="card-primary">
              <h3 className="title-section flex items-center gap-3 mb-6 md:mb-8">
                <span className="text-2xl md:text-4xl">💼</span> Experiencia
              </h3>
              <div className="space-y-6 md:space-y-8 font-sans">
                {experiences.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <h4 className="title-subsection">{exp.title}</h4>
                    <p className="text-cyan-700 font-medium mb-2">
                      {exp.company} • {exp.period}
                    </p>
                    <p className="text-responsive text-zinc-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Educación */}
            <div className="card-primary">
              <h3 className="title-section flex items-center gap-2">
                <span>🎓</span> Educación & Certificaciones
              </h3>
              <div className="space-y-4 font-sans">
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="title-subsection">{edu.title}</h4>
                      <p className="text-cyan-700">{edu.institution}</p>
                    </div>
                    <span className="text-zinc-500 text-sm">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diplomas - CON MODAL */}
            <div className="card-secondary">
              <h3 className="title-section flex items-center gap-2">
                <span>📜</span> Mis Diplomas y Cursos
              </h3>
              <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-stone-200">
                {diplomas.map((diploma) => (
                  <div
                    key={diploma.id}
                    className="flex-none w-56 md:w-64 bg-white rounded-lg overflow-hidden shadow-md border border-stone-200 hover:scale-105 transition-transform duration-300 cursor-pointer group"
                    onClick={() => openDiplomaModal(diploma)}
                  >
                    <div className="relative">
                      <img
                        src={diploma.image || "/placeholder.svg"}
                        alt={diploma.title}
                        className="w-full h-32 md:h-36 object-contain"
                      />
                      {/* Overlay con icono de zoom */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn
                          size={32}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-3 md:p-4">
                      <h4 className="text-sm md:text-lg font-semibold text-zinc-800 font-sans line-clamp-3">
                        {diploma.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-zinc-600 mt-4 text-center font-sans text-sm md:text-base">
                Haz clic en cualquier diploma para verlo en grande.
              </p>
            </div>

            {/* Características */}
            <div className="card-primary">
              <h3 className="title-section flex items-center gap-2">
                <span>⚡</span> Lo que me caracteriza
              </h3>
              <FeatureGrid items={characteristics} />
            </div>

            {/* Intereses */}
            <div className="card-primary">
              <h3 className="title-section flex items-center gap-2">
                <span>🎮</span> Intereses y Pasatiempos
              </h3>
              <FeatureGrid items={interests} />
            </div>

            {/* Mi Filosofía */}
            <div className="card-secondary">
              <h3 className="title-section flex items-center gap-2">
                <span>💡</span> Mi Filosofía
              </h3>
              <div className="card-primary">
                <p className="font-sans text-responsive text-zinc-600">
                  Creo firmemente que la tecnología debe ser una herramienta que mejore la vida de las personas. Mi
                  enfoque siempre está en crear soluciones que no solo funcionen bien técnicamente, sino que también
                  proporcionen una experiencia excepcional al usuario. La simplicidad y la elegancia en el código se
                  traducen en productos más mantenibles y escalables.
                </p>
              </div>
            </div>

            {/* Call to action final */}
            <div className="text-center py-6 md:py-8">
              <p className="text-responsive text-zinc-600 mb-4 md:mb-6 font-sans">
                ¿Listo para trabajar juntos en tu próximo proyecto?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">Descargar CV</button>
                <button onClick={onContactOpen} className="btn-secondary">
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de diplomas */}
      <DiplomaModal />
    </>
  )
}

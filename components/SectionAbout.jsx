"use client"

export default function SectionAbout({ show, onVolverArriba, onContactOpen }) {
  // Datos de ejemplo para diplomas (sin cambios)
  const diplomas = [
    {
      id: 1,
      title:
        "Iniciación a HTML, CSS y JavaScript  Centro de Desarrollo de Competencias Digitales de Castilla-La Mancha.",
      image: "/certificados/n1Certificado_Iniciacin_a_HTML_CSS_y_JavaScript.jpg",
    },
    {
      id: 2,
      title: "Fundamentos de Ingeniería de Software  Platzi Academy",
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

  return (
    <section
      className={`fixed inset-0 w-screen h-screen bg-stone-200 text-zinc-800 font-azonix z-40 transition-transform duration-1000 ease-in-out overflow-y-auto noise-overlay ${
        show ? "transform translate-y-0" : "transform translate-y-full"
      }`}
    >
      {/* Header con botón de volver */}
      <div className="sticky top-0 bg-stone-200/60 backdrop-blur-lg border-b border-stone-300/50 p-4 z-20">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-600">Sobre mí</h1>
          <button
            onClick={onVolverArriba}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span className="text-xl">←</span> Volver
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-6xl mx-auto p-6 space-y-16 z-10">
        {/* Introducción con texto más grande */}
        <div className="text-center space-y-6 py-8">
          <h2 className="text-5xl md:text-6xl font-bold text-cyan-600 mb-4">Maurizio Caballero</h2>
          <ul className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-4xl mx-auto font-sans">
            <li>Desarrollador Frontend especializado en React y Next.js</li>
            <li>Apasionado por crear experiencias web intuitivas y atractivas</li>
            <li>Siempre aprendiendo y explorando nuevas tecnologías</li>
          </ul>
        </div>

        {/* Secciones en tarjetas */}
        <div className="space-y-16">
          {/* Habilidades y Herramientas - CORREGIDO */}
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            <div className="bg-white w-full p-8 rounded-2xl border border-black/5 shadow-xl">
              <h3 className="text-3xl font-bold text-cyan-600 mb-6 flex items-center gap-3">
                <span className="text-4xl">🚀</span> Tecnologías
              </h3>

              <div className="flex flex-wrap gap-3 font-sans">
                {[
                  "React.js",
                  "Next.js",
                  "JavaScript ES6+",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML5 & CSS3",
                  "Framer Motion",
                  "React Hooks",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-cyan-50 text-cyan-900 px-4 py-1.5 rounded-full text-base font-medium border border-cyan-200/80"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xl">
              <h3 className="text-3xl font-bold text-cyan-600 mb-6 flex items-center gap-3">
                <span className="text-3xl">🛠️</span> Herramientas
              </h3>
              <div className="flex flex-wrap gap-3 font-sans">
                {["Git & GitHub", "VS Code", "Figma", "Cubase", "Deploy", "Chrome DevTools", "Google ADS", "GIMP"].map(
                  (tool) => (
                    <div
                      key={tool}
                      className="bg-stone-100 text-stone-800 px-4 py-1.5 rounded-full text-base font-medium border border-stone-200/90"
                    >
                      {tool}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Experiencia */}
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xl">
            <h3 className="text-3xl font-bold text-cyan-600 mb-8 flex items-center gap-3">
              <span className="text-4xl">💼</span> Experiencia
            </h3>

            <div className="space-y-8 font-sans">
              <div className="border-l-4 border-cyan-500/70 pl-6">
                <h4 className="text-2xl font-semibold text-zinc-900">Frontend Developer</h4>
                <p className="text-cyan-700 font-medium mb-2">Proyectos Freelance • 2023 - Presente</p>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Desarrollo de aplicaciones web modernas con React y Next.js. Implementación de interfaces responsivas
                  y optimización de rendimiento.
                </p>
              </div>

              <div className="border-l-4 border-cyan-500/70 pl-6">
                <h4 className="text-2xl font-semibold text-zinc-900">Desarrollador Web - Freelance</h4>
                <p className="text-cyan-700 font-medium mb-2">Proyectos Personales • 2022 - Presente</p>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Creación de portfolios interactivos, landing pages y aplicaciones web con enfoque en UX/UI y
                  tecnologías modernas. Sitios web para resolver problemas específicos de clientes.
                </p>
              </div>

              <div className="border-l-4 border-cyan-500/70 pl-6">
                <h4 className="text-2xl font-semibold text-zinc-900">Técnico de Software & Producción Digital</h4>
                <p className="text-cyan-700 font-medium mb-2">
                  Litocopias.com (El Vigía, Mérida - Venezuela) • 2012 - 2016
                </p>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Instalación y configuración de sistemas operativos (Windows), drivers y software especializado.
                  Soporte técnico a usuarios, mantenimiento de equipos y optimización de rendimiento. Diseño de piezas
                  gráficas en Illustrator y edición de documentos académicos. Asesoría universitaria con aplicación de
                  normas APA y corrección de estilo. Servicios integrales de impresión, digitalización y gestión de
                  archivos.
                </p>
              </div>

              <div className="border-l-4 border-cyan-500/70 pl-6">
                <h4 className="text-2xl font-semibold text-zinc-900">
                  Técnico de Sistemas Informáticos con enfoque en entornos creativos y digitales
                </h4>
                <p className="text-cyan-700 font-medium mb-2"> TDH Studios - Mérida, Venezuela • 2010-2012</p>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Mantenimiento y soporte de sistemas informáticos. Participación en proyectos de diseño gráfico y
                  producción audiovisual. Colaboración en soluciones técnicas para entornos creativos y digitales..
                </p>
              </div>
            </div>
          </div>

          {/* Educación */}
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xl">
            <h3 className="text-3xl font-bold text-cyan-600 mb-6 flex items-center gap-2">
              <span>🎓</span> Educación & Certificaciones
            </h3>
            <div className="space-y-4 font-sans">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-2xl font-semibold text-zinc-800">Desarrollo Web Frontend</h4>
                  <p className="text-cyan-700">Autodidacta • Diversos Cursos Online</p>
                </div>
                <span className="text-zinc-500 text-sm">2020 - Presente</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-2xl font-semibold text-zinc-800">
                    Octavo Semestre aprobados en <strong>Pedagogia en Lenguaje</strong>
                  </h4>
                  <p className="text-cyan-700">Universidad Pedagogica Experimental Libertador UPEL</p>
                </div>
                <span className="text-zinc-500 text-sm">2013-2016</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-2xl font-semibold text-zinc-800">
                    Técnico en Mantenimiento de Equipos Informáticos
                  </h4>
                  <p className="text-cyan-700">Instituto Nacional de Capacitación y Educación INCE</p>
                </div>
                <span className="text-zinc-500 text-sm">2010-2013</span>
              </div>
            </div>
          </div>

          {/* Diplomas */}
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-3xl font-bold text-cyan-600 mb-6 flex items-center gap-2">
              <span>📜</span> Mis Diplomas y Cursos
            </h3>
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-stone-200">
              {diplomas.map((diploma) => (
                <div
                  key={diploma.id}
                  className="flex-none w-64 bg-white rounded-lg overflow-hidden shadow-md border border-stone-200 hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={diploma.image || "/placeholder.svg"}
                    alt={diploma.title}
                    className="w-full h-36 object-contain"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-zinc-800 font-sans">{diploma.title}</h4>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-zinc-600 mt-4 text-center font-sans">
              Desliza para ver más de mis certificaciones y logros.
            </p>
          </div>

          {/* Características, Intereses y Filosofía */}
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xl">
            <h3 className="text-3xl font-bold text-cyan-600 mb-6 flex items-center gap-2">
              <span>⚡</span> Lo que me caracteriza
            </h3>
            <div className="grid md:grid-cols-2 gap-4 font-sans  text-zinc-600 text-lg leading-relaxed">
              {[
                { icon: "🔧", text: "Adaptación rápida a nuevas herramientas y entornos" },
                { icon: "🚀", text: "Proactivo para aprender, proponer y ejecutar soluciones" },
                { icon: "🧠", text: "Aprovecho la IA para ser más eficiente sin depender de ella" },
                { icon: "🎯", text: "Enfocado en resultados reales y productividad sostenible" },
                { icon: "🤝", text: "Trabajo bien en equipo y asumo liderazgo cuando hace falta" },
                { icon: "🛠️", text: "Resuelvo problemas con criterio técnico y pensamiento estratégico" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-stone-200/60 rounded-lg">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-zinc-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Características, Intereses y Filosofía */}
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xl">
            <h3 className="text-3xl font-bold text-cyan-600 mb-6 flex items-center gap-2">
              <span>🎮</span> Intereses y Pasatiempos
            </h3>
            <div className="grid md:grid-cols-2 gap-4 font-sans  text-zinc-600 text-lg leading-relaxed">
              {[
                { icon: "👪", text: "Tiempo de calidad con mi familia" },
                { icon: "🏍️", text: "Salir a motoquear a la periferia." },
                { icon: "💪", text: "Ir al Gym o hacer deporte. Me gusta el Baseball, Team MLB Atlanta Braves." },
                { icon: "🎞️", text: "Me gusta ver series y peliculas de historias basadas en hechos reales." },
                { icon: "🎤", text: "Me apasiona la musica, a veces puedo rapear bien." },
                {
                  icon: "🗣️",
                  text: "Me gustan las conversaciones profundas con personas cultas sobre temas como historia, geopolitica, religiones, el bien el mal, etc",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-stone-200/60 rounded-lg">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-zinc-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mi Filosofía - CORREGIDO */}
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-3xl font-bold text-cyan-600 mb-6 flex items-center gap-2">
              <span>💡</span> Mi Filosofía
            </h3>
            <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xl">
              <p className="font-sans text-zinc-600 text-lg leading-relaxed">
                Creo firmemente que la tecnología debe ser una herramienta que mejore la vida de las personas. Mi
                enfoque siempre está en crear soluciones que no solo funcionen bien técnicamente, sino que también
                proporcionen una experiencia excepcional al usuario. La simplicidad y la elegancia en el código se
                traducen en productos más mantenibles y escalables.
              </p>
            </div>
          </div>

          {/* Call to action final */}
          <div className="text-center py-8">
            <p className="text-xl text-zinc-600 mb-6 font-sans">¿Listo para trabajar juntos en tu próximo proyecto?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-300 hover:scale-105">
                Descargar CV
              </button>
              <button
                onClick={onContactOpen}
                className="bg-transparent border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transition-all duration-300"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

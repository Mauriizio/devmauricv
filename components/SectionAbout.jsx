"use client"

export default function SectionAbout({ show, onVolverArriba, onContactOpen }) {
  // Datos de ejemplo para diplomas (puedes reemplazar con tus propias imágenes)
  const diplomas = [
    { id: 1, title: "Iniciación a HTML, CSS y JavaScript  Centro de Desarrollo de Competencias Digitales de Castilla-La Mancha.", image: "/certificados/n1Certificado_Iniciacin_a_HTML_CSS_y_JavaScript.jpg" },
    { id: 2, title: "Fundamentos de Ingeniería de Software  Platzi Academy", image: "/certificados/n2diploma-ingenieria.jpg" },
    { id: 3, title: "Diseño y Programacion Web – AIEP / Fundación Telefonica Movistar / SENCE", image: "/certificados/n3.jpg" },
    { id: 4, title: "Programacion con JavaScript– AIEP / Fundación Telefonica Movistar / SENCE", image: "/certificados/n4.jpg" },
    { id: 5, title: "Diseño Web con HTML5+CSS– AIEP / Fundación Telefonica Movistar / SENCE", image: "/certificados/n5.jpg" },
    { id: 6, title: "Fundamentos de CyberSeguridad / Coursera Google", image: "/certificados/n6.jpg" },
  ]

  return (
    <section
      className={`fixed inset-0 w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white font-azonix z-40 transition-transform duration-1000 ease-in-out overflow-y-auto ${
        show ? "transform translate-y-0" : "transform translate-y-full"
      }`}
    >
      {/* Header con botón de volver */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-sm border-b border-cyan-400/20 p-4 z-10">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">Sobre mí</h1>
          <button
            onClick={onVolverArriba}
            className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
          >
            <span>←</span> Volver
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Introducción */}
        <div className="text-center space-y-6 py-8">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">Maurizio Caballero</h2>
          <ul className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-sans">
            <li>Desarrollador Frontend especializado en React y Next.js</li>
            <li>Apasionado por crear experiencias web intuitivas y atractivas</li>
            <li>Siempre aprendiendo y explorando nuevas tecnologías</li>
          </ul>
        </div>

        {/* Habilidades Técnicas */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span>🚀</span> Tecnologías Frontend
            </h3>
            <div className="grid grid-cols-2 gap-3 font-sans">
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
                <div key={tech} className="bg-cyan-400/10 px-3 py-2 rounded-lg text-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span>🛠️</span> Herramientas & Otros
            </h3>
            <div className="grid grid-cols-2 gap-3 font-sans">
              {["Git & GitHub", "VS Code", "Figma", "Cubase", "Deploy", "Chrome DevTools", "Google ADS", "GIMP"].map(
                (tool) => (
                  <div key={tool} className="bg-cyan-400/10 px-3 py-2 rounded-lg text-sm">
                    {tool}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Experiencia */}
<div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">

  <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
    <span>💼</span> Experiencia & Proyectos
  </h3>

  <div className="space-y-6 font-sans">

    <div className="border-l-2 border-cyan-400 pl-4">
      <h4 className="text-xl font-semibold text-white">Frontend Developer</h4>
      <p className="text-cyan-400 mb-2">Proyectos Freelance • 2023 - Presente</p>
      <p className="text-white/80">
        Desarrollo de aplicaciones web modernas con React y Next.js. Implementación de interfaces responsivas y
        optimización de rendimiento.
      </p>
    </div>

    <div className="border-l-2 border-cyan-400 pl-4">
      <h4 className="text-xl font-semibold text-white">Desarrollador Web - Freelance</h4>
      <p className="text-cyan-400 mb-2">Proyectos Personales • 2022 - Presente</p>
      <p className="text-white/80">
        Creación de portfolios interactivos, landing pages y aplicaciones web con enfoque en UX/UI y tecnologías
        modernas. Sitios web para resolver problemas específicos de clientes.
      </p>
    </div>


    <div className="border-l-2 border-cyan-400 pl-4">
      <h4 className="text-xl font-semibold text-white">Técnico de Software & Producción Digital</h4>
      <p className="text-cyan-400 mb-2">Litocopias.com (El Vigía, Mérida - Venezuela) • 2012 - 2016</p>
      <p className="text-white/80">
        Instalación y configuración de sistemas operativos (Windows), drivers y software especializado. Soporte técnico a usuarios,
        mantenimiento de equipos y optimización de rendimiento. Diseño de piezas gráficas en Illustrator y edición de documentos académicos.
        Asesoría universitaria creacion de ensayos redaccion de trabajos universitarios con aplicación de normas APA y corrección de estilo. Servicios integrales de impresión, digitalización y gestión de archivos.
      </p>
    </div>

    
    <div className="border-l-2 border-cyan-400 pl-4">
      <h4 className="text-xl font-semibold text-white">TDH Studios</h4>
      <p className="text-cyan-400 mb-2">Mérida, Venezuela • 2010-2012</p>
      <p className="text-white/80">
        Mantenimiento y soporte de sistemas informáticos. Participación en proyectos de diseño gráfico y producción audiovisual.
        Colaboración en soluciones técnicas para entornos creativos y digitales.
      </p>
    </div>

  </div>
</div>


        {/* Educación */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <span>🎓</span> Educación & Certificaciones
          </h3>
          <div className="space-y-4 font-sans">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">Desarrollo Web Frontend</h4>
                <p className="text-cyan-400">Autodidacta • Cursos Online</p>
              </div>
              <span className="text-white/60 text-sm">2020 - Presente</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">(8 Semestres aprobados en <strong>Pedagogia en Lenguaje </strong>con enfoque autodidacta a la computacion)</h4>
                <p className="text-cyan-400">Universidad Pedagogica Experimental Libertador UPEL</p>
              </div>
              <span className="text-white/60 text-sm">2013-2016</span>
            </div>
            
          </div>
        </div>

        {/* Sección de Diplomas y Cursos (NUEVA) */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <span>📜</span> Mis Diplomas y Cursos
          </h3>
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-800">
            {diplomas.map((diploma) => (
              <div
                key={diploma.id}
                className="flex-none w-64 bg-black/40 rounded-lg overflow-hidden shadow-lg border border-cyan-400/20 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={diploma.image || "/placeholder.svg"}
                  alt={diploma.title}
                  className="w-full h-36 object-contain"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white font-sans">{diploma.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/80 mt-4 text-center font-sans">
            Desliza para ver más de mis certificaciones y logros.
          </p>
        </div>

        {/* Características personales */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <span>⚡</span> Lo que me caracteriza
          </h3>
          <div className="grid md:grid-cols-2 gap-4 font-sans">
            {[
              { icon: "🔧", text: "Adaptación rápida a nuevas herramientas y entornos" },
              { icon: "🚀", text: "Proactivo para aprender, proponer y ejecutar soluciones" },
              { icon: "🧠", text: "Aprovecho la IA para ser más eficiente sin depender de ella" },
              { icon: "🎯", text: "Enfocado en resultados reales y productividad sostenible" },
              { icon: "🤝", text: "Trabajo bien en equipo y asumo liderazgo cuando hace falta" },
              { icon: "🛠️", text: "Resuelvo problemas con criterio técnico y pensamiento estratégico" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-cyan-400/5 rounded-lg">
                <span className="text-xl">{item.icon}</span>
                <p className="text-white/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Intereses y Pasatiempos (NUEVA) */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <span>🎮</span> Intereses y Pasatiempos
          </h3>
          <p className="text-lg text-white/90 leading-relaxed mb-4 font-sans">
            Fuera del código, me encanta escribir. Tengo una libreta llena de letras, me gusta experimentar con la musica. En mis ratos libres es posible que juegue una buena partida de AOE2, o cualquier juego de estrategia, También disfruto de la fotografía y la naturaleza, mi pasion es ir a la montaña, acampar y explorar nuevos lugares. Siempre estoy buscando
            nuevas formas de inspirarme y recargar energías para mis proyectos.
          </p>
          <div className="flex items-center gap-3 font-sans">
            <span className="text-xl text-cyan-400">🎵</span>
            <a
              href="https://www.youtube.com/channel/UCKez-YgBAW7-XH1riPoxHog" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline transition-colors duration-300"
            >
              Escucha mi música en Youtube
            </a>
          </div>
        </div>

        {/* Filosofía Personal (NUEVA) */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <span>💡</span> Mi Filosofía
          </h3>
          <p className="text-lg text-white/90 leading-relaxed font-sans">
            Creo firmemente que la tecnología debe ser una herramienta para mejorar nuestras vidas y resolver problemas reales. Me esfuerzo por crear soluciones que no solo sean funcionales, sino también accesibles y sostenibles. La colaboración y el aprendizaje continuo son pilares fundamentales en mi enfoque profesional, siempre buscando crecer y aportar valor a cada proyecto.

          </p>
        </div>

        {/* Call to action final */}
        <div className="text-center py-8">
          <p className="text-xl text-white/80 mb-6 font-sans">¿Listo para trabajar juntos en tu próximo proyecto?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 hover:scale-105">
              Descargar CV
            </button>
            <button
              onClick={onContactOpen}
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

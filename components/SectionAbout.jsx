"use client"

export default function SectionAbout({ show, onVolverArriba, onContactOpen}) {
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
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Frontend Developer apasionado por crear experiencias digitales excepcionales. Combino creatividad técnica
            con pensamiento estratégico para resolver problemas complejos.
          </p>
        </div>

        {/* Habilidades Técnicas */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span>🚀</span> Tecnologías Frontend
            </h3>
            <div className="grid grid-cols-2 gap-3">
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
            <div className="grid grid-cols-2 gap-3">
              {["Git & GitHub", "VS Code", "Figma", "Cubase", "Vercel", "Netlify", "NPM/Yarn", "Chrome DevTools"].map(
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
          <div className="space-y-6">
            <div className="border-l-2 border-cyan-400 pl-4">
              <h4 className="text-xl font-semibold text-white">Frontend Developer</h4>
              <p className="text-cyan-400 mb-2">Proyectos Freelance • 2023 - Presente</p>
              <p className="text-white/80">
                Desarrollo de aplicaciones web modernas con React y Next.js. Implementación de interfaces responsivas y
                optimización de rendimiento.
              </p>
            </div>
            <div className="border-l-2 border-cyan-400 pl-4">
              <h4 className="text-xl font-semibold text-white">Desarrollador Web</h4>
              <p className="text-cyan-400 mb-2">Proyectos Personales • 2022 - Presente</p>
              <p className="text-white/80">
                Creación de portfolios interactivos, landing pages y aplicaciones web con enfoque en UX/UI y tecnologías
                modernas.
              </p>
            </div>
          </div>
        </div>

        {/* Educación */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <span>🎓</span> Educación & Certificaciones
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">Desarrollo Web Frontend</h4>
                <p className="text-cyan-400">Autodidacta • Cursos Online</p>
              </div>
              <span className="text-white/60 text-sm">2022 - Presente</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">JavaScript & React</h4>
                <p className="text-cyan-400">Platafomas Educativas</p>
              </div>
              <span className="text-white/60 text-sm">2023</span>
            </div>
          </div>
        </div>

        {/* Características personales */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <span>⚡</span> Lo que me caracteriza
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
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

        {/* Call to action final */}
        <div className="text-center py-8">
          <p className="text-xl text-white/80 mb-6">¿Listo para trabajar juntos en tu próximo proyecto?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 hover:scale-105">
              Descargar CV
            </button>
            <button onClick={onContactOpen}className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section> 
  )
}

"use client"

export default function ProjectDetail({ show, project, onClose, onBackToProjects }) {
  if (!project) return null

  

  return (
    <section
      className={`fixed inset-0 w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white font-azonix z-50 transition-transform duration-1000 ease-in-out overflow-y-auto overflow-x-hidden ${
        show ? "transform translate-y-0" : "transform translate-y-full"
      }`}
    >
      {/* Header con título y botones debajo */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-sm border-b border-cyan-400/20 p-4 z-10 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 text-center">{project.title}</h1>
          <div className="flex gap-3 justify-center">
            <button
              onClick={onBackToProjects}
              className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <span>←</span> Proyectos
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <span>✕</span> Cerrar
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto p-6 space-y-8 overflow-x-hidden py-10">
        {/* Imagen principal del proyecto */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-cyan-400/20 shadow-lg">
          <img
            src={project.image || "/placeholder.svg?height=400&width=800"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Descripción principal */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20 shadow-lg">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <span>📋</span> Descripción del Proyecto
          </h2>
          <p className="text-lg text-white/90 leading-relaxed ">{project.description}</p>
        </div>

        {/* Tecnologías utilizadas */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20 shadow-lg">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <span>🛠️</span> Tecnologías Utilizadas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {project.technologies?.map((tech, index) => (
              <div
                key={index}
                className="bg-cyan-400/10 px-4 py-2 rounded-lg text-center font-semibold text-cyan-200 hover:bg-cyan-400/20 transition-all duration-300 border border-cyan-400/20"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Retos y soluciones */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20 shadow-lg">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <span>⚡</span> Retos y Soluciones
          </h3>
          <p className="text-lg text-white/90 leading-relaxed">{project.challenges}</p>
        </div>

        {/* Características destacadas */}
        {project.features && (
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20 shadow-lg">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span>✨</span> Características Destacadas
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-cyan-400/5 rounded-lg border border-cyan-400/10"
                >
                  <span className="text-cyan-400 font-bold">•</span>
                  <p className="text-white/90">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center py-8">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-md"
            >
              <span>📂</span> Ver Código en GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-md"
            >
              <span>🌐</span> Ver Proyecto en Vivo
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

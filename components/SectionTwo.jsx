import ParticlesBackground from "@/components/ParticlesBackground";

export default function SectionTwo() {
  return (

    
    <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">
       {/* Partículas de fondo */}
     
      {/* Imagen fondo lado izquierdo */}
      <div className="bg-black/70 absolute inset-0 z-10 p-0 overflow-hidden">
         <ParticlesBackground />
        <img
          src="/assets/avatar-left2.png"
          alt="Avatar mitad"
          className="absolute top-0 right-0 h-full w-auto object-contain scale-[1.7] origin-right z-30"
        />
      </div>

      {/* Fondo negro con opacidad */}
      <div className="absolute inset-0 z-0 bg-black opacity-80" />

     

      {/* Contenido principal */}
      <div className="relative z-20 w-full h-full flex items-start justify-start pl-5 pr-10 pt-5">
        <div className="flex flex-col items-start gap-8 text-left font-azonix">

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-black text-cyan-400 leading-tight drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]">
            ¡Hola! Soy <br />
            <span className="bg-cyan-200 text-black px-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]">
              Maurizio Caballero
            </span>, <br />
            Frontend Developer 
          </h1>

          {/* Descripción adicional */}
         <ul className="text-white/90 text-l md:text-xl space-y-2 bg-black/30 dark:bg-white/10 backdrop-blur-sm p-4 rounded-md leading-relaxed max-w-3xl drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]">
  <li>🔧 Me adapto rápido a nuevas herramientas y entornos.</li>
  <li>🚀 Proactivo para aprender, proponer y ejecutar soluciones.</li>
  <li>🧠 Aprovecho la IA para ser más eficiente, sin depender ciegamente de ella.</li>
  <li>🎯 Enfocado en resultados reales y productividad sostenible.</li>
  <li>🤝 Trabajo bien en equipo y asumo liderazgo cuando hace falta.</li>
  <li>🛠️ Resuelvo problemas con criterio técnico y pensamiento estratégico.</li>
</ul>





          {/* Botones / acciones */}
          <div className="flex gap-6 mt-0">
            <button className="bg-black border border-white text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-cyan-500 transition-all duration-300">
              Descargar CV
            </button>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all duration-300">
              Ver proyectos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

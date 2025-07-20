import ParticlesBackground from "@/components/ParticlesBackground";

export default function SectionTwo({ onMenuOpen, onVerMas }) {
  return (

    
     <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">
       {/* Partículas de fondo */}
     <div className="absolute inset-0 z-20 bg-black opacity-50" />
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
        <div className="flex flex-col items-start gap-4 text-left ">

          {/* Título principal */}
          <h1 className="text-4xl mb-0  md:text-6xl font-black text-cyan-400 leading-tight drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)] font-azonix">
            ¡Hola! Soy <br />
            <span className="bg-cyan-200 text-black px-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]">
              Maurizio Caballero
            </span>, <br />
            Frontend Developer 
          </h1>

          {/* Descripción adicional */}

          
        <ul className="text-white/90 text-xl mt-0 md:text-xl space-y-2 bg-black/30 dark:bg-white/10 backdrop-blur-sm p-4 rounded-md leading-relaxed max-w-3xl drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]">

  <li>🕸️React</li>
  <li>🚀Next.Js</li>
  <li>🧠Tailwind/CSS</li>
  <li>🎯AI-Powered Development</li>
  <li>🤝Mobile-First Design </li>
  <li>🤝API Integrations</li>
 
</ul>





          {/* Botones / acciones */}
           <div className="flex gap-6 mt-0 flex-wrap">
            <button className="bg-black border border-white text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-cyan-500 transition-all duration-300">
              Descargar CV
            </button>
            <button
              onClick={onMenuOpen}
              className="bg-yellow-500 text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
  Ver proyectos
            </button>
            <button
              onClick={onVerMas}
              className="bg-white text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-cyan-400 transition-all duration-300"
            >
              Más sobre mí
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
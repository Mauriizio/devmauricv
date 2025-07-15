export default function SectionTwo() {
  return (
    <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">
      {/* Imagen fondo lado izquierdo */}
      <div className="bg-white absolute inset-0 z-10 p-0 overflow-hidden">
        <img
          src="/assets/avatar-left2.png"
          alt="Avatar mitad"
          className="absolute top-0 right-0 h-full w-auto object-contain scale-[1.7] origin-right"
        />
      </div>

      {/* Capa oscura para efecto fondo */}
      <div className="absolute inset-0 z-0 bg-black opacity-80" />

      {/* Contenido */}
      <div className="relative z-20 w-full h-full flex items-start justify-start pl-5 pr-10 pt-5">
        <div className="flex flex-col items-start gap-8 text-left font-azonix">

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-black text-cyan-400 leading-tight">
            ¡Hola! Soy <br />
            <span className="bg-cyan-200 text-black px-1">Maurizio Caballero</span>, <br />
            desarrollador web & estudiante de ingeniería en sistemas.
          </h1>

          {/* Descripción adicional */}
          <p className="text-xl md:text-2xl text-black max-w-xl">
            Me especializo en crear experiencias visuales modernas con tecnologías como React, Tailwind y JavaScript.  
            Siempre estoy explorando nuevas ideas, construyendo cosas desde cero, y buscando crecer como profesional en el mundo del desarrollo frontend.
          </p>

          {/* Botones / acciones */}
          <div className="flex gap-6 mt-2">
            <button className="bg-black text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-cyan-500 transition-all duration-300">
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

export default function SectionOne({ onMenuOpen, onVerMas, onContactOpen  }) {
  return (
    <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="bg-black absolute inset-0 z-10 p-0 overflow-hidden">
        <img
          src="/assets/avatar-right2.png"
          alt="Avatar mitad"
          className="absolute top-0 left-0 h-full w-auto object-contain scale-[1.7] origin-left"
        />
      </div>

      {/* Fondo negro translúcido */}
      <div className="absolute inset-0 z-0 bg-black opacity-80" />

      {/* Contenido */}
      <div className="relative z-20 w-full h-full flex items-start justify-between ml-2 pt-5 pb-5 pr-5">
        <div className="flex flex-col justify-between h-full w-full items-end text-white text-right font-azonix">

          {/* Bloque de nombre */}
          <div className="flex flex-col items-end gap-0">
            <button className="text-7xl md:text-6xl font-black hover:translate-x-2 transition-all duration-300 hover:text-cyan-400">
              Maurizio
            </button>
            <button className="text-5xl bg-gray-700 md:text-6xl font-black hover:translate-x-2 transition-all duration-300 hover:text-cyan-400 hover:underline">
              Caballero
            </button>
          </div>

          {/* Bloque VER / Proyectos */}
          <div className="flex flex-col items-end gap-1 mb-2">
            <button 
            onClick={onMenuOpen}
            className="text-3xl text-cyan-400 md:text-3xl font-black hover:-translate-y-1 transition-all duration-300 hover:text-fuchsia-400">
              VER
            </button>
            <button
            onClick={onMenuOpen}
            className="text-6xl text-cyan-400 md:text-6xl font-black hover:-translate-y-1 transition-all duration-300 hover:text-fuchsia-400">
              Proyectos
            </button>
          </div>

          {/* Botones de navegación */}
          <div className="flex flex-col items-end gap-5 mb-2">
            <button
        onClick={onMenuOpen}
        className="absolute bottom-10 right-10  pb-20 text-9xl md:text-9xl font-black hover:translate-x-1 transition duration-300 hover:text-yellow-400"
      >
        →
      </button>

              <button onClick={onContactOpen} className="text-4xl md:text-6xl font-black hover:translate-x-1 transition-all duration-300 hover:text-yellow-400">
            Contacto
          </button>
            <button onClick={onVerMas} className="text-4xl md:text-6xl font-black hover:translate-x-1 transition-all duration-300 hover:text-yellow-400">
              Sobre mí
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

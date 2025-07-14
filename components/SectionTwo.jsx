export default function SectionTwo() {
  return (
    <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">
      {/* Imagen completa como fondo */}
      <div className="absolute inset-0 z-10 bg-[url('/assets/avatar-left.png')] bg-cover bg-center bg-no-repeat" />

      {/* Futuro fondo tsParticles */}
      <div className="absolute inset-0 z-0 bg-black opacity-80" />

      {/* Botones encima (alineados a la derecha) */}
      <div className="relative z-20 w-full h-full flex items-center justify-end pr-10">
        <div className="flex flex-col gap-6 text-white text-right">
          <button className="text-3xl md:text-5xl font-bold hover:text-cyan-400 transition">
            Sobre mí
          </button>
          <button className="text-3xl md:text-5xl font-bold hover:text-fuchsia-400 transition">
            Proyectos
          </button>
          <button className="text-3xl md:text-5xl font-bold hover:text-yellow-400 transition">
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}

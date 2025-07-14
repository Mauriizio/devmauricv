export default function SectionOne() {
  return (
    <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">
      {/* Imagen completa como fondo */}
    <div className=" bg-black absolute inset-0 z-10 p-0 overflow-hidden">
  <img
    src="/assets/avatar-right.png" // cambia por avatar-left.png en la otra sección
    alt="Avatar mitad"
    className="absolute top-0 left-0 h-full w-auto object-contain scale-[1.4] origin-left filter grayscale  p-0 m-0"
  />
</div>


      {/* Futuro fondo tsParticles */}
      <div className="absolute inset-0 z-0 bg-black opacity-80" />

      {/* Botones encima (alineados a la izquierda esta vez) */}
      <div className="relative z-20 w-full h-full flex items-center justify-start pl-10">
        <div className="flex flex-col gap-6 text-white text-left">
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

export default function SectionOne() {
  return (
    <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">
      <div className="bg-black absolute inset-0 z-10 p-0 overflow-hidden">
        <img
          src="/assets/avatar-right2.png"
          alt="Avatar mitad"
          className="absolute top-0 left-0 h-full w-auto object-contain scale-[1.6] origin-left filter grayscale p-0 m-0"
        />
      </div>

      <div className="absolute inset-0 z-0 bg-black opacity-80" />

      {/* Botones al lado DERECHO */}
      <div className="relative z-20 w-full h-full flex items-center justify-end pr-10">
        <div className="flex flex-col gap-6 text-white text-right font-orbitron">
          <button className="text-4xl md:text-6xl font-black hover:translate-x-2 transition-all duration-300 hover:text-cyan-400">
            Sobre mí
          </button>
          <button className="text-4xl md:text-6xl font-black hover:-translate-y-1 transition-all duration-300 hover:text-fuchsia-400">
            Proyectos
          </button>
          <button className="text-4xl md:text-6xl font-black hover:translate-x-1 transition-all duration-300 hover:text-yellow-400">
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}

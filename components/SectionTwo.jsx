export default function SectionTwo() {
  return (
    <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">
      <div className="bg-white absolute inset-0 z-10 p-0 overflow-hidden">
        <img
  src="/assets/avatar-left.png"
  alt="Avatar mitad"
  className="absolute top-0 right-0 h-full w-auto object-contain scale-[1.4] origin-right filter grayscale drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]"
/>
      </div>

      <div className="absolute inset-0 z-0 bg-black opacity-80" />

      <div className="relative z-20 w-full h-full flex items-center justify-start pl-5 pr-10">
        <div className="flex flex-col gap-6 text-white text-left font-orbitron">
          <button className="text-4xl text-left md:text-6xl font-black text-black hover:translate-x-2 transition-all duration-300 hover:text-cyan-400">
            Sobre mí
          </button>
          <button className="text-4xl md:text-6xl font-black text-black  hover:-translate-y-1 transition-all duration-300 hover:text-fuchsia-400">
            Proyectos
          </button>
          <button className="text-4xl md:text-6xl font-black text-black  hover:translate-x-1 transition-all duration-300 hover:text-yellow-400">
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}

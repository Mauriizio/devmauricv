// components/SectionTwo.jsx
export default function SectionTwo() {
  return (
    <section className="w-screen h-screen flex snap-start flex-shrink-0">
      {/* IZQUIERDA - botones */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center gap-6 bg-[#0d0d0d] text-white px-4">
        <div className="space-y-4 h-40 overflow-y-auto scroll-smooth">
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

      {/* DERECHA - avatar-right.png como fondo */}
      <div className="w-full md:w-1/2 h-full bg-[url('/assets/avatar-right.png')] bg-cover bg-center bg-no-repeat" />
    </section>
  );
}

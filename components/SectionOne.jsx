import Image from "next/image";

export default function SectionOne() {
  return (
    <section className="w-screen h-screen flex flex-col md:flex-row snap-start flex-shrink-0">
      {/* IZQUIERDA */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-black">
        <Image
          src="/assets/avatar-left.png"
          alt="Avatar Izquierda"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* DERECHA */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center gap-6 bg-[#0d0d0d] text-white">
        <div className="space-y-4 h-40 overflow-y-auto scroll-smooth px-4">
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

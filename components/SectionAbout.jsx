export default function SectionAbout() {
  return (
    <section
      id="section-about"
      className="w-screen h-screen snap-start bg-gray-950 text-white flex items-center justify-center p-8 font-azonix"
    >
      <div className="max-w-4xl text-center space-y-6">
        <h2 className="text-5xl font-bold text-cyan-400">Más sobre mí</h2>
        <p className="text-xl leading-relaxed text-white/90">
          Además de trabajar con tecnologías como React, Tailwind y Next.js, tengo experiencia resolviendo problemas técnicos
          complejos, optimizando interfaces y explorando nuevas soluciones impulsadas por inteligencia artificial. También he trabajado con herramientas de edición de audio y producción como Cubase, lo que refuerza mi capacidad de adaptación tecnológica. Me esfuerzo por aprender lo que sea necesario para alcanzar los objetivos de cada proyecto.
        </p>
        <a
          href="#"
          className="inline-block bg-cyan-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-cyan-400 transition"
        >
          Volver arriba ↑
        </a>
      </div>
    </section>
  );
}

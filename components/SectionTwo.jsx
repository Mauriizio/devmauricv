export default function SectionTwo() {
  return (
    <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">
      <div className="bg-white absolute inset-0 z-10 p-0 overflow-hidden">
        <img
  src="/assets/avatar-left2.png"
  alt="Avatar mitad"
  className="absolute top-0 right-0 h-full mb-0 w-auto object-contain scale-[1.7] origin-right 
    
  "
/>
      </div>

      <div className="absolute inset-0 z-0 bg-black opacity-80" />

      <div className="relative z-20 w-full h-full flex items-start justify-start  pl-5 pr-10 ">

        <div className="flex flex-col itens-start gap-6 text-white text-left mt-5 font-azonix">

          <button className="text-4xl text-left md:text-6xl font-black text-cyan-400 hover:translate-x-2 transition-all duration-300 hover:text-cyan-400">
            ¡Hola! Soy <br/> <span className="bg-cyan-200 text-black" >Maurizio Caballero,</span>  desarrollador web,estudiante de ingeniería en sistemas.
          </button>
         
          <button className="text-4xl md:text-6xl font-black text-black  hover:translate-x-1 transition-all duration-300 hover:text-yellow-400">
            Contacto
          </button>


        </div>
      </div>
    </section>
  );
}

export default function SectionOne() {
  return (
    <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">
      <div className="bg-black absolute inset-0 z-10 p-0 overflow-hidden">
        <img
          src="/assets/avatar-right2.png"
          alt="Avatar mitad"
          className="absolute top-0 left-0 h-full w-auto object-contain scale-[1.7]  mb-0 origin-left  p-0 m-0"
        />
      </div>

      <div className="absolute inset-0 z-0 bg-black opacity-80" />

      {/* Botones al lado DERECHO */}
      <div className="relative z-20 w-full h-full flex items-start  flex-grow justify-between pr-2 pt-5 border border-none">
        
        
        <div className="flex flex-col justify-between h-screen w-screen items-end text-white text-right font-azonix pb-8 mt-0">


<div className="flex flex-col   items-right md: items-end text-white text-right font-azonix p-0 mt-0 gap-0">

          <button className="text-7xl m-0 mt-0 md:text-6xl font-black hover:translate-x-2 transition-all duration-300 hover:text-cyan-400">
            Maurizio 
          </button>
          <button className="text-5xl  md:text-6xl font-black hover:translate-x-2 transition-all duration-300 hover:text-cyan-400 hover:underline">
           Caballero
          </button>

</div>

<div className="flex flex-col justify-between  items-end text-white text-right font-azonix p-0 ml-2 mb-2 gap-0" >

  <button className="text-3xl text-red-600 md:text-3xl font-black hover:-translate-y-1 transition-all duration-300 hover:text-fuchsia-400 ">
            VER
          </button>

          <button className="text-6xl text-red-600 md:text-6xl font-black hover:-translate-y-1 transition-all duration-300 hover:text-fuchsia-400 ">
           Proyectos
          </button>


</div>



<div className="flex flex-col justify-between  items-end text-white text-right font-azonix p-0 ml-2 mb-2 gap-5" >

         
         <button className="text-9xl md:text-6xl font-black hover:translate-x-1 transition-all duration-300 hover:text-yellow-400">
           →
          </button>
          <button className="text-4xl md:text-6xl font-black hover:translate-x-1 transition-all duration-300 hover:text-yellow-400">
            Contacto
          </button>
          <button className="text-4xl md:text-6xl font-black hover:translate-x-1 transition-all duration-300 hover:text-yellow-400">
           Sobre mí
          </button>

          

</div>
        </div>
      </div>
    </section>
  );
}

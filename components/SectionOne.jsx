"use client"


import { useEffect, useState } from "react"
import CodeParticlesBackground from "./CodeParticlesBackground"  

export default function SectionOne({ onMenuOpen, onVerMas, onContactOpen }) {
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-screen h-screen snap-start flex-shrink-0 overflow-hidden">



      
       



 <div className="absolute inset-0 z-5 bg-black" />
  <CodeParticlesBackground />
      {/* Imagen de fondo */}

      <div className="absolute inset-0 z-10 p-0 overflow-hidden">
        <img
          src="/assets/avatar-right2.png"
          alt="Avatar mitad"
          className="absolute top-0 left-0 h-full w-auto object-contain scale-[1.7] origin-left z-10"
        />
      </div>
      {/* Fondo negro translúcido */}
       <div className="absolute inset-0 z-20 bg-black opacity-50" />
      
      {/* Contenido */}
      <div
        className={`relative z-20 w-full h-full   flex items-start justify-between ml-2 pt-5 pb-5 pr-3 lg:pr-10 transition-opacity duration-1000 ease-out ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col justify-between h-full w-full items-end text-white text-right mr-4 font-azonix">
          {/* Bloque de nombre */}
          <div className="flex flex-col items-end gap-0">
            <button
              className="text-7xl md:text-8xl lg:text-[10rem] xl:text-[11rem] font-black transition-all duration-300 ease-out
                         hover:scale-x-[1.03] hover:skew-x-2 hover:translate-x-2 hover:text-cyan-400" // Ajustado scale-x y translate-x
            >
              Maurizio
            </button>
            <button
              className="text-5xl bg-gray-700 md:text-7xl lg:text-[8rem] xl:text-[10rem] font-black transition-all duration-300 ease-out
                         hover:scale-x-[1.03] hover:skew-x-2 hover:translate-x-2 hover:text-cyan-400 hover:underline" // Ajustado scale-x y translate-x
            >
              Caballero
            </button>
          </div>


          {/* Bloque VER / Proyectos */}
          <div className="flex flex-col items-end gap-2 mb-2">
            <button
              onClick={onMenuOpen}
              className="text-3xl md:text-4xl lg:text-7xl font-black text-cyan-400 transition-all duration-300 ease-out
                         hover:scale-[1.02] hover:-translate-y-1 hover:skew-x-[-2deg] hover:text-fuchsia-400" // Ajustado scale y skew
            >
              VER
            </button>
            <button
              onClick={onMenuOpen}
              className=" text-6xl md:text-7xl lg:text-9xl xl:text-[10rem] font-black text-cyan-400 transition-all duration-300 ease-out mb-0
                         hover:scale-[1.02] hover:-translate-y-1 hover:skew-x-[-2deg] hover:text-fuchsia-400" // Ajustado scale y skew
            >
              Proyectos
            </button>

          </div>




          {/* Botones de navegación */}
          <div className="flex flex-col items-end gap-5 mb-2 mt-0">
            
            <button
              onClick={onContactOpen}
              className="text-4xl md:text-5xl font-black text-yellow-400 transition-all duration-300 ease-out
                         hover:scale-105 hover:translate-x-2"
            >
              Contacto
            </button>
            <button
              onClick={onVerMas}
              className="text-4xl md:text-4xl mt-0  font-black text-yellow-400 transition-all duration-300 ease-out
                         hover:scale-105 hover:translate-x-2"
            >
              Sobre mí
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

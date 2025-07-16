"use client"

import { useState } from "react"
import SectionOne from "@/components/SectionOne"
import SectionTwo from "@/components/SectionTwo"
import SectionAbout from "@/components/SectionAbout"
import MenuOverlay from "@/components/MenuOverlay"

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  const handleVerMas = () => {
    setShowAbout(true)
  }

  const handleVolverArriba = () => {
    setShowAbout(false)
  }

  return (
    <>
      {/* Overlay del menú */}
      <MenuOverlay show={showMenu} onClose={() => setShowMenu(false)} />

      {/* SectionAbout - Posicionada como overlay */}
      <SectionAbout show={showAbout} onVolverArriba={handleVolverArriba} />

      {/* Contenedor principal con scroll */}
      <main
        className={`flex flex-row-reverse overflow-x-auto snap-x snap-mandatory scroll-smooth w-screen h-screen transition-transform duration-600 ease-in-out ${
          showAbout ? "transform -translate-y-full overflow-hidden" : ""
        }`}
        style={{
          overflowX: showAbout ? "hidden" : "auto",
        }}
      >
        <SectionOne onMenuOpen={() => setShowMenu(true)} />
        <SectionTwo onMenuOpen={() => setShowMenu(true)} onVerMas={handleVerMas} />
      </main>
    </>
  )
}

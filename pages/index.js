"use client"

import { useState } from "react"
import Head from "next/head"
import SectionOne from "@/components/SectionOne"
import SectionTwo from "@/components/SectionTwo"
import SectionAbout from "@/components/SectionAbout"
import MenuOverlay from "@/components/MenuOverlay"
import ProjectDetail from "@/components/ProjectDetail"
import SectionContact from "@/components/SectionContact"

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showProject, setShowProject] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const handleVerMas = () => setShowAbout(true)
  const handleVolverArriba = () => setShowAbout(false)

  const handleProjectSelect = (project) => {
    setSelectedProject(project)
    setShowProject(true)
  }

  const handleCloseProject = () => {
    setShowProject(false)
    setSelectedProject(null)
  }

  // Snappier y sin "flash": abrimos el menú y en el siguiente frame cerramos el detalle
  const handleBackToProjects = () => {
    setShowMenu(true)
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        setShowProject(false)
        setSelectedProject(null)
      })
    }
  }

  const handleContactOpen = () => setShowContact(true)
  const handleContactClose = () => setShowContact(false)

  // Flags de overlay activos (para no repetir condiciones)
  const anyOverlayOpen = showAbout || showProject || showMenu || showContact

  return (
    <>
      {/* SEO básico de Home (reforzamos luego en _app con canonical + JSON-LD global) */}
      <Head>
        <title>Portafolio — Maurizio Caballero (Frontend)</title>
        <meta
          name="description"
          content="Portafolio de Maurizio Caballero: proyectos, experiencia y contacto. Frontend Developer con React y Next.js."
        />
        <meta name="author" content="Maurizio Caballero" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="devMauriz" />
        <meta property="og:title" content="Portafolio — Maurizio Caballero" />
        <meta
          property="og:description"
          content="Proyectos, experiencia y contacto. Frontend con React/Next.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/avatar-right2.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Overlay del menú */}
      <MenuOverlay show={showMenu} onClose={() => setShowMenu(false)} onProjectSelect={handleProjectSelect} />

      {/* ProjectDetail - Overlay para proyectos */}
      <ProjectDetail
        show={showProject}
        project={selectedProject}
        onClose={handleCloseProject}
        onBackToProjects={handleBackToProjects}
      />

      {/* SectionAbout - Posicionada como overlay */}
      <SectionAbout show={showAbout} onVolverArriba={handleVolverArriba} onContactOpen={handleContactOpen} />

      {/* SectionContact - Posicionada como overlay */}
      <SectionContact show={showContact} onClose={handleContactClose} />

      {/* Contenedor principal con scroll (sin tocar tu lógica de scroll a la izquierda) */}
      <main
        className={`flex flex-row-reverse overflow-x-auto snap-x snap-mandatory scroll-smooth w-screen h-screen
          transition-transform duration-300 ease-out
          motion-reduce:transition-none
          ${anyOverlayOpen ? "transform -translate-y-full overflow-hidden" : ""}`}
        style={{
          overflowX: anyOverlayOpen ? "hidden" : "auto",
          willChange: "transform", // hint al navegador para animar más fluido
        }}
      >
        <SectionOne onMenuOpen={() => setShowMenu(true)} onVerMas={handleVerMas} onContactOpen={handleContactOpen} />
        <SectionTwo onMenuOpen={() => setShowMenu(true)} onVerMas={handleVerMas} onContactOpen={handleContactOpen} />
      </main>
    </>
  )
}

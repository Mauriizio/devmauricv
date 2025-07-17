"use client"

import { useState } from "react"
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

  const handleVerMas = () => {
    setShowAbout(true)
  }

  const handleVolverArriba = () => {
    setShowAbout(false)
  }

  const handleProjectSelect = (project) => {
    setSelectedProject(project)
    setShowProject(true)
  }

  const handleCloseProject = () => {
    setShowProject(false)
    setSelectedProject(null)
  }

  const handleBackToProjects = () => {
    // Abrir el menú inmediatamente y cerrar el proyecto con un pequeño delay
    setShowMenu(true)
    setTimeout(() => {
      setShowProject(false)
      setSelectedProject(null)
    }, 100) // Delay muy pequeño para evitar el flash
  }

  const handleContactOpen = () => {
    setShowContact(true)
  }

  const handleContactClose = () => {
    setShowContact(false)
  }

  return (
    <>
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

      {/* Contenedor principal con scroll */}
      <main
        className={`flex flex-row-reverse overflow-x-auto snap-x snap-mandatory scroll-smooth w-screen h-screen transition-transform duration-1000 ease-in-out ${
          showAbout || showProject || showMenu || showContact ? "transform -translate-y-full overflow-hidden" : ""
        }`}
        style={{
          overflowX: showAbout || showProject || showMenu || showContact ? "hidden" : "auto",
        }}
      >
        <SectionOne onMenuOpen={() => setShowMenu(true)} onVerMas={handleVerMas} onContactOpen={handleContactOpen} />
        <SectionTwo onMenuOpen={() => setShowMenu(true)} onVerMas={handleVerMas} />
      </main>
    </>
  )
}

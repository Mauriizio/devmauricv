// pages/index.js
import { useEffect, useMemo, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import SectionOne from "@/components/SectionOne"
import SectionTwo from "@/components/SectionTwo"
import SectionAbout from "@/components/SectionAbout"
import MenuOverlay from "@/components/MenuOverlay"
import ProjectDetail from "@/components/ProjectDetail"
import SectionContact from "@/components/SectionContact"
import { projectsData } from "@/data/projects"

// --- SSR: leer ?view=...&id=... para evitar el "salto" al recargar ---
export async function getServerSideProps(ctx) {
  const { view = null, id = null } = ctx.query || {}
  return { props: { initialView: view, initialId: id } }
}

export default function Home({ initialView, initialId }) {
  const router = useRouter()

  // Resolver proyecto inicial en SSR
  const initialProject = useMemo(
    () =>
      initialView === "project" && typeof initialId === "string"
        ? projectsData.find((p) => p.id === initialId) || null
        : null,
    [initialView, initialId]
  )

  // Estado inicial COHERENTE con SSR (evita flash)
  const [showMenu, setShowMenu] = useState(initialView === "projects")
  const [showAbout, setShowAbout] = useState(initialView === "about")
  const [showContact, setShowContact] = useState(initialView === "contact")
  const [selectedProject, setSelectedProject] = useState(initialProject)
  const [showProject, setShowProject] = useState(initialView === "project" && !!initialProject)

  // Sincroniza estado si cambia la URL (back/forward o navegación interna)
  useEffect(() => {
    const { view = null, id = null } = router.query || {}

    setShowMenu(view === "projects")
    setShowAbout(view === "about")
    setShowContact(view === "contact")

    if (view === "project" && typeof id === "string") {
      const proj = projectsData.find((p) => p.id === id) || null
      setSelectedProject(proj)
      setShowProject(!!proj)
    } else {
      setShowProject(false)
      setSelectedProject(null)
    }
  }, [router.query])

  // Helpers para mutar la URL (sin recargar la página)
  const pushView = (params) => {
    const nextQuery = { ...router.query, ...params }
    Object.keys(nextQuery).forEach((k) => (nextQuery[k] == null) && delete nextQuery[k])
    router.push({ pathname: router.pathname, query: nextQuery }, undefined, { shallow: true })
  }

  // Abrir / cerrar vistas
  const openMenu = () => pushView({ view: "projects", id: undefined })
  const closeMenu = () => router.back()

  const handleVerMas = () => pushView({ view: "about", id: undefined })
  const handleVolverArriba = () => router.back()

  const handleContactOpen = () => pushView({ view: "contact", id: undefined })
  const handleContactClose = () => router.back()

  const handleProjectSelect = (project) => {
    if (!project) return
    pushView({ view: "project", id: project.id })
  }

  const handleCloseProject = () => {
    router.push({ pathname: router.pathname }, undefined, { shallow: true })
  }

  // Volver del detalle a lista de proyectos sin duplicar historial
  const handleBackToProjects = () => {
    const nextQuery = { ...router.query, view: "projects" }
    delete nextQuery.id
    router.replace({ pathname: router.pathname, query: nextQuery }, undefined, { shallow: true })

  }

  const anyOverlayOpen = showAbout || showProject || showMenu || showContact
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  return (
    <>
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
        {siteUrl ? <link rel="canonical" href={siteUrl} /> : null}
      </Head>

      {/* Overlays */}
      <MenuOverlay show={showMenu} onClose={closeMenu} onProjectSelect={handleProjectSelect} />
      <ProjectDetail
        show={showProject}
        project={selectedProject}
        onClose={handleCloseProject}
        onBackToProjects={handleBackToProjects}
      />
      <SectionAbout show={showAbout} onVolverArriba={handleVolverArriba} onContactOpen={handleContactOpen} />
      <SectionContact show={showContact} onClose={handleContactClose} />

      {/* Contenedor principal con scroll horizontal + snap */}
      <main
        className={`flex flex-row-reverse overflow-x-auto snap-x snap-mandatory scroll-smooth w-screen h-screen
          transition-transform duration-300 ease-out motion-reduce:transition-none
          ${anyOverlayOpen ? "transform -translate-y-full overflow-hidden" : ""}`}
        style={{
          overflowX: anyOverlayOpen ? "hidden" : "auto",
          willChange: "transform",
        }}
      >
        <SectionOne onMenuOpen={openMenu} onVerMas={handleVerMas} onContactOpen={handleContactOpen} />
        <SectionTwo onMenuOpen={openMenu} onVerMas={handleVerMas} onContactOpen={handleContactOpen} />
      </main>
    </>
  )
}

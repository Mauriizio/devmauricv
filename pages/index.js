// pages/index.js
import { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import SectionTwo from "@/components/SectionTwo"


// Overlays con code-splitting (SSR ON + fallback accesible)
const SectionAbout   = dynamic(() => import("@/components/SectionAbout"),   { loading: () => <div className="sr-only">Cargando…</div> })
const MenuOverlay    = dynamic(() => import("@/components/MenuOverlay"),    { loading: () => <div className="sr-only">Cargando…</div> })
const ProjectDetail  = dynamic(() => import("@/components/ProjectDetail"),  { loading: () => <div className="sr-only">Cargando…</div> })
const SectionContact = dynamic(() => import("@/components/SectionContact"), { loading: () => <div className="sr-only">Cargando…</div> })
const SectionTutoring = dynamic(() => import("@/components/SectionTutoring"), { loading: () => <div className="sr-only">Cargando…</div> })

// --- SSR: leer ?view=...&id=... para evitar el "salto" al recargar ---
export async function getServerSideProps(ctx) {
  const { view = null, id = null } = ctx.query || {}
  let initialProject = null

  if (view === "project" && typeof id === "string") {
    const { projectsData } = await import("@/data/projects")
    initialProject = projectsData.find((project) => project.id === id) || null
  }

  return { props: { initialView: view, initialProject } }
}

export default function Home({ initialView, initialProject }) {
  const router = useRouter()
  // Estado inicial COHERENTE con SSR (evita flash)
  const [showMenu, setShowMenu] = useState(initialView === "projects")
  const [showAbout, setShowAbout] = useState(initialView === "about")
  const [showContact, setShowContact] = useState(initialView === "contact")
  const [showTutoring, setShowTutoring] = useState(initialView === "tutoring")
  const [selectedProject, setSelectedProject] = useState(initialProject)
  const [showProject, setShowProject] = useState(initialView === "project" && !!initialProject)
  const [loadedViews, setLoadedViews] = useState(() => ({
    projects: initialView === "projects",
    project: initialView === "project" && !!initialProject,
    about: initialView === "about",
    contact: initialView === "contact",
    tutoring: initialView === "tutoring",
  }))

  // Sincroniza estado si cambia la URL (back/forward o navegación interna)
  useEffect(() => {
    let cancelled = false
    const { view = null, id = null } = router.query || {}

    setShowMenu(view === "projects")
    setShowAbout(view === "about")
    setShowContact(view === "contact")
    setShowTutoring(view === "tutoring")
    setLoadedViews((current) => ({
      ...current,
      projects: current.projects || view === "projects",
      about: current.about || view === "about",
      contact: current.contact || view === "contact",
      tutoring: current.tutoring || view === "tutoring",
    }))

    if (view === "project" && typeof id === "string") {
      if (selectedProject?.id === id) {
        setShowProject(true)
        setLoadedViews((current) => ({ ...current, project: true }))
      } else {
        setShowProject(false)
        import("@/data/projects").then(({ projectsData }) => {
          if (cancelled) return

          const project = projectsData.find((candidate) => candidate.id === id) || null
          setSelectedProject(project)
          setShowProject(!!project)

          if (project) {
            setLoadedViews((current) => ({ ...current, project: true }))
          }
        })
      }
    } else {
      setShowProject(false)
    }

    return () => {
      cancelled = true
    }
  }, [router.query, selectedProject?.id])

  // Helpers para mutar la URL (sin recargar la página)
  const pushView = (params) => {
    const nextQuery = { ...router.query, ...params }
    Object.keys(nextQuery).forEach((k) => (nextQuery[k] == null) && delete nextQuery[k])
    router.push({ pathname: router.pathname, query: nextQuery }, undefined, { shallow: true })
  }

  // Abrir / cerrar vistas
  const openMenu = () => {
    setLoadedViews((current) => ({ ...current, projects: true }))
    pushView({ view: "projects", id: undefined })
  }
  const closeMenu = () => router.back()
  const handleHome = () => router.replace({ pathname: router.pathname }, undefined, { shallow: true })

  const handleVerMas = () => {
    setLoadedViews((current) => ({ ...current, about: true }))
    pushView({ view: "about", id: undefined })
  }
  const handleVolverArriba = () => {
    setShowAbout(false)
    router.replace({ pathname: router.pathname }, undefined, { shallow: true, scroll: false })
  }

  const handleContactOpen = () => {
    setLoadedViews((current) => ({ ...current, contact: true }))
    pushView({ view: "contact", id: undefined })
  }
  const handleContactClose = () => router.back()

  const handleTutoringOpen = () => {
    setLoadedViews((current) => ({ ...current, tutoring: true }))
    pushView({ view: "tutoring", id: undefined })
  }
  const handleTutoringClose = () =>
    router.replace({ pathname: router.pathname }, undefined, { shallow: true, scroll: false })

  const handleProjectSelect = (project) => {
    if (!project) return
    setSelectedProject(project)
    setLoadedViews((current) => ({ ...current, project: true }))
    pushView({ view: "project", id: project.id })
  }

  const handleCloseProject = () => {
    router.push({ pathname: router.pathname }, undefined, { shallow: true })
  }

  // Volver del detalle a lista de proyectos sin duplicar historial
  const handleBackToProjects = () => {
    const nextQuery = { ...router.query, view: "projects" }
    router.push({ pathname: router.pathname, query: nextQuery }, undefined, { shallow: true })
  }

  const anyOverlayOpen = showAbout || showProject || showMenu || showContact || showTutoring
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mauriziodev.vercel.app"

  return (
    <>
      <Head>
  {/* Título + descripción */}
  <title>Maurizio Caballero — Ingeniería, automatización y programación</title>
  <meta
    name="description"
    content="Portafolio de Maurizio Caballero: ingeniería, automatización, programación, documentación técnica y proyectos web."
  />
  <meta name="author" content="Maurizio Caballero" />
  <meta name="application-name" content="devMauriz" />
  <meta name="robots" content="index,follow" />

  {/* Canonical (sin query params) */}
  {siteUrl ? <link rel="canonical" href={siteUrl} /> : null}

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="devMauriz · Maurizio Caballero" />
  <meta property="og:title" content="Maurizio Caballero — Ingeniería y automatización" />
  <meta
    property="og:description"
    content="Proyectos técnicos, académicos y web con enfoque en ingeniería aplicada, automatización y documentación."
  />
  {siteUrl ? <meta property="og:url" content={siteUrl} /> : null}
  <meta
    property="og:image"
    content={siteUrl ? `${siteUrl.replace(/\/$/, "")}/og/og-1200x630.png` : "/og/og-1200x630.png"}
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="es_CL" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Maurizio Caballero — Ingeniería y automatización" />
  <meta
    name="twitter:description"
    content="Proyectos técnicos, académicos y web con enfoque en ingeniería aplicada, automatización y documentación."
  />
  <meta
    name="twitter:image"
    content={siteUrl ? `${siteUrl.replace(/\/$/, "")}/og/og-1200x630.png` : "/og/og-1200x630.png"}
  />

  {/* Schema.org (JSON-LD) — WebSite + Person */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "devMauriz",
        url: siteUrl || "",
        inLanguage: "es-CL",
        description: "Portafolio de Maurizio Caballero: proyectos técnicos, académicos y creativos.",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl || ""}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }),
    }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Maurizio Caballero",
        jobTitle: "Estudiante de Ingeniería en Electricidad y Automatización Industrial",
        url: siteUrl || "",
        image: siteUrl ? `${siteUrl.replace(/\/$/, "")}/og/og-1200x630.png` : "/og/og-1200x630.png",
        sameAs: [
          "https://github.com/Mauriizio",
          "https://www.linkedin.com/in/maurizio-caballero-286a56219/",
          "https://www.instagram.com/devmauriz/",
          "https://www.youtube.com/@Devmauri",
          "https://x.com/devmauriz"
        ],
      }),
    }}
  />
</Head>

      {/* Overlays */}
      {loadedViews.projects ? (
        <MenuOverlay
          show={showMenu}
          onClose={closeMenu}
          onHome={handleHome}
          onProjectSelect={handleProjectSelect}
          onContactOpen={handleContactOpen}
        />
      ) : null}
      {loadedViews.project ? (
        <ProjectDetail
          show={showProject}
          project={selectedProject}
          onClose={handleCloseProject}
          onBackToProjects={handleBackToProjects}
        />
      ) : null}
      {loadedViews.about ? (
        <SectionAbout show={showAbout} onVolverArriba={handleVolverArriba} onContactOpen={handleContactOpen} />
      ) : null}
      {loadedViews.contact ? <SectionContact show={showContact} onClose={handleContactClose} /> : null}
      {loadedViews.tutoring ? <SectionTutoring show={showTutoring} onClose={handleTutoringClose} /> : null}

      {/* Hero principal único */}
      <main
        aria-hidden={anyOverlayOpen}
        className={`relative h-dvh min-h-0 w-full max-w-full overflow-hidden
          transition-transform duration-300 ease-out motion-reduce:transition-none
          ${anyOverlayOpen ? "transform -translate-y-full overflow-hidden" : ""}`}
        style={{ willChange: anyOverlayOpen ? "transform" : "auto" }}
      >
        <SectionTwo
          onMenuOpen={openMenu}
          onVerMas={handleVerMas}
          onContactOpen={handleContactOpen}
          onTutoringOpen={handleTutoringOpen}
        />
      </main>
    </>
  )
}

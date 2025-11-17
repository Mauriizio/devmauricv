// pages/index.js
import { useEffect, useMemo, useState, useRef } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import SectionOne from "@/components/SectionOne"
import SectionTwo from "@/components/SectionTwo"
import { projectsData } from "@/data/projects"


// Overlays con code-splitting (SSR ON + fallback accesible)
const SectionAbout   = dynamic(() => import("@/components/SectionAbout"),   { loading: () => <div className="sr-only">Cargando…</div> })
const MenuOverlay    = dynamic(() => import("@/components/MenuOverlay"),    { loading: () => <div className="sr-only">Cargando…</div> })
const ProjectDetail  = dynamic(() => import("@/components/ProjectDetail"),  { loading: () => <div className="sr-only">Cargando…</div> })
const SectionContact = dynamic(() => import("@/components/SectionContact"), { loading: () => <div className="sr-only">Cargando…</div> })

// --- SSR: leer ?view=...&id=... para evitar el "salto" al recargar ---
export async function getServerSideProps(ctx) {
  const { view = null, id = null } = ctx.query || {}
  return { props: { initialView: view, initialId: id } }
}

export default function Home({ initialView, initialId }) {
  const router = useRouter()
  const scrollerRef = useRef(null)

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
    router.push({ pathname: router.pathname, query: nextQuery }, undefined, { shallow: true })
  }

  const anyOverlayOpen = showAbout || showProject || showMenu || showContact
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  // Mejora UX: rueda → scroll horizontal (sin afectar overlays)
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const onWheel = (e) => {
      if (anyOverlayOpen) return
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [anyOverlayOpen])

  return (
    <>
      <Head>
  {/* Título + descripción */}
  <title>Maurizio Caballero — Frontend Developer (Portafolio)</title>
  <meta
    name="description"
    content="Portafolio de Maurizio Caballero: proyectos reales, stack (React/Next.js, Tailwind, Framer Motion) y contacto."
  />
  <meta name="author" content="Maurizio Caballero" />
  <meta name="application-name" content="devMauriz" />
  <meta name="robots" content="index,follow" />

  {/* Canonical (sin query params) */}
  {siteUrl ? <link rel="canonical" href={siteUrl} /> : null}

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="devMauriz · Maurizio Caballero" />
  <meta property="og:title" content="Maurizio Caballero — Frontend Developer" />
  <meta
    property="og:description"
    content="Proyectos, experiencia y contacto. Especialista en React y Next.js."
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
  <meta name="twitter:title" content="Maurizio Caballero — Frontend Developer" />
  <meta
    name="twitter:description"
    content="Proyectos, experiencia y contacto. Especialista en React y Next.js."
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
        description: "Portafolio de Maurizio Caballero: proyectos, stack y contacto.",
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
        jobTitle: "Frontend Developer",
        url: siteUrl || "",
        image: siteUrl ? `${siteUrl.replace(/\/$/, "")}/og/og-1200x630.png` : "/og/og-1200x630.png",
        sameAs: [
          "https://github.com/Mauriizio",
          "https://www.linkedin.com/in/maurizio-caballero-286a56219/",
          "https://www.instagram.com/devmauriz/",
          "https://x.com/devmauriz"
        ],
      }),
    }}
  />
</Head>

      {/* Overlays */}
      <MenuOverlay show={showMenu} onClose={closeMenu} onProjectSelect={handleProjectSelect} onContactOpen={handleContactOpen} />
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
        ref={scrollerRef}
        aria-hidden={anyOverlayOpen}
        className={`flex flex-row-reverse w-screen h-dvh min-h-0
          overflow-x-auto overflow-y-hidden overscroll-y-none
          snap-x snap-mandatory scroll-smooth
          transition-transform duration-300 ease-out motion-reduce:transition-none
          ${anyOverlayOpen ? "transform -translate-y-full overflow-hidden" : ""}`}
        style={{
          overflowX: anyOverlayOpen ? "hidden" : "auto",
          overscrollBehaviorY: "none",
          touchAction: anyOverlayOpen ? "auto" : "pan-x",
          willChange: "transform",
        }}
      >
        <SectionOne onMenuOpen={openMenu} onVerMas={handleVerMas} onContactOpen={handleContactOpen} />
        <SectionTwo onMenuOpen={openMenu} onVerMas={handleVerMas} onContactOpen={handleContactOpen} />
      </main>
    </>
  )
}

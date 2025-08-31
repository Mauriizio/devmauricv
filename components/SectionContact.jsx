// components/SectionContact.jsx
"use client"

import { useRef, useState } from "react"
import Head from "next/head"
import { useTheme } from "@/context/ThemeContext"
import { useFocusTrap } from "@/components/useFocusTrap"
import LogoMC from "@/components/LogoMC"
import { X as IconX, Sun, Moon } from "lucide-react"

// --- Inline brand icons (compactos, sólidos) ---
const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M168 24H88A64.07 64.07 0 0 0 24 88v80a64.07 64.07 0 0 0 64 64h80a64.07 64.07 0 0 0 64-64V88a64.07 64.07 0 0 0-64-64Zm48 144a48.05 48.05 0 0 1-48 48H88a48.05 48.05 0 0 1-48-48V88a48.05 48.05 0 0 1 48-48h80a48.05 48.05 0 0 1 48 48ZM128 72a56 56 0 1 0 56 56a56.06 56.06 0 0 0-56-56Zm0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40Zm52-92a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M216 24H40A16 16 0 0 0 24 40v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM92 200H60v-88h32Zm-16-100a18 18 0 1 1 18-18a18 18 0 0 1-18 18Zm124 100h-32v-48c0-13.2-7.8-20-18-20s-18.2 7.2-18.2 20.1V200H94v-88h30.8v12.6c4.5-7.9 14.1-14.6 28.2-14.6c20.2 0 36 12.7 36 39.9Z" />
  </svg>
)

const GithubIcon = (props) => (
  <svg viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M128 24a104 104 0 0 0-33 202.8c5.2 1 7.1-2.2 7.1-5v-17.6c-28.9 6.3-35-12.4-35-12.4c-4.7-12-11.5-15.3-11.5-15.3c-9.4-6.4 .7-6.3 .7-6.3c10.4 .7 15.8 10.7 15.8 10.7c9.2 15.8 24.1 11.2 30 8.6c.9-6.7 3.6-11.2 6.6-13.8c-23.1-2.6-47.4-11.6-47.4-51.7c0-11.4 4.1-20.7 10.7-28c-1.1-2.7-4.6-13.4 1-27.9c0 0 8.7-2.8 28.5 10.6a98.7 98.7 0 0 1 52 0c19.8-13.4 28.5-10.6 28.5-10.6c5.6 14.5 2.1 25.2 1 27.9c6.6 7.3 10.6 16.6 10.6 28c0 40.3-24.3 49.1-47.5 51.7c3.7 3.1 7 9.2 7 18.6V222c0 2.8 1.9 6.1 7.2 5A104 104 0 0 0 128 24Z" />
  </svg>
)

export default function SectionContact({ show, onClose }) {
  const { isDark, toggleDarkMode } = useTheme()
  const dialogRef = useRef(null)
  useFocusTrap(dialogRef, show)

  const [formData, setFormData] = useState({ name: "", email: "", message: "", company: "" })
  const [status, setStatus] = useState("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const canonical = siteUrl ? `${siteUrl}?view=contact` : undefined
  const contactTitle = "Contacto — devMauriz"
  const contactDesc = "Ponte en contacto con Maurizio Caballero. Consultas, colaboraciones y oportunidades."

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMsg("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Error al enviar el formulario.")
      setStatus("success")
      setFormData({ name: "", email: "", message: "", company: "" })
    } catch (err) {
      setStatus("error")
      setErrorMsg(err.message || "Ocurrió un problema. Intenta de nuevo.")
    }
  }

  // Botón estilo CV
  const actionBtn = "flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors"
  const actionColor = isDark
    ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-700/40 hover:border-cyan-700/70"
    : "text-cyan-700 hover:text-cyan-900 bg-cyan-100/60 hover:bg-cyan-100 border-cyan-800/30 hover:border-cyan-800/60"

  return (
    <>
      {show && (
        <Head>
          <title>{contactTitle}</title>
          <meta name="description" content={contactDesc} />
          <meta name="author" content="Maurizio Caballero" />
          <meta name="robots" content="index,follow" />
          <meta name="theme-color" content={isDark ? "#0b0b0b" : "#f5f5f4"} />
          {canonical ? <link rel="canonical" href={canonical} /> : null}

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="devMauriz" />
          <meta property="og:title" content={contactTitle} />
          <meta property="og:description" content={contactDesc} />
          {canonical ? <meta property="og:url" content={canonical} /> : null}

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={contactTitle} />
          <meta name="twitter:description" content={contactDesc} />
        </Head>
      )}

      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className={`fixed inset-0 w-screen h-screen font-azonix z-50 overflow-y-auto transition-transform duration-500 ease-in-out
          ${show ? "translate-y-0" : "translate-y-full"} ${isDark ? "dark bg-gray-900 text-white" : "bg-stone-200 text-zinc-800"}`}
      >
        {/* Header (con p-4 para evitar difs con SSR viejo) */}
        <div className={`sticky top-0 backdrop-blur-lg border-b p-4 z-20 ${isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"}`}>
          <div className="max-w-6xl mx-auto px-2 sm:px-4">
            <div className="flex items-center gap-2 sm:gap-3 min-h-[56px] md:min-h-[64px]">
              {/* IZQ: Logo */}
              <div className="flex-1 min-w-0 flex items-center">
                <div className="h-7 md:h-8 flex items-center">
                  <LogoMC />
                </div>
              </div>

              {/* DER: Acciones */}
              <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
                <a href="https://wa.me/56923927777" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={`${actionBtn} ${actionColor}`} title="WhatsApp">
                  <WhatsAppIcon style={{ width: 16, height: 16 }} />
                </a>
                <a href="https://www.instagram.com/devmauriz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`${actionBtn} ${actionColor}`} title="Instagram">
                  <InstagramIcon style={{ width: 16, height: 16 }} />
                </a>
                <a href="https://www.linkedin.com/in/maurizio-caballero-286a56219/?originalSubdomain=cl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${actionBtn} ${actionColor}`} title="LinkedIn">
                  <LinkedinIcon style={{ width: 16, height: 16 }} />
                </a>
                
                <button onClick={toggleDarkMode} aria-label="Cambiar tema" aria-pressed={isDark} className={`${actionBtn} ${actionColor}`} title={isDark ? "Tema claro" : "Tema oscuro"}>
                  {isDark ? <Sun size={16} className="fill-current" /> : <Moon size={16} className="fill-current" />}
                </button>
                <button onClick={onClose} aria-label="Cerrar" className={`${actionBtn} ${actionColor}`} title="Cerrar">
                  <IconX size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-14">
          <header className="text-center space-y-4">
            <h2 id="contact-title" className="title-main">Contacto</h2>
            <p className="text-responsive max-w-2xl mx-auto">
              ¿Tienes un proyecto o propuesta? Escríbeme y te respondo a la brevedad.
            </p>
          </header>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            {/* Honeypot */}
            <input type="text" name="company" value={formData.company} onChange={onChange} tabIndex={-1} autoComplete="off" className="hidden" />

            <label className="form-label" htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" required value={formData.name} onChange={onChange} className="form-input" placeholder="Tu nombre" />

            <label className="form-label" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={formData.email} onChange={onChange} className="form-input" placeholder="tucorreo@dominio.com" />

            <label className="form-label" htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" required rows={5} value={formData.message} onChange={onChange} className="form-textarea" placeholder="Cuéntame brevemente tu idea o necesidad…" />

            <div className="flex justify-center gap-3 pt-2">
              <button type="submit" disabled={status === "submitting"} className="btn-primary">
                {status === "submitting" ? "Enviando…" : "Enviar mensaje"}
              </button>
              <button type="button" onClick={onClose} className="btn-secondary">Cancelar</button>
            </div>

            {status === "success" && <p className="form-success mt-3">¡Gracias! Tu mensaje fue enviado correctamente.</p>}
            {status === "error" && <p className="form-error mt-3">{errorMsg}</p>}
          </form>
        </div>
      </section>
    </>
  )
}

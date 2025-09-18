// components/SectionContact.jsx
"use client"

import { useRef, useState, useEffect } from "react"
import Head from "next/head"
import { useTheme } from "@/context/ThemeContext"
import { useFocusTrap } from "@/components/useFocusTrap"
import LogoMC from "@/components/LogoMC"
import { X as IconX, Sun, Moon, Download } from "lucide-react"

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

  // Resetear scroll al reabrir el overlay de Contact
  useEffect(() => {
    if (show && dialogRef.current) {
      // Volver al inicio del contenedor scrollable
      dialogRef.current.scrollTo({ top: 0, behavior: "auto" })
    }
  }, [show])

  const [formData, setFormData] = useState({ name: "", email: "", message: "", company: "" })
  const [status, setStatus] = useState("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const canonical = siteUrl ? `${siteUrl}?view=contact` : undefined
  const contactTitle = "Contacto — devMauriz"
  const contactDesc = "Ponte en contacto con Maurizio Hernández. Consultas, colaboraciones y oportunidades."

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

  const ctaBtn = [
    "inline-flex items-center justify-center gap-1.5",
    "w-[min(82vw,200px)] mx-auto sm:mx-0 px-5 py-2 my-1",
    "rounded-md border font-azonix font-extrabold transition-colors",
    "supports-[backdrop-filter]:backdrop-blur-sm",
    "disabled:opacity-60 disabled:pointer-events-none",
    isDark
      ? "text-cyan-300 hover:text-cyan-200 bg-black/30 border-cyan-700/40 hover:border-cyan-700/70"
      : "text-cyan-900 hover:text-cyan-700 bg-white/40 border-cyan-800/30 hover:border-cyan-800/60",
  ].join(" ")

  return (
    <>
     {show && (
  <Head>
    <meta name="robots" content="noindex,nofollow" />
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
        {/* Header (Menu Overlay) */}
        <div
          className={`sticky top-0 z-20 backdrop-blur-lg border-b p-4 ${
            isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"
          }`}
        >
          <div className="max-w-6xl mx-auto px-2 sm:px-4">
            <div className="flex items-center gap-2 sm:gap-3 min-h-[56px] md:min-h-[64px]">
              {/* IZQ: Logo */}
              <div className="flex-1 min-w-0 flex items-center">
                <div className="h-7 md:h-8 flex items-center">
                  <LogoMC />
                </div>
              </div>

              {/* DER (visual derecha→izquierda). Render: CV, IG, FB, WA, GH, LI, X, Toggle */}
              <div className="flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3">
                {/* CV — solo desktop */}
                <a
                  href="/cv.pdf"
                  download
                  aria-label="Descargar CV"
                  className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-cyan-300 hover:text-cyan-200 bg-white/0 hover:bg-white/5 border-cyan-700/40 hover:border-cyan-700/70"
                      : "text-cyan-800 hover:text-cyan-900 bg-white/40 hover:bg-white/60 border-cyan-900/30 hover:border-cyan-900/60"
                  }`}
                  title="CV"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline text-xs font-sans font-bold">CV</span>
                </a>

                {/* Instagram — solo desktop */}
                <a
                  href="https://www.instagram.com/devmauriz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-pink-300 hover:text-pink-200 bg-pink-900/40 hover:bg-pink-900/55 border-pink-700/40 hover:border-pink-600/70"
                      : "text-pink-700 hover:text-pink-800 bg-pink-100/70 hover:bg-pink-100 border-pink-900/20 hover:border-pink-900/40"
                  }`}
                  title="Instagram"
                >
                  {/* outline para que no sea bloque sólido */}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                {/* Facebook — solo desktop */}
                <a
                  href="https://web.facebook.com/profile.php?id=61580753613645"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
                      : "text-blue-700 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/20 hover:border-blue-900/40"
                  }`}
                  title="Facebook"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                  </svg>
                </a>

                {/* WhatsApp — visible en mobile y desktop */}
                <a
                  href="https://wa.me/56923927777"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-emerald-300 hover:text-emerald-200 bg-emerald-900/40 hover:bg-emerald-900/55 border-emerald-700/40 hover:border-emerald-600/70"
                      : "text-emerald-800 hover:text-emerald-900 bg-emerald-100/70 hover:bg-emerald-100 border-emerald-900/30 hover:border-emerald-900/50"
                  }`}
                >
                  <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z" />
                  </svg>
                </a>

                {/* GitHub — visible en mobile y desktop */}
                <a
                  href="https://github.com/Mauriizio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-zinc-200 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border-zinc-600/50 hover:border-zinc-500/70"
                      : "text-zinc-800 hover:text-black bg-zinc-100/70 hover:bg-zinc-100 border-zinc-900/20 hover:border-zinc-900/40"
                  }`}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                  </svg>
                </a>

                {/* LinkedIn — solo desktop */}
                <a
                  href="https://www.linkedin.com/in/maurizio-caballero-286a56219/?originalSubdomain=cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`hidden md:flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-blue-300 hover:text-blue-200 bg-blue-900/40 hover:bg-blue-900/55 border-blue-700/40 hover:border-blue-600/70"
                      : "text-blue-800 hover:text-blue-900 bg-blue-100/70 hover:bg-blue-100 border-blue-900/30 hover:border-blue-900/50"
                  }`}
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47C21.4 7.73 24 10 24 14.3V24h-5v-8.6c0-2.05-.04-4.68-2.85-4.68-2.86 0-3.3 2.23-3.3 4.53V24H8V8z" />
                  </svg>
                </a>

                {/* X — visible en mobile y desktop */}
                <button
                  onClick={onClose}
                  aria-label="Cerrar"
                  title="Cerrar"
                  className={`flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-md border transition-colors ${
                    isDark
                      ? "text-rose-300 hover:text-rose-200 bg-rose-900/40 hover:bg-rose-900/55 border-rose-700/40 hover:border-rose-600/70"
                      : "text-rose-700 hover:text-rose-900 bg-rose-100/70 hover:bg-rose-100 border-rose-900/20 hover:border-rose-900/40"
                  }`}
                >
                  <IconX size={16} />
                </button>

                {/* Toggle — extremo derecho, con icono contextual (luna en claro / sol en oscuro) */}
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                  aria-pressed={isDark}
                  className={`relative shrink-0 inline-flex items-center rounded-full border
              h-6 w-[2.50rem] min-w-[2.50rem] md:w-min-[2.50rem] md:max-w-[2.50rem]
              ${isDark ? "bg-cyan-700 border-cyan-400/60 justify-end" : "bg-cyan-200 border-cyan-900/50 justify-start"}
              shadow-[0_2px_10px_rgba(0,0,0,0.10)] transition-colors duration-200`}
                >
                  <span className="h-5 w-5 mx-1 rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,.25)] relative grid place-items-center">
                    {isDark ? (
                      <Sun size={12} className="text-amber-500" aria-hidden="true" />
                    ) : (
                      <Moon size={12} className="text-cyan-700" aria-hidden="true" />
                    )}
                  </span>
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

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <button type="submit" disabled={status === "submitting"} className={ctaBtn}>
                {status === "submitting" ? "Enviando…" : "Enviar"}
              </button>
              <button type="button" onClick={onClose} className={ctaBtn}>
                Cancelar
              </button>
            </div>

            {status === "success" && <p className="form-success mt-3">¡Gracias! Tu mensaje fue enviado correctamente.</p>}
            {status === "error" && <p className="form-error mt-3">{errorMsg}</p>}
          </form>
        </div>
      </section>
    </>
  )
}

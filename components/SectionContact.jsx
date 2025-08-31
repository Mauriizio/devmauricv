// components/SectionContact.jsx
"use client"

import { useRef, useState } from "react"
import Head from "next/head"
import { useTheme } from "@/context/ThemeContext"
import { useFocusTrap } from "@/components/useFocusTrap"

export default function SectionContact({ show, onClose }) {
  const { isDark, toggleDarkMode } = useTheme()
  const dialogRef = useRef(null)
  useFocusTrap(dialogRef, show)

  const [formData, setFormData] = useState({ name: "", email: "", message: "", company: "" }) // company = honeypot
  const [status, setStatus] = useState("idle") // 'idle' | 'submitting' | 'success' | 'error'
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
        role="dialog" aria-modal="true" aria-labelledby="contact-title"
        className={`fixed inset-0 w-screen h-screen font-azonix z-50 overflow-y-auto transition-transform duration-500 ease-in-out
          ${show ? "translate-y-0" : "translate-y-full"} ${isDark ? "dark bg-gray-900 text-white" : "bg-stone-200 text-zinc-800"}`}
      >
        {/* Header */}
        <div className={`sticky top-0 backdrop-blur-lg border-b p-4 z-20 ${isDark ? "bg-gray-900/60 border-white/10" : "bg-stone-200/60 border-stone-300/50"}`}>
          <div className="max-w-6xl mx-auto px-2 sm:px-4 flex items-center justify-between">
            <button onClick={toggleDarkMode} className="btn-toggle" aria-label="Cambiar tema">{isDark ? "☀️" : "🌙"}</button>
            <button onClick={onClose} className="btn-secondary">Volver</button>
          </div>
        </div>

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

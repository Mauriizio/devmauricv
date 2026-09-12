"use client"

import { useEffect, useRef } from "react"
import Head from "next/head"
import { Download, Facebook, Github, Instagram, Linkedin, Moon, Sun, X as CloseIcon } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"
import { useFocusTrap } from "@/components/useFocusTrap"
import LogoMarkShimmer from "@/components/LogoMarkShimmer"

const WHATSAPP_URL =
  "https://wa.me/56935446606?text=Hola%20Maurizio%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo."

const socialLinks = [
  {
    name: "Instagram",
    handle: "@devmauriz",
    href: "https://www.instagram.com/devmauriz/",
    Icon: Instagram,
    color: "text-pink-600 dark:text-pink-300",
  },
  {
    name: "LinkedIn",
    handle: "Maurizio Caballero",
    href: "https://www.linkedin.com/in/maurizio-caballero-286a56219/",
    Icon: Linkedin,
    color: "text-blue-700 dark:text-blue-300",
  },
  {
    name: "GitHub",
    handle: "@Mauriizio",
    href: "https://github.com/Mauriizio",
    Icon: Github,
    color: "text-zinc-800 dark:text-zinc-100",
  },
  {
    name: "Facebook",
    handle: "devMauriz",
    href: "https://web.facebook.com/profile.php?id=61565151473870",
    Icon: Facebook,
    color: "text-blue-600 dark:text-blue-300",
  },
]

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor" aria-hidden="true">
      <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z" />
    </svg>
  )
}

export default function SectionContact({ show, onClose }) {
  const { isDark, toggleDarkMode } = useTheme()
  const dialogRef = useRef(null)
  useFocusTrap(dialogRef, show)

  useEffect(() => {
    if (!show || !dialogRef.current) return
    dialogRef.current.scrollTo({ top: 0, behavior: "auto" })
  }, [show])

  return (
    <>
      {show ? (
        <Head>
          <title>Contacto — devMauriz</title>
          <meta
            name="description"
            content="Contacta a Maurizio Caballero por WhatsApp o a través de sus redes sociales."
          />
          <meta name="robots" content="noindex,nofollow" />
        </Head>
      ) : null}

      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!show}
        inert={!show}
        aria-labelledby="contact-title"
        className={`fixed inset-0 z-50 h-dvh w-screen overflow-y-auto font-azonix transition-transform duration-[300ms] ease-out motion-reduce:transition-none ${
          show ? "translate-y-0" : "translate-y-full"
        } ${isDark ? "dark bg-gray-900 text-white" : "bg-stone-200 text-zinc-800"}`}
      >
        <div
          className={`sticky top-0 z-20 border-b p-4 backdrop-blur-lg ${
            isDark ? "border-white/10 bg-gray-900/60" : "border-stone-300/50 bg-stone-200/60"
          }`}
        >
          <div className="mx-auto max-w-6xl px-2 sm:px-4">
            <div className="flex min-h-[56px] items-center gap-2 sm:gap-3 md:min-h-[64px]">
              <div className="flex min-w-0 flex-1 items-center">
                <div className="flex h-10 items-center md:h-11">
                  <LogoMarkShimmer isDark={isDark} animated={show} className="h-10 w-auto md:h-11" />
                </div>
              </div>

              <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
                <a
                  href="/cv.pdf"
                  download
                  aria-label="Descargar CV"
                  title="CV"
                  className={`hidden items-center justify-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors md:flex ${
                    isDark
                      ? "border-cyan-700/40 bg-white/0 text-cyan-300 hover:border-cyan-700/70 hover:bg-white/5 hover:text-cyan-200"
                      : "border-cyan-900/30 bg-white/40 text-cyan-800 hover:border-cyan-900/60 hover:bg-white/60 hover:text-cyan-900"
                  }`}
                >
                  <Download size={16} />
                  <span className="hidden font-sans text-xs font-bold sm:inline">CV</span>
                </a>

                <a
                  href="https://www.instagram.com/devmauriz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className={`hidden items-center justify-center rounded-md border px-3 py-1.5 text-sm transition-colors md:flex ${
                    isDark
                      ? "border-pink-700/40 bg-pink-900/40 text-pink-300 hover:border-pink-600/70 hover:bg-pink-900/55 hover:text-pink-200"
                      : "border-pink-900/20 bg-pink-100/70 text-pink-700 hover:border-pink-900/40 hover:bg-pink-100 hover:text-pink-800"
                  }`}
                >
                  <Instagram size={16} />
                </a>

                <a
                  href="https://web.facebook.com/profile.php?id=61565151473870"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className={`hidden items-center justify-center rounded-md border px-3 py-1.5 text-sm transition-colors md:flex ${
                    isDark
                      ? "border-blue-700/40 bg-blue-900/40 text-blue-300 hover:border-blue-600/70 hover:bg-blue-900/55 hover:text-blue-200"
                      : "border-blue-900/20 bg-blue-100/70 text-blue-700 hover:border-blue-900/40 hover:bg-blue-100 hover:text-blue-900"
                  }`}
                >
                  <Facebook size={16} />
                </a>

                <a
                  href="https://github.com/Mauriizio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className={`flex items-center justify-center rounded-md border px-3 py-1.5 text-sm transition-colors ${
                    isDark
                      ? "border-zinc-600/50 bg-zinc-800/60 text-zinc-200 hover:border-zinc-500/70 hover:bg-zinc-800 hover:text-white"
                      : "border-zinc-900/20 bg-zinc-100/70 text-zinc-800 hover:border-zinc-900/40 hover:bg-zinc-100 hover:text-black"
                  }`}
                >
                  <Github size={16} />
                </a>

                <a
                  href="https://www.linkedin.com/in/maurizio-caballero-286a56219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className={`hidden items-center justify-center rounded-md border px-3 py-1.5 text-sm transition-colors md:flex ${
                    isDark
                      ? "border-blue-700/40 bg-blue-900/40 text-blue-300 hover:border-blue-600/70 hover:bg-blue-900/55 hover:text-blue-200"
                      : "border-blue-900/30 bg-blue-100/70 text-blue-800 hover:border-blue-900/50 hover:bg-blue-100 hover:text-blue-900"
                  }`}
                >
                  <Linkedin size={16} />
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar"
                  title="Cerrar"
                  className={`flex items-center justify-center rounded-md border px-3 py-1.5 text-sm transition-colors ${
                    isDark
                      ? "border-rose-700/40 bg-rose-900/40 text-rose-300 hover:border-rose-600/70 hover:bg-rose-900/55 hover:text-rose-200"
                      : "border-rose-900/20 bg-rose-100/70 text-rose-700 hover:border-rose-900/40 hover:bg-rose-100 hover:text-rose-900"
                  }`}
                >
                  <CloseIcon size={16} />
                </button>

              <button
                type="button"
                onClick={toggleDarkMode}
                aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                aria-pressed={isDark}
                className={`relative inline-flex h-6 w-[2.5rem] min-w-[2.5rem] shrink-0 items-center rounded-full border shadow-[0_2px_10px_rgba(0,0,0,0.10)] transition-colors duration-200 ${
                  isDark ? "justify-end border-cyan-400/60 bg-cyan-700" : "justify-start border-cyan-900/50 bg-cyan-200"
                }`}
              >
                <span className="relative mx-1 grid h-5 w-5 place-items-center rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,.25)]">
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

        <main className="mx-auto flex min-h-[calc(100dvh-73px)] max-w-4xl flex-col justify-center px-4 py-10 pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))] sm:px-6 md:py-14">
          <header className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-sans text-sm font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
              Hablemos
            </p>
            <h2 id="contact-title" className="title-main">Contacto</h2>
            <p className="mt-5 text-responsive">
              ¿Tienes un proyecto o una idea? La vía más rápida para conversar conmigo es WhatsApp.
            </p>
          </header>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 inline-flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 font-sans text-base font-bold text-white shadow-lg shadow-emerald-700/20 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 active:translate-y-0 motion-reduce:transition-none"
          >
            <WhatsAppIcon className="h-7 w-7" />
            Contactar por WhatsApp
          </a>

          <div className="mt-10">
            <h3 className="text-center font-sans text-sm font-semibold uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-300">
              También puedes encontrarme en
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {socialLinks.map(({ name, handle, href, Icon, color }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${name}`}
                  className={`flex items-center gap-4 rounded-xl border p-4 font-sans transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 motion-reduce:transition-none ${
                    isDark
                      ? "border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-white/10"
                      : "border-zinc-900/10 bg-white/55 hover:border-cyan-700/30 hover:bg-white/90"
                  }`}
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-current/5 ${color}`}>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold">{name}</span>
                    <span className="block truncate text-sm text-zinc-600 dark:text-zinc-300">{handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

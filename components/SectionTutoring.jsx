"use client"

import { useEffect, useRef } from "react"
import Head from "next/head"
import {
  BookOpen,
  Calculator,
  CircuitBoard,
  ExternalLink,
  GraduationCap,
  MonitorPlay,
  Moon,
  PlayCircle,
  Sun,
  Youtube,
  X as CloseIcon,
} from "lucide-react"
import LogoMarkShimmer from "@/components/LogoMarkShimmer"
import { useFocusTrap } from "@/components/useFocusTrap"
import { useTheme } from "@/context/ThemeContext"

const SUPERPROF_URL = "https://www.superprof.cl/panel-de-control.html/mi-perfil/"
const YOUTUBE_URL = "https://www.youtube.com/@Devmauri"
const WHATSAPP_URL =
  "https://wa.me/56935446606?text=Hola%20Maurizio%2C%20vi%20tu%20secci%C3%B3n%20de%20tutor%C3%ADas%20y%20me%20gustar%C3%ADa%20consultar%20por%20una%20clase."

const topics = [
  { label: "Matemáticas", Icon: Calculator },
  { label: "Física", Icon: BookOpen },
  { label: "FluidSIM", Icon: CircuitBoard },
  { label: "Proteus", Icon: MonitorPlay },
]

export default function SectionTutoring({ show, onClose }) {
  const { isDark, toggleDarkMode } = useTheme()
  const dialogRef = useRef(null)
  useFocusTrap(dialogRef, show)

  useEffect(() => {
    if (!show || !dialogRef.current) return
    dialogRef.current.scrollTo({ top: 0, behavior: "auto" })
  }, [show])

  const headerButton = isDark
    ? "border-white/15 bg-white/5 text-zinc-100 hover:border-cyan-300/45 hover:bg-cyan-300/10"
    : "border-slate-900/15 bg-white/55 text-slate-800 hover:border-cyan-700/35 hover:bg-white"

  const cardStyle = isDark
    ? "border-cyan-300/18 bg-white/[0.055] shadow-[0_18px_55px_rgba(0,0,0,.32)]"
    : "border-white/80 bg-white/55 shadow-[0_18px_55px_rgba(8,145,178,.10)]"

  return (
    <>
      {show ? (
        <Head>
          <title>Tutorías y recursos — devMauriz</title>
          <meta
            name="description"
            content="Tutorías de matemáticas y física, preparación PAES y recursos de FluidSIM, Proteus y automatización con Maurizio Caballero."
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
        aria-labelledby="tutoring-title"
        className={`fixed inset-0 z-50 h-dvh w-full max-w-full overflow-x-hidden overflow-y-auto transition-transform duration-300 ease-out motion-reduce:transition-none ${
          show ? "translate-y-0" : "translate-y-full"
        } ${isDark ? "dark bg-zinc-950 text-white" : "bg-slate-100 text-slate-900"}`}
      >
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,#22d3ee_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <header
          className={`sticky top-0 z-30 border-b p-4 backdrop-blur-xl ${
            isDark ? "border-white/10 bg-zinc-950/70" : "border-slate-300/60 bg-white/65"
          }`}
        >
          <div className="mx-auto flex min-h-14 max-w-6xl items-center gap-2 px-2 sm:px-4">
            <LogoMarkShimmer isDark={isDark} animated={show} className="mr-auto h-10 w-auto md:h-11" />

            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="Ir al canal de YouTube" title="YouTube" className={`grid h-9 w-9 place-items-center rounded-md border p-0 transition-colors ${headerButton}`}>
              <Youtube size={17} />
            </a>
            <a href={SUPERPROF_URL} target="_blank" rel="noopener noreferrer" aria-label="Ir al perfil de Superprof" title="Superprof" className={`grid h-9 w-9 place-items-center rounded-md border p-0 transition-colors ${headerButton}`}>
              <GraduationCap size={17} />
            </a>
            <button type="button" onClick={onClose} aria-label="Cerrar tutorías" title="Cerrar" className={`grid h-9 w-9 place-items-center rounded-md border p-0 transition-colors ${headerButton}`}>
              <CloseIcon size={17} />
            </button>
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className={`relative inline-flex h-7 w-11 shrink-0 items-center rounded-full border transition-colors ${
                isDark ? "justify-end border-cyan-400/60 bg-cyan-700" : "justify-start border-cyan-900/40 bg-cyan-200"
              }`}
            >
              <span className="mx-1 grid h-5 w-5 place-items-center rounded-full bg-white shadow">
                {isDark ? <Sun size={12} className="text-amber-500" /> : <Moon size={12} className="text-cyan-700" />}
              </span>
            </button>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-6xl px-4 py-10 pb-[calc(7rem+env(safe-area-inset-bottom,0px))] sm:px-6 md:py-16">
          <header className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-400/10 px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-200">
              <GraduationCap size={16} />
              Tutorías y recursos
            </div>
            <h1 id="tutoring-title" className="font-azonix text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Aprender entendiendo,
              <span className="block text-cyan-600 dark:text-cyan-300">practicar construyendo.</span>
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-slate-700 dark:text-zinc-300 md:text-lg">
              Ofrezco acompañamiento en matemáticas y física para enseñanza media y preparación PAES, combinando explicaciones claras, resolución guiada de ejercicios y recursos técnicos aplicados.
            </p>
          </header>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {topics.map(({ label, Icon }) => (
              <div key={label} className={`flex items-center gap-2 rounded-xl border px-3 py-3 font-sans text-sm font-bold backdrop-blur-md ${cardStyle}`}>
                <Icon size={18} className="shrink-0 text-cyan-600 dark:text-cyan-300" />
                {label}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <article className={`rounded-2xl border p-5 backdrop-blur-xl sm:p-7 ${cardStyle}`}>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400/12 text-cyan-600 dark:text-cyan-300">
                  <GraduationCap size={23} />
                </span>
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">Clases personalizadas</p>
                  <h2 className="mt-1 font-azonix text-xl font-black">Perfil en Superprof</h2>
                </div>
              </div>
              <p className="mt-5 font-sans text-sm leading-relaxed text-slate-700 dark:text-zinc-300 sm:text-base">
                Mi perfil confirmado ofrece clases presenciales y online de matemáticas y física para enseñanza media y preparación PAES, con una metodología adaptada al ritmo y objetivo de cada estudiante.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 font-sans text-xs font-bold">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1.5">Presencial y online</span>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1.5">Enseñanza media</span>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1.5">Preparación PAES</span>
              </div>
              <a href={SUPERPROF_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-sans text-sm font-bold text-white transition-colors hover:bg-cyan-500">
                Ver perfil en Superprof
                <ExternalLink size={16} />
              </a>
            </article>

            <article className={`rounded-2xl border p-5 backdrop-blur-xl sm:p-7 ${cardStyle}`}>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-500/10 text-red-600 dark:text-red-300">
                  <PlayCircle size={24} />
                </span>
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">Contenido abierto</p>
                  <h2 className="mt-1 font-azonix text-xl font-black">Canal Devmauri</h2>
                </div>
              </div>
              <p className="mt-5 font-sans text-sm leading-relaxed text-slate-700 dark:text-zinc-300 sm:text-base">
                En YouTube comparto clases y tutoriales de FluidSIM, Proteus, resolución de ejercicios matemáticos y físicos, además de otros aprendizajes relacionados con tecnología y automatización.
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                Es una biblioteca en crecimiento donde documento procedimientos paso a paso para que puedan revisarse y practicarse con calma.
              </p>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-sans text-sm font-bold text-white transition-colors hover:bg-red-500">
                Visitar canal de YouTube
                <ExternalLink size={16} />
              </a>
            </article>
          </div>

          <section className={`mt-6 rounded-2xl border p-5 backdrop-blur-xl sm:p-7 ${cardStyle}`}>
            <h2 className="font-azonix text-xl font-black">¿Necesitas apoyo con una materia?</h2>
            <p className="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-slate-700 dark:text-zinc-300 sm:text-base">
              Cuéntame qué contenido necesitas reforzar, tu nivel y el objetivo de la clase. Podemos revisar disponibilidad y definir un plan de trabajo enfocado en comprender y aplicar, no solo memorizar.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-600 px-5 py-3 font-sans text-sm font-bold text-white shadow-[0_10px_30px_rgba(5,150,105,.2)] transition-colors hover:bg-emerald-500">
              Consultar por una tutoría
              <ExternalLink size={16} />
            </a>
          </section>
        </main>
      </section>
    </>
  )
}

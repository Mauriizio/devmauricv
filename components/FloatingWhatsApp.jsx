"use client"

import { useRouter } from "next/router"

const WHATSAPP_URL =
  "https://wa.me/56935446606?text=Hola%20Maurizio%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo."

export default function FloatingWhatsApp() {
  const router = useRouter()

  if (router.query?.view === "contact") return null

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Maurizio por WhatsApp"
      title="Contactar por WhatsApp"
      className="group fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-4 z-[10000] flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-emerald-600 text-white shadow-[0_8px_28px_rgba(5,150,105,.42)] transition-[transform,background-color,box-shadow] duration-200 hover:scale-105 hover:bg-emerald-500 hover:shadow-[0_10px_34px_rgba(5,150,105,.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 active:scale-95 motion-reduce:transition-none sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 256 256" className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor" aria-hidden="true">
        <path d="M128 24a104 104 0 0 0-89.8 156.3L24 232l52.7-13.7A104 104 0 1 0 128 24Zm0 16a88 88 0 0 1 73 137.5l-3.4 5 2.1 34.8-32.9-8.5-5.2 3A88 88 0 1 1 128 40Zm45.4 115.7c-2.6 7.5-12.8 12.1-20.6 12.5-7.6.4-17.3-1.7-31.6-9.5-18.1-10-29.7-26.4-32.2-31.1-2.6-4.8-7.7-15.6-5.8-26.3 2-10.7 9.8-15.9 13-16.5s6.7-.3 9.6 6.6 7.9 19.3 8.6 20.7c.7 1.3 1.1 2.9.2 4.6-.9 1.6-1.3 2.6-2.6 4.1-1.3 1.6-2.7 3.6-3.8 4.8-1.3 1.3-2.6 2.7-1.1 5.3 1.6 2.6 7.2 11.9 15.5 19.2 10.6 9.3 19.5 12.2 22.4 13.5 2.9 1.3 4.6 1.1 6.3-.7 1.6-1.8 7.4-8.6 9.4-11.6 2-3 4.1-2.4 6.8-1.4 2.8 1 17.5 8.2 20.5 9.9 3 1.6 5 2.4 4.3 4.8Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-zinc-950/90 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        Escríbeme por WhatsApp
      </span>
    </a>
  )
}

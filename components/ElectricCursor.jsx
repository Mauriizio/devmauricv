import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/context/ThemeContext"

const DESKTOP_CURSOR_QUERY = "(hover: hover) and (pointer: fine)"
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"
const TRAIL_LIFETIME_MS = 170
const MAX_TRAIL_POINTS = 11

function isTextEntryTarget(target) {
  return target instanceof Element && Boolean(
    target.closest('input, textarea, select, [contenteditable="true"]')
  )
}

function drawElectricSegment(ctx, from, to, alpha, isDark) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const distance = Math.hypot(dx, dy)
  if (distance < 2 || distance > 140) return

  const normalX = -dy / distance
  const normalY = dx / distance
  const jitter = (Math.random() - 0.5) * Math.min(10, distance * 0.32)
  const midX = (from.x + to.x) / 2 + normalX * jitter
  const midY = (from.y + to.y) / 2 + normalY * jitter

  ctx.beginPath()
  ctx.moveTo(from.x, from.y)
  ctx.lineTo(midX, midY)
  ctx.lineTo(to.x, to.y)
  ctx.lineCap = "round"
  ctx.strokeStyle = isDark
    ? `rgba(75, 170, 255, ${alpha * 0.34})`
    : `rgba(0, 55, 210, ${alpha * 0.22})`
  ctx.lineWidth = isDark ? 3 : 2.25
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(from.x, from.y)
  ctx.lineTo(midX, midY)
  ctx.lineTo(to.x, to.y)
  ctx.strokeStyle = isDark
    ? `rgba(235, 250, 255, ${alpha})`
    : `rgba(0, 40, 190, ${alpha * 0.85})`
  ctx.lineWidth = isDark ? 0.9 : 0.75
  ctx.stroke()
}

export default function ElectricCursor() {
  const { isDark } = useTheme()
  const canvasRef = useRef(null)
  const cursorRef = useRef(null)
  const isDarkRef = useRef(isDark)
  const stateRef = useRef({ points: [], raf: null, visible: false })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    isDarkRef.current = isDark
  }, [isDark])

  useEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_CURSOR_QUERY)
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY)
    const updateEnabled = () => setEnabled(desktopQuery.matches && !reducedMotionQuery.matches)

    updateEnabled()
    desktopQuery.addEventListener("change", updateEnabled)
    reducedMotionQuery.addEventListener("change", updateEnabled)

    return () => {
      desktopQuery.removeEventListener("change", updateEnabled)
      reducedMotionQuery.removeEventListener("change", updateEnabled)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const canvas = canvasRef.current
    const cursor = cursorRef.current
    const ctx = canvas?.getContext("2d", { alpha: true })
    if (!canvas || !cursor || !ctx) return undefined

    const root = document.documentElement
    const state = stateRef.current
    root.classList.add("electric-cursor-active")

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      state.points = []
    }

    const stop = () => {
      if (state.raf) cancelAnimationFrame(state.raf)
      state.raf = null
      state.points = []
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    const draw = (timestamp) => {
      state.points = state.points.filter((point) => timestamp - point.time < TRAIL_LIFETIME_MS)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let index = 0; index < state.points.length - 1; index += 1) {
        const point = state.points[index]
        const nextPoint = state.points[index + 1]
        const age = timestamp - point.time
        const fade = Math.max(0, 1 - age / TRAIL_LIFETIME_MS)
        const positionFade = 1 - index / MAX_TRAIL_POINTS
        drawElectricSegment(ctx, point, nextPoint, fade * positionFade * 0.8, isDarkRef.current)
      }

      if (state.points.length > 1 && state.visible) {
        state.raf = requestAnimationFrame(draw)
      } else {
        state.raf = null
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    const start = () => {
      if (!state.raf) state.raf = requestAnimationFrame(draw)
    }

    const onPointerMove = (event) => {
      if (isTextEntryTarget(event.target)) {
        cursor.style.opacity = "0"
        state.visible = false
        stop()
        return
      }

      const point = { x: event.clientX, y: event.clientY, time: performance.now() }
      const previousPoint = state.points[0]
      cursor.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`
      cursor.style.opacity = "1"
      state.visible = true

      if (!previousPoint || Math.hypot(point.x - previousPoint.x, point.y - previousPoint.y) >= 3) {
        state.points.unshift(point)
        if (state.points.length > MAX_TRAIL_POINTS) state.points.length = MAX_TRAIL_POINTS
      }

      start()
    }

    const hide = () => {
      cursor.style.opacity = "0"
      state.visible = false
      stop()
    }

    resize()
    window.addEventListener("resize", resize, { passive: true })
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    document.addEventListener("mouseleave", hide)
    window.addEventListener("blur", hide)

    return () => {
      stop()
      root.classList.remove("electric-cursor-active")
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("mouseleave", hide)
      window.removeEventListener("blur", hide)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2147483646]"
      />
      <span
        ref={cursorRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[2147483647] opacity-0 ${
          isDark ? "text-cyan-200" : "text-blue-800"
        }`}
        style={{
          width: 17,
          height: 11,
          marginLeft: -8.5,
          marginTop: -5.5,
          transform: "translate3d(-40px, -40px, 0)",
          transition: "opacity 70ms linear",
          willChange: "transform",
          filter: isDark
            ? "drop-shadow(0 0 5px rgba(103, 232, 249, .9))"
            : "drop-shadow(0 0 3px rgba(29, 78, 216, .55))",
        }}
      >
        <svg viewBox="0 0 76.68 44.67" className="h-full w-full" fill="currentColor">
          <path d="M0 44.66h9.9l16.29-27.02 15.26 27.03 35.23-.03-5.11-8.02-30.89.02 10.64-19h9.81L51.32 0 38.68 20.38 26.18.11Z" />
        </svg>
      </span>
      <style jsx global>{`
        html.electric-cursor-active,
        html.electric-cursor-active body,
        html.electric-cursor-active body *:not(input):not(textarea):not(select):not([contenteditable="true"]) {
          cursor: none;
        }

        html.electric-cursor-active input,
        html.electric-cursor-active textarea,
        html.electric-cursor-active select,
        html.electric-cursor-active [contenteditable="true"] {
          cursor: auto;
        }
      `}</style>
    </>
  )
}

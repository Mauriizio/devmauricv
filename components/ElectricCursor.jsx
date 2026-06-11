import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/context/ThemeContext"

const LOGO_W = 76.68
const LOGO_H = 44.67
const LOGO_VERTS = [
  [0, 44.66],
  [9.9, 44.66],
  [26.19, 17.64],
  [41.45, 44.67],
  [76.68, 44.64],
  [71.57, 36.62],
  [40.68, 36.64],
  [51.32, 17.64],
  [61.13, 17.64],
  [51.32, 0],
  [38.68, 20.38],
  [26.18, 0.11],
]
const TRAIL_LEN = 32
const DESKTOP_CURSOR_QUERY = "(hover: hover) and (pointer: fine)"
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

function bolt(x1, y1, x2, y2, roughness, depth, out) {
  if (depth === 0) {
    out.push(x1, y1, x2, y2)
    return
  }

  const len = Math.hypot(x2 - x1, y2 - y1)
  const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * len * roughness
  const my = (y1 + y2) / 2 + (Math.random() - 0.5) * len * roughness

  bolt(x1, y1, mx, my, roughness, depth - 1, out)
  bolt(mx, my, x2, y2, roughness, depth - 1, out)

  if (depth === 3 && Math.random() < 0.35) {
    const bx = mx + (Math.random() - 0.5) * len * 0.3
    const by = my + (Math.random() - 0.5) * len * 0.3
    bolt(mx, my, bx, by, roughness, depth - 2, out)
  }
}

function strokeBolt(ctx, pts, lineW, glowW, glowColor, coreColor, shadowColor, shadowBlur) {
  ctx.lineCap = "round"

  if (glowW > 0) {
    ctx.strokeStyle = glowColor
    ctx.lineWidth = glowW
    ctx.shadowColor = shadowColor
    ctx.shadowBlur = 12
    ctx.beginPath()

    for (let i = 0; i < pts.length; i += 4) {
      ctx.moveTo(pts[i], pts[i + 1])
      ctx.lineTo(pts[i + 2], pts[i + 3])
    }

    ctx.stroke()
  }

  ctx.strokeStyle = coreColor
  ctx.lineWidth = lineW
  ctx.shadowColor = shadowColor
  ctx.shadowBlur = shadowBlur
  ctx.beginPath()

  for (let i = 0; i < pts.length; i += 4) {
    ctx.moveTo(pts[i], pts[i + 1])
    ctx.lineTo(pts[i + 2], pts[i + 3])
  }

  ctx.stroke()
  ctx.shadowBlur = 0
}

function drawArc(ctx, x1, y1, x2, y2, rough, depth, alpha, glowW, isDark) {
  const pts = []
  bolt(x1, y1, x2, y2, rough, depth, pts)

  const glowColor = isDark ? `rgba(80, 160, 255, ${alpha * 0.28})` : `rgba(0, 40, 200, ${alpha * 0.2})`
  const coreColor = isDark ? `rgba(245, 250, 255, ${alpha})` : `rgba(0, 40, 200, ${alpha * 0.78})`
  const shadowColor = isDark ? "#aad4ff" : "#0040ff"

  strokeBolt(ctx, pts, isDark ? 0.95 : 0.8, glowW, glowColor, coreColor, shadowColor, isDark ? 7 : 3)
}

function drawLogoShape(ctx, cx, cy, scale, alpha, glow, isDark) {
  ctx.save()
  ctx.translate(cx - (LOGO_W * scale) / 2, cy - (LOGO_H * scale) / 2)
  ctx.scale(scale, scale)
  ctx.beginPath()
  ctx.moveTo(LOGO_VERTS[0][0], LOGO_VERTS[0][1])

  for (let i = 1; i < LOGO_VERTS.length; i++) {
    ctx.lineTo(LOGO_VERTS[i][0], LOGO_VERTS[i][1])
  }

  ctx.closePath()

  if (glow) {
    ctx.shadowColor = isDark ? "#55aaff" : "#0044ff"
    ctx.shadowBlur = isDark ? 10 : 5
  }

  ctx.fillStyle = isDark ? `rgba(170, 210, 255, ${alpha})` : `rgba(0, 0, 150, ${alpha})`
  ctx.fill()
  ctx.shadowBlur = 0
  ctx.restore()
}

function isDesktopCursorEnabled() {
  if (typeof window === "undefined") return false

  return window.matchMedia(DESKTOP_CURSOR_QUERY).matches && !window.matchMedia(REDUCED_MOTION_QUERY).matches
}

function getCanvasPoint(event, dpr) {
  return {
    x: event.clientX * dpr,
    y: event.clientY * dpr,
  }
}

function isTextEntryTarget(target) {
  if (!(target instanceof Element)) return false

  return Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
}

export default function ElectricCursor({ trailIntensity = 0.4 }) {
  const { isDark } = useTheme()
  const canvasRef = useRef(null)
  const isDarkRef = useRef(isDark)
  const trailIntensityRef = useRef(trailIntensity)
  const stateRef = useRef({
    dpr: 1,
    mx: -999,
    my: -999,
    inside: false,
    textEntryTarget: false,
    flick: 1,
    flickT: 0,
    raf: null,
    trail: Array.from({ length: TRAIL_LEN }, () => ({ x: -999, y: -999 })),
  })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    isDarkRef.current = isDark
  }, [isDark])

  useEffect(() => {
    trailIntensityRef.current = trailIntensity
  }, [trailIntensity])

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

    const root = document.documentElement
    root.classList.add("electric-cursor-active")

    return () => {
      root.classList.remove("electric-cursor-active")
    }
  }, [enabled])

  useEffect(() => {
    if (!enabled) return undefined

    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    if (!canvas || !ctx) return undefined

    const state = stateRef.current

    const resize = () => {
      state.dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      canvas.width = Math.ceil(window.innerWidth * state.dpr)
      canvas.height = Math.ceil(window.innerHeight * state.dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    const clearTrail = () => {
      state.trail = Array.from({ length: TRAIL_LEN }, () => ({ x: -999, y: -999 }))
    }

    const onPointerMove = (event) => {
      const point = getCanvasPoint(event, state.dpr)
      state.mx = point.x
      state.my = point.y
      state.inside = true
      state.textEntryTarget = isTextEntryTarget(event.target)
    }

    const onPointerLeave = () => {
      state.inside = false
      state.mx = -999
      state.my = -999
      state.textEntryTarget = false
    }

    const drawFrame = () => {
      if (document.hidden || !isDesktopCursorEnabled()) {
        state.raf = null
        return
      }

      const width = canvas.width
      const height = canvas.height
      const dark = isDarkRef.current
      const intensity = trailIntensityRef.current

      state.flickT -= 1

      if (state.flickT <= 0) {
        state.flick = 0.68 + Math.random() * 0.32
        state.flickT = 3 + Math.floor(Math.random() * 6)
      }

      if (state.inside && !state.textEntryTarget) {
        state.trail.unshift({ x: state.mx, y: state.my })
      } else {
        state.trail.unshift({ x: -999, y: -999 })
      }

      state.trail.pop()
      ctx.clearRect(0, 0, width, height)

      if (state.inside && !state.textEntryTarget && intensity > 0.01) {
        ctx.save()

        if (dark) {
          ctx.globalCompositeOperation = "screen"
        }

        for (let i = 1; i < TRAIL_LEN - 1; i++) {
          const a = state.trail[i]
          const b = state.trail[i + 1]

          if (a.x < 0 || b.x < 0) continue

          const dist = Math.hypot(a.x - b.x, a.y - b.y)

          if (dist < 4 * state.dpr || dist > 150 * state.dpr) continue

          const segAlpha = (1 - i / TRAIL_LEN) * intensity * state.flick

          if (segAlpha < 0.018) continue

          const depth = dist > 70 * state.dpr ? 3 : dist > 30 * state.dpr ? 2 : 1
          const rough = 0.34 + intensity * 0.1
          const glowW = dark ? 1.2 + intensity * 1.8 : 0.8 + intensity

          drawArc(ctx, a.x, a.y, b.x, b.y, rough, depth, segAlpha * 0.72, glowW * state.dpr, dark)
        }

        ctx.restore()
        drawLogoShape(ctx, state.mx, state.my, 0.2 * state.dpr, dark ? 0.9 : 0.82, true, dark)
      }

      state.raf = requestAnimationFrame(drawFrame)
    }

    const startFrame = () => {
      if (!state.raf && !document.hidden && isDesktopCursorEnabled()) {
        state.raf = requestAnimationFrame(drawFrame)
      }
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (state.raf) cancelAnimationFrame(state.raf)
        state.raf = null
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      } else {
        clearTrail()
        startFrame()
      }
    }

    resize()
    clearTrail()
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    document.addEventListener("mouseleave", onPointerLeave)
    document.addEventListener("visibilitychange", onVisibilityChange)
    startFrame()

    return () => {
      if (state.raf) cancelAnimationFrame(state.raf)
      state.raf = null
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("mouseleave", onPointerLeave)
      document.removeEventListener("visibilitychange", onVisibilityChange)
      clearTrail()
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="electric-cursor-canvas pointer-events-none"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
      />
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

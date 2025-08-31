// components/useFocusTrap.js
import { useEffect } from "react"

export function useFocusTrap(ref, active) {
  useEffect(() => {
    if (!active || !ref?.current) return
    const root = ref.current
    const focusables = () => root.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    const firstFocus = () => { const f = focusables()[0]; f?.focus() }

    const onKeyDown = (e) => {
      if (e.key !== "Tab") return
      const nodes = Array.from(focusables())
      if (!nodes.length) return
      const first = nodes[0], last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }

    firstFocus()
    root.addEventListener("keydown", onKeyDown)
    return () => root.removeEventListener("keydown", onKeyDown)
  }, [ref, active])
}

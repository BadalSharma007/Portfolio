import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const el = document.getElementById('cursor-glow')
    if (!el) return

    let raf
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let currentX = mouseX
    let currentY = mouseY

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      currentX = lerp(currentX, mouseX, 0.08)
      currentY = lerp(currentY, mouseY, 0.08)
      el.style.transform = `translate(${currentX - 240}px, ${currentY - 240}px)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div id="cursor-glow" aria-hidden="true" />
}

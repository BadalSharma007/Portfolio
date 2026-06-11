import { useEffect, useRef } from 'react'

export default function ScrollCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let scrollY = 0
    let targetScrollY = 0
    let lastScrollY = 0
    let scrollVelocity = 0

    // --- Stars ---
    const STAR_COUNT = 180
    const stars = []

    // --- Meteors triggered by scroll ---
    const meteors = []
    let lastMeteorScroll = 0

    // --- Aurora orbs ---
    const orbs = [
      { bx: 0.12, by: 0.25, r: 0.40, color: '59,130,246',  t: 0 },
      { bx: 0.82, by: 0.65, r: 0.35, color: '6,182,212',   t: 2 },
      { bx: 0.50, by: 1.20, r: 0.30, color: '139,92,246',  t: 4 },
      { bx: 0.88, by: 0.12, r: 0.25, color: '99,102,241',  t: 1 },
    ]

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      stars.length  = 0

      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x:     Math.random() * canvas.width,
          y:     Math.random() * canvas.height,
          baseY: 0,
          vx:    (Math.random() - 0.5) * 0.15,
          vy:    (Math.random() - 0.5) * 0.15,
          r:     Math.random() * 1.4 + 0.3,
          depth: Math.random() * 0.7 + 0.15,
          alpha: Math.random() * 0.5 + 0.3,
        })
        stars[stars.length - 1].baseY = stars[stars.length - 1].y
      }
    }

    function spawnMeteor(fast) {
      // meteors fall top-right → bottom-left
      const side = Math.random() > 0.5
      const sx = side ? Math.random() * canvas.width * 0.7 : Math.random() * canvas.width
      const sy = side ? 0 : Math.random() * -200
      const speed = fast ? (Math.random() * 10 + 8) : (Math.random() * 5 + 3)
      meteors.push({
        x: sx, y: sy,
        vx: speed * -0.5,
        vy: speed,
        len: Math.random() * 180 + 80,
        alpha: 1,
        decay: Math.random() * 0.008 + 0.004,
        width: Math.random() * 1.5 + 0.5,
      })
    }

    function drawOrbs(t) {
      orbs.forEach(orb => {
        const cx = orb.bx * canvas.width  + Math.sin(t * 0.0003 + orb.t) * 60
        const cy = orb.by * canvas.height + Math.cos(t * 0.0002 + orb.t) * 40 - scrollY * 0.10
        const radius = orb.r * Math.min(canvas.width, canvas.height)

        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        g.addColorStop(0,   `rgba(${orb.color},0.16)`)
        g.addColorStop(0.5, `rgba(${orb.color},0.05)`)
        g.addColorStop(1,   `rgba(${orb.color},0)`)

        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })
    }

    function drawGrid() {
      const gs = 90
      const offsetY = (scrollY * 0.06) % gs
      ctx.strokeStyle = 'rgba(59,130,246,0.035)'
      ctx.lineWidth = 0.5
      for (let x = 0; x <= canvas.width; x += gs) {
        ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = -gs + offsetY; y <= canvas.height + gs; y += gs) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }
    }

    function drawStars() {
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        // gentle drift
        s.x += s.vx; s.y += s.vy
        if (s.x < 0) s.x = canvas.width
        if (s.x > canvas.width) s.x = 0
        if (s.y < 0) s.y = canvas.height
        if (s.y > canvas.height) s.y = 0

        // parallax: near stars (high depth) move more with scroll
        const py = (s.y - scrollY * s.depth * 0.12 % canvas.height + canvas.height * 10) % canvas.height

        ctx.beginPath()
        ctx.arc(s.x, py, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,215,255,${s.alpha})`
        ctx.fill()

        // connect close neighbours
        for (let j = i + 1; j < stars.length; j++) {
          const t = stars[j]
          const ty = (t.y - scrollY * t.depth * 0.12 % canvas.height + canvas.height * 10) % canvas.height
          const d = Math.hypot(s.x - t.x, py - ty)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(s.x, py); ctx.lineTo(t.x, ty)
            ctx.strokeStyle = `rgba(99,130,246,${0.10 * (1 - d/110)})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }
    }

    function drawMeteors() {
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        m.x += m.vx; m.y += m.vy
        m.alpha -= m.decay

        if (m.alpha <= 0 || m.y > canvas.height + 100 || m.x < -200) {
          meteors.splice(i, 1); continue
        }

        const speed = Math.hypot(m.vx, m.vy)
        const tailX = m.x - (m.vx / speed) * m.len
        const tailY = m.y - (m.vy / speed) * m.len

        const g = ctx.createLinearGradient(tailX, tailY, m.x, m.y)
        g.addColorStop(0, `rgba(255,255,255,0)`)
        g.addColorStop(0.7, `rgba(180,210,255,${m.alpha * 0.5})`)
        g.addColorStop(1, `rgba(255,255,255,${m.alpha})`)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY); ctx.lineTo(m.x, m.y)
        ctx.strokeStyle = g
        ctx.lineWidth = m.width
        ctx.stroke()

        // bright tip
        const tipGlow = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 6)
        tipGlow.addColorStop(0, `rgba(220,240,255,${m.alpha})`)
        tipGlow.addColorStop(1, `rgba(220,240,255,0)`)
        ctx.beginPath()
        ctx.arc(m.x, m.y, 6, 0, Math.PI * 2)
        ctx.fillStyle = tipGlow
        ctx.fill()
      }
    }

    let lastT = 0
    function tick(t) {
      const dt = t - lastT
      lastT = t

      // smooth lerp scroll
      scrollY += (targetScrollY - scrollY) * 0.07
      scrollVelocity = targetScrollY - lastScrollY
      lastScrollY = targetScrollY

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawGrid()
      drawOrbs(t)
      drawStars()
      drawMeteors()

      animId = requestAnimationFrame(tick)
    }

    let scrollTimeout
    const onScroll = () => {
      const newY = window.scrollY
      const delta = Math.abs(newY - targetScrollY)
      targetScrollY = newY

      // spawn meteors on fast scroll
      if (delta > 30 && Math.abs(newY - lastMeteorScroll) > 60) {
        const count = Math.min(4, Math.floor(delta / 40))
        for (let i = 0; i < count; i++) {
          setTimeout(() => spawnMeteor(delta > 80), i * 120)
        }
        lastMeteorScroll = newY
      }
    }

    // ambient meteors every ~5s when idle
    const ambientInterval = setInterval(() => spawnMeteor(false), 5000)

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })
    animId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(ambientInterval)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

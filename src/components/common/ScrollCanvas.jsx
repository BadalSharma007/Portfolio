import { useEffect, useRef } from 'react'

export default function ScrollCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let scrollY = 0
    let targetScrollY = 0

    // --- Particles ---
    const NUM_PARTICLES = 120
    const particles = []

    // --- Shooting stars ---
    const shootingStars = []
    let nextShoot = 0

    // --- Aurora orbs ---
    const orbs = [
      { x: 0.15, y: 0.2,  r: 0.35, color: '59,130,246',  speed: 0.00012 },
      { x: 0.80, y: 0.7,  r: 0.30, color: '6,182,212',   speed: 0.00009 },
      { x: 0.5,  y: 1.1,  r: 0.28, color: '139,92,246',  speed: 0.00015 },
      { x: 0.85, y: 0.15, r: 0.22, color: '99,102,241',  speed: 0.00010 },
    ]

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      particles.length = 0
      for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.5 + 0.4,
          depth: Math.random() * 0.8 + 0.2,   // parallax depth (0.2 = far, 1 = close)
          baseY: 0,
        })
        particles[particles.length - 1].baseY = particles[particles.length - 1].y
      }
    }

    function spawnShootingStar() {
      const startX = Math.random() * canvas.width * 1.5 - canvas.width * 0.25
      shootingStars.push({
        x: startX,
        y: -10,
        vx: Math.random() * 3 + 2,
        vy: Math.random() * 3 + 2,
        len: Math.random() * 120 + 60,
        alpha: 1,
        decay: Math.random() * 0.012 + 0.008,
      })
    }

    function drawOrbs(t) {
      orbs.forEach((orb) => {
        const pulse = Math.sin(t * orb.speed * 1000) * 0.06
        const cx = orb.x * canvas.width
        // aurora orbs shift slowly with scroll (deep parallax)
        const cy = orb.y * canvas.height - scrollY * 0.12 + Math.sin(t * orb.speed * 600) * 40
        const radius = (orb.r * Math.min(canvas.width, canvas.height)) * (1 + pulse)

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        grad.addColorStop(0, `rgba(${orb.color}, 0.18)`)
        grad.addColorStop(0.5, `rgba(${orb.color}, 0.06)`)
        grad.addColorStop(1, `rgba(${orb.color}, 0)`)

        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })
    }

    function drawParticles() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Scroll parallax: closer particles move more
        const parallaxOffset = scrollY * p.depth * 0.15
        const drawY = (p.y - parallaxOffset % canvas.height + canvas.height) % canvas.height

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const alpha = 0.3 + p.depth * 0.5
        ctx.beginPath()
        ctx.arc(p.x, drawY, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const qDrawY = (q.y - scrollY * q.depth * 0.15 % canvas.height + canvas.height) % canvas.height
          const dist = Math.hypot(p.x - q.x, drawY - qDrawY)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, drawY)
            ctx.lineTo(q.x, qDrawY)
            ctx.strokeStyle = `rgba(99,130,246,${0.12 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    function drawShootingStars(t) {
      if (t > nextShoot) {
        spawnShootingStar()
        nextShoot = t + Math.random() * 4000 + 2000
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i]
        s.x += s.vx
        s.y += s.vy
        s.alpha -= s.decay

        if (s.alpha <= 0 || s.x > canvas.width + 200 || s.y > canvas.height + 200) {
          shootingStars.splice(i, 1)
          continue
        }

        const tailX = s.x - s.vx * s.len / Math.hypot(s.vx, s.vy)
        const tailY = s.y - s.vy * s.len / Math.hypot(s.vx, s.vy)

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y)
        grad.addColorStop(0, `rgba(255,255,255,0)`)
        grad.addColorStop(1, `rgba(255,255,255,${s.alpha})`)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(s.x, s.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Tip glow
        ctx.beginPath()
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 220, 255, ${s.alpha})`
        ctx.fill()
      }
    }

    function drawGrid() {
      const gridSize = 80
      const offsetY = (scrollY * 0.08) % gridSize

      ctx.strokeStyle = 'rgba(59,130,246,0.04)'
      ctx.lineWidth = 0.5

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = -gridSize + offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    let lastT = 0
    function tick(t) {
      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * 0.08
      const dt = t - lastT
      lastT = t

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawGrid()
      drawOrbs(t)
      drawParticles()
      drawShootingStars(t)

      animId = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      targetScrollY = window.scrollY
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })
    animId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animId)
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

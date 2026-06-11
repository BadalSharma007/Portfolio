import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Download, Mail, ChevronDown, Sparkles } from 'lucide-react'
import { PROFILE, TYPING_PHRASES, SOCIALS } from '../data/content'

// ─── Typing effect hook ─────────────────────────────────────
function useTyping(phrases, typeSpeed = 85, deleteSpeed = 42, pause = 1600) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index % phrases.length]
    let timeout
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        )
      }, deleting ? deleteSpeed : typeSpeed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause])
  return text
}

// ─── Floating particle dots ─────────────────────────────────
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1.5 + Math.random() * 2.5,
  delay: Math.random() * 4,
  dur: 4 + Math.random() * 4,
}))

export default function Hero() {
  const typed = useTyping(TYPING_PHRASES)
  const photoRef = useRef(null)

  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])

  const handleMouseMove = (e) => {
    const rect = photoRef.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    mouseX.set((e.clientX - cx) / (rect.width / 2))
    mouseY.set((e.clientY - cy) / (rect.height / 2))
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0) }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* ── Dot grid background ── */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* ── Aurora gradient orbs ── */}
      <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full bg-accent-primary/10 blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[520px] h-[520px] rounded-full bg-accent-purple/10 blur-[120px] animate-glow-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-secondary/5 blur-[150px] pointer-events-none" />

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-accent-light"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: 0.25 }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-8 items-center py-16">
        {/* ── Left 60% ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-3"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass-light border border-success/30 text-success text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-ping-slow" />
            Open to Internships & Collaborations
          </motion.div>

          <p className="text-accent-light font-mono text-base mb-3 tracking-widest uppercase opacity-80">
            Hey there, I'm
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-5 leading-[0.95]">
            <span className="gradient-text">{PROFILE.name.split(' ')[0]}</span>
            <br />
            <span className="text-txt-primary">{PROFILE.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          {/* Typing effect */}
          <div className="h-12 md:h-14 mb-6 flex items-center">
            <span className="text-xl md:text-2xl font-semibold text-txt-secondary font-mono">
              <span className="text-accent-light">&gt; </span>
              {typed}
              <span className="inline-block w-[3px] h-6 md:h-7 bg-accent-secondary ml-1 align-middle animate-pulse rounded-sm" />
            </span>
          </div>

          <p className="text-txt-secondary text-base md:text-lg max-w-xl leading-relaxed mb-8">
            Building language models, computer vision systems, and agentic AI pipelines.
            {' '}B.Tech CSE (AI &amp; ML) at Sharda University · <strong className="text-txt-primary font-medium">8.4 CGPA</strong>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={() => scrollTo('projects')}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent-gradient font-semibold shadow-lg shadow-accent-primary/30 hover:shadow-accent-primary/50 hover:-translate-y-0.5 transition-all text-white"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={PROFILE.resumeUrl}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-accent-primary/50 text-accent-light hover:bg-accent-primary/10 hover:border-accent-primary hover:-translate-y-0.5 transition-all font-medium"
            >
              <Download size={17} />
              Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-4 py-3 text-txt-secondary hover:text-accent-light transition-colors animated-underline font-medium"
            >
              <Mail size={17} />
              Contact
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            {SOCIALS.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="text-txt-muted hover:text-accent-light hover:scale-125 hover:-translate-y-1 transition-all duration-200"
                >
                  <Icon size={22} />
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* ── Right 40% — profile photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-2 flex justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={photoRef}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative w-[270px] h-[270px] sm:w-[310px] sm:h-[310px] md:w-[340px] md:h-[340px]"
          >
            {/* Multi-layer glow rings */}
            <div className="absolute -inset-6 rounded-full bg-accent-purple/15 blur-2xl animate-glow-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
            <div className="absolute -inset-3 rounded-full bg-accent-primary/20 blur-xl animate-glow-pulse pointer-events-none" />

            {/* Spinning conic gradient ring */}
            <div className="absolute inset-0 rounded-full gradient-ring animate-rotate-ring blur-[2px]" />
            <div className="absolute inset-[5px] rounded-full bg-bg-primary" />

            {/* Photo */}
            <div className="absolute inset-[9px] rounded-full overflow-hidden shadow-inner shadow-black/60">
              <img
                src="/IMG_2613.jpeg"
                alt="Badal Kumar Sharma"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating stat badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-14 -left-6 sm:-left-10 z-30 glass px-4 py-2 rounded-xl text-sm font-mono font-semibold text-accent-light shadow-2xl border border-accent-primary/20"
            >
              <span className="text-accent-secondary mr-1">⚡</span>LeetCode 1770
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-4 -right-4 sm:-right-8 z-30 glass px-4 py-2 rounded-xl text-sm font-semibold text-success shadow-2xl border border-success/20"
            >
              <span className="mr-1">🏆</span>Kaggle Expert
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-20 -left-6 sm:-left-10 z-30 glass px-4 py-2 rounded-xl text-sm font-mono font-semibold text-accent-purple shadow-2xl border border-accent-purple/20"
            >
              <span className="mr-1">🤖</span>CF 1054
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-10 -right-4 sm:-right-8 z-30 glass px-4 py-2 rounded-xl text-sm font-semibold text-warning shadow-2xl border border-warning/20"
            >
              <span className="mr-1">✨</span>AI Builder
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll down indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-txt-muted cursor-pointer group"
        onClick={() => scrollTo('about')}
      >
        <span className="text-xs tracking-widest uppercase font-mono group-hover:text-accent-light transition-colors">Scroll</span>
        <ChevronDown size={18} className="animate-bounce-arrow group-hover:text-accent-light transition-colors" />
      </motion.div>
    </section>
  )
}

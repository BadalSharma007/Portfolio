import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { PROFILE, TYPING_PHRASES, SOCIALS } from '../data/content'

// Typing effect hook.
function useTyping(phrases, typeSpeed = 90, deleteSpeed = 45, pause = 1400) {
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

export default function Hero() {
  const typed = useTyping(TYPING_PHRASES)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary/10 rounded-full blur-[100px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[100px] animate-glow-pulse pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
        {/* Left 60% */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <p className="text-accent-primary font-mono text-lg mb-3 tracking-wide">Hey there, I'm</p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight gradient-text mb-4 leading-none">
            {PROFILE.name}
          </h1>
          <div className="h-10 md:h-12 mb-6">
            <span className="text-2xl md:text-3xl font-semibold text-accent-light font-mono">
              {typed}
              <span className="inline-block w-[3px] h-7 md:h-8 bg-accent-light ml-1 align-middle animate-pulse" />
            </span>
          </div>
          <p className="text-txt-secondary text-base md:text-lg max-w-xl leading-relaxed mb-8">
            Building language models, computer vision systems, and agentic AI pipelines. B.Tech CSE
            (AI &amp; ML) at Sharda University.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={() => scrollTo('projects')}
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-gradient font-medium shadow-lg shadow-accent-primary/30 hover:shadow-accent-primary/50 hover:-translate-y-0.5 transition-all"
            >
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={PROFILE.resumeUrl}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-accent-primary text-accent-light hover:bg-accent-primary/10 transition-colors"
            >
              <Download size={18} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-2 py-3 text-txt-secondary hover:text-accent-light transition-colors"
            >
              <Mail size={18} /> Contact Me
            </button>
          </div>

          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-txt-secondary hover:text-accent-light hover:scale-125 transition-all"
                >
                  <Icon size={26} />
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* Right 40% */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
            {/* Rotating gradient ring */}
            <div className="absolute inset-0 rounded-full gradient-ring animate-spin-slow blur-[2px]" />
            <div className="absolute inset-[6px] rounded-full bg-bg-primary" />
            {/* Photo */}
            <div className="absolute inset-[10px] rounded-full overflow-hidden shadow-inner shadow-black/50">
              <img
                src="/IMG_2613.jpeg"
                alt="Badal Kumar Sharma"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badges */}
            {/* Top-Left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute top-16 -left-4 md:-left-8 z-30 glass px-4 py-2 rounded-xl text-sm font-mono font-semibold text-accent-light shadow-2xl"
            >
              LeetCode 1770
            </motion.div>

            {/* Top-Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-6 -right-2 md:-right-6 z-30 glass px-4 py-2 rounded-xl text-sm font-semibold text-success shadow-2xl"
            >
              Kaggle Expert
            </motion.div>

            {/* Bottom-Left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-20 -left-4 md:-left-8 z-30 glass px-4 py-2 rounded-xl text-sm font-mono font-semibold text-accent-secondary shadow-2xl"
            >
              Codeforces 1094
            </motion.div>

            {/* Bottom-Right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity }}
              className="absolute bottom-10 -right-2 md:-right-6 z-30 glass px-4 py-2 rounded-xl text-sm font-semibold text-warning shadow-2xl"
            >
              AI Engineer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

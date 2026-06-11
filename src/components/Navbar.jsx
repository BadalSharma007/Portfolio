import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Zap } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '../data/content'
import useScrollSpy from '../hooks/useScrollSpy'

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(NAV_LINKS.map((l) => l.href.replace('#', '')))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-400 ${
          scrolled
            ? 'glass shadow-2xl shadow-black/50 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* ── Logo ── */}
          <button
            onClick={() => handleClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center shadow-lg shadow-accent-primary/30 group-hover:shadow-accent-primary/50 group-hover:scale-105 transition-all duration-200">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="text-lg font-bold gradient-text tracking-tight">BKS</span>
          </button>

          {/* ── Desktop nav ── */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className={`relative px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                      isActive ? 'text-txt-primary font-semibold' : 'text-txt-secondary hover:text-txt-primary'
                    }`}
                  >
                    {/* Pill background for active */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-accent-primary/15 border border-accent-primary/25"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PROFILE.resumeUrl}
              className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl bg-accent-gradient text-white shadow-md shadow-accent-primary/25 hover:shadow-accent-primary/45 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-txt-primary hover:text-accent-light transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg-primary/92 lg:hidden flex flex-col items-center justify-center gap-2 px-8"
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-xl glass flex items-center justify-center text-txt-secondary hover:text-txt-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              <X size={22} />
            </button>

            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => handleClick(link.href)}
                className={`w-full max-w-xs text-center py-3 px-6 rounded-xl text-xl font-semibold transition-all duration-200 ${
                  active === link.href.replace('#', '')
                    ? 'bg-accent-primary/15 text-accent-light border border-accent-primary/25'
                    : 'text-txt-secondary hover:text-txt-primary hover:bg-white/5'
                }`}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.a
              href={PROFILE.resumeUrl}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
              className="mt-4 flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent-gradient font-semibold text-white shadow-lg shadow-accent-primary/30"
            >
              <Download size={18} /> Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

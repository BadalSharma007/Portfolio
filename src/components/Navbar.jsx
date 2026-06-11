import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '../data/content'
import useScrollSpy from '../hooks/useScrollSpy'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(NAV_LINKS.map((l) => l.href.replace('#', '')))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
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
        className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
          scrolled ? 'glass shadow-xl shadow-black/40 border-b-0' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => handleClick('#home')}
            className="text-xl font-bold gradient-text tracking-tight"
          >
            BKS
          </button>

          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className={`text-sm transition-colors relative ${
                      isActive ? 'text-accent-light font-semibold' : 'text-txt-secondary hover:text-txt-primary'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-gradient rounded-full"
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PROFILE.resumeUrl}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-accent-primary text-accent-light hover:bg-accent-primary/10 transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <button
            className="lg:hidden text-txt-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleClick(link.href)}
                className="text-2xl font-semibold text-txt-primary hover:text-accent-light transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href={PROFILE.resumeUrl}
              className="mt-4 flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-gradient font-medium"
            >
              <Download size={18} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

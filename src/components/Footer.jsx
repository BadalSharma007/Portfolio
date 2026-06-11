import { Heart, Zap, Github, ExternalLink } from 'lucide-react'
import { PROFILE, SOCIALS, NAV_LINKS } from '../data/content'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-bg-deep">
      {/* Subtle gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-accent-primary/60 blur-sm" />

      {/* Aurora glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* ── Brand col ── */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center shadow-lg shadow-accent-primary/30">
                <Zap size={15} className="text-white" fill="white" />
              </div>
              <span className="text-lg font-bold gradient-text">BKS</span>
            </div>
            <p className="text-txt-secondary text-sm leading-relaxed max-w-[220px]">
              AI/ML Engineer. Building language models, edge AI, and agentic systems.
            </p>
            <div className="flex items-center gap-4 mt-5">
              {SOCIALS.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="text-txt-muted hover:text-accent-light hover:scale-110 transition-all duration-200"
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href.replace('#', ''))}
                    className="text-sm text-txt-secondary hover:text-accent-light transition-colors animated-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact col ── */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-4">Get in Touch</h4>
            <p className="text-sm text-txt-secondary mb-3">
              Looking to collaborate or hire? Let's talk.
            </p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-sm font-mono text-accent-light hover:text-accent-secondary transition-colors break-all"
            >
              {PROFILE.email}
            </a>
            <div className="mt-5">
              <a
                href={PROFILE.resumeUrl}
                className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-accent-primary/40 text-accent-light hover:bg-accent-primary/10 transition-colors font-medium"
              >
                <ExternalLink size={13} /> View Resume
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-txt-muted">
          <p>© 2026 {PROFILE.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with
            <Heart size={12} className="text-accent-secondary" fill="currentColor" />
            React · Vite · Tailwind · Framer Motion
          </p>
          <p className="flex items-center gap-1.5">
            <Github size={12} />
            Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Heart } from 'lucide-react'
import { PROFILE } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-txt-secondary">
        <p>© 2026 {PROFILE.name}. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with <Heart size={14} className="text-accent-secondary" /> React + Vite + Tailwind + Framer Motion
        </p>
        <p>Deployed on GitHub Pages</p>
      </div>
    </footer>
  )
}

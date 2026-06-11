import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Send } from 'lucide-react'
import { PROFILE, SOCIALS } from '../data/content'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Visual-only: open mail client with prefilled content.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/60 to-bg-primary pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-txt-secondary text-lg mb-8">
          Open for internships, collaborations, and interesting AI projects
        </p>

        {/* Email copy */}
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 glass px-5 py-3 rounded-xl font-mono text-accent-light hover:-translate-y-0.5 transition-all mb-8"
        >
          {PROFILE.email}
          {copied ? <Check size={18} className="text-success" /> : <Copy size={18} />}
        </button>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mb-12">
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
                <Icon size={28} />
              </a>
            )
          })}
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 text-left space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-bg-primary/60 border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-bg-primary/60 border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary transition-colors"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-bg-primary/60 border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-gradient font-medium shadow-lg shadow-accent-primary/30 hover:shadow-accent-primary/50 hover:-translate-y-0.5 transition-all"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}

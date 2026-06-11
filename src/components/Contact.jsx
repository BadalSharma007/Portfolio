import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Send, Mail, MapPin, MessageCircle } from 'lucide-react'
import { PROFILE, SOCIALS } from '../data/content'

export default function Contact() {
  const [copied, setCopied]   = useState(false)
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch { /* clipboard unavailable */ }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'visitor'}`)
    const body    = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  const inputClass = (field) =>
    `w-full bg-bg-deep/80 border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-txt-muted ${
      focused === field
        ? 'border-accent-primary shadow-[0_0_0_3px_rgba(59,130,246,0.15)] text-txt-primary'
        : 'border-line text-txt-secondary hover:border-line/80'
    }`

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/50 to-bg-primary pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent-purple/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-accent-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent-light uppercase tracking-[0.22em] text-xs font-semibold mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's Build Something
            <span className="block gradient-text">Amazing Together</span>
          </h2>
          <p className="text-txt-secondary text-lg max-w-xl mx-auto">
            Open for internships, collaborations, and interesting AI projects
          </p>
        </motion.div>

        {/* ── Split layout ── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Left: Contact info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Info cards */}
            <div className="glass rounded-2xl p-5 border border-white/5 hover:border-accent-primary/20 transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent-primary/15 flex items-center justify-center">
                  <Mail size={16} className="text-accent-light" />
                </div>
                <span className="text-sm font-semibold text-txt-secondary uppercase tracking-wider">Email</span>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center justify-between w-full text-sm font-mono text-txt-primary hover:text-accent-light transition-colors gap-2"
              >
                <span className="truncate">{PROFILE.email}</span>
                {copied
                  ? <Check size={16} className="text-success shrink-0" />
                  : <Copy size={14} className="text-txt-muted shrink-0 group-hover:text-accent-light transition-colors" />
                }
              </button>
            </div>

            <div className="glass rounded-2xl p-5 border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent-purple/15 flex items-center justify-center">
                  <MapPin size={16} className="text-accent-purple" />
                </div>
                <span className="text-sm font-semibold text-txt-secondary uppercase tracking-wider">Location</span>
              </div>
              <p className="text-sm text-txt-primary font-medium">{PROFILE.location}</p>
            </div>

            <div className="glass rounded-2xl p-5 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent-secondary/15 flex items-center justify-center">
                  <MessageCircle size={16} className="text-accent-secondary" />
                </div>
                <span className="text-sm font-semibold text-txt-secondary uppercase tracking-wider">Social</span>
              </div>
              <div className="flex flex-wrap gap-3">
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
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-txt-muted hover:text-accent-light hover:scale-110 hover:-translate-y-0.5 transition-all duration-200 border border-white/5"
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability note */}
            <div className="glass rounded-2xl p-5 border border-success/20 bg-success/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse-soft" />
                <span className="text-success text-sm font-semibold">Available</span>
              </div>
              <p className="text-xs text-txt-secondary leading-relaxed">
                Currently open to AI/ML internships, research collaborations, and interesting project work.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8 border border-white/5 space-y-5"
            >
              <h3 className="text-lg font-bold mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-txt-muted mb-1.5 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className={inputClass('name')}
                  />
                </div>
                <div>
                  <label className="block text-xs text-txt-muted mb-1.5 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className={inputClass('email')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-txt-muted mb-1.5 uppercase tracking-wider">Message</label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass('message')} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-gradient font-semibold text-white shadow-lg shadow-accent-primary/30 hover:shadow-accent-primary/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Send size={17} />
                Send Message
              </button>

              <p className="text-xs text-txt-muted text-center">
                This will open your default email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

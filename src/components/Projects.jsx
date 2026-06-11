import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Lock, ArrowRight, Cpu, Brain, Eye, Bot, Layers, Trophy, Filter } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { PROJECTS } from '../data/content'

// Category → accent color + icon
const CATEGORY_META = {
  'Edge AI / Hardware':  { color: '#f59e0b', bg: 'from-amber-500/15 to-transparent',  icon: Cpu,    border: 'border-amber-500/30'  },
  'Production SaaS':     { color: '#22c55e', bg: 'from-emerald-500/12 to-transparent', icon: Layers, border: 'border-emerald-500/25' },
  'Deep Learning':       { color: '#EE4C2C', bg: 'from-red-500/12 to-transparent',     icon: Brain,  border: 'border-red-500/25'    },
  'Agentic AI':          { color: '#8b5cf6', bg: 'from-purple-500/12 to-transparent',  icon: Bot,    border: 'border-purple-500/25' },
  'Robotics / CV':       { color: '#06b6d4', bg: 'from-cyan-500/12 to-transparent',    icon: Eye,    border: 'border-cyan-500/25'   },
  'Computer Vision':     { color: '#3b82f6', bg: 'from-blue-500/12 to-transparent',    icon: Eye,    border: 'border-blue-500/25'   },
  'ML Competition':      { color: '#fbbf24', bg: 'from-yellow-500/12 to-transparent',  icon: Trophy, border: 'border-yellow-500/25' },
}

const FEATURED = ['Third Eye', 'GPT from Scratch', 'Remindee.ai']
const ALL_CATEGORIES = ['All', ...Object.keys(CATEGORY_META)]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      heading="Things I've built"
      subheading="From LLMs running on microcontrollers to production email assistants"
      className="bg-bg-secondary/30"
    >
      {/* ── Filter tabs ── */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {ALL_CATEGORIES.map((cat) => {
          const isActive = activeFilter === cat
          const meta = CATEGORY_META[cat]
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                isActive
                  ? 'text-white shadow-lg'
                  : 'glass text-txt-secondary hover:text-txt-primary hover:-translate-y-0.5'
              }`}
              style={isActive ? {
                background: meta
                  ? `linear-gradient(135deg, ${meta.color}cc, ${meta.color}88)`
                  : 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                boxShadow: meta ? `0 4px 20px ${meta.color}40` : '0 4px 20px rgba(59,130,246,0.4)',
              } : {}}
            >
              {cat !== 'All' && meta && (() => { const Icon = meta.icon; return <Icon size={12} /> })()}
              {cat}
            </button>
          )
        })}
      </div>

      {/* ── Project grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((p, i) => {
            const meta     = CATEGORY_META[p.category] ?? CATEGORY_META['Deep Learning']
            const CatIcon  = meta.icon
            const isFeat   = FEATURED.includes(p.name)
            const projNum  = String(PROJECTS.indexOf(p) + 1).padStart(2, '0')

            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                className={`group relative glass rounded-2xl overflow-hidden flex flex-col border ${meta.border} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
                style={{ '--hover-glow': `${meta.color}25` }}
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top, ${meta.color}15 0%, transparent 70%)` }}
                />

                {/* ── Card header ── */}
                <div className={`relative p-6 pb-4 bg-gradient-to-br ${meta.bg} overflow-hidden`}>
                  {/* Large faded project number */}
                  <span
                    className="absolute top-0 right-3 text-7xl font-black opacity-[0.06] font-mono leading-none select-none pointer-events-none"
                    style={{ color: meta.color }}
                  >
                    {projNum}
                  </span>

                  {/* Category + featured badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border"
                      style={{ color: meta.color, borderColor: `${meta.color}50`, background: `${meta.color}18` }}
                    >
                      <CatIcon size={11} />
                      {p.category}
                    </span>
                    {isFeat && (
                      <span className="text-xs font-bold featured-badge">★ Featured</span>
                    )}
                  </div>

                  {/* Project icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-lg"
                    style={{ background: `${meta.color}22`, border: `1px solid ${meta.color}40` }}
                  >
                    <CatIcon size={22} style={{ color: meta.color }} />
                  </div>

                  <h3 className="text-lg font-bold mb-1 group-hover:text-white transition-colors">{p.name}</h3>
                </div>

                {/* ── Card body ── */}
                <div className="p-5 pt-3 flex flex-col flex-1">
                  <p className="text-sm text-txt-secondary leading-relaxed mb-3 flex-1">{p.description}</p>

                  {p.highlight && (
                    <p className="text-xs font-semibold text-warning mb-4 flex items-center gap-1.5">
                      {p.highlight}
                    </p>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded-full font-mono"
                        style={{
                          background: `${meta.color}14`,
                          border: `1px solid ${meta.color}30`,
                          color: meta.color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                    {p.privateRepo ? (
                      <span className="flex items-center gap-1.5 text-xs text-txt-muted">
                        <Lock size={13} /> Private Repository
                      </span>
                    ) : p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-txt-secondary hover:text-accent-light transition-colors group/link"
                      >
                        <Github size={14} className="group-hover/link:scale-110 transition-transform" />
                        View on GitHub
                      </a>
                    ) : null}

                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-accent-light hover:text-accent-secondary transition-colors ml-auto"
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* ── View all CTA ── */}
      <div className="text-center mt-14">
        <a
          href="https://github.com/BadalSharma007?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-accent-primary/50 text-accent-light hover:bg-accent-primary/10 hover:border-accent-primary transition-all font-semibold hover:-translate-y-0.5"
        >
          View All Projects on GitHub
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </SectionWrapper>
  )
}

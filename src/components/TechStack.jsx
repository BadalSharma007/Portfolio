import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './common/SectionWrapper'
import { TECH_STACK } from '../data/content'

const levelMap = {
  Advanced:     { pct: 88, color: '#22c55e', label: 'Adv' },
  Intermediate: { pct: 62, color: '#60a5fa', label: 'Int' },
  Beginner:     { pct: 35, color: '#8896b0', label: 'Bgn' },
}

// Circular SVG progress ring
function RingProgress({ pct, color, size = 56 }) {
  const r = (size - 6) / 2
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ

  return (
    <svg width={size} height={size} className="skill-ring">
      {/* Track */}
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={3} />
      {/* Progress */}
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ - dash }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      />
    </svg>
  )
}

// Flatten all tech items for "All" tab
const ALL_ITEMS = TECH_STACK.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.category }))
)

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(-1) // -1 = All

  const isAll = activeTab === -1
  const displayItems = isAll ? ALL_ITEMS : TECH_STACK[activeTab].items

  return (
    <SectionWrapper
      id="tech"
      label="Tech Stack"
      heading="Tools I use to build"
      subheading="From training transformers to deploying on edge devices"
      className="bg-bg-secondary/30"
    >
      {/* ── Tabs ── */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveTab(-1)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            isAll
              ? 'bg-accent-gradient text-white shadow-lg shadow-accent-primary/30'
              : 'glass text-txt-secondary hover:text-txt-primary hover:-translate-y-0.5'
          }`}
        >
          All
        </button>
        {TECH_STACK.map((cat, i) => (
          <button
            key={cat.category}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === i
                ? 'bg-accent-gradient text-white shadow-lg shadow-accent-primary/30'
                : 'glass text-txt-secondary hover:text-txt-primary hover:-translate-y-0.5'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* ── Tech grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.28 }}
          className={`grid gap-4 ${isAll
            ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'
            : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
          }`}
        >
          {displayItems.map((tech) => {
            const Icon  = tech.icon
            const lvl   = levelMap[tech.level] ?? levelMap.Beginner
            const compact = isAll

            return (
              <motion.div
                key={`${tech.name}-${tech.category ?? ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className={`group glass rounded-xl flex flex-col items-center gap-2 cursor-default transition-all duration-300 hover:-translate-y-1.5 border border-white/5 hover:border-opacity-50 ${
                  compact ? 'p-3' : 'p-5'
                }`}
                style={{ '--color': tech.color }}
                title={`${tech.name} — ${tech.level}`}
              >
                {compact ? (
                  <>
                    <Icon
                      size={26}
                      style={{ color: tech.color }}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-medium text-center text-txt-secondary group-hover:text-txt-primary transition-colors leading-tight">
                      {tech.name}
                    </span>
                  </>
                ) : (
                  <>
                    {/* Ring + icon overlay */}
                    <div className="relative flex items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                        style={{ background: `${tech.color}30` }}
                      />
                      <RingProgress pct={lvl.pct} color={lvl.color} size={60} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon
                          size={26}
                          style={{ color: tech.color }}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <span className="text-sm font-semibold text-center group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                      style={{ color: lvl.color, background: `${lvl.color}18`, border: `1px solid ${lvl.color}30` }}
                    >
                      {tech.level}
                    </span>
                  </>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}

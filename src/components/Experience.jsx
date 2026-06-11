import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, ChevronRight } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { EXPERIENCES } from '../data/content'

// Company accent colors
const COMPANY_COLORS = {
  'VOIS (Vodafone)':     { color: '#E60000', initials: 'VO' },
  'Shell-Edunet / AICTE': { color: '#FDD835', initials: 'SH' },
  'IBM-SkillsBuild':     { color: '#1F70C1', initials: 'IBM' },
}

export default function Experience() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' })

  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      heading="Where I've worked"
      subheading="From telecom giants to government initiatives — real-world AI deployment"
    >
      <div className="relative max-w-3xl mx-auto" ref={lineRef}>

        {/* ── Animated vertical line ── */}
        <div className="absolute left-6 top-0 bottom-0 w-px overflow-hidden" aria-hidden="true">
          <motion.div
            className="w-full bg-gradient-to-b from-accent-purple via-accent-primary to-accent-secondary"
            style={{ height: '100%' }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => {
            const meta = COMPANY_COLORS[exp.company] ?? { color: '#60a5fa', initials: '??' }

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative pl-16"
              >
                {/* ── Company dot ── */}
                <div
                  className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold shadow-lg border border-white/10"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${meta.color}44, ${meta.color}18)`,
                    boxShadow: `0 0 20px ${meta.color}30`,
                  }}
                >
                  <span style={{ color: meta.color }} className="font-mono text-[10px] tracking-tight">
                    {meta.initials}
                  </span>
                </div>

                {/* ── Card ── */}
                <div className="glass rounded-2xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 group"
                  style={{ '--accent': meta.color }}
                >
                  {/* Top border accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${meta.color}, transparent)` }}
                  />

                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{exp.company}</h3>
                      <p className="text-sm font-semibold mt-0.5" style={{ color: meta.color }}>
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-txt-muted glass px-3 py-1 rounded-lg border border-white/5 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="flex items-center gap-1.5 text-xs text-txt-muted mb-5 mt-1">
                    <MapPin size={12} />
                    {exp.location}
                  </p>

                  <ul className="space-y-2.5">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm text-txt-secondary leading-relaxed">
                        <ChevronRight
                          size={14}
                          className="shrink-0 mt-1"
                          style={{ color: meta.color }}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

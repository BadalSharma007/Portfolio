import { motion } from 'framer-motion'
import { ExternalLink, Trophy, Medal, Star } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { ACHIEVEMENTS, PLATFORM_STATS } from '../data/content'

const badgeColors = {
  success: 'text-success bg-success/10 border-success/30',
  warning: 'text-warning bg-warning/10 border-warning/30',
  accent:  'text-accent-light bg-accent-primary/10 border-accent-primary/30',
}

// Color scheme per rank
const RANK_STYLES = [
  {
    borderColor:  'border-gold/60',
    glowColor:    'rgba(251,191,36,0.12)',
    icon:         Trophy,
    iconColor:    'text-gold',
    bgAccent:     'from-gold/8 to-transparent',
    label:        'Gold',
  },
  {
    borderColor:  'border-silver/50',
    glowColor:    'rgba(148,163,184,0.10)',
    icon:         Medal,
    iconColor:    'text-silver',
    bgAccent:     'from-silver/6 to-transparent',
    label:        'Silver',
  },
  {
    borderColor:  'border-bronze/50',
    glowColor:    'rgba(194,133,90,0.10)',
    icon:         Medal,
    iconColor:    'text-bronze',
    bgAccent:     'from-bronze/6 to-transparent',
    label:        'Bronze',
  },
]
const DEFAULT_STYLE = {
  borderColor: 'border-accent-primary/25',
  glowColor:   'rgba(59,130,246,0.08)',
  icon:        Star,
  iconColor:   'text-accent-light',
  bgAccent:    'from-accent-primary/5 to-transparent',
}

// Mini rank-vs-total bar
function RankBar({ rank, total }) {
  const numericRank = parseInt(rank?.replace(/[^0-9]/g, ''), 10)
  if (!numericRank || !total) return null
  const pct = Math.max(2, Math.min(98, ((total - numericRank) / total) * 100))
  return (
    <div className="mt-3">
      <div className="flex justify-between text-[10px] text-txt-muted mb-1">
        <span>Rank {numericRank.toLocaleString()}</span>
        <span>of {total.toLocaleString()}</span>
      </div>
      <div className="h-1 rounded-full bg-bg-card overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-accent-gradient"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  )
}

// rank / total pairs from the data
const RANK_TOTALS = [4507, 80332, null, 10285, 4319, null]

// Platform brand colors
const PLATFORM_COLORS = {
  LeetCode:   '#FFA116',
  Codeforces: '#1F8ACB',
  Kaggle:     '#20BEFF',
  GitHub:     '#e2e8f0',
}

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      label="Achievements"
      heading="Competing at the highest level"
      subheading="From Kaggle leaderboards to national hackathons — results that speak"
    >
      <div className="grid md:grid-cols-2 gap-5">
        {ACHIEVEMENTS.map((a, i) => {
          const style  = RANK_STYLES[i] ?? DEFAULT_STYLE
          const Icon   = style.icon
          const total  = RANK_TOTALS[i]

          return (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className={`group relative glass rounded-2xl p-6 border ${style.borderColor} hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              style={{ '--glow': style.glowColor }}
            >
              {/* bg accent gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${style.bgAccent} pointer-events-none`} />

              {/* left accent bar */}
              <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-gradient-to-b ${
                i === 0 ? 'from-gold to-amber-600' :
                i === 1 ? 'from-silver to-slate-500' :
                i === 2 ? 'from-bronze to-orange-700' :
                          'from-accent-primary to-accent-secondary'
              }`} />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 pr-4">
                    {/* Rank number — large & faded */}
                    <span className="absolute top-0 right-16 text-7xl font-black opacity-[0.04] font-mono leading-none select-none pointer-events-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base font-semibold leading-snug">{a.name}</h3>
                    <span className="text-xs text-txt-muted mt-0.5 block">{a.platform}</span>
                  </div>
                  <Icon size={22} className={`${style.iconColor} shrink-0 mt-0.5`} />
                </div>

                {/* Rank + badge */}
                <div className="flex items-end gap-3 mb-3">
                  <span className="text-3xl font-bold font-mono gradient-text leading-none">{a.rank}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border mb-0.5 ${badgeColors[a.badgeColor]}`}>
                    {a.badge}
                  </span>
                </div>

                {a.score && (
                  <p className="text-sm text-accent-light font-mono mb-2">{a.score}</p>
                )}
                <p className="text-sm text-txt-secondary leading-relaxed">{a.techniques}</p>

                {/* Mini rank bar */}
                <RankBar rank={a.rank} total={total} />

                {/* View link */}
                {a.link && a.link !== '#' && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent-light mt-4 opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                  >
                    View Details <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* ── Platform stats strip ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
        {PLATFORM_STATS.map((s, i) => {
          const Icon  = s.icon
          const color = PLATFORM_COLORS[s.platform] ?? '#60a5fa'
          return (
            <motion.div
              key={`${s.platform}-${s.metric}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl p-4 text-center hover:-translate-y-1.5 transition-all duration-300 border border-white/5 group cursor-default"
              style={{ '--brand': color }}
            >
              <Icon
                size={26}
                className="mx-auto mb-2 transition-all duration-300 group-hover:scale-110"
                style={{ color }}
              />
              <div className="text-2xl font-bold font-mono" style={{ color }}>{s.value}</div>
              <div className="text-[10px] text-txt-muted mt-1 leading-tight">
                {s.platform}<br />{s.metric}
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

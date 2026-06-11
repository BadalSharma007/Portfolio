import { motion } from 'framer-motion'
import { ExternalLink, Trophy } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { ACHIEVEMENTS, PLATFORM_STATS } from '../data/content'

const badgeColors = {
  success: 'text-success bg-success/10 border-success/30',
  warning: 'text-warning bg-warning/10 border-warning/30',
  accent: 'text-accent-light bg-accent-primary/10 border-accent-primary/30',
}

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      label="Achievements"
      heading="Competing at the highest level"
      subheading="From Kaggle leaderboards to national hackathons — results that speak"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="group relative glass rounded-2xl p-6 border border-white/5 border-l-4 border-l-accent-primary hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-primary/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold pr-4 leading-snug">{a.name}</h3>
              <Trophy size={20} className="text-warning shrink-0" />
            </div>
            <div className="flex items-end gap-3 mb-3">
              <span className="text-3xl font-bold gradient-text font-mono">{a.rank}</span>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border mb-1 ${badgeColors[a.badgeColor]}`}
              >
                {a.badge}
              </span>
            </div>
            {a.score && <p className="text-sm text-accent-light font-mono mb-2">{a.score}</p>}
            <p className="text-sm text-txt-secondary leading-relaxed">{a.techniques}</p>
            {a.link && a.link !== '#' && (
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent-light mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Details <ExternalLink size={14} />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
        {PLATFORM_STATS.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={`${s.platform}-${s.metric}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl p-4 text-center hover:-translate-y-1 transition-transform border border-white/5 hover:border-accent-primary/30"
            >
              <Icon size={24} className="mx-auto mb-2 text-accent-light" />
              <div className="text-2xl font-bold font-mono text-success">{s.value}</div>
              <div className="text-xs text-txt-secondary mt-1">
                {s.platform} · {s.metric}
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

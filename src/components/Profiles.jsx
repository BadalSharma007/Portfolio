import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { PROFILES } from '../data/content'

export default function Profiles() {
  return (
    <SectionWrapper
      id="profiles"
      label="Connect"
      heading="Find me across the web"
      subheading="Competing, coding, and sharing knowledge"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILES.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.a
              key={p.platform}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group glass rounded-2xl p-6 hover:-translate-y-1.5 hover:border-accent-primary/60 hover:shadow-xl hover:shadow-accent-primary/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <Icon size={40} style={{ color: p.color }} />
                <ArrowUpRight
                  size={22}
                  className="text-txt-secondary group-hover:text-accent-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{p.platform}</h3>
              <p className="text-sm font-mono text-accent-light mb-3">{p.username}</p>
              <p className="text-sm text-txt-secondary">{p.stat}</p>
            </motion.a>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

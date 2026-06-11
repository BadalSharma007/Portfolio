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
      className="bg-bg-secondary/30"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-white/5"
              style={{ '--brand': p.color }}
            >
              {/* Hover fill background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${p.color}18 0%, transparent 65%)` }}
              />

              {/* Shimmer sweep on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{ background: `linear-gradient(90deg, transparent 0%, ${p.color}15 50%, transparent 100%)` }}
                />
              </div>

              {/* Top border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
              />

              <div className="relative">
                {/* Icon + arrow */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${p.color}20`, border: `1px solid ${p.color}35` }}
                  >
                    <Icon size={24} style={{ color: p.color }} />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-txt-muted group-hover:text-txt-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>

                <h3 className="text-lg font-bold mb-1 group-hover:text-white transition-colors">
                  {p.platform}
                </h3>
                <p className="text-sm font-mono mb-3 transition-colors duration-200" style={{ color: p.color }}>
                  @{p.username}
                </p>
                <p className="text-sm text-txt-secondary leading-snug">{p.stat}</p>
              </div>
            </motion.a>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

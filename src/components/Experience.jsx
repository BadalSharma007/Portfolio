import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { EXPERIENCES } from '../data/content'

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      heading="Where I've worked"
      subheading="From telecom giants to government initiatives — real-world AI deployment"
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent" />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 w-12 h-12 rounded-full glass flex items-center justify-center border border-accent-primary/40">
                <Briefcase size={20} className="text-accent-light" />
              </div>

              <div className="glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/10 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <span className="text-sm font-mono text-txt-secondary">{exp.duration}</span>
                </div>
                <p className="text-accent-light font-medium mb-1">{exp.role}</p>
                <p className="flex items-center gap-1.5 text-xs text-txt-secondary mb-4">
                  <MapPin size={13} /> {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-txt-secondary leading-relaxed">
                      <span className="text-accent-secondary mt-1.5 shrink-0">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

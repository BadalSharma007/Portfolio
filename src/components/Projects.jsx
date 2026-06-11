import { motion } from 'framer-motion'
import { Github, ExternalLink, Lock, ArrowRight } from 'lucide-react'
import SectionWrapper from './common/SectionWrapper'
import { PROJECTS } from '../data/content'

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      heading="Things I've built"
      subheading="From LLMs running on microcontrollers to production email assistants"
      className="bg-bg-secondary/40"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group relative glass glass-hover rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-primary/20 transition-all duration-300 flex flex-col border border-white/5 hover:border-accent-primary/30"
          >
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-bg-card to-bg-secondary flex items-center justify-center">
              <span className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">
                {p.name}
              </span>
              <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full bg-black/40 text-accent-light backdrop-blur-md border border-white/10">
                {p.category}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-txt-secondary leading-relaxed mb-3 flex-1">{p.description}</p>
              {p.highlight && <p className="text-xs font-medium text-warning mb-4">{p.highlight}</p>}

              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-line/50">
                {p.privateRepo ? (
                  <span className="flex items-center gap-1.5 text-sm text-txt-secondary">
                    <Lock size={15} /> Private Repository
                  </span>
                ) : p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-txt-secondary hover:text-accent-light transition-colors"
                  >
                    <Github size={15} /> GitHub
                  </a>
                ) : null}

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-accent-light hover:text-accent-secondary transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/BadalSharma007?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent-primary text-accent-light hover:bg-accent-primary/10 transition-colors font-medium"
        >
          View All on GitHub
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </SectionWrapper>
  )
}

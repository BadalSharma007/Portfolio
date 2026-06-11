import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './common/SectionWrapper'
import { TECH_STACK } from '../data/content'

const levelColor = {
  Advanced: 'text-success',
  Intermediate: 'text-accent-light',
  Beginner: 'text-txt-secondary',
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <SectionWrapper
      id="tech"
      label="Tech Stack"
      heading="Tools I use to build"
      subheading="From training transformers to deploying on edge devices"
      className="bg-bg-secondary/40"
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {TECH_STACK.map((cat, i) => (
          <button
            key={cat.category}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === i
                ? 'bg-accent-gradient text-white shadow-lg shadow-accent-primary/30'
                : 'glass text-txt-secondary hover:text-txt-primary'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {TECH_STACK[activeTab].items.map((tech) => {
            const Icon = tech.icon
            return (
              <div
                key={tech.name}
                className="group glass rounded-xl p-5 flex flex-col items-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
                title={`${tech.name} — ${tech.level}`}
              >
                <Icon
                  size={36}
                  style={{ color: tech.color }}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium text-center">{tech.name}</span>
                <span className={`text-xs font-mono ${levelColor[tech.level]}`}>{tech.level}</span>
              </div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}

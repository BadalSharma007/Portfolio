import { motion } from 'framer-motion'
import SectionWrapper from './common/SectionWrapper'
import AnimatedCounter from './common/AnimatedCounter'
import { PROFILE, QUICK_FACTS, COUNTERS } from '../data/content'

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-bg-secondary/40">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-accent-primary/10 -rotate-2 bg-[#0d0d0d] aspect-[4/5] flex flex-col border border-white/10 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 to-transparent pointer-events-none" />
            
            {/* Terminal Header */}
            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-txt-secondary font-mono">agent.py</span>
            </div>

            {/* Terminal Body */}
            <div className="p-5 md:p-6 font-mono text-sm flex-1 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="text-accent-primary mb-2">from <span className="text-txt-primary">transformers</span> import <span className="text-txt-primary">AutoModel</span></p>
                <p className="text-accent-primary mb-2">import <span className="text-txt-primary">torch</span></p>
                <br />
                <p className="text-txt-secondary"># Initialize Profile</p>
                <p className="text-txt-primary mb-2">bks = Agent(</p>
                <p className="text-accent-light ml-4 mb-1">role=<span className="text-warning">"AI Engineer"</span>,</p>
                <p className="text-accent-light ml-4 mb-1">skills=[<span className="text-warning">"LLMs"</span>, <span className="text-warning">"CV"</span>],</p>
                <p className="text-accent-light ml-4 mb-1">coffee_cups=<span className="text-success">9999</span></p>
                <p className="text-txt-primary mb-2">)</p>
                <br />
                <p className="text-txt-primary">bks.deploy_to_production()</p>
                <motion.p 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-success mt-4"
                >
                  Running successfully... █
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap shadow-xl border border-white/10 backdrop-blur-md">
            <span className="text-accent-light font-semibold">3+</span> Internships ·{' '}
            <span className="text-accent-light font-semibold">8+</span> Projects ·{' '}
            <span className="text-success font-semibold">Kaggle Expert</span>
          </div>
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-accent-light uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
            Building AI that actually works in the real world
          </h2>
          <p className="text-txt-secondary leading-relaxed mb-8">{PROFILE.bio}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {QUICK_FACTS.map((fact) => (
              <div
                key={fact.text}
                className="glass rounded-xl p-4 flex items-start gap-3 hover:-translate-y-1 transition-transform"
              >
                <span className="text-2xl">{fact.emoji}</span>
                <span className="text-sm text-txt-primary leading-snug">{fact.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Counters */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
      >
        {COUNTERS.map((c) => (
          <div key={c.label} className="text-center glass rounded-2xl py-8 px-4">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              <AnimatedCounter value={c.value} suffix={c.suffix} />
            </div>
            <div className="text-txt-secondary text-sm">{c.label}</div>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from './common/SectionWrapper'
import AnimatedCounter from './common/AnimatedCounter'
import { PROFILE, QUICK_FACTS, COUNTERS } from '../data/content'

// ─── Terminal typewriter ────────────────────────────────────
const CODE_LINES = [
  { text: 'from transformers import AutoModel', color: 'keyword' },
  { text: 'import torch', color: 'keyword' },
  { text: '', color: 'plain' },
  { text: '# Initialize AI Engineer Profile', color: 'comment' },
  { text: 'bks = Agent(', color: 'plain' },
  { text: '  role   = "AI Engineer",', color: 'string' },
  { text: '  skills = ["LLMs", "CV", "Agents"],', color: 'string' },
  { text: '  university = "Sharda University",', color: 'string' },
  { text: '  cgpa = 8.4,', color: 'number' },
  { text: '  coffee = float("inf")', color: 'number' },
  { text: ')', color: 'plain' },
  { text: '', color: 'plain' },
  { text: 'bks.deploy_to_production()', color: 'call' },
]

const COLOR_MAP = {
  keyword: 'text-blue-400',
  comment: 'text-slate-500',
  string:  'text-emerald-400',
  number:  'text-amber-400',
  call:    'text-cyan-400',
  plain:   'text-slate-200',
}

function TerminalTypewriter({ trigger }) {
  const [lines, setLines]     = useState([])
  const [curLine, setCurLine] = useState(0)
  const [curChar, setCurChar] = useState(0)
  const [done, setDone]       = useState(false)

  useEffect(() => {
    if (!trigger) return
    setLines([]); setCurLine(0); setCurChar(0); setDone(false)
  }, [trigger])

  useEffect(() => {
    if (!trigger || done) return
    if (curLine >= CODE_LINES.length) { setDone(true); return }
    const lineObj = CODE_LINES[curLine]
    const full = lineObj.text
    if (curChar < full.length) {
      const id = setTimeout(() => setCurChar(c => c + 1), 26 + Math.random() * 16)
      return () => clearTimeout(id)
    } else {
      const id = setTimeout(() => {
        setLines(prev => [...prev, { text: full, color: lineObj.color }])
        setCurLine(l => l + 1); setCurChar(0)
      }, full === '' ? 55 : 110)
      return () => clearTimeout(id)
    }
  }, [trigger, curLine, curChar, done])

  const currentFull  = curLine < CODE_LINES.length ? CODE_LINES[curLine].text : ''
  const currentColor = curLine < CODE_LINES.length ? CODE_LINES[curLine].color : 'plain'
  const currentTyped = currentFull.slice(0, curChar)

  return (
    <div className="font-mono text-[13px] leading-6 select-none">
      {lines.map((l, i) => (
        <div key={i} className={l.text === '' ? 'h-4' : COLOR_MAP[l.color]}>{l.text}</div>
      ))}
      {!done && (
        <div className={COLOR_MAP[currentColor]}>
          {currentTyped}
          <span className="inline-block w-[2px] h-[14px] bg-blue-400 ml-[1px] align-middle animate-pulse" />
        </div>
      )}
      {done && (
        <div className="flex items-center gap-2 mt-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-sm">Running successfully ✓</span>
        </div>
      )}
    </div>
  )
}

// ─── Mini skill progress bar ────────────────────────────────
const SKILLS = [
  { name: 'PyTorch / Deep Learning', pct: 88, color: '#EE4C2C' },
  { name: 'Python',                  pct: 92, color: '#3776AB' },
  { name: 'ML Engineering',          pct: 85, color: '#F7931E' },
  { name: 'Computer Vision',         pct: 80, color: '#5C3EE8' },
  { name: 'NLP / LLMs',             pct: 78, color: '#06b6d4' },
]

function SkillBar({ name, pct, color, trigger }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-txt-secondary font-medium">{name}</span>
        <span className="text-txt-muted font-mono">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-bg-card overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={trigger ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const termRef  = useRef(null)
  const skillRef = useRef(null)
  const termView  = useInView(termRef,  { once: true, margin: '-60px' })
  const skillView = useInView(skillRef, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="about" className="bg-bg-secondary/30">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        {/* ── Left — animated terminal ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative"
          ref={termRef}
        >
          {/* Glow behind terminal */}
          <div className="absolute -inset-4 rounded-3xl bg-accent-primary/8 blur-2xl pointer-events-none" />

          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 -rotate-1 border border-white/8 scanlines"
            style={{ background: 'linear-gradient(160deg, #0d1117 70%, #0d1523)' }}
          >
            {/* macOS toolbar */}
            <div className="relative h-11 border-b border-white/6 flex items-center px-4 gap-2"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-sm shadow-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/90 shadow-sm shadow-yellow-400/40" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/40" />
              <span className="ml-3 text-[11px] text-slate-500 font-mono">agent.py — Python 3.11</span>
              <span className="ml-auto text-[10px] text-slate-600 font-mono">UTF-8 · LF</span>
            </div>

            {/* Line numbers + code */}
            <div className="relative flex p-5 min-h-[340px]">
              <div className="mr-4 text-[12px] leading-6 text-slate-700 font-mono select-none text-right" style={{ minWidth: '1.4rem' }}>
                {CODE_LINES.map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              <div className="flex-1 overflow-hidden">
                <TerminalTypewriter trigger={termView} />
              </div>
            </div>
          </div>

          {/* Stats pill */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap shadow-xl border border-white/10 backdrop-blur-md z-10">
            <span className="gradient-text font-bold">3+</span> Internships ·{' '}
            <span className="gradient-text font-bold">8+</span> Projects ·{' '}
            <span className="text-success font-semibold">Kaggle Expert</span>
          </div>
        </motion.div>

        {/* ── Right — text + skills ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-accent-light uppercase tracking-[0.22em] text-xs font-semibold mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 gradient-text leading-tight">
            Building AI that actually<br />works in the real world
          </h2>
          <p className="text-txt-secondary leading-relaxed mb-8 text-[15px]">{PROFILE.bio}</p>

          {/* Quick facts */}
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {QUICK_FACTS.map((fact) => (
              <div
                key={fact.text}
                className="glass glass-hover rounded-xl p-4 flex items-start gap-3 hover:-translate-y-1 transition-transform cursor-default"
              >
                <span className="text-xl mt-0.5">{fact.emoji}</span>
                <span className="text-sm text-txt-primary leading-snug">{fact.text}</span>
              </div>
            ))}
          </div>

          {/* Skill progress bars */}
          <div ref={skillRef} className="space-y-3.5">
            <p className="text-txt-muted text-xs uppercase tracking-[0.18em] font-semibold mb-4">
              Proficiency
            </p>
            {SKILLS.map((s) => (
              <SkillBar key={s.name} {...s} trigger={skillView} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Animated counters ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-24"
      >
        {COUNTERS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center glass glass-hover rounded-2xl py-8 px-4 transition-all hover:-translate-y-1 border border-white/5 hover:border-accent-primary/25"
          >
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              <AnimatedCounter value={c.value} suffix={c.suffix} />
            </div>
            <div className="text-txt-secondary text-sm">{c.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

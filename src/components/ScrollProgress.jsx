import { motion, useScroll, useSpring } from 'framer-motion'

// Thin gradient progress bar fixed at the very top.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX, background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)' }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
    />
  )
}

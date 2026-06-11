import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Counts up from 0 to target when scrolled into view.
export default function AnimatedCounter({ value, suffix = '', duration = 1500 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime = null
    let raf

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * value))

      if (progress < 1) raf = requestAnimationFrame(step)
      else setCount(value)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  )
}

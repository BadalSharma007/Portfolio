import { useState, useEffect } from 'react'

// Tracks which section is currently in view for navbar active state.
export default function useScrollSpy(sectionIds, offset = 120) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return active
}

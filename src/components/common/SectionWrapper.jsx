import { motion } from 'framer-motion'

// Reusable scroll-triggered fade-up wrapper with section header.
export default function SectionWrapper({ id, label, heading, subheading, children, className = '' }) {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(label || heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center"
          >
            {label && (
              <p className="text-accent-light uppercase tracking-widest text-sm font-semibold mb-3">
                {label}
              </p>
            )}
            {heading && (
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {subheading}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

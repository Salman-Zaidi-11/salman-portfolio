import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  })
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-[var(--accent)] via-cyan-400 to-sky-400"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {showButton ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xl text-[var(--text)] shadow-[var(--shadow-soft)] backdrop-blur-xl"
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default ScrollProgress

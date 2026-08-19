import { motion } from 'framer-motion'
import { useEffect } from 'react'

function ThemeToggle() {
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', 'dark')
    root.classList.add('dark')
    root.style.colorScheme = 'dark'
    window.localStorage.setItem('portfolio-theme', 'dark')
  }, [])

  return (
    <motion.button
      type="button"
      aria-label="Dark mode enabled"
      aria-pressed={true}
      className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text)] shadow-sm transition hover:-translate-y-0.5"
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative flex h-6 w-10 items-center rounded-full bg-[var(--accent-soft)] p-1">
        <motion.span
          animate={{ x: 16 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] shadow-sm"
        >
          ☀
        </motion.span>
      </span>
      <span>Dark</span>
    </motion.button>
  )
}

export default ThemeToggle

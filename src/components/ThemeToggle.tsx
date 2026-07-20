import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = window.localStorage.getItem('portfolio-theme') as 'light' | 'dark' | null
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const saved = window.localStorage.getItem('portfolio-theme')
      if (!saved) {
        setTheme(mediaQuery.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <button
      type="button"
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text)] shadow-sm transition hover:-translate-y-0.5"
      aria-label="Toggle color theme"
      aria-pressed={theme === 'dark'}
    >
      <span className="relative flex h-6 w-10 items-center rounded-full bg-[var(--accent-soft)] p-1">
        <motion.span
          animate={{ x: theme === 'dark' ? 16 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] shadow-sm"
        >
          {theme === 'dark' ? '☀' : '🌙'}
        </motion.span>
      </span>
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle

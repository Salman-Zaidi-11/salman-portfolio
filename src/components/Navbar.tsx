import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import NavLink from './ui/NavLink'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
 // { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--surface)]/80 shadow-[var(--shadow-soft)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.a href="#home" whileHover={{ y: -1, scale: 1.01 }} className="flex items-center gap-3 text-[var(--text)]">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-sm font-semibold tracking-[0.2em] shadow-sm">
            SZ
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.3em]">Salman's Portfolio</span>
        </motion.a>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.label} label={link.label} href={link.href} active={link.href === '#home'} />
          ))}
          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
            <motion.a
              href="#contact"
              whileHover={{ y: -1, scale: 1.01 }}
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:shadow-[var(--shadow-soft)]"
            >
              Contact 
            </motion.a>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <motion.button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] shadow-sm transition"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -4 }}
              className="absolute h-0.5 w-5 rounded-full bg-current"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="absolute h-0.5 w-5 rounded-full bg-current"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 4 }}
              className="absolute h-0.5 w-5 rounded-full bg-current"
            />
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[var(--bg)]/95 px-6 py-6 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col">
              <div className="flex items-center justify-between">
                <a href="#home" className="flex items-center gap-3 text-[var(--text)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-sm font-semibold tracking-[0.2em]">
                    SZ 
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.3em]">Salman</span>
                </a>
                <motion.button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)]"
                  aria-label="Close navigation menu"
                >
                  ✕
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="flex flex-1 flex-col justify-center gap-4"
              >
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-xl font-semibold text-[var(--text)] shadow-sm"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

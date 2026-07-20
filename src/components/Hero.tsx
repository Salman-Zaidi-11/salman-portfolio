import { motion } from 'framer-motion'
import HeroBadge from './HeroBadge'
import SocialLink from './ui/SocialLink'

const badges = ['Playwright', 'Postman', 'Swagger', 'JMeter', 'Jira', 'API Testing']
const stats = [
  { value: '2+ Years', label: 'QA Experience' },
  { value: '10+ Product Domains', label: 'Tested' },
  { value: '100+ Quality Checks', label: 'Delivered' },
]
const socials = [
  { label: 'Email', href: 'mailto:syedmsalman02@gmail.com' },
  { label: 'Connect', href: '#contact' },
  { label: 'Work', href: '#projects' },
]

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_26%),linear-gradient(135deg,_var(--bg)_0%,_rgba(37,99,235,0.12)_50%,_var(--bg-elevated)_100%)] px-6 py-14 shadow-[var(--shadow)] sm:px-10 lg:min-h-[90vh] lg:px-16 lg:py-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-[var(--accent)]/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            Software Quality Assurance Engineer
          </p>
          <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--text)] sm:text-5xl lg:text-6xl">
            Syed Muhammad Salman
          </h1>
          <p className="mt-4 text-lg font-medium text-[var(--text-muted)] sm:text-xl">
            Delivering reliable digital products through disciplined quality engineering and thoughtful testing.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            I help teams ship software with confidence by combining manual testing, automation, API validation, and a quality-first mindset across critical user journeys.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
            >
              View Selected Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-center text-sm font-semibold text-[var(--text)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {socials.map((social) => (
              <SocialLink key={social.label} label={social.label} href={social.href} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div className="absolute inset-6 rounded-full bg-[var(--accent)]/15 blur-3xl" />
          <div className="relative w-full overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-soft)] backdrop-blur-xl">
            <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] border border-[var(--border)] bg-gradient-to-br from-[var(--accent-soft)] via-[var(--surface)] to-[var(--surface-strong)]">
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--accent)] text-3xl font-semibold text-white shadow-lg">
                  S
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  Syed Muhammad Salman
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  SQA Engineer • Manual • Automation • API
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-8 flex flex-wrap gap-2 sm:left-2 sm:top-6">
            {badges.slice(0, 3).map((badge) => (
              <HeroBadge key={badge} label={badge} />
            ))}
          </div>
          <div className="absolute bottom-6 right-0 flex flex-wrap gap-2 sm:right-2">
            {badges.slice(3).map((badge) => (
              <HeroBadge key={badge} label={badge} />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="relative mt-12 grid gap-4 border-t border-[var(--border)] pt-8 sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-sm backdrop-blur">
            <p className="text-2xl font-semibold text-[var(--text)]">{stat.value}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Hero

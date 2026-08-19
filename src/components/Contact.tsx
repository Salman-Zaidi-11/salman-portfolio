import { motion } from 'framer-motion'

const contactCards = [
  {
    label: 'Email',
    value: 'syedmsalman02@gmail.com',
    href: 'mailto:syedmsalman02@gmail.com',
  },
  {
    label: 'Location',
    value: 'Karachi, Pakistan',
    href: '#',
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me on LinkedIn',
    href: 'https://www.linkedin.com/in/syedmsalman02/',
  },
]

function Contact() {
  return (
    <section id="contact" className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-6 py-16 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-10 lg:px-16 lg:py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Contact</p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-4xl">
          Let’s create something reliable, thoughtful, and high-impact.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
          Whether you want to discuss a testing opportunity, collaboration, or a product challenge, I’d love to connect.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="space-y-4"
        >
          {contactCards.map((card) => (
            <div key={card.label} className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">{card.label}</p>
              {card.href && card.href !== '#' ? (
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="mt-2 block text-lg font-medium text-[var(--text)] transition hover:text-[var(--accent)]"
                >
                  {card.value}
                </a>
              ) : (
                <p className="mt-2 text-lg font-medium text-[var(--text)]">{card.value}</p>
              )}
            </div>
          ))}

          <div className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Take it with you</p>
            <p className="mt-2 text-base leading-8 text-[var(--text)]">
              Want to keep my profile handy? Download my resume and explore my QA experience, testing focus, and product impact when it suits you.
            </p>
            <a
              href="/SyedMSalman-Resume.pdf"
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--surface-strong)]/70 px-4 py-2.5 text-sm font-medium text-[var(--text)] shadow-[0_0_0_1px_rgba(168,85,247,0.08),0_8px_18px_-14px_rgba(168,85,247,0.55)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/35 hover:bg-[var(--surface-strong)] hover:shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_10px_24px_-14px_rgba(168,85,247,0.7)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 12.59V4a1 1 0 0 1 1-1zm-7 13a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1z"/>
              </svg>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

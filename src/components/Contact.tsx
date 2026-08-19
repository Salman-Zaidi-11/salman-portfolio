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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Quick Note</p>
            <p className="mt-2 text-base leading-8 text-[var(--text-muted)]">
              I’m available for QA-focused opportunities, product quality conversations, and collaborative engineering work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

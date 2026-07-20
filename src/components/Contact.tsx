import { motion } from 'framer-motion'
import { useState } from 'react'

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
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

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

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
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

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          onSubmit={handleSubmit}
          className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
        >
          {submitted ? (
            <div className="rounded-[1rem] border border-emerald-400/30 bg-emerald-500/10 p-5 text-center">
              <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">Message received.</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">Thanks for reaching out. I’ll get back to you soon.</p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <label className="block text-sm font-medium text-[var(--text)]" htmlFor="contact-name">
                  <span className="mb-2 block">Name</span>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
                  />
                </label>

                <label className="block text-sm font-medium text-[var(--text)]" htmlFor="contact-email">
                  <span className="mb-2 block">Email</span>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="your email address"
                    className="w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
                  />
                </label>

                <label className="block text-sm font-medium text-[var(--text)]" htmlFor="contact-message">
                  <span className="mb-2 block">Message</span>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about the product, role, or quality challenge"
                    className="w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
              >
                Send Message
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

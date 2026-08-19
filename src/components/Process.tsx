import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Requirement Analysis',
    description: 'Clarifying scope, expectations, and quality goals early to align testing with product intent.',
    icon: '🧭',
  },
  {
    title: 'Test Planning',
    description: 'Defining priorities, risks, and the right coverage approach for the release at hand.',
    icon: '🗺️',
  },
  {
    title: 'Test Case Design',
    description: 'Creating clear, structured scenarios that target critical paths and edge cases.',
    icon: '🧩',
  },
  {
    title: 'Test Execution',
    description: 'Running checks carefully and observing real behavior with a focus on reliability and clarity.',
    icon: '▶️',
  },
  {
    title: 'Bug Reporting',
    description: 'Documenting issues with context so teams can resolve defects quickly and confidently.',
    icon: '🐞',
  },
  {
    title: 'Regression Testing',
    description: 'Re-validating key workflows to confirm fixes and prevent unexpected regressions.',
    icon: '🔁',
  },
  {
    title: 'Release Verification',
    description: 'Confirming the product is ready for delivery with a final quality-focused review.',
    icon: '✅',
  },
]

function Process() {
  return (
    <section id="process" className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-6 py-16 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-10 lg:px-16 lg:py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">My Quality Engineering Process</p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-4xl">
          The workflow I follow to ensure reliable, scalable and high-quality software.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
          A disciplined approach that balances planning, execution, validation, and release confidence at every stage.
        </p>
      </div>

      <div className="mt-12 hidden lg:block">
        <div className="relative">
          <div className="relative grid grid-cols-7 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex h-full flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] text-2xl shadow-sm">
                  {step.icon}
                </div>
                <div className="mt-4 flex h-full min-h-[16rem] w-full flex-col rounded-[1.2rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-4 shadow-sm">
                  <p className="min-h-[3.25rem] text-sm font-semibold text-[var(--text)]">{step.title}</p>
                  <p className="mt-2 flex-1 text-sm leading-7 text-[var(--text-muted)]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-4 lg:hidden">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="relative flex h-full rounded-[1.4rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-5 shadow-sm"
          >
            <div className="flex w-full items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] text-xl">
                {step.icon}
              </div>
              <div className="flex min-h-[8rem] flex-1 flex-col justify-center">
                <p className="min-h-[3rem] text-sm font-semibold text-[var(--text)]">{step.title}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Process

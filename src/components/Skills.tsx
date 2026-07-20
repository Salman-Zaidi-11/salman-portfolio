import { motion } from 'framer-motion'

const expertise = [
  {
    title: 'Manual Testing',
    description:
      'Functional Testing, Regression Testing, Smoke Testing, Sanity Testing, Exploratory Testing, STLC, Test Case Design and Bug Reporting.',
    icon: '🧪',
  },
  {
    title: 'Automation Testing',
    description: 'Playwright, Cypress (Basic), UI Automation and End-to-End Testing.',
    icon: '⚙️',
  },
  {
    title: 'API Testing',
    description: 'Postman, Swagger, API Validation and Request & Response Testing.',
    icon: '🔗',
  },
  {
    title: 'Performance Testing',
    description: 'Apache JMeter, Load Testing and Performance Analysis.',
    icon: '⚡',
  },
  {
    title: 'Bug Management',
    description: 'Jira, Asana, Bug Reporting and Defect Lifecycle.',
    icon: '🐛',
  },
  {
    title: 'Quality Engineering',
    description: 'Requirement Analysis, Test Planning, Risk Analysis and Release Validation.',
    icon: '✅',
  },
]

const techStack = ['Playwright', 'Postman', 'Swagger', 'JMeter', 'Jira', 'Asana', 'Git', 'GitHub', 'VS Code', 'Chrome DevTools']

function Skills() {
  return (
    <section id="skills" className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-6 py-16 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-10 lg:px-16 lg:py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Testing Expertise</p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-4xl">
          Delivering reliable software through quality engineering, automation and continuous testing.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
          A focused blend of hands-on QA execution, automation, API validation, and quality-focused collaboration designed for dependable product delivery.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {expertise.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-2xl shadow-sm">
              {item.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[var(--text)]">{item.title}</h3>
            <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">{item.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)]/75 p-6 shadow-sm backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Technology Stack</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {techStack.map((tool) => (
            <span key={tool} className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-medium text-[var(--text)] shadow-sm">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

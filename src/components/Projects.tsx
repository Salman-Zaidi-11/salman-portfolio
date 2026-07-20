import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'AI Booking Platform',
    icon: '✦',
    focus: ['Manual Testing', 'API Testing', 'Regression Testing', 'UI Validation'],
    overview:
      'Evaluated a modern booking experience with emphasis on user journeys, booking consistency, and release confidence across critical flows.',
    responsibilities: ['Designed structured test scenarios', 'Validated booking and confirmation journeys', 'Tracked issues and supported functional stability'],
    strategy:
      'Combined exploratory testing, regression cycles, UI validation, and API checks to build confidence in both visible interactions and backend behavior.',
    toolsUsed: ['Playwright', 'Postman', 'Swagger', 'Jira'],
    outcome:
      'Improved quality visibility during releases and strengthened confidence in high-value user interactions.',
    accent: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    title: 'Marketplace Platform',
    icon: '🛍️',
    focus: ['End-to-End Testing', 'Bug Reporting', 'Cross Browser Testing'],
    overview:
      'Supported a marketplace experience where user flows, transaction confidence, and consistent behavior across browsers were essential.',
    responsibilities: ['Executed end-to-end flows', 'Reported defects with clear reproduction steps', 'Verified browser consistency across major user journeys'],
    strategy:
      'Focused on realistic user scenarios, cross-browser validation, and defect triage to uncover release risks before launch.',
    toolsUsed: ['Playwright', 'Jira', 'BrowserStack', 'Manual Testing'],
    outcome:
      'Helped improve product reliability and reduce the chance of user-facing issues during release windows.',
    accent: 'from-violet-500/20 to-fuchsia-500/10',
  },
  {
    title: 'CRM Platform',
    icon: '📊',
    focus: ['Functional Testing', 'Regression Testing', 'Smoke Testing'],
    overview:
      'Validated business-critical CRM workflows to support accurate customer interactions and dependable system behavior.',
    responsibilities: ['Executed functional test cases', 'Ran smoke and regression suites', 'Documented issues and supported release readiness'],
    strategy:
      'Built test coverage around essential workflows and executed repeatable validation to preserve quality across updates.',
    toolsUsed: ['Playwright', 'Jira', 'Postman', 'Manual Testing'],
    outcome:
      'Strengthened reliability for core CRM workflows and improved confidence in release quality.',
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    title: 'HRM Platform',
    icon: '🧑‍💼',
    focus: ['Authentication', 'Role Based Access', 'Form Validation', 'API Validation'],
    overview:
      'Assessed HR workflows where access control, data integrity, and form reliability directly impacted user trust and system confidence.',
    responsibilities: ['Tested authentication and permission flows', 'Validated form and API behavior', 'Ensured permission-based scenarios were covered thoroughly'],
    strategy:
      'Prioritized critical access scenarios and validation of form submissions, API responses, and role-based behavior.',
    toolsUsed: ['Postman', 'Swagger', 'Jira', 'Manual Testing'],
    outcome:
      'Improved confidence in secure and stable HR operations with stronger validation around permissions and data handling.',
    accent: 'from-sky-500/20 to-indigo-500/10',
  },
  {
    title: 'Auction Platform',
    icon: '⚡',
    focus: ['Real-time Workflows', 'Bid Validation', 'Performance Observation'],
    overview:
      'Reviewed high-interaction auction workflows where timing, accuracy, and consistent behavior were vital to the product experience.',
    responsibilities: ['Observed live workflow behavior', 'Validated bid-related scenarios', 'Supported defect discovery around timing and consistency'],
    strategy:
      'Focused on realistic transaction behavior, timing-sensitive flows, and observed outcomes under active product usage.',
    toolsUsed: ['Jira', 'Postman', 'Swagger', 'Manual Testing'],
    outcome:
      'Raised confidence in transaction reliability and helped identify quality issues early in the lifecycle.',
    accent: 'from-amber-500/20 to-orange-500/10',
  },
]

function Projects() {
  return (
    <section id="projects" className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-6 py-16 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-10 lg:px-16 lg:py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Case Studies</p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-4xl">
          Real testing experience shaped by thoughtful execution and a quality-first mindset.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
          A selection of software products and testing scenarios that reflect how I approach quality engineering without exposing confidential client details.
        </p>
      </div>

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${study.accent}`} />

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] text-2xl shadow-sm">
                  {study.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">{study.title}</h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.24em] text-[var(--accent)]">Product Focus</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {study.focus.map((item) => (
                <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-sm text-[var(--text)]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[var(--border)]/80 bg-[var(--surface-strong)]/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Project Overview</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text)]">{study.overview}</p>
              </div>

              <div className="rounded-2xl border border-[var(--border)]/80 bg-[var(--surface-strong)]/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">My Responsibilities</p>
                <ul className="mt-2 space-y-2 text-sm text-[var(--text)]">
                  {study.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[var(--border)]/80 bg-[var(--surface-strong)]/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Testing Strategy</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text)]">{study.strategy}</p>
              </div>

              <div className="rounded-2xl border border-[var(--border)]/80 bg-[var(--surface-strong)]/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Tools Used</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {study.toolsUsed.map((tool) => (
                    <span key={tool} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--text)]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--border)]/80 bg-[var(--surface-strong)]/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Outcome</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text)]">{study.outcome}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects

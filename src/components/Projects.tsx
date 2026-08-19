import { AnimatePresence, motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Booking Platform',
    icon: '✦',
    productType: 'AI-powered booking and reservation experience',
    role: 'QA Engineer',
    scope: 'Booking lifecycle, AI recommendations, cart flow, notifications, and release validation',
    testingTypes: ['Functional Testing', 'API Testing', 'Regression Testing', 'UI Validation', 'Cross-Browser Testing'],
    tools: ['Playwright', 'Postman', 'Swagger', 'Jira', 'Chrome DevTools'],
    challenges: [
      'AI-driven recommendations had to stay aligned with user selections and booking rules.',
      'Critical booking steps needed confidence across multiple states and failure scenarios.',
      'Release confidence required quick validation across UI and backend interactions.',
    ],
    outcome: 'Increased release confidence by validating trust-critical flows and reducing booking-related defects before launch.',
    timeline: 'Q2 2024 • 6-week release cycle',
    accent: 'from-cyan-500/35 via-sky-500/20 to-transparent',
  },
  {
    title: 'CRM Platform',
    icon: '◎',
    productType: 'Customer relationship management platform',
    role: 'QA Engineer',
    scope: 'Customer records, lead management, lifecycle workflows, permissions, and dashboard reliability',
    testingTypes: ['Smoke Testing', 'Functional Testing', 'Regression Testing', 'Role-Based Validation', 'Data Integrity Testing'],
    tools: ['Playwright', 'Jira', 'Postman', 'GitHub', 'BrowserStack'],
    challenges: [
      'Role-based access had to remain consistent across account settings and actionable records.',
      'Workflow integrity had to be stable for multiple customer lifecycle stages.',
      'Large form flows required repetitive validation without missing edge-case regressions.',
    ],
    outcome: 'Strengthened confidence in core CRM functions and improved consistency across customer-facing workflows.',
    timeline: 'Q3 2024 • 8-week sprint cycle',
    accent: 'from-emerald-500/35 via-teal-500/20 to-transparent',
  },
  {
    title: 'HRM Platform',
    icon: '◌',
    productType: 'Human resource management system',
    role: 'QA Engineer',
    scope: 'Employee onboarding, attendance data, permissions, forms, and reporting workflows',
    testingTypes: ['Authorization Testing', 'Form Validation', 'API Testing', 'End-to-End Testing', 'Regression Testing'],
    tools: ['Postman', 'Swagger', 'Jira', 'Manual Testing', 'VS Code'],
    challenges: [
      'Permission systems needed to be validated across multiple employee roles and access layers.',
      'Data accuracy was critical for attendance, onboarding, and reporting actions.',
      'Form-based flows needed consistent validation in both UI and API layers.',
    ],
    outcome: 'Improved trust in HR operations by validating permissions, data integrity, and form-driven workflows.',
    timeline: 'Q1 2024 • 5-week release window',
    accent: 'from-blue-500/35 via-indigo-500/20 to-transparent',
  },
  {
    title: 'Auction Platform',
    icon: '⚡',
    productType: 'Real-time bidding and auction marketplace',
    role: 'QA Engineer',
    scope: 'Bid lifecycle, timing-sensitive actions, state transitions, and transaction reliability',
    testingTypes: ['Real-Time Validation', 'Bid Flow Testing', 'API Testing', 'State Transition Testing', 'Issue Triage'],
    tools: ['Jira', 'Postman', 'Swagger', 'Manual Testing', 'Chrome DevTools'],
    challenges: [
      'State changes and bid timing had to be validated under real user interaction patterns.',
      'Edge conditions around timeouts and auction completion had high product risk.',
      'Rapid issue discovery was essential before active auctions impacted user trust.',
    ],
    outcome: 'Helped surface time-sensitive defects early and improved confidence in auction reliability during active flow windows.',
    timeline: 'Q4 2023 • 7-week release cycle',
    accent: 'from-amber-500/35 via-orange-500/20 to-transparent',
  },
  {
    title: 'Web Applications',
    icon: '▣',
    productType: 'Multi-page business and customer web products',
    role: 'QA Engineer',
    scope: 'Landing, onboarding, account journeys, dynamic forms, and general release readiness',
    testingTypes: ['User Journey Testing', 'UI Validation', 'Cross-Browser Testing', 'Regression Testing', 'Accessibility Checks'],
    tools: ['Playwright', 'Jira', 'Asana', 'Git', 'Chrome DevTools'],
    challenges: [
      'Product experiences needed consistency across pages, modules, and browser conditions.',
      'Release readiness required a structured validation pass over multiple journeys.',
      'Frequent iteration meant defect discovery needed to be quick and actionable.',
    ],
    outcome: 'Improved product stability and reduced release risks by validating high-impact user journeys across web experiences.',
    timeline: 'Ongoing • continuous delivery',
    accent: 'from-violet-500/35 via-fuchsia-500/20 to-transparent',
  },
  {
    title: 'Mobile Applications',
    icon: '▤',
    productType: 'Cross-platform mobile product experiences',
    role: 'QA Engineer',
    scope: 'App flows, onboarding pathways, data persistence, push-triggered actions, and device validation',
    testingTypes: ['Mobile QA', 'Regression Testing', 'API Validation', 'UI Validation', 'Device Compatibility Testing'],
    tools: ['Postman', 'Jira', 'Playwright', 'Manual Testing', 'BrowserStack'],
    challenges: [
      'Mobile experiences required device-wide validation for behavior differences and edge cases.',
      'State persistence and repeat interactions needed strong validation around user sessions.',
      'Product quality depended on consistency across onboarding and workflow-critical screens.',
    ],
    outcome: 'Built greater confidence in mobile usability and product stability by validating real user flows under realistic conditions.',
    timeline: 'Ongoing • release-focused validation',
    accent: 'from-pink-500/35 via-rose-500/20 to-transparent',
  },
]

function Projects() {
  return (
    <section id="projects" className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-6 py-16 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-10 lg:px-16 lg:py-20">
      <div className="max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Featured Testing Projects</p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-4xl">
          Quality engineering work designed to reduce release risk and elevate product confidence.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
          A premium showcase of testing-focused product work across AI booking, CRM, HRM, auctions, web apps, and mobile experiences—without naming confidential client organizations.
        </p>
      </div>

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative overflow-hidden rounded-[1.9rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(15,23,42,0.04))] p-5 shadow-[var(--shadow-soft)] backdrop-blur-2xl"
          >
            <div className={`absolute inset-x-0 top-0 h-full bg-gradient-to-br ${project.accent}`} />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[var(--surface-strong)]/80 text-2xl shadow-[0_12px_30px_-18px_rgba(15,23,42,0.8)]">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">{project.timeline}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.3rem] border border-[var(--border)] bg-[var(--surface)]/80 p-4 shadow-sm backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">Product Type</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text)]">{project.productType}</p>
                </div>

                <div className="rounded-[1.3rem] border border-[var(--border)] bg-[var(--surface)]/80 p-4 shadow-sm backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">My Role</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text)]">{project.role}</p>
                </div>
              </div>

              <div className="mt-4 rounded-[1.3rem] border border-[var(--border)] bg-[var(--surface)]/80 p-4 shadow-sm backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">Testing Scope</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text)]">{project.scope}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.testingTypes.map((type) => (
                  <span key={type} className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-medium text-[var(--text)]">
                    {type}
                  </span>
                ))}
              </div>

              <details className="group mt-5 rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)]/80 p-4 shadow-sm backdrop-blur-xl">
                <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--text)] marker:content-none">
                  <span className="flex items-center justify-between gap-3">
                    <span>Expand project details</span>
                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-2 py-1 text-xs text-[var(--text-muted)] transition group-open:rotate-180">
                      ▾
                    </span>
                  </span>
                </summary>

                <AnimatePresence initial={false}>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-4 pt-4 border-t border-[var(--border)]">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">Tools Used</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span key={tool} className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-xs font-medium text-[var(--text)]">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">Challenges</p>
                        <ul className="mt-2 space-y-2 text-sm leading-7 text-[var(--text-muted)]">
                          {project.challenges.map((challenge) => (
                            <li key={challenge} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">Outcome</p>
                        <p className="mt-2 text-sm leading-7 text-[var(--text)]">{project.outcome}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </details>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects

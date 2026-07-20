import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Associate Software Quality Assurance Engineer',
    company: 'TAFSOL Technologies',
    duration: 'May 2024 – Present',
    summary:
      'Supporting quality delivery for modern SaaS products through thoughtful testing, automation, and strong collaboration across web and mobile platforms.',
    achievements: [
      'Delivered reliable validation across CRM, HRM, and SaaS product workflows',
      'Strengthened release confidence with manual testing, regression coverage, and bug reporting',
      'Applied Playwright, Postman, Swagger, Jira, and Asana in day-to-day QA execution',
    ],
    technologies: ['Playwright', 'Postman', 'Swagger', 'Jira', 'Asana'],
    responsibilities: ['Manual Testing', 'Automation Testing', 'API Testing', 'Regression Testing', 'Test Planning', 'Bug Reporting'],
    icon: '💼',
  },
  {
    role: 'Software Quality Assurance Intern',
    company: 'Talverse',
    duration: 'July 2023 – August 2023',
    summary:
      'Built a strong testing foundation by contributing to test case creation, execution, and issue reporting for mobile and web experiences.',
    achievements: [
      'Created structured test cases for functional scenarios',
      'Supported mobile and web testing efforts with clear defect reporting',
      'Developed a disciplined approach to quality observation and execution',
    ],
    technologies: ['Test Cases', 'Mobile Testing', 'Web Testing', 'Bug Reporting'],
    responsibilities: ['Test Case Creation', 'Test Execution', 'Mobile Testing', 'Web Testing', 'Bug Reporting'],
    icon: '🎓',
  },
]

function Experience() {
  return (
    <section id="experience" className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-6 py-16 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-10 lg:px-16 lg:py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Professional Journey</p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-4xl">
          My journey in quality engineering has been shaped by discipline, curiosity, and a commitment to reliable software.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
          A focused progression from foundational QA practice to contributing across automation, API validation, and high-quality software delivery with a product-minded approach.
        </p>
      </div>

      <div className="mt-12 relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/70 via-[var(--accent)]/20 to-transparent md:left-8" />

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl md:p-8"
            >
              <div className="absolute left-3 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--surface-strong)] text-lg md:left-5">
                {item.icon}
              </div>

              <div className="pl-12 md:pl-16">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)]">{item.role}</h3>
                    <p className="mt-1 text-lg font-medium text-[var(--accent)]">{item.company}</p>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--text-muted)]">
                    {item.duration}
                  </p>
                </div>

                <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-muted)]">{item.summary}</p>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Key Achievements</p>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Technologies & Responsibilities</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-sm text-[var(--text)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.responsibilities.map((responsibility) => (
                        <span key={responsibility} className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-sm text-[var(--text)]">
                          {responsibility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

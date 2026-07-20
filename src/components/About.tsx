function About() {
  const facts = [
    { label: 'Location', value: 'Karachi, Pakistan' },
    { label: 'Experience', value: '2+ Years' },
    { label: 'Email', value: 'syedmsalman02@gmail.com' },
    { label: 'Availability', value: 'Open to Opportunities' },
  ]

  return (
    <section
      id="about"
      className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)]/90 px-8 py-16 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-12 lg:px-16 lg:py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="animate-[fadeIn_0.8s_ease-out]">
          <div className="mx-auto flex max-w-sm items-center justify-center rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-4 shadow-sm">
            <div className="flex h-[380px] w-full items-center justify-center rounded-[1.5rem] border border-[var(--border)] bg-gradient-to-br from-[var(--accent-soft)] via-[var(--surface)] to-[var(--surface-strong)] text-center">
              <div>
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--accent)] text-3xl font-semibold text-white shadow-lg">
                  S
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  Based in Karachi
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Focused on reliable software and quality-led delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-[fadeIn_1s_ease-out]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            About Me
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-4xl">
            I bring a quality-first mindset to software that needs to be reliable, scalable, and user-ready.
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-8 text-[var(--text-muted)]">
            <p>
              I’m a Software Quality Assurance Engineer focused on building confidence in products through disciplined testing, thoughtful validation, and strong collaboration.
            </p>
            <p>
              My work spans manual testing, automation, API validation, and regression planning, with a consistent goal of making releases more dependable and user experiences smoother.
            </p>
            <p>
              I care about the details that protect users, support teams, and strengthen trust in the products people rely on every day.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  {fact.label}
                </p>
                <p className="mt-1 text-base font-medium text-[var(--text)]">{fact.value}</p>
              </div>
            ))}
          </div>

          <a
            href="#projects"
            className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">{description}</p> : null}
    </div>
  )
}

export default SectionHeading

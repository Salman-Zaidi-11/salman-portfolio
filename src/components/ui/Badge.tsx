type BadgeProps = {
  children: React.ReactNode
  className?: string
}

function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-sm font-medium text-[var(--text)] ${className}`.trim()}>
      {children}
    </span>
  )
}

export default Badge

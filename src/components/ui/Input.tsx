type InputProps = {
  label?: string
  placeholder?: string
  type?: string
  className?: string
}

function Input({ label, placeholder, type = 'text', className = '' }: InputProps) {
  return (
    <label className="block text-sm font-medium text-[var(--text)]">
      {label ? <span className="mb-2 block">{label}</span> : null}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] shadow-sm outline-none transition focus:border-[var(--accent)] ${className}`.trim()}
      />
    </label>
  )
}

export default Input

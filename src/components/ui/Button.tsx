import { motion } from 'framer-motion'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  as?: 'a' | 'button'
  href?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

function Button({
  children,
  variant = 'primary',
  className = '',
  as = 'button',
  href,
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

  const variants = {
    primary:
      'bg-[var(--accent)] text-white shadow-[0_12px_35px_-15px_var(--accent)] hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]',
    secondary:
      'border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]',
    ghost:
      'bg-transparent text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]',
  }

  const sharedClassName = `${baseStyles} ${variants[variant]} ${className}`.trim()

  if (as === 'a') {
    return (
      <motion.a
        href={href}
        className={sharedClassName}
        onClick={onClick}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={sharedClassName}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export default Button

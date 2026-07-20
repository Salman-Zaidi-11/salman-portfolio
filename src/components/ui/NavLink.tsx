import { motion } from 'framer-motion'

type NavLinkProps = {
  label: string
  href: string
  active?: boolean
  onClick?: () => void
}

function NavLink({ label, href, active = false, onClick }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ y: -1, scale: 1.01 }}
      className={`group relative rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? 'text-[var(--text)]'
          : 'text-[var(--text-muted)] hover:text-[var(--text)]'
      }`}
    >
      <span className="relative z-10">{label}</span>
      {active ? (
        <span className="absolute inset-0 rounded-full bg-[var(--accent-soft)]" />
      ) : null}
    </motion.a>
  )
}

export default NavLink

import { motion } from 'framer-motion'

type SocialLinkProps = {
  label: string
  href: string
}

function SocialLink({ label, href }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
    >
      {label}
    </motion.a>
  )
}

export default SocialLink

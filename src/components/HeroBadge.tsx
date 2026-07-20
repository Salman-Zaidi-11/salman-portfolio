import { motion } from 'framer-motion'

type HeroBadgeProps = {
  label: string
}

function HeroBadge({ label }: HeroBadgeProps) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.02 }}
      className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-slate-100 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl"
    >
      {label}
    </motion.span>
  )
}

export default HeroBadge

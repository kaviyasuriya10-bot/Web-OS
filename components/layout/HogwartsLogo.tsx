import { motion, useReducedMotion } from "motion/react"
import type { CSSProperties } from "react"

type Props = {
  className?: string
  colors?: { text?: string; logo?: string }
  animate?: boolean
}

export default function HogwartsLogo({ className = "w-100", colors, animate = true }: Props) {
  const reduced = useReducedMotion()
  const canAnimate = animate && !reduced
  const text = colors?.text ?? "#F4D58D"
  const accent = colors?.logo ?? "#D4AF37"
  return (
    <motion.div
      className={className}
      initial={canAnimate ? { opacity: 0, y: 8 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      style={{ fontFamily: "Georgia, serif", letterSpacing: "0.08em" } as CSSProperties}
    >
      <div style={{ color: text, fontSize: "clamp(24px, 5vw, 54px)", fontWeight: 700, lineHeight: 1 }}>
        HOGWARTS
      </div>
      <div style={{ color: accent, fontSize: "clamp(11px, 2vw, 19px)", fontWeight: 700, letterSpacing: "0.42em", marginTop: 8 }}>
        OS
      </div>
    </motion.div>
  )
}

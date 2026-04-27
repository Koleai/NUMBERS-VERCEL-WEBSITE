"use client"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animation"
import { useReducedMotion } from "@/hooks/useReducedMotion"

interface AnimatedTextProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedText({ children, delay = 0, className }: AnimatedTextProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

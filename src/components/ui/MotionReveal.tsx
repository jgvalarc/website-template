'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

interface MotionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  margin?: string
  y?: number
  as?: 'div' | 'h2'
}

export function MotionReveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  margin = '0px 0px -10% 0px',
  y = 24,
  as = 'div',
}: MotionRevealProps) {
  const shouldReduce = useReducedMotion()
  const ref = useRef<HTMLDivElement | HTMLHeadingElement>(null)
  const inView = useInView(ref, {
    once: true,
    margin: margin as `${number}px`,
  })

  const initial = shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y }
  const animate =
    shouldReduce || inView ? { opacity: 1, y: 0 } : { opacity: 0, y }

  const motionProps = {
    initial,
    animate,
    transition: { duration, delay, ease: EASE },
    className,
  }

  if (as === 'h2') {
    return (
      <motion.h2
        ref={ref as React.RefObject<HTMLHeadingElement>}
        {...motionProps}
      >
        {children}
      </motion.h2>
    )
  }

  return (
    <motion.div ref={ref as React.RefObject<HTMLDivElement>} {...motionProps}>
      {children}
    </motion.div>
  )
}

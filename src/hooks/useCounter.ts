'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

type UseCounterOptions = {
  from?: number
  to: number
  duration?: number
  decimals?: number
  enabled?: boolean
}

export function useCounter({
  from = 0,
  to,
  duration = 1600,
  decimals = 0,
  enabled = true,
}: UseCounterOptions) {
  const elementRef = useRef<HTMLElement | null>(null)
  const inView = useInView(elementRef, { once: true, amount: 0.4 })
  const reduced = useReducedMotion()
  const initial = reduced || !enabled ? to : from
  const [animatedValue, setAnimatedValue] = useState<number>(initial)

  useEffect(() => {
    if (!enabled || !inView || reduced) return

    let frame = 0

    if (duration <= 0 || from === to) {
      frame = requestAnimationFrame(() => setAnimatedValue(to))
      return () => cancelAnimationFrame(frame)
    }

    const startedAt = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setAnimatedValue(from + (to - from) * eased)

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [duration, enabled, from, to, inView, reduced])

  const value = enabled ? animatedValue : to
  const isCounting = enabled && !reduced && inView && value !== to

  const formatted = useMemo(
    () =>
      value.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    [decimals, value],
  )

  return { formatted, isCounting, elementRef }
}

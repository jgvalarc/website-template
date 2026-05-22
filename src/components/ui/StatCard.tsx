'use client'

import { cn } from '@/lib/utils'
import { useCounter } from '@/hooks/useCounter'

interface StatCardProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
  animated?: boolean
  className?: string
  /**
   * Visual style. `card` is bordered (legacy), `flat` is transparent
   * matching the prototype's stat-bar treatment (border-r dividers handled by parent).
   */
  variant?: 'card' | 'flat'
  /** When true, render the suffix in lime-deep (e.g. for `%`). */
  accentSuffix?: boolean
}

export function StatCard({
  value,
  label,
  prefix,
  suffix,
  duration,
  decimals,
  animated = false,
  className,
  variant = 'flat',
  accentSuffix = false,
}: StatCardProps) {
  const { formatted, isCounting, elementRef } = useCounter({
    to: value,
    duration,
    decimals,
    enabled: animated,
  })
  const staticValue = value.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals ?? 0,
    maximumFractionDigits: decimals ?? 0,
  })

  return (
    <article
      ref={elementRef as React.RefObject<HTMLElement>}
      className={cn(
        'flex flex-col justify-between',
        variant === 'card'
          ? 'border-line bg-surface-raised/60 min-h-42 border p-5'
          : 'p-7',
        className,
      )}
    >
      <div
        className={cn(
          'font-display text-display-md text-copy leading-none uppercase',
          isCounting && 'is-counting',
        )}
      >
        {prefix}
        {animated ? formatted : staticValue}
        {suffix && (
          <span className={cn(accentSuffix && 'text-accent-strong')}>
            {suffix}
          </span>
        )}
      </div>
      <p className="text-muted mt-6 font-mono text-xs leading-relaxed tracking-[0.08em] uppercase">
        {label}
      </p>
    </article>
  )
}

import type { ReactNode } from 'react'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { cn } from '@/lib/utils'

interface SectionHeadProps {
  eyebrow: string
  title: ReactNode
  index?: string
  action?: ReactNode
  lede?: ReactNode
  bone?: boolean
}

export function SectionHead({
  eyebrow,
  title,
  index,
  action,
  lede,
  bone = false,
}: SectionHeadProps) {
  return (
    <MotionReveal
      className={cn(
        'mb-12 grid gap-12 border-b pb-12 md:grid-cols-[1.2fr_1fr] md:items-end',
        bone ? 'border-[var(--text-inverse-faint)]' : 'border-line',
      )}
    >
      <div>
        <SectionLabel className={bone ? 'text-accent-strong' : undefined}>
          {eyebrow}
        </SectionLabel>
        <SectionTitle className="mt-3">{title}</SectionTitle>
        {lede ? (
          <p
            className={cn(
              'lede mt-6',
              bone && 'text-[var(--text-inverse-mid)]',
            )}
          >
            {lede}
          </p>
        ) : null}
      </div>
      {(index || action) && (
        <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
          {index ? (
            <span
              className={cn('index', bone && 'text-[var(--text-inverse-lo)]')}
            >
              {index}
            </span>
          ) : null}
          {action}
        </div>
      )}
    </MotionReveal>
  )
}

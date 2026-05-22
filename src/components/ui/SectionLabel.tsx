import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'eyebrow text-accent mb-4 inline-flex items-center',
        className,
      )}
    >
      {children}
    </div>
  )
}

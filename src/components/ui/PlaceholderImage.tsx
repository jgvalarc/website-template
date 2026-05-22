import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  label: string
  corner?: string
  tone?: 'default' | 'inverse'
  className?: string
}

export function PlaceholderImage({
  label,
  corner,
  tone = 'default',
  className,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'placeholder aspect-[3/4] min-h-60 w-full',
        tone === 'inverse' && 'placeholder--inverse',
        className,
      )}
      role="img"
      aria-label={label}
    >
      <span className="placeholder__label">IMG · {label}</span>
      {corner ? <span className="placeholder__corner">{corner}</span> : null}
    </div>
  )
}

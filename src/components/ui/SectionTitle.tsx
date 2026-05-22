import { cn } from '@/lib/utils'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function SectionTitle({
  children,
  className,
  as: Tag = 'h2',
  size = 'lg',
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        'font-display m-0 leading-[0.92] font-normal text-balance uppercase',
        {
          'text-display-sm': size === 'sm',
          'text-display-md': size === 'md',
          'text-display-lg': size === 'lg',
          'text-display-xl': size === 'xl',
        },
        className,
      )}
    >
      {children}
    </Tag>
  )
}

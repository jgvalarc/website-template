import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  href?: string
  className?: string
  variant?: 'lockup' | 'mark'
}

export function Logo({ href, className, variant = 'lockup' }: LogoProps) {
  const isMark = variant === 'mark'

  const content = (
    <Image
      src={isMark ? '/logo-mark.svg' : '/logo-lockup.svg'}
      alt="Logo"
      width={isMark ? 40 : 120}
      height={isMark ? 40 : 28}
      className={cn(
        'h-auto w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/logo:scale-[1.05]',
        isMark ? 'h-8' : 'h-7',
      )}
      priority
    />
  )

  const classes = cn(
    'group/logo inline-flex items-center leading-none',
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes} aria-label="Início">
        {content}
      </Link>
    )
  }

  return <div className={classes}>{content}</div>
}

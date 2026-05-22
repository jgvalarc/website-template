import Link from 'next/link'
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { Children, isValidElement } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'ghost'
type ButtonSize = 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-primary bg-accent text-surface-deep hover:bg-accent-light',
  ghost: 'btn-ghost bg-transparent text-copy',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-5 py-3.5 text-[12px] tracking-[0.12em] gap-2.5',
  lg: 'px-[26px] py-[18px] text-[13px] tracking-[0.12em] gap-2.5',
}

const baseClasses = cn(
  'group/btn inline-flex items-center justify-center rounded-[2px]',
  'font-mono font-medium uppercase whitespace-nowrap',
  'transition-[transform,background-color,color,box-shadow] duration-160 ease-out',
  'hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime',
)

type SharedProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
  /** When true, treat the trailing arrow glyph in children as an animated `.arrow` element. */
  withArrow?: boolean
}

type LinkButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps | 'href'> & {
    href: string
  }

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: never
  }

type ButtonProps = LinkButtonProps | NativeButtonProps

const ARROW_GLYPHS = ['↗', '→', '↘', '↓']

function renderChildren(children: ReactNode, withArrow: boolean): ReactNode {
  if (!withArrow) return children

  // If children is a string, split off a trailing arrow glyph and wrap it.
  if (typeof children === 'string') {
    const trimmed = children.trimEnd()
    const last = trimmed.slice(-1)
    if (ARROW_GLYPHS.includes(last)) {
      return (
        <>
          {trimmed.slice(0, -1)}
          <span className="arrow inline-block transition-transform duration-160 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
            {last}
          </span>
        </>
      )
    }
  }

  // For arrays / fragments — pass through; consumers can mark explicitly.
  return Children.map(children, (child) => {
    if (typeof child === 'string') {
      const trimmed = child.trimEnd()
      const last = trimmed.slice(-1)
      if (ARROW_GLYPHS.includes(last)) {
        return (
          <>
            {trimmed.slice(0, -1)}
            <span className="arrow inline-block transition-transform duration-160 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
              {last}
            </span>
          </>
        )
      }
    }
    if (isValidElement(child)) return child
    return child
  })
}

export function Button(props: ButtonProps) {
  const isLink = 'href' in props && props.href !== undefined

  if (isLink) {
    const {
      href,
      variant = 'primary',
      size = 'md',
      className,
      children,
      withArrow = true,
      ...rest
    } = props
    const cls = cn(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      className,
    )
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {renderChildren(children, withArrow)}
        </a>
      )
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {renderChildren(children, withArrow)}
      </Link>
    )
  }

  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    withArrow = true,
    type = 'button',
    ...rest
  } = props
  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...rest}
    >
      {renderChildren(children, withArrow)}
    </button>
  )
}

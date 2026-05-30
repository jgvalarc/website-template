'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useScrolled } from '@/hooks/useScrolled'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Nav() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  // Close the mobile panel on Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,backdrop-filter] duration-300',
        'border-line backdrop-blur-[18px] backdrop-saturate-150',
        scrolled || open ? 'bg-[var(--nav-bg-scrolled)]' : 'bg-[var(--nav-bg)]',
      )}
    >
      <div
        className="mx-auto flex h-18 items-center justify-between gap-8"
        style={{
          maxWidth: 'var(--container)',
          paddingInline: 'var(--gutter)',
        }}
      >
        <Logo href="/" className="shrink-0" />

        <nav
          aria-label="Navegação principal"
          className="hidden flex-1 justify-center md:flex"
        >
          <ul className="m-0 flex list-none gap-7 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'group/link relative inline-block py-2 font-mono text-[11px] font-medium tracking-[0.14em] uppercase',
                    'text-muted hover:text-accent transition-colors duration-150',
                  )}
                >
                  {label}
                  <span
                    aria-hidden
                    className="bg-accent absolute right-0 bottom-1 left-0 h-px origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          href="/contact"
          variant="primary"
          className="hidden shrink-0 md:inline-flex"
        >
          Marcar consulta ↗
        </Button>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="text-copy -mr-2 grid size-10 shrink-0 place-items-center md:hidden"
        >
          <span aria-hidden className="relative block h-3 w-6">
            <span
              className={cn(
                'absolute left-0 block h-px w-6 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute bottom-0 left-0 block h-px w-6 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : '',
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'bg-surface border-line overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden',
          open
            ? 'max-h-[80vh] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <nav
          aria-label="Navegação móvel"
          className="px-[var(--gutter)] pt-2 pb-6"
        >
          <ul className="m-0 grid list-none p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="border-line border-b">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-display hover:text-accent flex items-center justify-between py-4 text-[28px] leading-none tracking-[0.02em] uppercase transition-colors duration-150"
                >
                  {label}
                  <span aria-hidden className="text-accent font-mono text-[14px]">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Button
            href="/contact"
            variant="primary"
            onClick={() => setOpen(false)}
            className="mt-6 w-full"
          >
            Marcar consulta ↗
          </Button>
        </nav>
      </div>
    </header>
  )
}

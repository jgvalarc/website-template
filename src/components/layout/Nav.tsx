'use client'

import Link from 'next/link'
import { useScrolled } from '@/hooks/useScrolled'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Nav() {
  const scrolled = useScrolled()

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,backdrop-filter] duration-300',
        'border-line backdrop-blur-[18px] backdrop-saturate-150',
        scrolled ? 'bg-[var(--nav-bg-scrolled)]' : 'bg-[var(--nav-bg)]',
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
          className="hidden shrink-0 sm:inline-flex"
        >
          Marcar consulta ↗
        </Button>
      </div>
    </header>
  )
}

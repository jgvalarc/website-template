import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { FOOTER_SECTIONS, ORG_INFO, SITE_TAGLINE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="surface-deep border-line py-section-tight border-t">
      <Container>
        <div className="border-line grid grid-cols-1 gap-12 border-b pb-12 md:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-[36ch]">
            <Logo className="[&_img]:!h-[42px]" />
            <p className="text-muted mt-5 text-[15px] leading-7">
              {SITE_TAGLINE}.
            </p>
            <p className="text-dim mt-6 font-mono text-[10px] leading-5 tracking-[0.1em] uppercase">
              {ORG_INFO.registration}
            </p>
          </div>

          {FOOTER_SECTIONS.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-accent mb-4 font-mono text-[11px] font-medium tracking-[0.16em] uppercase">
                {heading}
              </h4>
              <ul className="m-0 list-none space-y-2.5 p-0">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-muted hover:text-copy text-[14px] transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-dim flex flex-wrap items-center justify-between gap-3 pt-6 font-mono text-[11px] tracking-[0.1em] uppercase">
          <span>
            © {new Date().getFullYear()} {ORG_INFO.name} · Todos os direitos
            reservados
          </span>
          <span>{SITE_TAGLINE}.</span>
        </div>
      </Container>
    </footer>
  )
}

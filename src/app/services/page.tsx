import type { Metadata } from 'next'
import CTAPoster from '@/components/sections/CTAPoster'
import { Container } from '@/components/ui/Container'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StaggerItem, StaggerReveal } from '@/components/ui/StaggerReveal'
import { SERVICES, SITE_NAME, type Service } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Serviços — ${SITE_NAME}`,
  description: 'Catálogo completo de serviços integrados ao método.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-line relative overflow-hidden border-b pt-24 pb-20">
        <Container>
          <MotionReveal>
            <div className="text-dim mb-6 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase">
              <span>{SITE_NAME}</span>
              <span>/</span>
              <span className="text-copy">Serviços</span>
            </div>
            <SectionLabel>Catálogo</SectionLabel>
            <SectionTitle as="h1" size="xl">
              Todos os serviços.
              <br />
              <span className="text-accent">Um método.</span>
            </SectionTitle>
            <p className="lede mt-6">
              Cada serviço é prescrito a partir do diagnóstico — nunca aplicado
              em série. Aqui está o catálogo completo do que oferecemos.
            </p>
          </MotionReveal>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>Serviços</SectionLabel>
              <SectionTitle className="mt-3">O que oferecemos.</SectionTitle>
            </div>
            <span className="index">— {SERVICES.length} técnicas</span>
          </div>

          <StaggerReveal className="border-line border">
            {SERVICES.map((service) => (
              <StaggerItem key={service.number}>
                <ServiceRow service={service} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <CTAPoster />
    </>
  )
}

function ServiceRow({ service }: { service: Service }) {
  return (
    <article className="border-line grid gap-8 border-b p-9 last:border-b-0 lg:grid-cols-[80px_1fr_1.2fr_240px] lg:gap-8">
      <div className="font-display text-accent text-[56px] leading-[0.85]">
        {service.number}
      </div>

      <div>
        <span className="text-dim font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
          {service.category}
        </span>
        <h2 className="font-display mt-4 mb-0 text-[clamp(28px,3vw,38px)] leading-[0.95] tracking-[0.02em] uppercase">
          {service.title}
        </h2>
      </div>

      <div>
        <p className="text-muted m-0 mb-3.5 text-[15px] leading-[1.55]">
          {service.description}
        </p>
        <ul className="border-line m-0 mt-3 flex list-none flex-wrap gap-2 border-t border-dashed p-0 pt-3">
          {service.indications.map((indication) => (
            <li
              key={indication}
              className="border-line text-muted border px-2 py-1 font-mono text-[11px] tracking-[0.1em] uppercase"
            >
              {indication}
            </li>
          ))}
        </ul>
      </div>

      <aside className="bg-surface-raised grid h-fit gap-3 p-4">
        {service.meta.map((item) => (
          <div
            key={item.label}
            className="flex items-baseline justify-between gap-3"
          >
            <span className="text-dim font-mono text-[10px] tracking-[0.14em] uppercase">
              {item.label}
            </span>
            <strong className="text-copy text-[13px] font-medium">
              {item.value}
            </strong>
          </div>
        ))}
        {service.cta ? (
          <a
            href="/contact"
            className="border-line text-accent mt-2 block border-t pt-3 text-center font-mono text-[11px] tracking-[0.12em] uppercase transition-colors hover:text-[var(--accent-strong)]"
          >
            {service.cta} ↗
          </a>
        ) : null}
      </aside>
    </article>
  )
}

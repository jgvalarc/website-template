import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { StaggerItem, StaggerReveal } from '@/components/ui/StaggerReveal'
import { ORG_INFO, PRICING_PLANS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { SectionHead } from './SectionHead'

export default function Pricing() {
  return (
    <section id="planos" className="surface-inverse section-py">
      <Container>
        <SectionHead
          eyebrow="Planos"
          index="— 07 / 07"
          bone
          title={
            <>
              Serviço sério,
              <br />
              <span className="text-accent-strong">preço transparente.</span>
            </>
          }
        />

        <StaggerReveal className="grid border border-[var(--text-inverse-faint)] lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = 'featured' in plan && plan.featured

            return (
              <StaggerItem key={plan.name}>
                <article
                  className={cn(
                    'relative z-0 grid min-h-full gap-6 border-b border-[var(--text-inverse-faint)] px-8 py-9 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:border-r lg:border-b-0',
                    isFeatured
                      ? 'bg-surface text-surface-inverse'
                      : 'bg-surface-inverse text-[var(--text-inverse-hi)] hover:z-10 hover:-translate-y-1 hover:bg-white',
                  )}
                >
                  <header className="grid gap-3">
                    <span
                      className={cn(
                        'w-max border px-2 py-1 font-mono text-[10px] tracking-[0.16em] uppercase',
                        isFeatured
                          ? 'border-accent bg-accent text-surface-deep'
                          : 'border-[var(--text-inverse-faint)] text-[var(--text-inverse-mid)]',
                      )}
                    >
                      {plan.tag}
                    </span>
                    <h3 className="font-display text-display-sm m-0 text-balance uppercase">
                      {plan.name}
                    </h3>
                  </header>

                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span
                      className={cn(
                        'font-mono text-[14px]',
                        isFeatured
                          ? 'text-muted'
                          : 'text-[var(--text-inverse-mid)]',
                      )}
                    >
                      {plan.price.split(' ')[0]}
                    </span>
                    <span className="font-display text-display-md leading-none">
                      {plan.price.replace('R$ ', '')}
                    </span>
                    <span
                      className={cn(
                        'basis-full font-mono text-[11px] tracking-[0.1em] uppercase',
                        isFeatured
                          ? 'text-muted'
                          : 'text-[var(--text-inverse-mid)]',
                      )}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <ul
                    className={cn(
                      'm-0 grid list-none gap-2 border-t p-0 pt-5 text-[14px]',
                      isFeatured
                        ? 'border-line text-muted'
                        : 'border-[var(--text-inverse-faint)] text-[var(--text-inverse-mid)]',
                    )}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className="text-accent-strong" aria-hidden="true">
                          →{' '}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={plan.href}
                    variant={isFeatured ? 'primary' : 'ghost'}
                    className="mt-auto justify-self-start"
                  >
                    {plan.cta} ↗
                  </Button>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerReveal>

        <p className="mt-8 text-center font-mono text-[12px] leading-relaxed tracking-[0.06em] text-[var(--text-inverse-mid)] uppercase">
          {ORG_INFO.assessment.name}:{' '}
          <strong>{ORG_INFO.assessment.price}</strong> ·{' '}
          {ORG_INFO.assessment.duration} · presencial · valor descontado do
          pacote se contratar em até 7 dias.
        </p>
      </Container>
    </section>
  )
}

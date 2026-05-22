import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { StaggerItem, StaggerReveal } from '@/components/ui/StaggerReveal'
import { PROCESS_STEPS } from '@/lib/constants'
import { SectionHead } from './SectionHead'

export default function Process() {
  return (
    <section id="metodo" className="surface-inverse section-py">
      <Container>
        <SectionHead
          eyebrow="Como funciona"
          index="— 03 / 07"
          bone
          title={
            <>
              O processo
              <br />
              <span className="text-accent-strong">da marca.</span>
            </>
          }
          lede="Um protocolo em quatro fases — do primeiro encontro ao resultado final. Cada fase tem critérios de saída mensuráveis. Você só avança quando o processo permite."
          action={
            <Button href="/about" variant="ghost">
              Ver processo completo ↗
            </Button>
          }
        />

        <StaggerReveal className="grid border border-[var(--text-inverse-faint)] bg-[var(--text-inverse-faint)] md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.number}>
              <article className="bg-surface-inverse grid min-h-full gap-5 p-8">
                <div className="font-display text-display-lg text-accent-strong leading-[0.8]">
                  {step.number}
                </div>
                <div className="grid content-start gap-3">
                  <h3 className="font-display m-0 text-[28px] leading-[0.95] tracking-[0.02em] text-balance uppercase">
                    {step.title}
                  </h3>
                  <p className="m-0 text-[14px] leading-[1.55] text-[var(--text-inverse-mid)]">
                    {step.description}
                  </p>
                  <ul className="m-0 grid list-none gap-2 p-0 pt-2 font-mono text-[11px] tracking-[0.06em] text-[var(--text-inverse-mid)] uppercase">
                    {step.list.map((item) => (
                      <li key={item}>
                        <span className="text-accent-strong" aria-hidden="true">
                          →{' '}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  )
}

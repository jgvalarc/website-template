import type { Metadata } from 'next'
import CTAPoster from '@/components/sections/CTAPoster'
import { Container } from '@/components/ui/Container'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StaggerItem, StaggerReveal } from '@/components/ui/StaggerReveal'
import {
  PRINCIPLES,
  PROCESS_STEPS,
  SITE_NAME,
  type ProcessStep,
} from '@/lib/constants'
import { cn } from '@/lib/utils'

const PROCESS_STRIP = [
  ...PROCESS_STEPS.map((s) => s.title),
  ...PROCESS_STEPS.map((s) => s.title),
]

export const metadata: Metadata = {
  title: `Processo — ${SITE_NAME}`,
  description:
    'Conheça o processo em quatro fases: do diagnóstico ao resultado.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <section className="border-line relative overflow-hidden border-b pt-24 pb-20">
        <Container>
          <MotionReveal>
            <Breadcrumb current="Processo" />
            <SectionLabel>Como funciona</SectionLabel>
            <SectionTitle as="h1" size="xl">
              O processo
              <br />
              <span className="text-accent">{SITE_NAME}.</span>
            </SectionTitle>
            <p className="lede mt-6">
              Quatro fases. Critérios mensuráveis em cada uma. Você só avança
              quando o processo permite — e explicamos por quê.
            </p>
          </MotionReveal>
          <div className="border-line text-dim mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6 font-mono text-[11px] tracking-[0.14em] uppercase">
            {PROCESS_STEPS.map((step) => (
              <span key={step.number}>
                {step.number} — {step.title}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="surface-inverse py-section">
        <Container>
          <SectionHeader
            label="Princípios"
            title={
              <>
                Quatro{' '}
                <span className="text-accent-strong">não negociáveis.</span>
              </>
            }
            index="— Princípios / 01"
          />

          <StaggerReveal className="grid gap-px bg-[var(--text-inverse-faint)] md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((principle) => (
              <StaggerItem key={principle.number}>
                <article className="bg-surface-inverse grid gap-3.5 p-8">
                  <div className="font-display text-accent-strong text-display-md leading-[0.85]">
                    {principle.number}
                  </div>
                  <h3 className="font-display m-0 mt-2 text-[24px] leading-[1] tracking-[0.02em] uppercase">
                    {principle.title}
                  </h3>
                  <p className="m-0 text-[14px] leading-[1.55] text-[var(--text-inverse-mid)]">
                    {principle.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <SectionHeader
            label="As quatro fases"
            title={
              <>
                Do diagnóstico
                <br />
                ao <span className="text-accent">resultado.</span>
              </>
            }
            index="— Fases / 02"
          />

          <div>
            {PROCESS_STEPS.map((step, index) => (
              <PhaseBlock
                key={step.number}
                phase={step}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-accent text-surface-deep marquee--accent overflow-hidden">
        <div className="marquee-track">
          {PROCESS_STRIP.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-display flex shrink-0 items-center gap-5 px-5 py-4 text-[30px] leading-none uppercase"
            >
              {item}
              <span className="bg-surface-deep h-2 w-2 rounded-full" />
            </span>
          ))}
        </div>
      </div>

      <CTAPoster />
    </>
  )
}

function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="text-dim mb-6 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase">
      <span>{SITE_NAME}</span>
      <span>/</span>
      <span className="text-copy">{current}</span>
    </div>
  )
}

function SectionHeader({
  label,
  title,
  index,
}: {
  label: string
  title: React.ReactNode
  index: string
}) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
      <div>
        <SectionLabel>{label}</SectionLabel>
        <SectionTitle className="mt-3">{title}</SectionTitle>
      </div>
      <span className="index">{index}</span>
    </div>
  )
}

function PhaseBlock({
  phase,
  reverse,
}: {
  phase: ProcessStep
  reverse: boolean
}) {
  return (
    <article
      className={cn(
        'border-line grid gap-10 border-b py-16 last:border-b-0 lg:grid-cols-[80px_1.2fr_1fr]',
        reverse && 'lg:grid-cols-[80px_1fr_1.2fr]',
      )}
    >
      <div className="font-display text-accent text-[96px] leading-[0.85] lg:sticky lg:top-[100px] lg:self-start">
        {phase.number}
      </div>

      <div className={cn('grid content-start gap-5', reverse && 'lg:order-3')}>
        <SectionLabel>Fase {phase.number}</SectionLabel>
        <h3 className="font-display text-display-md m-0 uppercase">
          {phase.title}
        </h3>
        <p className="lede">{phase.description}</p>

        <div className="border-line mt-2 grid gap-6 border-t pt-4 md:grid-cols-2">
          <div>
            <h4 className="text-accent mb-3 font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
              O que acontece
            </h4>
            <ul className="text-muted m-0 grid list-none gap-1.5 p-0">
              {phase.list.map((item) => (
                <li key={item} className="text-[14px] leading-[1.5]">
                  <span className="text-accent mr-1.5" aria-hidden>
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-accent mb-3 font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
              O que recebe
            </h4>
            <p className="text-muted m-0 text-[14px] leading-[1.55]">
              Plano por escrito com a próxima fase, métricas atingidas e
              critério para avançar.
            </p>
          </div>
        </div>

        {phase.exitCriteria ? (
          <div className="border-line mt-2 grid gap-1 border border-dashed p-[14px_16px]">
            <span className="text-dim font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
              Critério de saída
            </span>
            <strong className="text-copy text-[14px] leading-[1.5] font-medium">
              {phase.exitCriteria}
            </strong>
          </div>
        ) : null}
      </div>

      <PlaceholderImage
        label={phase.imageLabel}
        corner="4 / 5"
        className={cn(
          'aspect-[4/5] lg:sticky lg:top-[100px] lg:self-start',
          reverse && 'lg:order-2',
        )}
      />
    </article>
  )
}

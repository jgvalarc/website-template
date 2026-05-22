import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { ORG_INFO, PROCESS_STEPS, SITE_DESCRIPTION } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="home"
      className="surface-default border-line relative min-h-[92vh] overflow-hidden border-b pt-28 pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(242,242,240,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,242,240,0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_30%,transparent_80%)] bg-[size:80px_80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-[-8%] w-[min(900px,80vw)] -translate-y-1/2 opacity-[0.06]"
        aria-hidden="true"
      >
        <Image src="/logo-mark.svg" alt="" width={900} height={900} priority />
      </div>

      <Container
        className="relative z-10 grid min-h-[calc(92vh-176px)] grid-rows-[auto_1fr_auto_auto] gap-9"
        as="div"
      >
        <MotionReveal className="flex flex-wrap items-center justify-between gap-6">
          <span className="eyebrow text-accent">
            {ORG_INFO.city}/{ORG_INFO.state}
          </span>
          <span className="text-muted inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase">
            <span className="pulse-dot" aria-hidden="true" />
            {ORG_INFO.city} · {ORG_INFO.district}
          </span>
        </MotionReveal>

        <MotionReveal className="self-end" delay={0.08}>
          <h1 className="font-display text-display-xl m-0 text-balance">
            Título principal;
            <br />
            <span className="text-accent">da sua marca.</span>
          </h1>
        </MotionReveal>

        <MotionReveal
          className="border-line grid items-end gap-10 border-t pt-8 lg:grid-cols-[1.15fr_0.85fr]"
          delay={0.16}
        >
          <p className="lede">{SITE_DESCRIPTION}</p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="#contato" variant="primary" className="px-6 py-4">
              Marcar consulta ↗
            </Button>
            <Button href="/about" variant="ghost" size="lg">
              Conhecer o processo
            </Button>
          </div>
        </MotionReveal>

        <MotionReveal
          className="text-dim flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] tracking-[0.14em] uppercase"
          delay={0.24}
        >
          {PROCESS_STEPS.slice(0, 3).map((step) => (
            <span key={step.number}>
              {step.number} — {step.title}
            </span>
          ))}
        </MotionReveal>
      </Container>
    </section>
  )
}

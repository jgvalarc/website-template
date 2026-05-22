import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { ORG_INFO, SITE_NAME } from '@/lib/constants'

export default function CTAPoster() {
  return (
    <section
      id="contato"
      className="bg-accent py-section relative overflow-hidden"
    >
      <div
        className="font-display text-surface-deep/10 pointer-events-none absolute right-[-2%] bottom-[-28%] text-[clamp(220px,30vw,460px)] leading-none tracking-normal uppercase"
        aria-hidden="true"
      >
        {SITE_NAME}
      </div>
      <Container className="relative">
        <MotionReveal className="border-surface-deep/20 text-surface-deep/70 mb-12 flex items-center justify-between gap-6 border-b pb-6 font-mono text-[11px] tracking-[0.16em] uppercase">
          <span className="eyebrow">A marca</span>
          <span>— Próximo passo</span>
        </MotionReveal>

        <MotionReveal
          as="h2"
          className="font-display text-surface-deep m-0 text-[clamp(64px,10vw,168px)] leading-[0.92] uppercase"
          delay={0.08}
        >
          Comece pelo
          <br />
          <span className="[-webkit-text-fill-color:transparent] [-webkit-text-stroke:1.5px_var(--surface-deep)]">
            diagnóstico
          </span>
          <br />é parte do
          <br />
          <span className="[-webkit-text-fill-color:transparent] [-webkit-text-stroke:1.5px_var(--surface-deep)]">
            processo.
          </span>
        </MotionReveal>

        <MotionReveal
          className="border-surface-deep/20 mt-16 flex flex-wrap items-end justify-between gap-10 border-t pt-8"
          delay={0.16}
        >
          <p className="text-surface-deep/75 m-0 font-mono text-[12px] leading-relaxed tracking-[0.1em] uppercase">
            {ORG_INFO.assessment.name} · {ORG_INFO.assessment.duration} ·
            presencial.
            <br />
            {ORG_INFO.assessment.description}
          </p>
          <Button
            href={ORG_INFO.whatsappHref}
            variant="primary"
            className="bg-surface-deep text-accent hover:bg-surface px-6 py-4"
          >
            Marcar consulta ↗
          </Button>
        </MotionReveal>
      </Container>
    </section>
  )
}

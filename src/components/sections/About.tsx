import { Container } from '@/components/ui/Container'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { StatCard } from '@/components/ui/StatCard'
import { STATS, VALUE_PROPS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function About() {
  return (
    <section id="sobre" className="surface-inverse section-py">
      <Container>
        <MotionReveal className="mb-12 flex items-center justify-between gap-6">
          <span className="eyebrow text-accent-strong">Sobre a marca</span>
          <span className="index text-[var(--text-inverse-lo)]">— 01 / 07</span>
        </MotionReveal>

        <div className="grid items-start gap-16 lg:grid-cols-[1.4fr_1fr]">
          <MotionReveal
            as="h2"
            className="font-display text-display-lg m-0 text-balance uppercase"
          >
            Título da secção
            <br />
            institucional,
            <br />
            <span className="text-accent-strong">da sua marca.</span>
          </MotionReveal>

          <MotionReveal className="grid gap-5 pt-3" delay={0.1}>
            <p className="lede text-[var(--text-inverse-mid)]">
              Texto de apresentação institucional. Explique aqui o que a marca
              faz, para quem e por quê de forma que faça sentido para o
              público-alvo.
            </p>
            <p className="lede text-[var(--text-inverse-mid)]">
              Uma segunda perspectiva ou complemento da apresentação. Pode
              abordar diferenciais, missão ou proposta de valor da organização.
            </p>

            <ul className="mt-2 grid list-none gap-2.5 p-0">
              {VALUE_PROPS.map((value) => (
                <li
                  key={value}
                  className="flex items-baseline gap-3.5 text-[15px] text-[var(--text-inverse-mid)]"
                >
                  <span
                    className="h-px w-[22px] shrink-0 translate-y-[-4px] bg-current opacity-60"
                    aria-hidden="true"
                  />
                  {value}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>

        <MotionReveal
          className="mt-24 grid border-y border-[var(--text-inverse-faint)] md:grid-cols-4"
          delay={0.18}
        >
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              animated
              accentSuffix={'suffix' in stat && stat.suffix === '%'}
              variant="flat"
              className={cn(
                'border-0 border-[var(--text-inverse-faint)] px-7 py-9 text-[var(--text-inverse-hi)] md:border-r',
                index === STATS.length - 1 && 'md:border-r-0',
                '[&_div]:text-[var(--text-inverse-hi)] [&_p]:text-[var(--text-inverse-mid)]',
              )}
            />
          ))}
        </MotionReveal>
      </Container>
    </section>
  )
}

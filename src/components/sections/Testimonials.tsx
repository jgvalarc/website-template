import { Container } from '@/components/ui/Container'
import { StaggerItem, StaggerReveal } from '@/components/ui/StaggerReveal'
import { TESTIMONIALS } from '@/lib/constants'
import { SectionHead } from './SectionHead'

export default function Testimonials() {
  return (
    <section id="resultados" className="surface-default section-py">
      <Container>
        <SectionHead
          eyebrow="Resultados reais"
          index="— 06 / 07"
          title={
            <>
              Quem voltou
              <br />
              mais forte.
            </>
          }
        />

        <StaggerReveal className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.initials}>
              <article className="border-line bg-surface-raised grid min-h-full gap-5 border p-7">
                <div className="border-line flex items-center justify-between gap-4 border-b pb-4 font-mono text-[11px] tracking-[0.1em] uppercase">
                  <span className="text-accent">{testimonial.sport}</span>
                  <span className="text-muted">{testimonial.timeframe}</span>
                </div>
                <blockquote
                  className="text-surface-inverse m-0 text-[17px] leading-relaxed"
                  style={{ fontWeight: 380 }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="border-line flex items-center gap-3 border-t border-dashed pt-2">
                  <div className="border-line bg-surface text-muted grid size-11 shrink-0 place-items-center border font-mono text-[11px]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <strong className="block text-[14px] font-medium">
                      {testimonial.name}
                    </strong>
                    <span className="text-muted font-mono text-[11px] tracking-[0.06em] uppercase">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
                <dl className="bg-line mt-auto grid grid-cols-3 gap-px pt-4">
                  {testimonial.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-surface grid gap-1 px-3.5 pt-3 pb-1"
                    >
                      <dt className="text-dim truncate font-mono text-[10px] tracking-[0.1em] uppercase">
                        {stat.label}
                      </dt>
                      <dd className="font-display text-accent m-0 truncate text-[22px] leading-none tracking-[0.02em]">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  )
}

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { StaggerItem, StaggerReveal } from '@/components/ui/StaggerReveal'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { SectionHead } from './SectionHead'

// Grid layout: row 1 (7+5), row 2 (4+4+4), row 3 (5+7)
const SPAN_PATTERN = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-5',
  'lg:col-span-7',
] as const

const ASPECT_PATTERN = [
  'aspect-video',
  'aspect-[16/10]',
  'aspect-[16/10]',
  'aspect-[16/10]',
  'aspect-[16/10]',
  'aspect-[16/10]',
  'aspect-video',
] as const

const featuredServices = SERVICES.filter((s) => s.featured)
  .slice(0, 6)
  .map((s, index) => ({
    ...s,
    span: SPAN_PATTERN[index] ?? 'lg:col-span-4',
    aspect: ASPECT_PATTERN[index] ?? 'aspect-[16/10]',
  }))

export default function Services() {
  return (
    <section id="tratamentos" className="surface-default section-py">
      <Container>
        <SectionHead
          eyebrow="O que oferecemos"
          index="— 02 / 07"
          title={
            <>
              Serviços
              <br />
              <span className="text-accent">que devolvem</span>
              <br />o resultado.
            </>
          }
          action={
            <Button href="/services" variant="ghost">
              Ver todos os serviços ↗
            </Button>
          }
        />

        <StaggerReveal className="border-line bg-line grid grid-cols-1 gap-px border lg:grid-cols-12">
          {featuredServices.map((service) => (
            <StaggerItem
              key={service.number}
              className={cn('treat-cell', service.span)}
            >
              <article className="treat group bg-surface hover:bg-surface-deep relative grid h-full gap-5 overflow-hidden p-8 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
                    <PlaceholderImage
                      label={`Serviço ${service.title}`}
                      corner={
                        service.span.includes('col-span-7')
                          ? '16 / 9'
                          : undefined
                      }
                      className={cn(service.aspect, 'min-h-56 border-0')}
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <span className="index">
                    {service.number} — {service.category}
                  </span>
                  <h3 className="font-display text-display-sm m-0 text-balance uppercase">
                    {service.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-[1.55]">
                    {service.description}
                  </p>
                  <div className="text-muted border-line mt-auto flex flex-wrap gap-2 border-t pt-4 font-mono text-[11px] tracking-[0.1em] uppercase">
                    {service.meta.map((item, i) => (
                      <span key={item.label} className="contents">
                        {i > 0 ? <span aria-hidden="true">·</span> : null}
                        <span>{item.value}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  aria-hidden
                  className="bg-accent pointer-events-none absolute right-8 bottom-8 left-8 h-px origin-left scale-x-0 opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-[0.3] group-hover:opacity-100"
                />
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  )
}

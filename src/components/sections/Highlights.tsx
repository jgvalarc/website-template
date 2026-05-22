import { Container } from '@/components/ui/Container'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { StaggerItem, StaggerReveal } from '@/components/ui/StaggerReveal'
import { HIGHLIGHTS } from '@/lib/constants'
import { SectionHead } from './SectionHead'

export default function Highlights() {
  return (
    <section id="equipamentos" className="surface-default section-py">
      <Container>
        <SectionHead
          eyebrow="Recursos e tecnologia"
          index="— 04 / 07"
          title={
            <>
              Recursos
              <br />
              que <span className="text-accent">fazem a diferença.</span>
            </>
          }
        />

        <StaggerReveal className="border-line bg-line grid gap-px border lg:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <StaggerItem key={item.name}>
              <article className="group bg-surface-raised hover:bg-surface-deep grid min-h-full transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:grid-cols-[1fr_1.2fr]">
                <div className="md:border-line overflow-hidden border-0 md:border-r">
                  <PlaceholderImage
                    label={item.name}
                    className="aspect-auto min-h-60 border-0 transition-[filter] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:brightness-110 group-hover:contrast-105 md:min-h-full"
                  />
                </div>
                <div className="grid content-start gap-4 p-7">
                  <span className="text-accent relative inline-block w-max font-mono text-[11px] tracking-[0.16em] uppercase">
                    {item.brand}
                    <span
                      aria-hidden
                      className="bg-accent absolute right-0 -bottom-1 left-0 h-px origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                    />
                  </span>
                  <h3 className="font-display text-display-sm m-0 text-balance uppercase">
                    {item.name}
                  </h3>
                  <p className="text-muted m-0 text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                  <div className="border-line mt-2 grid grid-cols-3 gap-3 border-t pt-4">
                    {item.specs.map((spec) => (
                      <div key={spec.label} className="grid gap-1">
                        <span className="text-dim font-mono text-[10px] tracking-[0.1em] uppercase">
                          {spec.label}
                        </span>
                        <strong className="text-surface-inverse text-[13px] font-medium">
                          {spec.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  )
}

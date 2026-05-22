import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { ORG_INFO } from '@/lib/constants'

const locationNotes = [
  'Seg-Sex · 09h-18h',
  'Sábado · Fechado',
  'Próximo ao centro',
  'Estacionamento disponível',
] as const

export default function Contact() {
  return (
    <section id="local" className="surface-deep section-py">
      <Container className="grid items-stretch gap-16 lg:grid-cols-[1fr_1.3fr]">
        <MotionReveal className="grid content-center gap-5">
          <span className="eyebrow text-accent">Onde estamos</span>
          <h2 className="font-display text-display-lg m-0 text-balance uppercase">
            {ORG_INFO.district},
            <br />
            <span className="text-accent">{ORG_INFO.city}.</span>
          </h2>
          <address className="text-muted border-line border-y py-5 leading-relaxed not-italic">
            {ORG_INFO.address}
            <br />
            {ORG_INFO.district} · {ORG_INFO.city} · {ORG_INFO.state}
          </address>
          <ul className="text-muted m-0 grid list-none gap-2 p-0 font-mono text-[12px] tracking-[0.1em] uppercase">
            {locationNotes.map((note) => (
              <li key={note} className="flex items-baseline gap-3">
                <span
                  className="h-px w-5 shrink-0 translate-y-[-4px] bg-current opacity-60"
                  aria-hidden="true"
                />
                {note}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">
              Agendar consulta ↗
            </Button>
            <Button href={ORG_INFO.whatsappHref} variant="ghost">
              WhatsApp ↗
            </Button>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <div className="relative min-h-90 overflow-hidden">
            <PlaceholderImage
              label="Mapa da localização"
              corner="aerial"
              className="aspect-auto min-h-90"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(199,242,59,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(199,242,59,0.08)_1px,transparent_1px)] bg-[size:48px_48px]"
              aria-hidden="true"
            />
            <div className="absolute top-[38%] left-[52%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-3">
              <span
                className="bg-accent size-3.5 animate-[pulse-dot_2.4s_ease-in-out_infinite] rounded-full shadow-[0_0_0_8px_rgba(199,242,59,0.18),0_0_0_18px_rgba(199,242,59,0.06)]"
                aria-hidden="true"
              />
              <span className="bg-accent text-surface-deep px-2 py-1 font-mono text-[11px] tracking-[0.16em] uppercase">
                LOCAL
              </span>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  )
}

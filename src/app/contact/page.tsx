import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactSidebar } from '@/components/forms/ContactSidebar'
import { Container } from '@/components/ui/Container'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Contacto — ${SITE_NAME}`,
  description: 'Entre em contacto e dê o primeiro passo.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="border-line border-b pt-16 pb-8">
        <Container>
          <MotionReveal>
            <div className="text-dim mb-6 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase">
              <span>{SITE_NAME}</span>
              <span>/</span>
              <span className="text-copy">Contacto</span>
            </div>
            <SectionTitle as="h1" size="lg" className="m-0">
              Vamos <span className="text-accent">conversar.</span>
            </SectionTitle>
          </MotionReveal>
        </Container>
      </section>

      <section className="pb-section pt-12">
        <Container>
          <div className="border-line grid grid-cols-1 border lg:grid-cols-[1fr_1.2fr]">
            <div className="border-line border-b lg:border-r lg:border-b-0">
              <ContactSidebar />
            </div>
            <div>
              <SectionLabel className="sr-only">
                Formulário de contacto
              </SectionLabel>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ORG_INFO } from '@/lib/constants'

const STEPS = [
  {
    number: '01',
    title: 'Recebemos a sua mensagem',
    description: 'Lemos cada mensagem com atenção antes de responder.',
  },
  {
    number: '02',
    title: 'Entramos em contacto',
    description: 'Respondemos em até 1 dia útil pelo canal que preferir.',
  },
  {
    number: '03',
    title: 'Marcamos o encontro',
    description: 'Definimos data, hora e próximo passo juntos.',
  },
  {
    number: '04',
    title: 'Começamos',
    description: 'A primeira sessão já é parte do processo.',
  },
] as const

export function ContactSidebar() {
  return (
    <aside className="surface-deep text-copy grid content-start gap-6 p-8 md:p-12 lg:p-14 lg:px-12">
      <SectionLabel>Primeiro contacto</SectionLabel>
      <SectionTitle as="h2" size="md">
        Vamos
        <br />
        <span className="text-accent">conversar.</span>
      </SectionTitle>

      <p className="text-muted m-0 max-w-xl leading-[1.55]">
        Preencha o formulário e entraremos em contacto para perceber como
        podemos ajudar. Sem compromisso, sem orçamento surpresa.
      </p>

      <ul className="border-line m-0 grid list-none gap-3.5 border-t p-0 pt-6">
        {STEPS.map((step) => (
          <li key={step.number} className="grid grid-cols-[28px_1fr] gap-3">
            <span className="text-accent font-mono text-[12px] tracking-[0.06em]">
              {step.number}
            </span>
            <p className="m-0 text-[14px] leading-[1.5]">
              <strong className="text-copy mb-0.5 block font-medium">
                {step.title}
              </strong>
              <span className="text-muted">{step.description}</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="border-line text-muted mt-auto grid gap-1 border border-dashed p-[14px_16px] font-mono text-[11px] leading-[1.6] tracking-[0.06em] uppercase">
        <span>Prefere falar directamente?</span>
        <a
          href={ORG_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent tracking-normal normal-case transition-colors hover:text-[var(--accent-strong)]"
        >
          WhatsApp ↗
        </a>
      </div>
    </aside>
  )
}

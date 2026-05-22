import { Container } from '@/components/ui/Container'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { StaggerItem, StaggerReveal } from '@/components/ui/StaggerReveal'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQ() {
  return (
    <section id="faq" className="surface-default section-py">
      <Container className="faq__wrap">
        <MotionReveal className="faq__head">
          <span className="eyebrow text-accent">Perguntas frequentes</span>
          <h2 className="font-display text-display-lg mt-3 mb-0 text-balance uppercase">
            Antes de você
            <br />
            <span className="text-accent">perguntar.</span>
          </h2>
        </MotionReveal>

        <StaggerReveal className="faq__list">
          {FAQ_ITEMS.map((item, index) => (
            <StaggerItem key={item.question}>
              <details className="faq__item" open={index === 0}>
                <summary>
                  <span className="faq__q">{item.question}</span>
                  <span className="faq__icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="faq__a-wrap">
                  <div className="faq__a-inner">
                    <p className="faq__a">{item.answer}</p>
                  </div>
                </div>
              </details>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  )
}

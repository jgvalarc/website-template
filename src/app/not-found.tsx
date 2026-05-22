import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Container
      as="section"
      className="flex min-h-[70vh] flex-col justify-center py-24"
    >
      <SectionLabel>Erro 404</SectionLabel>
      <SectionTitle as="h1">Página não encontrada</SectionTitle>
      <p className="text-muted mb-10 max-w-prose">
        O conteúdo que você procura não existe ou foi movido. Volte ao início e
        siga em frente.
      </p>
      <div>
        <Button href="/" variant="primary">
          Voltar ao início
        </Button>
      </div>
    </Container>
  )
}

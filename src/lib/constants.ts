export const SITE_NAME = 'Marca'
export const SITE_TAGLINE = 'Slogan ou tagline da marca'
export const SITE_DESCRIPTION =
  'Descrição institucional curta que explica o que a marca faz, para quem e com que diferencial.'
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
).replace(/\/$/, '')
export const SITE_LOCALE = 'pt_BR'

// ─── Types ──────────────────────────────────────────────────────────────────

type LinkItem = {
  label: string
  href: string
}

type Stat = {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
  decimals?: number
}

export type Service = {
  number: string
  category: string
  title: string
  description: string
  indications: readonly string[]
  meta: readonly { label: string; value: string }[]
  cta?: string
  featured: boolean
  imageLabel: string
}

export type ProcessStep = {
  number: string
  title: string
  description: string
  list: readonly string[]
  exitCriteria?: string
  imageLabel: string
}

type Principle = {
  number: string
  title: string
  description: string
}

type Highlight = {
  brand: string
  name: string
  description: string
  specs: readonly { label: string; value: string }[]
  imageLabel: string
}

type TeamMember = {
  name: string
  role: string
  credentials: readonly string[]
  imageLabel: string
}

type Testimonial = {
  initials: string
  name: string
  role: string
  sport: string
  timeframe: string
  text: string
  stats: readonly { label: string; value: string }[]
}

type PricingPlan = {
  name: string
  tag: string
  price: string
  period: string
  featured?: boolean
  features: readonly string[]
  cta: string
  href: string
}

type FAQItem = {
  question: string
  answer: string
}

type FooterSection = {
  heading: string
  links: readonly LinkItem[]
}

// ─── Organisation ────────────────────────────────────────────────────────────

export const ORG_INFO = {
  name: 'Marca',
  city: 'Cidade',
  state: 'UF',
  district: 'Bairro',
  address: 'Rua Exemplo, 00',
  phone: '+55 00 00000-0000',
  whatsappHref: 'https://wa.me/5500000000000',
  email: 'contato@marca.com.br',
  instagramHref: 'https://instagram.com/marca',
  registration: 'Reg. técnico 00000',
  assessment: {
    name: 'Consulta inicial',
    duration: '60 min',
    price: 'R$ 000',
    description: 'Diagnóstico, plano e horizonte de resultado em uma sessão.',
  },
} as const

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Serviços', href: '#tratamentos' },
  { label: 'Processo', href: '#metodo' },
  { label: 'Recursos', href: '#equipamentos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Resultados', href: '#resultados' },
] as const satisfies readonly LinkItem[]

// ─── Marquee ─────────────────────────────────────────────────────────────────

export const MARQUEE_ITEMS = [
  'Serviço um',
  'Serviço dois',
  'Serviço três',
  'Serviço quatro',
  'Serviço cinco',
  'Serviço seis',
  'Serviço sete',
  'Serviço oito',
] as const

// ─── Value propositions ──────────────────────────────────────────────────────

export const VALUE_PROPS = [
  'Proposta de valor um',
  'Proposta de valor dois',
  'Proposta de valor três',
  'Proposta de valor quatro',
] as const satisfies readonly string[]

// ─── Stats ───────────────────────────────────────────────────────────────────

export const STATS = [
  {
    value: 98,
    suffix: '%',
    label: 'de satisfação dos clientes',
  },
  {
    value: 1200,
    prefix: '+',
    label: 'clientes atendidos',
    duration: 1800,
  },
  {
    value: 12,
    label: 'anos de experiência',
  },
  {
    value: 50,
    suffix: 'min',
    label: 'por sessão, sempre individual',
  },
] as const satisfies readonly Stat[]

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    number: '01',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço um',
    description:
      'Descrição breve do serviço um. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C', 'Indicação D'],
    meta: [
      { label: 'Duração', value: '00–00 min' },
      { label: 'Sessões', value: '0–0' },
      { label: 'Formato', value: 'Presencial' },
    ],
    cta: 'Indicação clínica obrigatória',
    featured: true,
    imageLabel: 'servico-01.jpg',
  },
  {
    number: '02',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço dois',
    description:
      'Descrição breve do serviço dois. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C'],
    meta: [
      { label: 'Duração', value: '00 min' },
      { label: 'Frequência', value: '0x semana' },
    ],
    cta: 'Incluído no plano',
    featured: true,
    imageLabel: 'servico-02.jpg',
  },
  {
    number: '03',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço três',
    description:
      'Descrição breve do serviço três. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C', 'Indicação D'],
    meta: [
      { label: 'Duração', value: '00 min' },
      { label: 'Atendimento', value: '1:1 sempre' },
    ],
    cta: 'Incluído no plano',
    featured: true,
    imageLabel: 'servico-03.jpg',
  },
  {
    number: '04',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço quatro',
    description:
      'Descrição breve do serviço quatro. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C'],
    meta: [
      { label: 'Horizonte', value: '0–0 meses' },
      { label: 'Frequência', value: '0x semana' },
    ],
    cta: 'Avaliação imediata',
    featured: true,
    imageLabel: 'servico-04.jpg',
  },
  {
    number: '05',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço cinco',
    description:
      'Descrição breve do serviço cinco. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C'],
    meta: [
      { label: 'Duração', value: '00–00 min' },
      { label: 'Modalidade', value: 'Adjuvante' },
    ],
    cta: 'Combinado com manual',
    featured: true,
    imageLabel: 'servico-05.jpg',
  },
  {
    number: '06',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço seis',
    description:
      'Descrição breve do serviço seis. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C'],
    meta: [
      { label: 'Duração', value: '00–00 min' },
      { label: 'Formato', value: 'Presencial' },
    ],
    cta: 'Excelente para recuperação',
    featured: true,
    imageLabel: 'servico-06.jpg',
  },
  {
    number: '07',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço sete',
    description:
      'Descrição breve do serviço sete. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C'],
    meta: [
      { label: 'Duração', value: '00 min' },
      { label: 'Entrega', value: 'Relatório PDF' },
      { label: 'Investimento', value: 'R$ 000' },
    ],
    featured: false,
    imageLabel: 'servico-07.jpg',
  },
  {
    number: '08',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço oito',
    description:
      'Descrição breve do serviço oito. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C'],
    meta: [
      { label: 'Duração', value: '00 min' },
      { label: 'Investimento', value: 'R$ 000' },
    ],
    cta: 'Combinável',
    featured: false,
    imageLabel: 'servico-08.jpg',
  },
  {
    number: '09',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço nove',
    description:
      'Descrição breve do serviço nove. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C'],
    meta: [
      { label: 'Duração', value: '00 min' },
      { label: 'Saída', value: 'Relatório técnico' },
    ],
    featured: false,
    imageLabel: 'servico-09.jpg',
  },
  {
    number: '10',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço dez',
    description:
      'Descrição breve do serviço dez. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C'],
    meta: [
      { label: 'Duração', value: '00 min' },
      { label: 'Modalidade', value: 'Adjuvante' },
    ],
    featured: false,
    imageLabel: 'servico-10.jpg',
  },
  {
    number: '11',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço onze',
    description:
      'Descrição breve do serviço onze. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C'],
    meta: [
      { label: 'Duração', value: '00 min' },
      { label: 'Combina com', value: 'Manual + outros' },
    ],
    featured: false,
    imageLabel: 'servico-11.jpg',
  },
  {
    number: '12',
    category: 'Categoria · Subcategoria',
    title: 'Nome do serviço doze',
    description:
      'Descrição breve do serviço doze. Explique o que é, como funciona e qual o benefício principal para o cliente.',
    indications: ['Indicação A', 'Indicação B', 'Indicação C'],
    meta: [
      { label: 'Duração', value: '00 min' },
      { label: 'Frequência', value: '0x semana' },
    ],
    cta: 'Incluído no plano performance',
    featured: false,
    imageLabel: 'servico-12.jpg',
  },
] as const satisfies readonly Service[]

// ─── Process steps ───────────────────────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Descrição da primeira fase do processo. Explique o que acontece, como se avalia e o que o cliente pode esperar.',
    list: ['Etapa da fase 01 A', 'Etapa da fase 01 B'],
    exitCriteria: 'Critério de conclusão da fase 01.',
    imageLabel: 'fase-01.jpg',
  },
  {
    number: '02',
    title: 'Desenvolvimento',
    description:
      'Descrição da segunda fase do processo. Explique o que acontece, como se avalia e o que o cliente pode esperar.',
    list: ['Etapa da fase 02 A', 'Etapa da fase 02 B', 'Etapa da fase 02 C'],
    exitCriteria: 'Critério de conclusão da fase 02.',
    imageLabel: 'fase-02.jpg',
  },
  {
    number: '03',
    title: 'Execução',
    description:
      'Descrição da terceira fase do processo. Explique o que acontece, como se avalia e o que o cliente pode esperar.',
    list: ['Etapa da fase 03 A', 'Etapa da fase 03 B', 'Etapa da fase 03 C'],
    exitCriteria: 'Critério de conclusão da fase 03.',
    imageLabel: 'fase-03.jpg',
  },
  {
    number: '04',
    title: 'Resultado',
    description:
      'Descrição da quarta fase do processo. Explique o que acontece, como se avalia e o que o cliente pode esperar.',
    list: ['Etapa da fase 04 A', 'Etapa da fase 04 B', 'Etapa da fase 04 C'],
    exitCriteria: 'Critério de conclusão e alta.',
    imageLabel: 'fase-04.jpg',
  },
] as const satisfies readonly ProcessStep[]

// ─── Principles ──────────────────────────────────────────────────────────────

export const PRINCIPLES = [
  {
    number: '01',
    title: 'Princípio um',
    description:
      'Descrição do primeiro princípio não negociável da marca. Explique por quê ele é fundamental.',
  },
  {
    number: '02',
    title: 'Princípio dois',
    description:
      'Descrição do segundo princípio não negociável da marca. Explique por quê ele é fundamental.',
  },
  {
    number: '03',
    title: 'Princípio três',
    description:
      'Descrição do terceiro princípio não negociável da marca. Explique por quê ele é fundamental.',
  },
  {
    number: '04',
    title: 'Princípio quatro',
    description:
      'Descrição do quarto princípio não negociável da marca. Explique por quê ele é fundamental.',
  },
] as const satisfies readonly Principle[]

// ─── Highlights ──────────────────────────────────────────────────────────────

export const HIGHLIGHTS = [
  {
    brand: 'Fabricante A',
    name: 'Produto ou recurso A',
    description:
      'Descrição do primeiro recurso ou equipamento destaque. Explique o que faz e por que é relevante.',
    specs: [
      { label: 'Especificação 1', value: 'Valor 1' },
      { label: 'Especificação 2', value: 'Valor 2' },
      { label: 'Especificação 3', value: 'Valor 3' },
    ],
    imageLabel: 'recurso-a.jpg',
  },
  {
    brand: 'Fabricante B',
    name: 'Produto ou recurso B',
    description:
      'Descrição do segundo recurso ou equipamento destaque. Explique o que faz e por que é relevante.',
    specs: [
      { label: 'Especificação 1', value: 'Valor 1' },
      { label: 'Especificação 2', value: 'Valor 2' },
      { label: 'Especificação 3', value: 'Valor 3' },
    ],
    imageLabel: 'recurso-b.jpg',
  },
  {
    brand: 'Fabricante C',
    name: 'Produto ou recurso C',
    description:
      'Descrição do terceiro recurso ou equipamento destaque. Explique o que faz e por que é relevante.',
    specs: [
      { label: 'Especificação 1', value: 'Valor 1' },
      { label: 'Especificação 2', value: 'Valor 2' },
      { label: 'Especificação 3', value: 'Valor 3' },
    ],
    imageLabel: 'recurso-c.jpg',
  },
  {
    brand: 'Fabricante D',
    name: 'Produto ou recurso D',
    description:
      'Descrição do quarto recurso ou equipamento destaque. Explique o que faz e por que é relevante.',
    specs: [
      { label: 'Especificação 1', value: 'Valor 1' },
      { label: 'Especificação 2', value: 'Valor 2' },
      { label: 'Especificação 3', value: 'Valor 3' },
    ],
    imageLabel: 'recurso-d.jpg',
  },
] as const satisfies readonly Highlight[]

// ─── Team ────────────────────────────────────────────────────────────────────

export const TEAM_MEMBERS = [
  {
    name: 'Nome Sobrenome A',
    role: 'Cargo principal · Especialidade',
    credentials: [
      'Registro profissional',
      'Formação principal',
      'Pós-graduação ou certificação',
      'Diferencial ou conquista',
    ],
    imageLabel: 'membro-a.jpg',
  },
  {
    name: 'Nome Sobrenome B',
    role: 'Cargo principal · Especialidade',
    credentials: [
      'Registro profissional',
      'Formação principal',
      'Pós-graduação ou certificação',
      'Diferencial ou conquista',
    ],
    imageLabel: 'membro-b.jpg',
  },
  {
    name: 'Nome Sobrenome C',
    role: 'Cargo principal · Especialidade',
    credentials: [
      'Registro profissional',
      'Formação principal',
      'Pós-graduação ou certificação',
      'Diferencial ou conquista',
    ],
    imageLabel: 'membro-c.jpg',
  },
  {
    name: 'Nome Sobrenome D',
    role: 'Cargo principal · Especialidade',
    credentials: [
      'Registro profissional',
      'Formação principal',
      'Pós-graduação ou certificação',
      'Diferencial ou conquista',
    ],
    imageLabel: 'membro-d.jpg',
  },
] as const satisfies readonly TeamMember[]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    initials: 'AS',
    name: 'Nome Sobrenome A',
    role: 'Perfil breve · Contexto',
    sport: 'Contexto ou esporte',
    timeframe: '0 semanas',
    text: 'Depoimento do cliente A. Descreva a experiência, o problema que tinha e como foi resolvido. Use linguagem autêntica e específica para maior credibilidade.',
    stats: [
      { label: 'Métrica antes', value: '0/10' },
      { label: 'Métrica depois', value: '0/10' },
      { label: 'Resultado', value: '+00%' },
    ],
  },
  {
    initials: 'BS',
    name: 'Nome Sobrenome B',
    role: 'Perfil breve · Contexto',
    sport: 'Contexto ou esporte',
    timeframe: '0 meses',
    text: 'Depoimento do cliente B. Descreva a experiência, o problema que tinha e como foi resolvido. Use linguagem autêntica e específica para maior credibilidade.',
    stats: [
      { label: 'Métrica A', value: '00%' },
      { label: 'Métrica B', value: 'aprovado' },
      { label: 'Resultado', value: '0 meses' },
    ],
  },
  {
    initials: 'CS',
    name: 'Nome Sobrenome C',
    role: 'Perfil breve · Contexto',
    sport: 'Contexto ou esporte',
    timeframe: '0 sessões',
    text: 'Depoimento do cliente C. Descreva a experiência, o problema que tinha e como foi resolvido. Use linguagem autêntica e específica para maior credibilidade.',
    stats: [
      { label: 'Métrica antes', value: '0/10' },
      { label: 'Métrica depois', value: '0/10' },
      { label: 'Melhora', value: '+00 pts' },
    ],
  },
] as const satisfies readonly Testimonial[]

// ─── Pricing ─────────────────────────────────────────────────────────────────

export const PRICING_PLANS = [
  {
    name: 'Plano básico',
    tag: 'Avulso',
    price: 'R$ 000',
    period: '/ sessão de 00 min',
    features: [
      'Atendimento individual 1:1',
      'Acesso completo ao método',
      'Reagendamento sem multa',
      'Recibo para reembolso',
    ],
    cta: 'Começar avulso',
    href: '#contato',
  },
  {
    name: 'Plano recomendado',
    tag: 'Recomendado',
    price: 'R$ 0.000',
    period: '/ pacote · R$ 000/sessão',
    featured: true,
    features: [
      'Tudo do plano básico',
      'Plano terapêutico estruturado',
      'Reavaliação incluída (1x)',
      'Validade de 4 meses',
      'Acesso ao app de prescrição',
    ],
    cta: 'Quero este plano',
    href: '#contato',
  },
  {
    name: 'Plano performance',
    tag: 'Performance',
    price: 'R$ 0.000',
    period: '/ mês · até 00 sessões',
    features: [
      'Tudo do plano recomendado',
      'Análise trimestral incluída',
      'Plano integrado com seu treino',
      'Suporte direto via WhatsApp',
      'Acesso prioritário',
    ],
    cta: 'Falar com equipe',
    href: '#contato',
  },
] as const satisfies readonly PricingPlan[]

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    question: 'Pergunta frequente um?',
    answer:
      'Resposta clara e direta à primeira pergunta frequente. Seja específico e honesto.',
  },
  {
    question: 'Pergunta frequente dois?',
    answer:
      'Resposta clara e direta à segunda pergunta frequente. Seja específico e honesto.',
  },
  {
    question: 'Pergunta frequente três?',
    answer:
      'Resposta clara e direta à terceira pergunta frequente. Seja específico e honesto.',
  },
  {
    question: 'Pergunta frequente quatro?',
    answer:
      'Resposta clara e direta à quarta pergunta frequente. Seja específico e honesto.',
  },
  {
    question: 'Pergunta frequente cinco?',
    answer:
      'Resposta clara e direta à quinta pergunta frequente. Seja específico e honesto.',
  },
  {
    question: 'Pergunta frequente seis?',
    answer:
      'Resposta clara e direta à sexta pergunta frequente. Seja específico e honesto.',
  },
] as const satisfies readonly FAQItem[]

// ─── Footer ──────────────────────────────────────────────────────────────────

export const FOOTER_SECTIONS = [
  {
    heading: 'Marca',
    links: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Processo', href: '#metodo' },
      { label: 'Serviços', href: '#tratamentos' },
      { label: 'Equipe', href: '#equipe' },
    ],
  },
  {
    heading: 'Clientes',
    links: [
      { label: 'Agendar', href: '/contact' },
      { label: 'Planos e preços', href: '#planos' },
      { label: 'Perguntas frequentes', href: '#faq' },
      { label: 'Reembolso', href: '#faq' },
    ],
  },
  {
    heading: 'Contato',
    links: [
      { label: 'WhatsApp', href: ORG_INFO.whatsappHref },
      { label: 'E-mail', href: `mailto:${ORG_INFO.email}` },
      { label: 'Instagram', href: ORG_INFO.instagramHref },
      { label: 'Localização', href: '#local' },
    ],
  },
] as const satisfies readonly FooterSection[]

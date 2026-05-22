import { Container } from '@/components/ui/Container'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { StaggerItem, StaggerReveal } from '@/components/ui/StaggerReveal'
import { TEAM_MEMBERS } from '@/lib/constants'
import { SectionHead } from './SectionHead'

export default function Team() {
  return (
    <section id="equipe" className="surface-inverse section-py">
      <Container>
        <SectionHead
          eyebrow="Quem faz acontecer"
          index="— 05 / 07"
          bone
          title={
            <>
              A equipe
              <br />
              que <span className="text-accent-strong">entrega.</span>
            </>
          }
        />

        <StaggerReveal className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <StaggerItem key={member.name}>
              <article className="member group grid gap-4">
                <PlaceholderImage
                  label={`Retrato de ${member.name}`}
                  tone="inverse"
                  className="aspect-[4/5] min-h-72 border-0"
                />
                <div>
                  <h3 className="font-display m-0 text-[28px] leading-none tracking-[0.02em] text-balance uppercase transition-colors duration-300 group-hover:text-[var(--accent-strong)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] leading-tight tracking-[0.1em] text-[var(--text-inverse-mid)] uppercase">
                    {member.role}
                  </p>
                </div>
                <ul className="m-0 grid list-none gap-1.5 border-t border-[var(--text-inverse-faint)] p-0 pt-4 text-[13px] text-[var(--text-inverse-mid)]">
                  {member.credentials.map((credential) => (
                    <li key={credential}>
                      <span
                        className="text-accent-strong mr-2 font-bold"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                      {credential}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  )
}

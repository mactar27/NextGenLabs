import { GridBackground, Particles } from "@/components/visuals/tech-visuals"
import { Reveal } from "@/components/visuals/reveal"

export function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <GridBackground />
      <Particles count={12} />
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
            {kicker}
          </span>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}

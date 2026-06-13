import { Reveal } from "@/components/visuals/reveal"

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker?: string
  title: string
  subtitle?: string
  align?: "center" | "left"
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {kicker && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
          {kicker}
        </span>
      )}
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{subtitle}</p>}
    </Reveal>
  )
}

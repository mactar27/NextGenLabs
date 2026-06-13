"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Lightbulb, Award, Users, Eye, Heart, Smile } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { CtaSection } from "@/components/cta-section"
import { Reveal } from "@/components/visuals/reveal"
import { CircuitLines } from "@/components/visuals/tech-visuals"
import { useLanguage } from "@/components/providers/language-provider"
import { team } from "@/lib/data"
import type { TranslationKey } from "@/lib/i18n"

const valueItems: { icon: typeof Lightbulb; key: TranslationKey }[] = [
  { icon: Lightbulb, key: "about.value.innovation" },
  { icon: Award, key: "about.value.excellence" },
  { icon: Users, key: "about.value.collaboration" },
  { icon: Eye, key: "about.value.transparency" },
  { icon: Heart, key: "about.value.commitment" },
  { icon: Smile, key: "about.value.satisfaction" },
]

const timeline = [
  { year: "2023", fr: "Fondation par des diplômés de l'ISEP Diamniadio", en: "Founded by ISEP Diamniadio graduates" },
  { year: "2024", fr: "Premiers clients et croissance de l'équipe", en: "First clients and team growth" },
  { year: "2025", fr: "Lancement de notre pôle Intelligence Artificielle", en: "Launch of our Artificial Intelligence division" },
  { year: "2026", fr: "Expansion vers les marchés ouest-africains", en: "Expansion into West African markets" },
]

export function AboutContent() {
  const { t, lang } = useLanguage()

  return (
    <>
      <PageHero kicker={t("about.kicker")} title={t("about.title")} subtitle={t("about.story")} />

      {/* Mission & Vision */}
      <section className="relative overflow-hidden py-20">
        <CircuitLines className="left-0 top-12 hidden w-72 opacity-40 lg:block" />
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {[
            { title: t("overview.mission.title"), desc: t("overview.mission.desc") },
            { title: t("overview.vision.title"), desc: t("overview.vision.desc") },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <h3 className="text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title={t("about.values.title")} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valueItems.map((v, i) => (
              <motion.div
                key={v.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                  <v.icon className="size-5" />
                </span>
                <span className="font-semibold text-foreground">{t(v.key)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title={t("about.team.title")} subtitle={t("about.team.subtitle")} />
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-border bg-card text-center"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <Image
                    src={m.image || "/placeholder.svg"}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-foreground">{m.name}</div>
                  <div className="mt-0.5 text-sm text-cyan">{m.role[lang]}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading title={t("about.timeline.title")} />
          <div className="relative mt-12 pl-8">
            <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-border" />
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <div className="relative mb-8 last:mb-0">
                  <span className="absolute -left-8 top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-cyan bg-background">
                    <span className="size-1.5 rounded-full bg-cyan" />
                  </span>
                  <div className="text-sm font-bold text-cyan">{item.year}</div>
                  <p className="mt-1 text-foreground">{lang === "fr" ? item.fr : item.en}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

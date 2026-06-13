"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Target, Eye, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { CircuitLines } from "@/components/visuals/tech-visuals"

export function OverviewSection() {
  const { t } = useLanguage()
  const cards = [
    { icon: Target, title: t("overview.mission.title"), desc: t("overview.mission.desc") },
    { icon: Eye, title: t("overview.vision.title"), desc: t("overview.vision.desc") },
  ]

  return (
    <section className="relative overflow-hidden py-20">
      <CircuitLines className="right-0 top-10 hidden w-72 opacity-50 lg:block" />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading kicker={t("overview.kicker")} title={t("overview.title")} subtitle={t("overview.desc")} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-navy text-cyan">
                <c.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-navy dark:hover:text-cyan/80"
          >
            {t("nav.about")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

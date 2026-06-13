"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Check, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { Reveal } from "@/components/visuals/reveal"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/providers/language-provider"
import { services } from "@/lib/data"

const process = [
  { fr: "Découverte", en: "Discovery", descFr: "Compréhension de vos besoins", descEn: "Understanding your needs" },
  { fr: "Conception", en: "Design", descFr: "Architecture et prototypage", descEn: "Architecture and prototyping" },
  { fr: "Développement", en: "Development", descFr: "Construction itérative", descEn: "Iterative building" },
  { fr: "Déploiement", en: "Deployment", descFr: "Lancement et support", descEn: "Launch and support" },
]

export function ServicesContent() {
  const { t, lang } = useLanguage()

  return (
    <>
      <PageHero kicker={t("services.kicker")} title={t("services.title")} subtitle={t("services.subtitle")} />

      <section className="py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <div
                id={s.slug}
                className="grid scroll-mt-28 items-center gap-8 rounded-3xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-2"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-navy text-cyan">
                    <s.icon className="size-7" />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-foreground">{t(s.titleKey)}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{t(s.descKey)}</p>

                  <div className="mt-5 space-y-2">
                    {s.benefits.map((b) => (
                      <div key={b.en} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-cyan" />
                        <span className="text-sm text-foreground">{lang === "fr" ? b.fr : b.en}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="mt-6 rounded-xl bg-navy text-white hover:bg-navy/90 inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium">
                      {t("cta.button")}<ArrowRight className="ml-1 size-4" />
                  </Link>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-2xl border border-border bg-secondary p-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t("portfolio.tech")}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-navy dark:text-cyan"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {lang === "fr" ? "Notre processus" : "Our process"}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={p.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <div className="text-3xl font-bold text-cyan/40">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-semibold text-foreground">{lang === "fr" ? p.fr : p.en}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{lang === "fr" ? p.descFr : p.descEn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

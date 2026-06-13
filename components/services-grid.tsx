"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { services } from "@/lib/data"

export function ServicesGrid({ withHeading = true }: { withHeading?: boolean }) {
  const { t } = useLanguage()

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        {withHeading && (
          <SectionHeading
            kicker={t("services.kicker")}
            title={t("services.title")}
            subtitle={t("services.subtitle")}
          />
        )}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.1 }}
            >
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-cyan/50 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan transition-colors group-hover:bg-navy group-hover:text-cyan">
                    <s.icon className="size-6" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:text-cyan" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{t(s.titleKey)}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t(s.descKey)}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

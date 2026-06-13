"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { Reveal } from "@/components/visuals/reveal"
import { projects } from "@/lib/data"
import { useLanguage } from "@/components/providers/language-provider"
import { cn } from "@/lib/utils"

const filters: { id: "all" | "web" | "mobile" | "ai" | "design"; label: { fr: string; en: string } }[] = [
  { id: "all", label: { fr: "Tous", en: "All" } },
  { id: "web", label: { fr: "Web", en: "Web" } },
  { id: "mobile", label: { fr: "Mobile", en: "Mobile" } },
  { id: "ai", label: { fr: "IA", en: "AI" } },
  { id: "design", label: { fr: "Design", en: "Design" } },
]

export function PortfolioContent() {
  const { t, lang } = useLanguage()
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all")

  const filtered = active === "all" ? projects : projects.filter((p) => p.categoryId === active)

  return (
    <>
      <PageHero kicker={t("portfolio.kicker")} title={t("portfolio.title")} subtitle={t("portfolio.subtitle")} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                  active === f.id
                    ? "border-cyan bg-cyan text-navy"
                    : "border-border bg-card text-muted-foreground hover:border-cyan/50 hover:text-foreground",
                )}
              >
                {f.label[lang]}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white">
                      {project.category[lang]}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.description[lang]}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 border-t border-border pt-3 text-sm">
                      <span className="font-semibold text-cyan">{project.result[lang]}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Reveal>
        <CtaSection />
      </Reveal>
    </>
  )
}

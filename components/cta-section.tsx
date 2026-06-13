"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/visuals/reveal"
import { Particles } from "@/components/visuals/tech-visuals"
import { useLanguage } from "@/components/providers/language-provider"

export function CtaSection() {
  const { t } = useLanguage()
  return (
    <section className="px-4 py-20">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center sm:px-12">
          <Particles count={24} />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(20,184,212,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,184,212,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("cta.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/70">{t("cta.subtitle")}</p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-105"
            >
              {t("cta.button")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

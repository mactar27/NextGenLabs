"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated cinematic background */}
      <div aria-hidden className="absolute inset-0 hero-video-bg" />
      {/* Dark overlay for text readability */}
      <div aria-hidden className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 px-4 pb-24 pt-16 text-center">

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
        >
          <span className="size-2 rounded-full bg-cyan animate-pulse" />
          {t("hero.badge")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link href="/contact" className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-navy transition-all hover:scale-105 hover:bg-white/90 active:scale-95">
            {t("hero.cta1")}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/services" className="group inline-flex h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
            {t("hero.cta2")}
            <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}


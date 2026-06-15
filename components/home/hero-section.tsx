"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center justify-center pt-20">
      {/* Animated cinematic background */}
      <div aria-hidden className="absolute inset-0 hero-video-bg" />
      
      {/* Premium dark overlays with vibrant radial glows */}
      <div aria-hidden className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy" />
      <div aria-hidden className="absolute left-1/2 top-1/2 -z-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-[120px]" />
      
      {/* Floating decorative orbs */}
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] top-[25%] -z-0 hidden size-48 rounded-full bg-cyan/30 blur-[80px] md:block" 
      />
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[15%] bottom-[20%] -z-0 hidden size-64 rounded-full bg-emerald-400/20 blur-[100px] md:block" 
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-4 text-center">

        <motion.h1
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-6xl font-extrabold leading-[1.05] tracking-tighter sm:text-7xl lg:text-8xl"
        >
          <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            {t("hero.title")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-pretty text-lg font-light leading-relaxed text-cyan-50/80 sm:text-xl md:text-2xl"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link href="/contact" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-cyan px-8 text-sm font-bold text-navy shadow-[0_0_40px_-10px_rgba(20,184,212,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(20,184,212,0.8)] active:scale-95">
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            {t("hero.cta1")}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/services" className="group inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 active:scale-95">
            {t("hero.cta2")}
            <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}


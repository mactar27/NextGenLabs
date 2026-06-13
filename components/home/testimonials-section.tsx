"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  const { t, lang } = useLanguage()
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const item = testimonials[index]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading kicker={t("testimonials.kicker")} title={t("testimonials.title")} />
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          <Quote className="size-10 text-cyan/30" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
                {item.quote[lang]}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-navy text-sm font-semibold text-cyan">
                  {item.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.role[lang]}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-cyan" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous"
                className="flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

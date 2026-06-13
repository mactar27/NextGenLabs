"use client"

import { motion, useInView, animate } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/providers/language-provider"
import { stats } from "@/lib/site"

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState("0")
  const num = Number.parseInt(value.replace(/\D/g, ""), 10) || 0
  const suffix = value.replace(/[0-9]/g, "")

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, num, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    })
    return () => controls.stop()
  }, [inView, num])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const { t } = useLanguage()
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-secondary p-6 sm:p-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-gradient sm:text-4xl">
              <StatValue value={s.value} />
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{t(s.key)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

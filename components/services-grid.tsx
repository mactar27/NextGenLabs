"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { services } from "@/lib/data"

const getBentoClasses = (i: number) => {
  if (i === 0) return "sm:col-span-2"
  if (i === 5) return "sm:col-span-2 lg:col-span-3"
  return "col-span-1"
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { t } = useLanguage()
  const boundingRef = useRef<HTMLAnchorElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!boundingRef.current) return
    const rect = boundingRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 3) * 0.1 }}
      className={getBentoClasses(index)}
    >
      <Link
        ref={boundingRef}
        href={`/services#${service.slug}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-cyan/30 hover:shadow-2xl hover:shadow-cyan/5"
      >
        {isHovering && (
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20,184,212,0.08), transparent 40%)`,
            }}
          />
        )}
        
        <div className="relative z-10 flex items-center justify-between">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-cyan transition-colors group-hover:bg-cyan/10">
            <service.icon className="size-7" />
          </span>
          <ArrowUpRight className="size-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan" />
        </div>
        <div className="relative z-10 mt-16 flex-1">
          <h3 className="text-2xl font-bold text-foreground">{t(service.titleKey)}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t(service.descKey)}</p>
        </div>
        <div className="relative z-10 mt-8 flex flex-wrap gap-2">
          {service.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full bg-secondary/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm transition-colors group-hover:bg-cyan/10">
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}

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
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

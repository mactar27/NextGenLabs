"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle, Check, Download } from "lucide-react";
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/visuals/reveal"
import { BrandQR, downloadVCard } from "@/components/brand-qr"
import { Logo } from "@/components/logo"
import { company } from "@/lib/site"
import { services } from "@/lib/data"
import { useLanguage } from "@/components/providers/language-provider"

export function ContactContent() {
  const { t, lang } = useLanguage()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-cyan focus:ring-2 focus:ring-cyan/20"

  const contactItems = [
    { icon: Mail, label: t("contact.card.email"), value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: t("contact.card.call"), value: company.phone, href: `tel:${company.phoneRaw}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: company.phone,
      href: `https://wa.me/${company.whatsapp}`,
    },
    { icon: MapPin, label: lang === "fr" ? "Adresse" : "Address", value: company.address, href: undefined },
  ]

  return (
    <>
      <PageHero kicker={t("contact.kicker")} title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="name">
                    {t("contact.form.name")}
                  </label>
                  <input id="name" required className={inputClass} placeholder="Aïssa Diop" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="company">
                    {t("contact.form.company")}
                  </label>
                  <input id="company" className={inputClass} placeholder="Acme Inc." />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="email">
                    {t("contact.form.email")}
                  </label>
                  <input id="email" type="email" required className={inputClass} placeholder="hello@acme.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="phone">
                    {t("contact.form.phone")}
                  </label>
                  <input id="phone" type="tel" className={inputClass} placeholder="+221 77 000 00 00" />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="service">
                  {t("contact.form.service")}
                </label>
                <select id="service" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    {lang === "fr" ? "Sélectionnez un service" : "Select a service"}
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {t(s.titleKey)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="message">
                  {t("contact.form.message")}
                </label>
                <textarea id="message" required rows={5} className={inputClass} placeholder="..." />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-cyan/90"
              >
                {sent ? (
                  <>
                    <Check className="size-4" /> {t("contact.form.success")}
                  </>
                ) : (
                  t("contact.form.submit")
                )}
              </button>
            </form>
          </Reveal>

          {/* Info + digital business card */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Inner = (
                    <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-cyan/50">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                        <item.icon className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="truncate text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )
                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                      {Inner}
                    </a>
                  ) : (
                    <div key={item.label}>{Inner}</div>
                  )
                })}
              </div>
            </Reveal>

            {/* Digital business card */}
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-border bg-navy text-white">
                <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <div className="mb-4 [&_span]:text-white">
                      <Logo />
                    </div>
                    <h3 className="text-balance text-lg font-semibold">{t("contact.card.title")}</h3>
                    <p className="mt-1 text-sm text-white/70">{t("contact.card.subtitle")}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        onClick={downloadVCard}
                        className="inline-flex items-center gap-2 rounded-lg bg-cyan px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-cyan/90"
                      >
                        <Download className="size-4" />
                        {t("contact.card.vcard")}
                      </button>
                    </div>

                  </div>
                  <BrandQR size={140} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

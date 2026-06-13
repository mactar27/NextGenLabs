"use client"

import Link from "next/link"
import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"
import { Logo } from "@/components/logo"
import { BrandQR } from "@/components/brand-qr"
import { useLanguage } from "@/components/providers/language-provider"
import { company } from "@/lib/site"
import type { TranslationKey } from "@/lib/i18n"

const navLinks: { href: string; key: TranslationKey }[] = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/services", key: "nav.services" },
  { href: "/blog", key: "nav.blog" },
  { href: "/contact", key: "nav.contact" },
]

const socials = [
  { href: `https://wa.me/${company.whatsapp}`, icon: MessageCircle, label: "WhatsApp" },
]

export function Footer() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  return (
    <footer className="relative mt-24 border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("footer.nav")}</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-cyan">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("footer.contact")}</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-cyan" />
                <a href={`mailto:${company.email}`} className="hover:text-cyan">{company.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-cyan" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-cyan">{company.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("footer.newsletter")}</h3>
            <p className="mt-4 text-sm text-muted-foreground">{t("footer.newsletter.desc")}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setDone(true)
              }}
              className="mt-4 flex gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.newsletter.placeholder")}
                className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-cyan"
              />
              <button
                type="submit"
                aria-label={t("footer.newsletter.button")}
                className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white transition-colors hover:bg-navy/90"
              >
                <Send className="size-4" />
              </button>
            </form>
            {done && <p className="mt-2 text-xs text-cyan">{t("contact.form.success")}</p>}
            <div className="mt-6 flex items-center gap-3">
              <BrandQR size={72} />
              <p className="text-xs text-muted-foreground">{t("contact.card.subtitle")}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  )
}

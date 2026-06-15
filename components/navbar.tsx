"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Sun, Moon, Languages } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/providers/language-provider"
import type { TranslationKey } from "@/lib/i18n"

const links: { href: string; key: TranslationKey }[] = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/services", key: "nav.services" },
  { href: "/blog", key: "nav.blog" },
  { href: "/contact", key: "nav.contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "glass border-border shadow-sm" : "border-transparent bg-transparent"
        }`}
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-cyan" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(l.key)}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-cyan"
                  />
                )}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Switch language"
          >
            <Languages className="size-4" />
            <span className="uppercase">{lang}</span>
          </button>
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
            <Link href="/contact" className="hidden sm:inline-flex rounded-xl bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90">
              {t("nav.cta")}
            </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border p-2 lg:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === l.href ? "bg-secondary text-cyan" : "text-foreground hover:bg-secondary"
                }`}
              >
                {t(l.key)}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 w-full rounded-xl bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90">
              {t("nav.cta")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

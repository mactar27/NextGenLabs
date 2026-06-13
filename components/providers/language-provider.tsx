"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { translations, type Lang, type TranslationKey } from "@/lib/i18n"

const LanguageContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: TranslationKey) => string
}>({ lang: "fr", setLang: () => {}, t: (k) => k })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr")

  useEffect(() => {
    const stored = localStorage.getItem("ngl-lang") as Lang | null
    if (stored === "fr" || stored === "en") setLangState(stored)
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem("ngl-lang", l)
    document.documentElement.lang = l
  }, [])

  const t = useCallback(
    (key: TranslationKey) => translations[lang][key] ?? translations.en[key] ?? key,
    [lang],
  )

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

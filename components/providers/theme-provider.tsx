"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"

type Theme = "light" | "dark"

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({ theme: "light", toggleTheme: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("ngl-theme")) as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial = stored ?? (prefersDark ? "dark" : "light")
    setTheme(initial)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    localStorage.setItem("ngl-theme", theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "light" ? "dark" : "light"))
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

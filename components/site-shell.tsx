"use client"

import { ThemeProvider } from "@/components/providers/theme-provider"
import { LanguageProvider } from "@/components/providers/language-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { AppIntro } from "@/components/onboarding/app-intro"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppIntro>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </AppIntro>
        <Chatbot />
      </LanguageProvider>
    </ThemeProvider>
  )
}

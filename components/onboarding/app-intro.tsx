"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { SplashScreen } from "@/components/onboarding/splash-screen"
import { OnboardingFlow } from "@/components/onboarding/onboarding-flow"

const STORAGE_KEY = "ngl-onboarding-done"
const SPLASH_DURATION_MS = 2800

type Phase = "checking" | "splash" | "onboarding" | "done"

export function AppIntro({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("checking")

  useEffect(() => {
    const done = localStorage.getItem(STORAGE_KEY) === "true"
    setPhase(done ? "done" : "splash")
  }, [])

  useEffect(() => {
    if (phase !== "splash") return

    const timer = window.setTimeout(() => setPhase("onboarding"), SPLASH_DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [phase])

  const completeOnboarding = () => {
    localStorage.setItem(STORAGE_KEY, "true")
    setPhase("done")
  }

  const showIntro = phase !== "done"

  return (
    <>
      {children}

      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="app-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            {phase === "checking" || phase === "splash" ? (
              <SplashScreen />
            ) : (
              <OnboardingFlow onComplete={completeOnboarding} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

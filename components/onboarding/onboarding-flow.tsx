"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, Code2, Rocket, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { Button } from "@/components/ui/button"
import type { TranslationKey } from "@/lib/i18n"

const SLIDES = [
  { icon: Sparkles, titleKey: "onboard.slide1.title", descKey: "onboard.slide1.desc" },
  { icon: Code2, titleKey: "onboard.slide2.title", descKey: "onboard.slide2.desc" },
  { icon: Rocket, titleKey: "onboard.slide3.title", descKey: "onboard.slide3.desc" },
] as const

type OnboardingFlowProps = {
  onComplete: () => void
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const { t } = useLanguage()
  const [step, setStep] = useState(0)

  const isLast = step === SLIDES.length - 1
  const slide = SLIDES[step]
  const Icon = slide.icon

  const handleNext = () => {
    if (isLast) {
      onComplete()
      return
    }
    setStep((s) => s + 1)
  }

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-white">

      <div className="relative z-10 flex flex-1 flex-col px-6 pb-10 pt-14">
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={onComplete}
            className="text-navy/70 hover:bg-black/5 hover:text-navy"
          >
            {t("onboard.skip")}
          </Button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex max-w-sm flex-col items-center gap-8 text-center"
            >
              <div className="flex size-20 items-center justify-center rounded-2xl border border-black/10 bg-black/5 backdrop-blur-sm">
                <Icon className="size-10 text-cyan" strokeWidth={1.5} />
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  {t(slide.titleKey as TranslationKey)}
                </h2>
                <p className="text-pretty text-base leading-relaxed text-navy/70">
                  {t(slide.descKey as TranslationKey)}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-col gap-8">
          <div className="flex justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setStep(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === step ? "w-8 bg-cyan" : "w-1.5 bg-black/20"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            className="h-12 w-full rounded-full bg-cyan text-base font-semibold text-navy hover:bg-cyan/90"
          >
            {isLast ? t("onboard.start") : t("onboard.next")}
            {!isLast && <ArrowRight className="size-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}

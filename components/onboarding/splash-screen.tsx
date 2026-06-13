"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useLanguage } from "@/components/providers/language-provider"

export function SplashScreen() {
  const { t } = useLanguage()

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-navy">
      <div aria-hidden className="absolute inset-0 hero-video-bg opacity-80" />
      <div aria-hidden className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-6 px-6"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/nextgen-labs-logo.png"
            alt="NextGen Labs"
            width={200}
            height={200}
            className="h-28 w-auto object-contain sm:h-36"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-xs text-center text-sm font-medium tracking-wide text-white/80 sm:text-base"
        >
          {t("splash.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 flex gap-1.5"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="size-1.5 rounded-full bg-cyan"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

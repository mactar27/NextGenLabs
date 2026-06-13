"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/providers/language-provider";

// Placeholder decorative network animation component
function NetworkBackground() {
  return (
    <svg
      className="absolute inset-0 -z-10 size-full animate-pulse opacity-5"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Example subtle lines */}
      <path
        d="M100 200 C200 100, 400 100, 500 200"
        stroke="url(#gradient)"
        strokeWidth="1"
        strokeOpacity="0.2"
        fill="none"
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14B8D4" />
          <stop offset="100%" stopColor="#031B4E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HeroSection() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 md:pt-32">
      {/* Background decorative network */}
      <NetworkBackground />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl"
            style={{ color: "#031B4E" }}
          >
            {t("hero.headline") || "Transforming Ideas Into Digital Solutions"}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-3xl text-lg text-muted-foreground"
          >
            {t("hero.subtitle") ||
              "NextGen Labs helps businesses accelerate their digital transformation through web development, mobile applications, artificial intelligence, and innovative software solutions."}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              style={{ backgroundColor: "#031B4E" }}
            >
              {t("hero.cta.start") || "Start Your Project"}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg border border-primary bg-white px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
              style={{ color: "#031B4E", borderColor: "#031B4E" }}
            >
              {t("hero.cta.discover") || "Discover Our Services"}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

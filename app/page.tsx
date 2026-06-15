import { HeroSection } from "@/components/home/hero-section"
import { TechMarquee } from "@/components/home/tech-marquee"

import { OverviewSection } from "@/components/home/overview-section"
import { ServicesGrid } from "@/components/services-grid"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechMarquee />

      <OverviewSection />
      <ServicesGrid />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

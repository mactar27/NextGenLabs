import type { Metadata } from "next"
import { PortfolioContent } from "@/components/portfolio/portfolio-content"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore NextGen Labs projects across web, mobile, AI, and design for clients in Senegal and beyond.",
}

export default function PortfolioPage() {
  return <PortfolioContent />
}

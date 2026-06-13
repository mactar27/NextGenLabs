import type { Metadata } from "next"
import { ServicesContent } from "@/components/services/services-content"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web & mobile development, AI solutions, UX/UI design, and digital consulting from NextGen Labs in Dakar, Senegal.",
}

export default function ServicesPage() {
  return <ServicesContent />
}

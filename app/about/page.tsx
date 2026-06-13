import type { Metadata } from "next"
import { AboutContent } from "@/components/about/about-content"

export const metadata: Metadata = {
  title: "About",
  description:
    "NextGen Labs is a Senegalese technology startup founded by young graduates from ISEP Diamniadio, passionate about innovation and digital transformation.",
}

export default function AboutPage() {
  return <AboutContent />
}

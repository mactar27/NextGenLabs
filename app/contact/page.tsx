import type { Metadata } from "next"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NextGen Labs in Dakar, Senegal. Scan our digital business card or send us a message.",
}

export default function ContactPage() {
  return <ContactContent />
}

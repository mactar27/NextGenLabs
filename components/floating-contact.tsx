"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MessageCircle, X, Phone, Mail } from "lucide-react"
import { company } from "@/lib/site"

export function FloatingContact() {
  const [open, setOpen] = useState(false)

  const actions = [
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/${company.whatsapp}`, color: "bg-[#25D366]" },
    { label: "Call", icon: Phone, href: `tel:${company.phoneRaw}`, color: "bg-navy" },
    { label: "Email", icon: Mail, href: `mailto:${company.email}`, color: "bg-cyan" },
  ]

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((a, i) => (
            <motion.a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.8 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2"
            >
              <span className="rounded-lg bg-foreground px-2.5 py-1 text-xs font-medium text-background shadow-sm">
                {a.label}
              </span>
              <span className={`flex size-11 items-center justify-center rounded-full text-white shadow-lg ${a.color}`}>
                <a.icon className="size-5" />
              </span>
            </motion.a>
          ))}
      </AnimatePresence>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open contact options"
        className="flex size-14 items-center justify-center rounded-full bg-navy text-white shadow-xl transition-transform hover:scale-105"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="size-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}

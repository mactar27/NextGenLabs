"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { Bot, X, Send, Sparkles, ChevronRight } from "lucide-react"
import { company } from "@/lib/site"
import { useChat, type UIMessage } from "@ai-sdk/react"
import { TextStreamChatTransport, isTextUIPart } from "ai"

const SUGGESTIONS = [
  "Vos services",
  "Demander un devis",
  "Délais de livraison",
  "Nous contacter",
]

function getMessageText(message: UIMessage): string {
  if (message.parts) {
    return message.parts
      .filter(isTextUIPart)
      .map((part) => part.text)
      .join("")
  }
  return (message as any).content || (message as any).text || ""
}

/* ─── Message bubble ─────────────────────────────────────── */
function Bubble({ message }: { message: UIMessage }) {
  const isBot = message.role === "assistant"
  const raw = getMessageText(message)
  const html = raw
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>")

  if (!raw) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-2 ${isBot ? "items-start" : "items-end flex-row-reverse"}`}
    >
      {isBot && (
        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full">
          <Image src="/images/nexy-avatar.png" alt="Nexy" width={28} height={28} className="size-full rounded-full object-cover shadow-sm ring-1 ring-border" />
        </span>
      )}
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isBot
            ? "rounded-tl-sm border border-border bg-card text-foreground"
            : "rounded-tr-sm bg-cyan font-medium text-navy"
        }`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </motion.div>
  )
}

/* ─── Main chatbot component ─────────────────────────────── */
export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status, error } = useChat({
    transport: new TextStreamChatTransport({ api: "/api/chat" }),
    messages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Bonjour 👋 Je suis **Nexy**, l'assistant IA de NextGen Labs. Comment puis-je vous aider ?",
          },
        ],
      },
    ],
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const handleSend = (text: string) => {
    const msg = text.trim()
    if (!msg || isLoading) return
    setInputValue("")
    sendMessage({ text: msg })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend(inputValue)
  }

  const visibleMessages = messages.filter((m) => getMessageText(m).length > 0)

  return (
    <div className="fixed bottom-6 right-5 z-[110] flex flex-col items-end gap-3">
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="flex w-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-navy/20 sm:w-[380px]"
            style={{ maxHeight: "min(560px, 80vh)" }}
          >
            <div className="flex items-center gap-3 bg-navy px-4 py-3.5">
              <span className="relative flex size-9 items-center justify-center rounded-full">
                <Image src="/images/nexy-avatar.png" alt="Nexy" width={36} height={36} className="size-full rounded-full object-cover shadow-sm ring-1 ring-white/10" />
                <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-emerald-400 ring-2 ring-navy" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-tight text-white">Nexy</p>
                <p className="flex items-center gap-1 text-xs text-white/60">
                  <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
                  En ligne
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex size-7 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {visibleMessages.map((m) => (
                <Bubble key={m.id} message={m} />
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full">
                      <Image src="/images/nexy-avatar.png" alt="Nexy" width={28} height={28} className="size-full rounded-full object-cover shadow-sm ring-1 ring-border" />
                    </span>
                    <span className="flex gap-1 rounded-2xl rounded-tl-sm border border-border bg-card px-4 py-3">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="block size-1.5 rounded-full bg-muted-foreground"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {error && (
                <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.
                </p>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {visibleMessages.length <= 1 && !isLoading && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-cyan hover:text-cyan"
                  >
                    {s}
                    <ChevronRight className="size-3" />
                  </button>
                ))}
              </div>
            )}

            {/* WhatsApp CTA */}
            <div className="border-t border-border bg-secondary/50 px-4 py-2">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.852L.072 23.928l6.244-1.637A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.007-1.368l-.36-.214-3.707.972.99-3.614-.234-.372A9.82 9.82 0 012.18 12C2.18 6.57 6.57 2.18 12 2.18c5.43 0 9.82 4.39 9.82 9.82 0 5.43-4.39 9.818-9.82 9.818z" />
                </svg>
                Continuer sur WhatsApp
              </a>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-border px-4 py-3">
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Écrivez un message…"
                className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-cyan focus:ring-2 focus:ring-cyan/20"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cyan text-navy transition-all hover:bg-cyan/90 disabled:opacity-40"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Ouvrir le chatbot"
        className="relative flex size-14 items-center justify-center rounded-full bg-navy text-white shadow-xl shadow-navy/30"
      >
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full bg-navy"
            animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="size-full rounded-full p-[2px]"
            >
              <Image src="/images/nexy-avatar.png" alt="Nexy" width={56} height={56} className="size-full rounded-full object-cover" priority />
            </motion.span>
          )}
        </AnimatePresence>

        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex size-4 flex-col items-center justify-center rounded-full bg-cyan text-[9px] font-bold text-navy ring-2 ring-background">
            1
          </span>
        )}
      </motion.button>
    </div>
  )
}

import { google } from "@ai-sdk/google"
import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

const SYSTEM_PROMPT = `Tu es l'assistant de NextGen Labs, une startup technologique sénégalaise basée à l'ISEP Diamniadio, Dakar.
Services : Développement Web (Next.js/React/Node.js), Mobile (React Native/Flutter/Swift), Intelligence Artificielle (Python/OpenAI/TensorFlow), UI/UX Design (Figma/Framer), Solutions de gestion (ERP/CRM/PostgreSQL), Maintenance & Support (Monitoring/Security/DevOps).
Contact : contact@nextgenlabs.sn | +221 77 000 00 00.
Réponds en français, de façon concise et professionnelle. Si tu ne sais pas, propose de contacter NextGen Labs directement.`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  })

  return result.toTextStreamResponse()
}

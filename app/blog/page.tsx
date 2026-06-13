import type { Metadata } from "next"
import { BlogContent } from "@/components/blog/blog-content"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI, software development, mobile, and digital transformation from NextGen Labs.",
}

export default function BlogPage() {
  return <BlogContent />
}

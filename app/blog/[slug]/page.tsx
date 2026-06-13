import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { posts } from "@/lib/data"
import { BlogPostContent } from "@/components/blog/blog-post-content"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title.fr} | NextGen Labs`,
    description: post.excerpt.fr,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) {
    notFound()
  }

  return <BlogPostContent slug={slug} />
}

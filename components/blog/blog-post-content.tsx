"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Share2, ChevronRight } from "lucide-react"
import { posts } from "@/lib/data"
import { useLanguage } from "@/components/providers/language-provider"
import { Reveal } from "@/components/visuals/reveal"
import { GridBackground, Particles } from "@/components/visuals/tech-visuals"
import { CtaSection } from "@/components/cta-section"

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export function BlogPostContent({ slug }: { slug: string }) {
  const { t, lang } = useLanguage()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return null

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

  const content = post.content[lang]
  const paragraphs = content.split("\n\n").filter(Boolean)
  const readTime = estimateReadingTime(content)

  // Related posts: same category, different slug (up to 3)
  const related = posts
    .filter(
      (p) =>
        p.slug !== slug &&
        p.category[lang] === post.category[lang]
    )
    .slice(0, 3)

  // Fallback: any 3 other posts
  const relatedFinal =
    related.length > 0
      ? related
      : posts.filter((p) => p.slug !== slug).slice(0, 3)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title[lang], url: window.location.href })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden pt-32 pb-0 md:pt-40">
        <GridBackground className="opacity-30" />
        <Particles count={12} />

        <div className="mx-auto max-w-4xl px-4">
          {/* Back */}
          <Reveal>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-cyan/70"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              {lang === "fr" ? "Retour au blog" : "Back to blog"}
            </Link>
          </Reveal>

          {/* Category badge */}
          <Reveal delay={0.08}>
            <span className="mt-6 inline-block rounded-full bg-cyan/15 px-3 py-1 text-xs font-semibold text-cyan border border-cyan/20">
              {post.category[lang]}
            </span>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.14}>
            <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
              {post.title[lang]}
            </h1>
          </Reveal>

          {/* Excerpt */}
          <Reveal delay={0.18}>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {post.excerpt[lang]}
            </p>
          </Reveal>

          {/* Meta row */}
          <Reveal delay={0.22}>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-y border-border py-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4 text-cyan" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 text-cyan" />
                {readTime} {lang === "fr" ? "min de lecture" : "min read"}
              </span>
              <button
                onClick={handleShare}
                className="ml-auto flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium transition-colors hover:border-cyan hover:text-cyan"
              >
                <Share2 className="size-3.5" />
                {lang === "fr" ? "Partager" : "Share"}
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Cover image */}
      <Reveal delay={0.26} className="mx-auto mt-8 max-w-5xl px-4">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title[lang]}
            fill
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </Reveal>

      {/* Article body */}
      <div className="mx-auto mt-12 max-w-3xl px-4 pb-20">
        <Reveal delay={0.3}>
          <article className="space-y-6">
            {paragraphs.map((para, index) => {
              const isFirst = index === 0
              return (
                <p
                  key={index}
                  className={`leading-8 text-muted-foreground ${
                    isFirst
                      ? "text-lg md:text-xl font-medium text-foreground/90"
                      : "text-base md:text-lg"
                  }`}
                >
                  {para}
                </p>
              )
            })}
          </article>
        </Reveal>

        {/* Share & back footer */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-cyan/70"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              {lang === "fr" ? "Tous les articles" : "All articles"}
            </Link>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-cyan hover:text-cyan"
            >
              <Share2 className="size-4" />
              {lang === "fr" ? "Partager cet article" : "Share this article"}
            </button>
          </div>
        </Reveal>
      </div>

      {/* Related articles */}
      {relatedFinal.length > 0 && (
        <section className="border-t border-border bg-card/50 py-16">
          <div className="mx-auto max-w-5xl px-4">
            <Reveal>
              <h2 className="mb-8 text-xl font-bold text-foreground">
                {lang === "fr" ? "Articles similaires" : "Related articles"}
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedFinal.map((relPost, i) => (
                <Reveal key={relPost.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${relPost.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-cyan/5"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={relPost.image || "/placeholder.svg"}
                        alt={relPost.title[lang]}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="mb-2 w-fit rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        {relPost.category[lang]}
                      </span>
                      <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-cyan transition-colors">
                        {relPost.title[lang]}
                      </h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {relPost.excerpt[lang]}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cyan">
                        {lang === "fr" ? "Lire" : "Read"}
                        <ChevronRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Reveal>
        <CtaSection />
      </Reveal>
    </>
  )
}

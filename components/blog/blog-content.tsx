"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { Reveal } from "@/components/visuals/reveal"
import { posts } from "@/lib/data"
import { useLanguage } from "@/components/providers/language-provider"

export function BlogContent() {
  const { t, lang } = useLanguage()

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

  const [featured, ...rest] = posts

  return (
    <>
      <PageHero kicker={t("blog.kicker")} title={t("blog.title")} subtitle={t("blog.subtitle")} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <article className="group mb-12 grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title[lang]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="mb-3 w-fit rounded-full bg-cyan/15 px-3 py-1 text-xs font-medium text-cyan">
                  {featured.category[lang]}
                </span>
                <h2 className="text-balance text-2xl font-bold text-foreground">{featured.title[lang]}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{featured.excerpt[lang]}</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="size-4" />
                  {formatDate(featured.date)}
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-cyan transition-colors hover:text-cyan/80"
                >
                  {t("blog.read")}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title[lang]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {post.category[lang]}
                    </span>
                    <h3 className="text-balance text-lg font-semibold text-foreground">{post.title[lang]}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt[lang]}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="size-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 font-medium text-cyan transition-colors hover:text-cyan/80"
                      >
                        {t("blog.read")}
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <CtaSection />
      </Reveal>
    </>
  )
}

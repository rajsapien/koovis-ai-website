import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getPublishedPosts } from "@/lib/blog";
import AnimateIn from "@/components/AnimateIn";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post || !post.published) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 sm:px-6 pt-24 pb-32">
      {/* Back link */}
      <AnimateIn>
        <Link
          href="/blog"
          className="group mb-10 inline-flex items-center gap-2 font-jetbrains text-xs uppercase tracking-wider text-text-dim transition-colors hover:text-accent"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Blog
        </Link>
      </AnimateIn>

      {/* Post header */}
      <AnimateIn delay={0.1}>
        <header className="mb-12">
          <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-jetbrains text-[10px] font-medium uppercase tracking-wider text-accent">
            {post.tag}
          </span>

          <h1 className="mt-5 font-serif text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-heading">
            {post.title}
          </h1>

          <div className="mt-5 flex items-center gap-4 text-sm text-text-dim">
            <span className="font-jetbrains text-xs">{post.readTime}</span>
          </div>
        </header>
      </AnimateIn>

      {/* MDX content */}
      <AnimateIn delay={0.2}>
        <div className="prose-blog font-outfit text-base leading-[1.8] text-text">
          <MDXRemote source={post.content} />
        </div>
      </AnimateIn>

      {/* Author info */}
      <AnimateIn delay={0.3}>
        <footer className="mt-16 border-t border-border pt-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-card to-bg border border-border">
              <span className="font-serif text-sm font-semibold text-accent/80 select-none">
                RK
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-heading">{post.author}</p>
              <p className="font-jetbrains text-[11px] uppercase tracking-[0.15em] text-text-dim">
                Founder, Koovis AI
              </p>
            </div>
          </div>
        </footer>
      </AnimateIn>
    </article>
  );
}

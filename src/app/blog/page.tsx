import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";
import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on AI engineering, ML infrastructure, and building production systems.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Blog</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            Thoughts on <em>AI engineering</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400">
            Notes on building production ML systems, architecture decisions, and
            lessons from the field.
          </p>
        </AnimateIn>
      </section>

      {/* Post list */}
      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          {posts.length === 0 ? (
            <p className="text-neutral-500">No posts yet. Check back soon!</p>
          ) : (
            <div className="flex flex-col">
              {posts.map((post, i) => {
                const isPublished = post.published;

                return (
                  <AnimateIn key={post.slug} delay={i * 0.08}>
                    {isPublished ? (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block border-b border-white/[0.06] py-8 transition-colors first:pt-0 hover:bg-white/[0.02] -mx-4 px-4 rounded-lg"
                      >
                        <PostRow post={post} />
                      </Link>
                    ) : (
                      <div className="border-b border-white/[0.06] py-8 opacity-40 first:pt-0 -mx-4 px-4">
                        <PostRow post={post} />
                      </div>
                    )}
                  </AnimateIn>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function PostRow({ post }: { post: ReturnType<typeof getBlogPosts>[number] }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
      {/* Left: meta */}
      <div className="flex flex-shrink-0 items-center gap-3 sm:w-44 sm:flex-col sm:items-start sm:gap-2">
        <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-jetbrains text-[10px] font-medium uppercase tracking-wider text-accent">
          {post.tag}
        </span>
        <span className="font-jetbrains text-xs text-neutral-600">
          {post.date}
        </span>
      </div>

      {/* Right: content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <ArrowRight
            size={16}
            className="mt-1.5 flex-shrink-0 text-neutral-700 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-accent"
          />
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 line-clamp-2">
          {post.excerpt}
        </p>
        <span className="mt-2 inline-block font-jetbrains text-[11px] text-neutral-600">
          {post.readTime}
        </span>
      </div>
    </div>
  );
}

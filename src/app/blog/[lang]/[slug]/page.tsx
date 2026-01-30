import { getPostBySlug } from "@/app/utils/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/app/types/types";
import NotFoundPost from "@/app/components/NotFoundPost";
import { Metadata } from "next";
import Script from "next/script";

const defaultImage = "/images/image-default-blog.png";

interface PostPageProps {
  params: Promise<{ lang: "es" | "en" | "fr"; slug: string }>;
}

const translations = {
  es: {
    back: "Volver al Blog",
    share: "Compartir",
    readMore: "Sigue leyendo",
    ctaTitle: "¿Te interesa automatizar esto en tu negocio?",
    ctaDesc: "Habla con nuestro equipo y descubre cómo los agentes IA de Jumper pueden ayudarte.",
    ctaButton: "Hablar por WhatsApp",
    relatedTitle: "Artículos relacionados",
  },
  en: {
    back: "Back to Blog",
    share: "Share",
    readMore: "Keep reading",
    ctaTitle: "Interested in automating this for your business?",
    ctaDesc: "Talk to our team and discover how Jumper's AI agents can help you.",
    ctaButton: "Chat on WhatsApp",
    relatedTitle: "Related articles",
  },
  fr: {
    back: "Retour au Blog",
    share: "Partager",
    readMore: "Continuer la lecture",
    ctaTitle: "Intéressé par l'automatisation de cela pour votre entreprise?",
    ctaDesc: "Parlez à notre équipe et découvrez comment les agents IA de Jumper peuvent vous aider.",
    ctaButton: "Discuter sur WhatsApp",
    relatedTitle: "Articles connexes",
  },
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = await getPostBySlug(slug, lang);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: `${post.title} | Jumper Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { lang, slug } = await params;

  let post: Post | null = null;

  try {
    post = await getPostBySlug(slug, lang);
  } catch (err) {
    console.error("Error fetching post:", err);
    post = null;
  }

  if (!post) return <NotFoundPost lang={lang} />;

  const t = translations[lang] || translations["en"];
  const whatsappNumber = "+50661661848";
  const estimatedReadTime = Math.max(3, Math.ceil((post.content?.length || 500) / 1000));

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": post.image || defaultImage,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Jumper Enterprise"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jumper Enterprise",
      "logo": {
        "@type": "ImageObject",
        "url": "https://agents-ai.andrewcr.com/logo.png"
      }
    }
  };

  return (
    <>
      <Script type="application/ld+json" id="article-schema">
        {JSON.stringify(articleSchema)}
      </Script>

      <main className="min-h-screen bg-[#0a0a0f]">
        {/* Hero with image */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <Image
            src={post.image || defaultImage}
            alt={post.title || "Imagen del artículo"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />

          {/* Back button */}
          <div className="absolute top-8 left-6 z-10">
            <Link
              href={`/blog/${lang}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.back}
            </Link>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              {post.category && (
                <span className="inline-block px-4 py-1 bg-amber-500 text-black rounded-full text-sm font-semibold mb-4">
                  {post.category}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-300">
                <time>
                  {new Date(post.date).toLocaleDateString(
                    lang === "es" ? "es-ES" : lang === "fr" ? "fr-FR" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </time>
                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                <span>{estimatedReadTime} min</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article content */}
        <article className="px-6 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Description/intro */}
            {post.description && (
              <p className="text-xl text-gray-300 leading-relaxed mb-8 pb-8 border-b border-[#2d2d4a]">
                {post.description}
              </p>
            )}

            {/* Markdown content */}
            <div className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:marker:text-amber-500
              prose-blockquote:border-amber-500 prose-blockquote:bg-[#1a1a2e] prose-blockquote:rounded-r-xl prose-blockquote:py-1
              prose-code:text-amber-400 prose-code:bg-[#1a1a2e] prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-[#1a1a2e] prose-pre:border prose-pre:border-[#2d2d4a]
              prose-hr:border-[#2d2d4a]
            ">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {post.content || ""}
              </ReactMarkdown>
            </div>

            {/* Share buttons */}
            <div className="mt-12 pt-8 border-t border-[#2d2d4a]">
              <p className="text-gray-400 mb-4">{t.share}</p>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://agents-ai.andrewcr.com/blog/${lang}/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1a1a2e] border border-[#2d2d4a] rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://agents-ai.andrewcr.com/blog/${lang}/${slug}`)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1a1a2e] border border-[#2d2d4a] rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-3">{t.ctaTitle}</h3>
              <p className="text-black/80 mb-6">{t.ctaDesc}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola! Vengo del artículo "${post.title}" y me interesa saber más sobre automatización con IA.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-amber-500 px-6 py-3 rounded-xl font-bold hover:bg-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.ctaButton}
              </a>
            </div>
          </div>
        </article>

        {/* Footer mini */}
        <footer className="py-8 px-6 border-t border-[#1a1a2e]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
              Jumper
            </Link>
            <p className="text-gray-500 text-sm">
              © 2025 Jumper Enterprise. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

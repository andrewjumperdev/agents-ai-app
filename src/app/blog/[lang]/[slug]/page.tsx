import { getPostBySlug } from "@/app/utils/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { translations } from "@/app/libs/translations";
import Image from "next/image";

interface PostPageProps {
  params: Promise<{ lang: "es" | "en" | "fr"; slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { lang, slug } = await params;
  const post = await getPostBySlug(slug, lang);
  const t = translations[lang] || translations["en"];
  const whatsappNumber = "+50661661848";

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 relative">
      <div className="mb-6">
        <Link
          href={`/blog/${lang}`}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold px-4 py-2 rounded-lg bg-blue-50 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition-all transform hover:-translate-y-1 hover:scale-105 shadow-md"
        >
          ← Volver al Blog
        </Link>
      </div>

      <article className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden transition-shadow hover:shadow-3xl">
        {post.image && (
          <div className="relative h-96 w-full overflow-hidden group">
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover brightness-90 transition-transform duration-500 group-hover:scale-105"
              width={500}
              height={200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              {post.category && (
                <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-2">
                  {post.category}
                </span>
              )}
              <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                {post.title}
              </h1>
              <time className="text-gray-200 mt-1 block">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        )}

        <div className="prose dark:prose-dark max-w-full p-8 space-y-8 relative">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h2: (props) => (
                <h2
                  className="text-3xl font-bold mt-8 mb-4 text-blue-600 scroll-mt-24"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="text-2xl font-semibold mt-6 mb-3 text-blue-500 scroll-mt-20"
                  {...props}
                />
              ),
              p: (props) => (
                <p className="leading-relaxed text-gray-800 dark:text-gray-200" {...props} />
              ),
              a: (props) => (
                <a
                  className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 transition"
                  {...props}
                />
              ),
              blockquote: (props) => (
                <blockquote
                  className="border-l-4 border-blue-500 pl-6 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-gray-800 p-4 rounded-md shadow-sm"
                  {...props}
                />
              ),
              code: (props) => (
                <code
                  className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>

          <div className="mt-12 text-center">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                t.whatsappMessage
              )}`}
              target="_blank"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300"
            >
              {t.ctaDemo}
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

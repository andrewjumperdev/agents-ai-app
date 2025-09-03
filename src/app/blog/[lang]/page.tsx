import Link from "next/link";
import { getAllPosts } from "@/app/utils/posts";
import { Post, Lang } from "@/app/types/types";
import { translations } from "@/app/libs/translations";

interface BlogPageProps {
  params: { lang: Lang };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = params;
  const posts: Post[] = await getAllPosts(lang);
  const t = translations[lang] || translations["en"];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8 flex gap-3 flex-wrap">
        <Link href={`/${lang}`}>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105 transform transition-all duration-300">
            ← {t.heroTitle.split(" ")[0]}
          </button>
        </Link>
      </div>

      <h1 className="text-5xl font-extrabold mb-12 text-gray-900 dark:text-gray-100 animate-fade-in">
        Blog
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(({ slug, title, date, description, image, category }, index) => (
          <li
            key={slug}
            className={`relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105 animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            )}

            <div className="p-6 flex flex-col justify-between h-full">
              {category && (
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-2">
                  {category}
                </span>
              )}

              <Link href={`/blog/${lang}/${slug}`}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 transition-colors duration-300">
                  {title}
                </h2>
              </Link>

              <p className="mt-2 text-gray-700 dark:text-gray-300 flex-1">
                {description || (lang === "es" ? "Sin descripción disponible." : lang === "fr" ? "Description indisponible." : "No description available.")}
              </p>

              <time
                dateTime={date}
                className="block mt-4 text-sm text-gray-500 dark:text-gray-400"
              >
                {new Date(date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              <Link href={`/blog/${lang}/${slug}`}>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 hover:scale-105 transform transition-all duration-300">
                  {lang === "es" ? "Leer más" : lang === "fr" ? "Lire plus" : "Read more"}
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <section className="mt-16 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {lang === "es"
            ? "¿Quieres que tu negocio venda más con IA?"
            : lang === "fr"
            ? "Voulez-vous que votre entreprise vende plus grâce à l'IA ?"
            : "Want your business to sell more with AI?"}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {lang === "es"
            ? "Descubre cómo nuestros agentes inteligentes pueden automatizar ventas, seguimiento y marketing."
            : lang === "fr"
            ? "Découvrez comment nos agents intelligents peuvent automatiser les ventes, le suivi et le marketing."
            : "Discover how our intelligent agents can automate sales, follow-ups, and marketing."}
        </p>
        <Link href="/demo">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300">
            {t.ctaDemo}
          </button>
        </Link>
      </section>
    </main>
  );
}

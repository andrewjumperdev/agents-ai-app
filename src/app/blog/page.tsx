import Link from "next/link";
import { getAllPosts } from "../utils/posts";
import { Post } from "../types/types";

export default async function BlogPage() {
  const posts: Post[] = (await getAllPosts()).sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-extrabold mb-12 text-gray-900 dark:text-gray-100">
        Blog
      </h1>
      <ul className="space-y-8">
        {posts.map(({ slug, title, date, description }) => (
          <li
            key={slug}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900"
          >
            <Link href={`/blog/${slug}`}>
              <span className="text-2xl font-semibold text-blue-600 hover:underline">
                {title}
              </span>
            </Link>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {description || "Sin descripción disponible."}
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
          </li>
        ))}
      </ul>
    </main>
  );
}
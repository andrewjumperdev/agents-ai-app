import { getPostBySlug } from "@/app/utils/posts";
import ReactMarkdown from "react-markdown";

interface Params {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
        <header className="mb-8">
          <h1 className="text-5xl font-extrabold mb-2 text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="block text-gray-500 dark:text-gray-400 text-sm"
          >
            {new Date(post.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </section>
      </article>
    </main>
  );
}

import { getPostBySlug } from "@/app/utils/posts";
import ReactMarkdown from "react-markdown";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PostPage({ params }: any) {
  const post = getPostBySlug(params.slug);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
}

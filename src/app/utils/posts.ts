import { MongoClient } from "mongodb";
import { remark } from "remark";
import html from "remark-html";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

async function mdToHtml(markdown: string) {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}

export async function getAllPosts(lang: "es" | "en" | "fr" = "es") {
  await client.connect();
  const db = client.db("agents-ai");
  const collection = db.collection("posts");

  const posts = await collection.find({}).sort({ date: -1 }).toArray();

  return Promise.all(
    posts.map(async (post) => {
      const rawContent = post.content?.[lang] || "";
      const title = rawContent.split("\n")[0].replace("# ", "");
      const description = rawContent.replace(/\n/g, " ").slice(0, 150) + "...";
      const content = await mdToHtml(rawContent);

      return {
        slug: post.slug,
        title,
        description,
        content,
        date: new Date(post.date).toISOString(),
        category: post.category,
        tags: post.tags,
        author: post.author,
        image: post.seo?.ogImage
      };
    })
  );
}

export async function getPostBySlug(slug: string, lang: "es" | "en" | "fr" = "es") {
  await client.connect();
  const db = client.db("agents-ai");
  const collection = db.collection("posts");

  const post = await collection.findOne({ slug });
  if (!post) throw new Error(`No se encontró el post con slug ${slug}`);

  const rawContent = post.content?.[lang] || "";
  const title = rawContent.split("\n")[0].replace("# ", "");
  const description = rawContent.replace(/\n/g, " ").slice(0, 150) + "...";
  const content = await mdToHtml(rawContent);

  return {
    slug: post.slug,
    title,
    description,
    content,
    date: new Date(post.date).toISOString(),
    category: post.category,
    tags: post.tags,
    author: post.author,
    image: post.seo?.ogImage
  };
}

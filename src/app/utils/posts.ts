import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../types/types";

const postsDir = path.join(process.cwd(), "posts");


export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir);
    return [];
  }

  const filenames = fs.readdirSync(postsDir);
  return filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    if (!data.title || !data.date) {
      throw new Error(`El post ${filename} debe tener 'title' y 'date' en el frontmatter`);
    }

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      description: data.description || content.slice(0, 150) + "...",
      content,
    };
  });
}
export function getPostBySlug(slug: string): Post {
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  // Aquí garantizamos que data tiene title y date
  if (!data.title || !data.date) {
    throw new Error(`El post ${slug} debe tener 'title' y 'date' en el frontmatter`);
  }

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description || "",
    content,
  };
}
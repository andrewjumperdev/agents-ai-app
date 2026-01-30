import { config } from "dotenv";
import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Load environment variables from .env file
config();

const uri = process.env.MONGODB_URI!;

interface PostData {
  slug: string;
  date: Date;
  category: string;
  author: string;
  tags: string[];
  content: {
    es: string;
    en: string;
    fr: string;
  };
  seo: {
    ogImage: string;
    metaDescription: string;
  };
}

async function seedPosts() {
  if (!uri) {
    console.error("❌ MONGODB_URI not found in environment variables");
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("agents-ai");
    const collection = db.collection("posts");

    const postsDir = path.join(process.cwd(), "posts");
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

    console.log(`📚 Found ${files.length} markdown files\n`);

    let inserted = 0;
    let updated = 0;
    let errors = 0;

    for (const file of files) {
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data: frontmatter, content } = matter(fileContent);

      const slug = file.replace(".md", "");

      // Prepare the post document
      const postData: PostData = {
        slug,
        date: new Date(frontmatter.date || new Date()),
        category: frontmatter.category || "General",
        author: frontmatter.author || "Jumper Enterprise",
        tags: frontmatter.tags || [],
        content: {
          es: `# ${frontmatter.title}\n\n${content}`,
          en: `# ${frontmatter.title}\n\n${content}`, // Same content for now
          fr: `# ${frontmatter.title}\n\n${content}`, // Same content for now
        },
        seo: {
          ogImage: frontmatter.image || "/images/image-default-blog.png",
          metaDescription: frontmatter.description || "",
        },
      };

      try {
        // Check if post exists
        const existing = await collection.findOne({ slug });

        if (existing) {
          // Update existing post
          await collection.updateOne(
            { slug },
            {
              $set: {
                date: postData.date,
                category: postData.category,
                author: postData.author,
                tags: postData.tags,
                content: postData.content,
                seo: postData.seo,
                updatedAt: new Date(),
              }
            }
          );
          updated++;
          console.log(`🔄 Updated: ${slug}`);
        } else {
          // Insert new post
          await collection.insertOne({
            ...postData,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
          inserted++;
          console.log(`✨ Inserted: ${slug}`);
        }
      } catch (err) {
        errors++;
        console.error(`❌ Error with ${slug}:`, err);
      }
    }

    console.log("\n" + "=".repeat(50));
    console.log(`📊 Summary:`);
    console.log(`   ✨ Inserted: ${inserted}`);
    console.log(`   🔄 Updated: ${updated}`);
    console.log(`   ❌ Errors: ${errors}`);
    console.log("=".repeat(50));

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
    console.log("\n👋 Disconnected from MongoDB");
  }
}

seedPosts();

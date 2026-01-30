import { config } from "dotenv";
import { MongoClient } from "mongodb";

config();

const uri = process.env.MONGODB_URI!;

async function cleanupDuplicates() {
  if (!uri) {
    console.error("❌ MONGODB_URI not found");
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("agents-ai");
    const collection = db.collection("posts");

    // Find all posts
    const allPosts = await collection.find({}).toArray();
    console.log(`📚 Total posts: ${allPosts.length}`);

    // Group by slug
    const slugCounts: Record<string, number> = {};
    for (const post of allPosts) {
      slugCounts[post.slug] = (slugCounts[post.slug] || 0) + 1;
    }

    // Find duplicates
    const duplicates = Object.entries(slugCounts).filter(([, count]) => count > 1);

    if (duplicates.length === 0) {
      console.log("✨ No duplicates found!");
      return;
    }

    console.log(`\n🔍 Found ${duplicates.length} slugs with duplicates:`);
    for (const [slug, count] of duplicates) {
      console.log(`   - ${slug}: ${count} copies`);
    }

    // Remove duplicates (keep the most recent one)
    let removed = 0;
    for (const [slug] of duplicates) {
      const posts = await collection.find({ slug }).sort({ updatedAt: -1, createdAt: -1 }).toArray();

      // Keep the first (most recent), delete the rest
      const idsToDelete = posts.slice(1).map(p => p._id);

      if (idsToDelete.length > 0) {
        await collection.deleteMany({ _id: { $in: idsToDelete } });
        removed += idsToDelete.length;
        console.log(`   🗑️  Removed ${idsToDelete.length} duplicates of "${slug}"`);
      }
    }

    console.log(`\n✅ Cleanup complete! Removed ${removed} duplicate posts.`);

    // Final count
    const finalCount = await collection.countDocuments();
    console.log(`📊 Posts remaining: ${finalCount}`);

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
    console.log("\n👋 Disconnected");
  }
}

cleanupDuplicates();

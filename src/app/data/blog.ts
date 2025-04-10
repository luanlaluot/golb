import { supabase } from "./supabase";
import { BlogPostWithAuthor } from "@/types/blog";

export async function getBlogPosts(): Promise<BlogPostWithAuthor[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      `
      *,
      author:profiles(id, name, avatar_url)
    `
    )
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }

  // Add random image URLs for posts without cover images
  const posts = data.map((post) => ({
    ...post,
  })) as BlogPostWithAuthor[];

  return posts;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostWithAuthor | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      `
      *,
      author:profiles(id, name, avatar_url)
    `
    )
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }

  return data as BlogPostWithAuthor | null;
}

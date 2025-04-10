import { supabase } from "@/lib/supabase";
import { BlogPost } from "@/types/blog";

export async function getFeaturedPost(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      `
      *,
      author:profiles(*)
    `
    )
    .eq("is_featured", true)
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.error("Error fetching featured post:", error);
    return [];
  }

  return data as BlogPost[];
}

export async function getLatestPosts(limit: number = 6): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      `
      *,
      author:profiles(*)
    `
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching latest posts:", error);
    return [];
  }

  return data as BlogPost[];
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("posts")
    .select(
      `
      *,
      author:profiles(*)
    `
    )
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }

  return data as BlogPost;
}

export async function getRelatedPosts(
  postId: string,
  limit: number = 3
): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("posts")
    .select(
      `
      *,
      author:profiles(*)
    `
    )
    .neq("id", postId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }

  return data as BlogPost[];
}

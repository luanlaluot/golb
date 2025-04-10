import { getBlogPostBySlug } from "../../data/blog";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import dayjs from "dayjs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen">
      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="space-y-4 text-center mb-8">
          <div className="text-sm text-gray-500">
            {dayjs(post.updated_at).format("HH:mm - DD/MM/YYYY")}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold">{post.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Main Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-12">
          <Image
            src={`https://picsum.photos/seed/${post.id}/1600/900`}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Back to Blog Link */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}

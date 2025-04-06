import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
      <p className="text-gray-600 mb-8 text-center">
        {` Sorry, the post you're looking for doesn't exist or has been removed.`}
      </p>
      <Link
        href="/posts"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
      >
        View All Posts
      </Link>
    </div>
  );
}

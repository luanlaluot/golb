import ArticleCard from "@/components/ArticleCard";
import { getFeaturedPost } from "@/services/blog";

export default async function HomeFeaturedList() {
  const posts = await getFeaturedPost();

  return (
    <section className="mb-12 sm:mb-16 lg:mb-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Popular Articles
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-8">
        {/* Featured Article - Takes up 3 columns */}
        <div className="col-span-2 lg:col-span-3">
          {posts.slice(0, 1).map((post) => (
            <ArticleCard
              key={post.id}
              post={post}
              showDescription={true}
              titleClassName="text-2xl sm:text-3xl font-bold"
              descriptionClassName="text-base text-gray-600"
              width={1200}
              height={800}
            />
          ))}
        </div>
        {/* Right side articles - Takes up 2 columns */}
        <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-6">
          {posts.slice(1, 4).map((post) => (
            <ArticleCard
              key={post.id}
              post={post}
              showDescription={true}
              className="col-span-1 flex flex-1 flex-col lg:flex-row gap-4"
              imageClassName="aspect-[16/10] sm:shrink-0"
              titleClassName="text-lg font-semibold"
              width={400}
              height={400}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

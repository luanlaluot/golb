import ArticleCard from "./components/ArticleCard";
import { popularArticles, latestArticles } from "./data/mockData";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Popular Articles */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Featured Article - Takes up 3 columns */}
            <div className="lg:col-span-3">
              {popularArticles.slice(0, 1).map((post) => (
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
            <div className="lg:col-span-2 grid grid-cols-1 gap-6">
              {popularArticles.slice(1).map((post) => (
                <ArticleCard
                  key={post.id}
                  post={post}
                  className="flex flex-1 flex-col md:flex-row gap-4"
                  imageClassName="aspect-[16/10] sm:shrink-0"
                  titleClassName="text-lg font-semibold"
                  width={400}
                  height={400}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {latestArticles.map((post) => (
              <ArticleCard
                key={post.id}
                post={post}
                showDescription={true}
                titleClassName="text-xl font-semibold"
                descriptionClassName="text-sm text-gray-600"
                width={800}
                height={600}
              />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative h-[300px] sm:h-[400px] rounded-lg sm:rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://picsum.photos/seed/cta/1600/900')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Get involved in the agricultural uprising
            </h2>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors text-base sm:text-lg">
              Join Now
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

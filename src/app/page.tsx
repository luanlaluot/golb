import HomeFeaturedList from "@/sections/home/home-featured-list";
import HomeLatestList from "@/sections/home/home-latest-list";

export default async function Page() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Popular Articles */}
        <HomeFeaturedList />

        {/* Popular Articles */}
        <HomeLatestList />

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

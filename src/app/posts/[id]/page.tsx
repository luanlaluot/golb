"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { popularArticles, latestArticles } from "@/app/data/mockData";
import { notFound } from "next/navigation";

interface Section {
  title: string;
  content: string;
}

const BlogDetail = () => {
  const { id } = useParams();

  // Find the post from both popular and latest articles
  const post = [...popularArticles, ...latestArticles].find(
    (article) => article.id === id
  );

  // If post not found, show 404
  if (!post) {
    notFound();
  }

  const sections: Section[] = [
    {
      title: "Achieve a profitable harvest",
      content:
        "Achieving a profitable harvest involves a series of strategic steps that include selecting plant varieties that suit environmental conditions, efficient crop management, use of appropriate agricultural technology, choosing optimal harvest times, as well as effective marketing and distribution strategies to increase the selling value of the harvest.",
    },
    {
      title: "1. Selection of the Right Varieties and Seeds",
      content:
        "Selecting the right varieties and seeds is a key step in achieving a successful harvest. This includes in-depth research into varieties suited to environmental, climate and soil conditions, as well as selecting high quality seeds that can produce optimal yields. By properly selecting varieties and seeds, farmers can increase their chances of achieving a profitable harvest.",
    },
    {
      title: "2. Efficient Crop Management",
      content:
        "Efficient plant management involves regular plant maintenance, application of appropriate fertilizer according to plant needs, and routine monitoring of plant growth and health. By managing crops well, farmers can increase the productivity, quality and profits of their crops.",
    },
    {
      title: "3. Use of Agricultural Technology",
      content:
        "Utilization of agricultural technology involves the use of various advanced tools and technologies such as soil sensors, automated irrigation systems, pest management software applications, and other technologies that can increase efficiency in agricultural processes.\n\nBy implementing this agricultural technology, farmers can monitor soil and plant conditions accurately, optimize the use of resources such as water and fertilizer, and increase productivity and quality of harvest. This helps create a more sustainable and profitable agricultural environment for farmers.",
    },
    {
      title: "4. Choosing the Right Harvest Time",
      content:
        "Choosing the right harvest time involves careful monitoring of crop maturity, weather conditions, and other factors that can affect crop quality and yield. By determining the optimal harvest time, farmers can ensure that their crops are harvested under the best conditions to achieve maximum and profitable yields.",
    },
  ];

  const relatedArticles = popularArticles.slice(1, 4);

  return (
    <article className="min-h-screen pb-16">
      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="space-y-4 text-center mb-8">
          <div className="text-sm text-gray-500">{post.date}</div>
          <h1 className="text-4xl sm:text-5xl font-bold">{post.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {post.description}
          </p>
        </div>
      </header>

      {/* Main Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${post.id}/1600/900`}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="prose prose-lg max-w-none">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600 whitespace-pre-wrap">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Related Article</h2>
          <Link
            href="/posts"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            View all Articles
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {relatedArticles.map((article) => (
            <Link key={article.id} href={`/posts/${article.id}`}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`https://picsum.photos/seed/${article.id}/800/450`}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">{article.date}</div>
                  <h3 className="text-xl font-semibold group-hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;

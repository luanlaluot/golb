import { getLatestPosts } from "@/services/blog";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeLatestList = async () => {
  const latestPosts = await getLatestPosts(6);

  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Latest Articles
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8">
        {latestPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className={`group cursor-pointer block`}
          >
            <article className="bg-white overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="py-6 group-hover:text-green-600">
                <div className="text-xs text-gray-500 mb-2">
                  {dayjs(post.created_at).format("MMMM DD, YYYY")}
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeLatestList;

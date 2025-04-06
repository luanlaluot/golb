"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../data/mockData";

interface ArticleCardProps {
  post: BlogPost;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showDescription?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

const ArticleCard = ({
  post,
  imageClassName = "aspect-[16/9]",
  titleClassName = "text-xl font-semibold",
  descriptionClassName = "text-base text-gray-600",
  showDescription = false,
  className = "",
  width = 800,
  height = 600,
}: ArticleCardProps) => {
  const [imgSrc, setImgSrc] = useState(
    `https://picsum.photos/seed/${post.id}/${width}/${height}`
  );

  return (
    <Link
      href={`/posts/${post.id}`}
      className={`group cursor-pointer block ${className}`}
    >
      <div
        className={`relative overflow-hidden rounded-lg mb-4 ${imageClassName}`}
      >
        <Image
          src={imgSrc}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => {
            setImgSrc("/images/no-image.png");
          }}
          unoptimized // Since we're using external images
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        <h3
          className={`group-hover:text-green-600 transition-colors line-clamp-2 ${titleClassName}`}
        >
          {post.title}
        </h3>
        {showDescription && (
          <p className={`line-clamp-2 ${descriptionClassName}`}>
            {post.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ArticleCard;

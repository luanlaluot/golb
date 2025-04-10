export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  cover_image: string;
  created_at: string;
  updated_at: string;
  published: boolean;
  author_id: string;
}

export interface Author {
  id: string;
  name: string;
  avatar_url: string;
}

export interface BlogPostWithAuthor extends BlogPost {
  author: Author;
}

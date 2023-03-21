type PostType = {
  slug?: string;
  metadata: MDMetadata;
  body: string;
};

export type MDMetadata = {
  date: string;
  title: string;
  author: string;
  excerpt: string;
  videoURL?: string;
  coverImage: string;
  altText: string;
};

export default PostType;

import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

type PostType = {
  slug: string;
  metadata: MDMetadata;
  body?: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

export type MDMetadata = {
  date: string;
  title: string;
  author: string;
  excerpt?: string;
  videoURL?: string;
  coverImage: string;
  altText: string;
};

export default PostType;

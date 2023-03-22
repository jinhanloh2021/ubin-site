import { readFile, readdir } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';
import PostType, { MDMetadata } from '../interfaces/PostType';

// Used in getStaticProps. Server side.
export const getPost = async (slug: string): Promise<PostType> => {
  const source = await readFile(`content/_posts/${slug}.md`, 'utf8');
  let {
    data: { date, title, author, excerpt, videoURL, coverImage, altText }, //markdown metadata
    content,
  } = matter(source);
  const body = marked(content);
  coverImage = coverImage || 'forest_default_cover.jpg';
  altText = altText || 'rainforest in fog';
  const metadata: MDMetadata = {
    date,
    title,
    author,
    excerpt,
    videoURL,
    coverImage,
    altText,
  };
  return { metadata, body };
};

export const getSlugs = async (): Promise<string[]> => {
  const files = await readdir('content/_posts');
  const suffix = '.md';
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
};

export const getAllPosts = async () => {
  const slugs: string[] = await getSlugs();
  const posts: PostType[] = [];
  for (const slug of slugs) {
    const post: PostType = await getPost(slug);
    posts.push({ slug: slug, ...post });
  }
  return posts;
};

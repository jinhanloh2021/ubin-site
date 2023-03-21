import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';
import PostType from '../../interfaces/PostType';
import CoverImage from '../../components/CoverImage';

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  console.log(post);
  const coverImage = post.metadata.coverImage !== '';
  return (
    <>
      <Head>
        <title>Ubin Kakis</title>
      </Head>
      {coverImage && (
        <CoverImage
          src={post.metadata.coverImage}
          alt={post.metadata.altText}
          height='30'
        />
      )}
      <div>
        <h1>Hello world</h1>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getSlugs(); //loops through posts and get filenames
  console.log('[Slugs]: ', slugs);
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log('[Props]: ', slug);
  const post: PostType = await getPost(slug); //get post object from pathname (filename)
  return {
    props: { post },
  };
}

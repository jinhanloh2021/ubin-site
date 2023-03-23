import Head from 'next/head';
import CoverImage from '../../components/cover-image';
import Navbar from '../../components/navbar';
import PostType from '../../interfaces/PostType';
import { getAllPosts } from '../../lib/posts';
import PostPreview from '../../components/post-preview';

type Props = {
  posts: PostType[];
};

export default function Posts({ posts }: Props) {
  console.log('Posts: ', posts);
  return (
    <>
      <Navbar />
      <Head>
        <title>{`Ubin Kakis - Journal`}</title>
      </Head>
      <main className='min-h-screen'>
        <section id='journal-landing-img' className={`h-[100vh]`}>
          <CoverImage
            src='BoatAtJetty.png'
            height='100vh'
            alt='Boat parked at Pulau Ubin jetty with background of the shore'
          />
          <h1 className='absolute text-center left-0 right-0 m-auto top-[30%] font-script lg:text-9xl md:text-7xl text-5xl text-black/80 select-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            Journal
          </h1>
        </section>
        <section id='post-list'>
          <PostPreview post={posts[0]} />
          <PostPreview post={posts[1]} />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  console.log('[Props]');
  const posts: PostType[] = await getAllPosts(); //get post object from pathname (filename)
  return {
    props: { posts },
  };
}

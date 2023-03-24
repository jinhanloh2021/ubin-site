import Head from 'next/head';
import CoverImage from '../../components/cover-image';
import Navbar from '../../components/navbar';
import PostType from '../../interfaces/PostType';
import { getAllPosts } from '../../lib/posts';
import PostPreview from '../../components/post-preview';
import LandingTitle from '../../components/landing-title';

type Props = {
  posts: PostType[];
};

export default function JournalPage({ posts }: Props) {
  return (
    <>
      <Navbar />
      <Head>
        <title>{`Ubin Kakis - Journal`}</title>
      </Head>
      <main className='min-h-screen'>
        <section id='journal-landing-img' className={`h-[100vh] mb-16`}>
          <CoverImage
            src='BoatAtJetty.png'
            height='100vh'
            alt='Boat parked at Pulau Ubin jetty with background of the shore'
          />
          <LandingTitle>Journal</LandingTitle>
        </section>
        <section id='post-list'>
          {posts.map((post, index) => {
            return <PostPreview post={post} key={index} />;
          })}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts: PostType[] = await getAllPosts(); //get post object from pathname (filename)
  return {
    props: { posts },
  };
}

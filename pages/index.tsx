import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../interfaces/post';
import Image from 'next/image';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <div className='font-display bg-bg_paper'>
      <Layout>
        <Head>
          <title>{`Ubin Kakis`}</title>
        </Head>
        <div
          className={`bg-[url(/assets/Images/${'BicycleRental1.png'})] h-[100vh] bg-cover bg-no-repeat bg-center`}
        >
          <h1 className='absolute text-center left-0 right-0 m-auto top-[30%] font-script lg:text-9xl md:text-7xl text-5xl text-black/80 select-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            Ubin Kakis
          </h1>
        </div>
        {/* <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container> */}
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};

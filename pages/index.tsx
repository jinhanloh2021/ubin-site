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
import AuthorTag from '../components/author-tag';

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
        <div id='About Us'>
          <h3 className='mt-24 mb-8 text-center font-body text-5xl font-semibold'>
            Our Project
          </h3>
          <div className='bg-[url(/assets/Images/UbinKakisLogo.png)] h-[29.5rem] bg-center bg-no-repeat' />
          <div className='flex flex-col justify-center items-center'>
            <p className='my-8 text-center font-body text-2xl leading-9 mx-[30%]'>
              Our goal for this project is to form meaningful connections with
              the communities on Pulau Ubin and share their cultures and kampung
              life with more Singaporeans. We'll be releasing content on a
              regular basis, and we sincerely hope that more Singaporeans will
              come to appreciate the cultural significance of Pulau Ubin.
            </p>
            <AuthorTag
              position='left'
              name={'Ansley'}
              title={'Project Leader'}
            />
          </div>
          <div
            className={`bg-[url(/assets/Images/DouDouandLeLe.png)] h-[60vh] bg-cover bg-no-repeat bg-center my-16`}
          />
        </div>
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

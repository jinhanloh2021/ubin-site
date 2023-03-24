import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PostType from '../interfaces/PostType';
import { getAllPosts } from '../lib/posts';
import useWindowSize from '../hooks/useWindowSize';
import AuthorTag from '../components/author-tag';
import Navbar from '../components/navbar';
import CoverImage from '../components/cover-image';
import PostPreview from '../components/post-preview';
import LandingTitle from '../components/landing-title';

type Props = {
  missionText: string;
  post: PostType;
};

export default function HomePage({ missionText, post }: Props) {
  const router = useRouter();
  const { width, height } = useWindowSize();
  const isMobile = width < 1024;
  return (
    <>
      <Navbar />
      <Head>
        <title>{`Ubin Kakis`}</title>
      </Head>
      <main className='font-display min-h-screen'>
        <section id='Home Landing img'>
          <CoverImage
            src='BicycleRental1.png'
            alt='Image of 45C bicycle rental shop on Pulau Ubin'
            height='100vh'
          />
          <LandingTitle>Ubin Kakis</LandingTitle>
        </section>
        <section
          id='About Us'
          className='lg:mt-24 lg:mb-24 mt-16 mb-16 relative'
        >
          <h3 className='mb-8 text-center font-body text-5xl font-semibold'>
            Our Project
          </h3>
          <Image
            className='lg:h-[30%] lg:w-[30%] h-[80%] w-[80%] m-auto object-fit'
            src='/assets/Images/UbinKakisLogo.png'
            alt='Logo'
            height={1000}
            width={1000}
          />
          <div className='flex flex-col justify-center items-center lg:mb-24 mb-20'>
            <p className='lg:my-8 my-6 text-center font-body lg:text-2xl text-lg lg:leading-9 leading-6 lg:mx-[30%] mx-[10%]'>
              {missionText}
            </p>
            <AuthorTag
              position='left'
              name={'Ansley'}
              title={'Project Leader'}
            />
          </div>
          <CoverImage
            src={'DouDouandLeLe.png'}
            alt='Two dogs dou dou and le le looking in the distance'
            height='60vh'
          />
        </section>
        <section id='journal'>
          <h1
            className={`text-6xl text-offBlack pb-[1.125rem] leading-[3rem] font-medium font-body mx-[20%] border-b border-[#CCCCCC] border-solid`}
          >
            Journal
          </h1>
          <PostPreview post={post}>
            <div className='flex justify-end align-baseline gap-1 p-0 mb-8 -ml-16 hover:underline hover:cursor-pointer font-display'>
              <span
                className='relative top-[1.5px]'
                onClick={() => router.push('/posts')}
              >
                Explore Journal
              </span>
              <Image
                src={'/assets/SVGs/BackIcon.svg'}
                alt='left arrow'
                width={20}
                height={20}
                priority
                className='scale-[-1] translate-y-[3px]'
              />
            </div>
          </PostPreview>
        </section>
        <section id='team'>
          <h1
            className={`text-6xl text-offBlack pb-[1.125rem] leading-[3rem] font-medium font-body mx-[20%] border-b border-[#CCCCCC] border-solid mt-16`}
          >
            Our Team
          </h1>
          <article className='mx-[20%] mt-16 border-b border-[#CCCCCC] border-solid mb-8 font-body last:border-none'>
            <div className='rounded-[1.125rem] overflow-hidden select-none cursor-pointer'>
              <Link href={`/about`}>
                <CoverImage
                  src={'TeamPicHome.png'}
                  alt='Ubin Kakis team smiling at the camera'
                  height='30rem'
                />
              </Link>
            </div>
            <p className='text-xl leading-5 text-bodySecondary my-8'>
              {
                "We are a group of SMU students deeply passionate about culture and community, and we're working with Artsolute to help raise greater awareness and interest in the cultural heritage of Pulau Ubin."
              }
            </p>
            <div className='flex justify-end align-baseline gap-1 p-0 mb-8 -ml-16 hover:underline hover:cursor-pointer font-display'>
              <span
                className='relative top-[1.5px]'
                onClick={() => router.push('/about')}
              >
                Find Out More
              </span>
              <Image
                src={'/assets/SVGs/BackIcon.svg'}
                alt='left arrow'
                width={20}
                height={20}
                priority
                className='scale-[-1] translate-y-[3px]'
              />
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const missionText =
    "Our goal for this project is to form meaningful connections with the communities on Pulau Ubin and share their cultures and kampung life with more Singaporeans. We'll be releasing content on a regular basis, and we sincerely hope that more Singaporeans will come to appreciate the cultural significance of Pulau Ubin.";
  const posts: PostType[] = await getAllPosts();

  return {
    props: { missionText, post: posts[0] },
  };
};

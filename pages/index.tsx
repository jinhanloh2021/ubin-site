import Head from 'next/head';
import AuthorTag from '../components/author-tag';
import Navbar from '../components/navbar';
import PostType, { MDMetadata } from '../interfaces/PostType';
import Image from 'next/image';
import CoverImage from '../components/cover-image';
import PostPreview from '../components/post-preview';
import { getAllPosts, getPost } from '../lib/posts';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
  missionText: string;
  post: PostType;
};

export default function Home({ missionText, post }: Props) {
  const router = useRouter();
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
          <h1 className='absolute text-center left-0 right-0 m-auto top-[30%] font-script lg:text-9xl md:text-7xl text-5xl text-black/80 select-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            Ubin Kakis
          </h1>
        </section>
        <section id='About Us'>
          <h3 className='mt-24 mb-8 text-center font-body text-5xl font-semibold'>
            Our Project
          </h3>
          <div className='bg-[url(/assets/Images/UbinKakisLogo.png)] h-[29.5rem] bg-center bg-no-repeat' />
          <div className='flex flex-col justify-center items-center'>
            <p className='my-8 text-center font-body text-2xl leading-9 mx-[30%]'>
              {missionText}
            </p>
            <AuthorTag
              position='left'
              name={'Ansley'}
              title={'Project Leader'}
            />
          </div>
          <div
            className={`bg-[url(/assets/Images/DouDouAndLeLe.png)] h-[60vh] bg-cover bg-no-repeat bg-center my-16`}
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

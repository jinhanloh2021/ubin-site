import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PostType from '../interfaces/PostType';
import useWindowSize from '../hooks/useWindowSize';
import AuthorTag from '../components/author-tag';
import Navbar from '../components/navbar';
import CoverImage from '../components/cover-image';
import PostPreview from '../components/post-preview';
import LandingTitle from '../components/landing-title';
import CardArrowButton from '../components/card-arrow-button';
import client from '../graphql/apollo-client';
import { GET_HOME_MEDIA, GET_LATEST_POST } from '../graphql/queries';
import _ from 'lodash';

type Props = {
  missionText: string;
  post: PostType;
  imageSources: {
    coverImgSrc: string;
    projectLogoSrc: string;
    sectionDividerSrc: string;
    teamImageSrc: string;
  };
};

export default function HomePage({ missionText, post, imageSources }: Props) {
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
            src={imageSources.coverImgSrc}
            alt='Image of 45C bicycle rental shop on Pulau Ubin'
            height='100vh'
          />
          <LandingTitle>Ubin Kakis</LandingTitle>
        </section>
        <section
          id='About Us'
          className='lg:mt-24 lg:mb-24 mt-16 mb-16 relative'
        >
          <h1 className='mb-8 text-center font-body text-5xl font-semibold'>
            Our Project
          </h1>
          <Image
            className='lg:h-[30%] lg:w-[30%] sm:h-[50%] sm:w-[50%] h-[80%] w-[80%] m-auto object-fit'
            src={imageSources.projectLogoSrc}
            alt='Logo'
            height={1000}
            width={1000}
          />
          <div className='flex flex-col justify-center items-center lg:mb-24 mb-20'>
            <p className='lg:my-8 my-6 text-center font-body lg:text-[1.25rem] text-lg lg:leading-9 leading-6 lg:mx-[30%] mx-[10%]'>
              {missionText}
            </p>
            <AuthorTag
              position='left'
              name={'Ansley'}
              title={'Project Leader'}
            />
          </div>
          <CoverImage
            src={imageSources.sectionDividerSrc}
            alt='Two dogs dou dou and le le looking in the distance'
            height={isMobile ? '30vh' : '60vh'}
          />
        </section>
        <section id='journal'>
          <h1 className='lg:text-6xl text-3xl text-offBlack lg:pb-[1.125rem] pb-[4] leading-[3rem] font-medium font-body xl:mx-[24%] lg:mx-[20%] mx-[8%] border-b border-[#CCCCCC] border-solid'>
            Journal
          </h1>
          <PostPreview post={post}>
            <CardArrowButton url='/journal' direction='right' justify='end'>
              Explore Journal
            </CardArrowButton>
          </PostPreview>
        </section>
        <section id='team'>
          <h1 className='lg:text-6xl text-3xl text-offBlack lg:pb-[1.125rem] pb-[4] leading-[3rem] font-medium font-body xl:mx-[24%] lg:mx-[20%] mx-[8%] border-b border-[#CCCCCC] border-solid lg:mt-24 mt-16'>
            Our Team
          </h1>
          <article className='xl:mx-[24%] lg:mx-[20%] mx-[8%] lg:mt-16 mt-4 border-b border-[#CCCCCC] border-solid mb-8 font-body last:border-none'>
            <div className='lg:rounded-[1.125rem] rounded-[1rem] overflow-hidden select-none cursor-pointer'>
              <Link href={`/team`}>
                <CoverImage
                  src={imageSources.teamImageSrc}
                  alt='Ubin Kakis team smiling at the camera'
                  height='30rem'
                />
              </Link>
            </div>
            <p className='lg:text-xl text-[1.125rem] leading-6 text-bodySecondary my-8'>
              {
                "We are a group of SMU students deeply passionate about culture and community, and we're working with Artsolute to help raise greater awareness and interest in the cultural heritage of Pulau Ubin."
              }
            </p>
            <CardArrowButton url='/team' direction='right' justify='end'>
              Find Out More
            </CardArrowButton>
          </article>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const {
    data: {
      homeMedia: {
        data: {
          attributes: {
            Cover_image: {
              data: {
                attributes: { url: coverImgSrc },
              },
            },
            Project_logo: {
              data: {
                attributes: { url: projectLogoSrc },
              },
            },
            Section_divider: {
              data: {
                attributes: { url: sectionDividerSrc },
              },
            },
            Team_image: {
              data: {
                attributes: { url: teamImageSrc },
              },
            },
            Mission_text,
          },
        },
      },
    },
  } = await client.query({ query: GET_HOME_MEDIA });

  const {
    data: {
      posts: { data: latestPost },
    },
  } = await client.query({ query: GET_LATEST_POST });

  const imageSources = {
    coverImgSrc,
    projectLogoSrc,
    sectionDividerSrc,
    teamImageSrc,
  };

  const post: PostType = {
    slug: _.kebabCase(latestPost[0].attributes.Title),
    metadata: {
      date: latestPost[0].attributes.Date,
      title: latestPost[0].attributes.Title,
      author: latestPost[0].attributes.Author,
      excerpt: latestPost[0].attributes.Excerpt,
      videoURL: latestPost[0].attributes.Video_URL,
      coverImage: latestPost[0].attributes.Cover_image.data.attributes.url,
      altText: '',
    },
    body: null,
  };
  return {
    props: { imageSources, missionText: Mission_text, post },
  };
};

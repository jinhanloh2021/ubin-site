import React from 'react';
import client from '../../graphql/apollo-client';
import { GET_ALL_INSTA, GET_INSTA_COVER_IMG } from '../../graphql/queries';
import { InstagramPost } from '../../interfaces/InstagramPost';
import InstaCard from '../../components/insta-card';
import Navbar from '../../components/navbar';
import Head from 'next/head';
import LandingTitle from '../../components/landing-title';
import CoverImage from '../../components/cover-image';
type Props = {
  instaPosts: InstagramPost[];
  coverImgSrc: string;
};

export default function InstagramPage({ instaPosts, coverImgSrc }: Props) {
  return (
    <>
      <Navbar />
      <Head>
        <title>Ubin Kakis - Instagram</title>
      </Head>
      <section id='journal-landing-img' className={`h-[100vh] mb-16`}>
        <CoverImage
          src={coverImgSrc}
          height='100vh'
          alt='Boat parked at Pulau Ubin jetty with background of the shore'
        />
        <LandingTitle>Instagram</LandingTitle>
      </section>
      <main className='grid grid-cols-3 place-items-center w-[96vw] sm:w-[72vw] lg:w-[54vw] mx-auto gap-x-3 gap-y-1 mb-12'>
        {instaPosts.map((e, i) => (
          <InstaCard url={e.postUrl} src={e.imgUrl} key={i} />
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const {
    data: {
      instaMedia: {
        data: {
          attributes: {
            Cover_img: {
              data: {
                attributes: { url },
              },
            },
          },
        },
      },
    },
  } = await client.query({
    query: GET_INSTA_COVER_IMG,
  });
  const {
    data: {
      instaPosts: { data: instaDataArr },
    },
  } = await client.query({
    query: GET_ALL_INSTA,
  });
  const instaPosts: InstagramPost[] = instaDataArr.map((e: any) => {
    return {
      postUrl: e.attributes.PostURL,
      imgUrl: e.attributes.CoverImage.data.attributes.url,
      date: e.attributes.Date,
    };
  });
  return { props: { instaPosts, coverImgSrc: url } };
}

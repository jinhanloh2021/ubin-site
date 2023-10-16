import React from 'react';
import client from '../../graphql/apollo-client';
import { GET_ALL_INSTA } from '../../graphql/queries';
import { InstagramPost } from '../../interfaces/InstagramPost';
import InstaCard from '../../components/insta-card';
import Navbar from '../../components/navbar';
import Head from 'next/head';
type Props = {
  instaPosts: InstagramPost[];
};

export default function InstagramPage({ instaPosts }: Props) {
  return (
    <>
      <Navbar />
      <Head>
        <title>Ubin Kakis - Instagram</title>
      </Head>
      <main className='grid grid-cols-3 place-items-center w-[90vw] sm:w-[72vw] md:w-[54vw] lg:w-[36vw] mx-auto gap-x-3 gap-y-1 mt-24 mb-12'>
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
  instaPosts.sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    return timeB - timeA;
  });

  return { props: { instaPosts } };
}

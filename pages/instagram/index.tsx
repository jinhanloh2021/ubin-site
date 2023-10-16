import React from 'react';
import client from '../../graphql/apollo-client';
import { GET_ALL_INSTA } from '../../graphql/queries';
import { InstagramPost } from '../../interfaces/InstagramPost';
import InstaCard from '../../components/insta-card';
type Props = {
  instaPosts: InstagramPost[];
};

export default function InstagramPage({ instaPosts }: Props) {
  return (
    <main className='grid grid-cols-3 place-items-center w-[90vw] sm:w-[72vw] md:w-[54vw] lg:w-[36vw] mx-auto gap-y-1 my-8'>
      {instaPosts.map((e, i) => (
        <InstaCard url={e.postUrl} src={e.imgUrl} key={i} />
      ))}
    </main>
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

  return { props: { instaPosts } };
}

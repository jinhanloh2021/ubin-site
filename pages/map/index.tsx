import Head from 'next/head';
import React from 'react';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import client from '../../graphql/apollo-client';
import { GET_MAP_IMG } from '../../graphql/queries';

type Props = {
  mapImgSrc: string;
};

export default function MapPage({ mapImgSrc }: Props) {
  return (
    <>
      <Navbar />
      <Head>
        <title>Ubin Kakis - Map</title>
      </Head>
      <div className='relative' style={{ height: `100vh` }}>
        <Image
          src={`${
            mapImgSrc.startsWith('http')
              ? mapImgSrc
              : `http://localhost:3000/assets/Images/${mapImgSrc}`
          }`}
          alt={'Map'}
          fill
          sizes='100%'
          className='object-contain bg-no-repeat bg-top overflow-hidden select-none'
          priority
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const {
    data: {
      mapMedia: {
        data: {
          attributes: {
            Map_img: {
              data: {
                attributes: { url },
              },
            },
          },
        },
      },
    },
  } = await client.query({
    query: GET_MAP_IMG,
  });
  return {
    props: { mapImgSrc: url },
  };
}

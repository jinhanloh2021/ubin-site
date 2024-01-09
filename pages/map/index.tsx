import React from 'react';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import client from '../../graphql/apollo-client';
import { GET_MAP_IMG } from '../../graphql/queries';
import Head from 'next/head';

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
      <div style={{ height: `100vh` }}>
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
          placeholder='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAP'
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

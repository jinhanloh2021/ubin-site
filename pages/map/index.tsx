import Head from 'next/head';
import React from 'react';
import CoverImage from '../../components/cover-image';
import LandingTitle from '../../components/landing-title';
type Props = {};

export default function MapPage({}: Props) {
  return (
    <>
      <Head>
        <title>Ubin Kakis - Map</title>
      </Head>
      <main id='journal-landing-img' className={`h-[100vh] mb-16`}>
        <CoverImage
          src={''}
          height='100vh'
          alt='Boat parked at Pulau Ubin jetty with background of the shore'
        />
        <LandingTitle>Instagram</LandingTitle>
      </main>
    </>
  );
}

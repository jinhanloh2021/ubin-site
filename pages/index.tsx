import Head from 'next/head';
import Post from '../interfaces/PostType';
import AuthorTag from '../components/author-tag';
import Navbar from '../components/navbar';
import Image from 'next/image';
import CoverImage from '../components/CoverImage';

type Props = {
  missionText: string;
};

export default function Home({ missionText }: Props) {
  return (
    <>
      <Navbar />
      <Head>
        <title>{`Ubin Kakis`}</title>
      </Head>
      <main className='font-display min-h-screen'>
        <section id='Landing img' className={`h-[100vh]`}>
          <CoverImage
            src='BicycleRental1.png'
            alt='Image of 45C bicycle rental shop on Pulau Ubin'
            height='100'
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
        <section id='journal'>{/* {get latest post and render} */}</section>
        <section id='team'>{/* Hardcode team photo and description */}</section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const missionText =
    "Our goal for this project is to form meaningful connections with the communities on Pulau Ubin and share their cultures and kampung life with more Singaporeans. We'll be releasing content on a regular basis, and we sincerely hope that more Singaporeans will come to appreciate the cultural significance of Pulau Ubin.";
  return {
    props: { missionText },
  };
};

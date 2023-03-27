import { AppProps } from 'next/app';
import '../styles/index.scss';
import Footer from '../components/footer';
import { usePreserveScroll } from '../hooks/usePreserveScroll';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  usePreserveScroll();
  return (
    <div className='bg-bg_paper'>
      <Head>
        <link rel='shortcut icon' href='/assets/Images/favicon.png' />
      </Head>
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </div>
  );
}

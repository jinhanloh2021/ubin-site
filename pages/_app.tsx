import { AppProps } from 'next/app';
import '../styles/index.scss';
import Footer from '../components/footer';
import { usePreserveScroll } from '../hooks/usePreserveScroll';
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  usePreserveScroll();
  return (
    <div className='bg-bg_paper'>
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </div>
  );
}

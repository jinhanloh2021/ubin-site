import { AppProps } from 'next/app';
import '../styles/index.scss';
import Footer from '../components/footer';
import { usePreserveScroll } from '../hooks/usePreserveScroll';

export default function MyApp({ Component, pageProps }: AppProps) {
  usePreserveScroll();
  return (
    <div className='bg-bg_paper'>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

import { AppProps } from 'next/app';
import '../styles/index.scss';
import Footer from '../components/footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-bg_paper'>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

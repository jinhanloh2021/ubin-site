import Footer from './footer';
import Navbar from './navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
    </>
  );
};

export default Layout;

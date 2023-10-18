import Link from 'next/link';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className='fixed bg-none top-0 left-0 right-0 flex justify-end align-baseline gap-6 mx-[16%] py-8 z-10'>
      <Link href={'/'}>Home</Link>
      <Link href={'/journal'}>Journal</Link>
      <Link href={'/team'}>Our Team</Link>
      <Link href={'/instagram'}>Instagram</Link>
    </nav>
  );
}

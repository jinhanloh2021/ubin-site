import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
  url: string | 'back';
  direction: 'left' | 'right';
  justify: 'start' | 'end' | 'center';
};

export default function CardArrowButton({
  children,
  url,
  direction,
  justify,
}: Props) {
  const router = useRouter();
  const routeFn: () => void =
    url === 'back' ? () => router.back() : () => router.push(url);

  return (
    <div
      className={`flex ${
        'justify-' + justify
      } align-baseline gap-1 p-0 lg:mb-8 hover:underline hover:cursor-pointer`}
    >
      {direction === 'left' && <Arrow direction='left' />}
      <span
        className='relative font-display top-[1.5px] lg:text-base text-sm'
        onClick={routeFn}
      >
        {children}
      </span>
      {direction === 'right' && <Arrow direction={direction} />}
    </div>
  );
}

type ArrowProps = {
  direction: string;
};

const Arrow = ({ direction }: ArrowProps) => {
  return (
    <Image
      src={'/assets/SVGs/BackIcon.svg'}
      alt={`${direction} arrow`}
      width={20}
      height={20}
      className={`w-[20px] h-[20px] ${
        direction === 'right' ? 'scale-[-1] translate-y-[4px]' : ''
      }`}
    />
  );
};

import Image from 'next/image';
import React from 'react';

type Props = {
  url: string;
  src: string;
};

export default function InstaCard({ url, src }: Props) {
  return (
    <a href={url} target='_blank'>
      <div className='relative h-[32vw] w-[32vw] sm:h-[24vw] sm:w-[24vw] lg:h-[18vw] lg:w-[18vw] hover:brightness-75 transition delay-[10ms] ease-in'>
        <Image
          src={src}
          alt={'Instagram cover for Ubin Kakis'}
          fill
          sizes='100%'
          className='object-cover bg-no-repeat bg-top overflow-hidden'
        />
      </div>
    </a>
  );
}

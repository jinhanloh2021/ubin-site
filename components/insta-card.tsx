import Image from 'next/image';
import React from 'react';

type Props = {
  url: string;
  src: string;
};

export default function InstaCard({ url, src }: Props) {
  return (
    <a href={url}>
      <div className='relative h-[30vw] w-[30vw] sm:h-[24vw] sm:w-[24vw] md:h-[18vw] md:w-[18vw] lg:h-[12vw] lg:w-[12vw]'>
        <Image
          // src={`${
          //   src.startsWith('http')
          //     ? src
          //     : `http://localhost:3000/assets/Images/${src}`
          // }`}
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

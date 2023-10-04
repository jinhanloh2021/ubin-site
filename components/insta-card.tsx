import Image from 'next/image';
import React from 'react';

type Props = {
  url: string;
  src: string;
};

export default function InstaCard({ url, src }: Props) {
  return (
    <a href={url}>
      <div className='relative' style={{ height: `10rem`, width: `10rem` }}>
        <Image
          src={`${
            src.startsWith('http')
              ? src
              : `http://localhost:3000/assets/Images/${src}`
          }`}
          alt={'Instagram cover for Ubin Kakis'}
          fill
          sizes='100%'
          className='object-cover bg-no-repeat bg-top overflow-hidden'
        />
      </div>
    </a>
  );
}

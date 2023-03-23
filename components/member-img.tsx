import React from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt?: string | '';
};

export default function MemberImg({ src, alt }: Props) {
  return (
    <div className='m-auto min-w-[20rem] relative h-96'>
      <Image
        src={`/assets/Images/${src}`}
        alt={alt}
        fill
        className='object-cover bg-no-repeat bg-center overflow-hidden select-none rounded-[1.125rem]'
        priority
      />
    </div>
  );
}

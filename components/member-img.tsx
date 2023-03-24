import React from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt?: string | '';
};

export default function MemberImg({ src, alt }: Props) {
  return (
    // relative m-auto lg:min-w-[20rem] w-[100%] lg:h-96 h-80
    <div className='relative m-auto xl:min-w-[20rem] xl:h-96 md:min-w-[20rem] md:h-96 w-[100%]  h-80'>
      <Image
        src={`/assets/Images/${src}`}
        alt={alt}
        fill
        sizes='100%'
        className=' object-cover bg-no-repeat bg-center overflow-hidden select-none rounded-[1.125rem]'
        priority
      />
    </div>
  );
}

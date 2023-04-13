import Image from 'next/image';
import React from 'react';
import CoverImage from './cover-image';

type Props = {};

export default function Sponsor({}: Props) {
  return (
    <>
      <h3 className='text-center lg:text-6xl text-3xl text-offBlack lg:pb-[1.125rem] pb-2 leading-[3rem] font-medium font-body xl:mx-[24%] lg:mx-[20%] mx-[8%] lg:mt-24 mt-16'>
        Sponsored By
      </h3>
      <div className='flex relative flex-row justify-center align-middle lg:gap-16 gap-6 lg:mb-12 lg:mt-12 mb-8 mt-8 lg:h-24 h-16'>
        <div className='w-10 lg:w-20 relative'>
          <Image
            src='/assets/Images/Tote-Board-logo.png'
            alt=''
            fill
            sizes='100%'
            className='object-contain bg-no-repeat bg-top overflow-hidden select-none'
          />
        </div>
        <div className='w-20 lg:w-40 relative'>
          <Image
            src='/assets/SVGs/Toh-Chin-Chye-Community-Fund-Logo.svg'
            alt=''
            fill
            sizes='100%'
            className='object-contain bg-no-repeat bg-top overflow-hidden select-none'
          />
        </div>
      </div>
      <h3 className='text-center lg:text-6xl text-3xl text-offBlack lg:pb-[1.125rem] pb-2 leading-[3rem] font-medium font-body xl:mx-[24%] lg:mx-[20%] mx-[8%] lg:mt-24 mt-16'>
        Organised By
      </h3>
      <div className='flex relative flex-row justify-center align-middle lg:gap-16 gap-6 lg:mb-12 lg:mt-12 mb-8 mt-8 lg:h-24 h-16'>
        <div className='w-24 lg:w-48 relative'>
          <Image
            src='/assets/Images/C4SR-logo.jpg'
            alt=''
            fill
            sizes='100%'
            className='object-contain bg-no-repeat bg-top overflow-hidden select-none'
          />
        </div>
      </div>
    </>
  );
}

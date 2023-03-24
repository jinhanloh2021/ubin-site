import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function LandingTitle({ children }: Props) {
  return (
    <h1 className='absolute text-center left-0 right-0 m-auto top-[30%] font-script lg:text-9xl md:text-7xl text-[4rem] text-white/80 select-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
      {children}
    </h1>
  );
}

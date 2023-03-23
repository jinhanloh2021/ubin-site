import React from 'react';

type Props = {
  name: string;
  title: string;
  position?: 'left' | 'right' | 'center';
};

export default function AuthorTag({ name, title, position = 'center' }: Props) {
  return (
    <div
      className={`mx-auto flex flex-col font-body w-fit text-center ${
        position === 'left'
          ? 'justify-start lg:text-left'
          : position === 'center'
          ? 'justify-center lg:text-center'
          : 'justify-end lg:text-right'
      }`}
    >
      <h6 className='lg:text-[2rem] text-2xl font-medium'>
        {(position === 'left' || position === 'center') && <Dash />}
        {name}
        {position === 'right' && <Dash />}
      </h6>
      <p className={`lg:text-base text-base text-bodySecondary font-body`}>
        {title}
      </p>
    </div>
  );
}

const Dash = () => {
  return <span className='font-display text-[2rem] font-light'>-</span>;
};

import React from 'react';

type Props = {
  name: String;
  title: String;
  position: 'left' | 'right';
};

export default function AuthorTag({ name, title, position }: Props) {
  const isLeft = position === 'left';
  return (
    <div
      className={`flex flex-col font-body w-fit ${
        isLeft ? 'justify-start text-left' : 'justify-end text-right'
      }`}
    >
      <h6 className='text-[2rem] font-medium'>
        {isLeft && <Dash />}
        {name}
        {!isLeft && <Dash />}
      </h6>
      <p className='text-base text-bodySecondary font-body'>{title}</p>
    </div>
  );
}

const Dash = () => {
  return <span className='font-display text-[2rem] font-light'>-</span>;
};

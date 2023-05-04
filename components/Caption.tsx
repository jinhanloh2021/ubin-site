import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Caption({ children }: Props) {
  if (!children) {
    return <></>;
  }
  return <p className='post__image__caption'>{children}</p>;
}

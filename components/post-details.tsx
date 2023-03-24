import React from 'react';
import moment from 'moment';

type Props = {
  author: string;
  date: string;
};

export default function PostDetails({ author, date }: Props) {
  return (
    <div className='flex flex-row justify-start align-baseline gap-2 lg:mb-8 my-[1rem] text-bodySecondary lg:text-base text-sm font-display'>
      <p>{author}</p>
      <span className='font-display'>-</span>
      <p>{moment(date, 'DD-MM-YY').format('D MMMM YYYY')}</p>
    </div>
  );
}

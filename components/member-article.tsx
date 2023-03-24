import React from 'react';
import { MemberType } from '../interfaces/MemberType';
import AuthorTag from './author-tag';
import MemberImg from './member-img';
import useWindowSize from '../hooks/useWindowSize';

type Props = {
  member: MemberType;
  align: 'left' | 'right';
};

export default function MemberArticle({ member, align }: Props) {
  const { width, height } = useWindowSize();
  const isMobile = width < 1024;
  return (
    <article className='py-8 lg:px-[24%] md:px-[18%] px-[10%] flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 align-middle'>
      {(align === 'left' && !isMobile) || (
        <MemberImg src={member.photo} alt={member.alt} />
      )}
      <div className='flex flex-col justify-center gap-8'>
        <p
          className={`font-body text-base px-3 leading-6 text-center ${
            align === 'left' ? 'lg:text-left' : 'lg:text-right'
          }`}
        >
          {member.statement}
        </p>
        <AuthorTag name={member.name} title={member.position} />
      </div>
      {!(align === 'left') || isMobile || (
        <MemberImg src={member.photo} alt={member.alt} />
      )}
    </article>
  );
}

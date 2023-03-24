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
  const { width } = useWindowSize();
  const isMobile = width < 1280;
  align = isMobile ? 'left' : align;
  return (
    <article className='lg:py-16 py-12 lg:px-[24%] md:px-[18%] px-[10%] flex flex-col xl:flex-row justify-between gap-6 lg:gap-8 align-middle'>
      {(align === 'left' && !isMobile) || (
        <MemberImg src={member.photo} alt={member.alt} />
      )}
      <div className='flex flex-col justify-center gap-8'>
        <p
          className={`font-body lg:text-xl text-lg leading-[1.75rem] px-3 text-center ${
            align === 'left' ? 'lg:text-left' : 'lg:text-right'
          }`}
        >
          {member.statement}
        </p>
        <AuthorTag
          name={member.name}
          title={member.position}
          position={align}
        />
      </div>
      {!(align === 'left') || isMobile || (
        <MemberImg src={member.photo} alt={member.alt} />
      )}
    </article>
  );
}

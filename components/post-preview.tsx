import Image from 'next/image';
import React from 'react';
import CoverImage from './cover-image';
import PostType from '../interfaces/PostType';
import PostDetails from './post-details';
import Link from 'next/link';

type Props = {
  post: PostType;
  children?: React.ReactNode;
};

export default function PostPreview({ post, children }: Props) {
  const slug: string = post.slug ?? '';
  return (
    <article className='xl:mx-[24%] lg:mx-[20%] mx-[8%] lg:mt-16 mt-4 border-b border-[#CCCCCC] border-solid mb-8 font-body last:border-none'>
      <div className='lg:rounded-[1.125rem] rounded-[1rem] overflow-hidden select-none cursor-pointer'>
        <Link href={`/journal/${slug}`}>
          <CoverImage src={post.metadata.coverImage} alt='' height='30rem' />
        </Link>
      </div>
      <Link href={`/journal/${slug}`}>
        <h1 className='inline-block lg:text-6xl text-3xl lg:mt-8 mt-4 lg:mb-3 mb-2 leading-[3rem] font-medium text-offBlack hover:underline cursor-pointer'>
          {post.metadata.title}
        </h1>
      </Link>
      <p className='lg:text-xl text-[1.125rem] line-clamp-2 text-bodySecondary'>
        {post.metadata.excerpt}
      </p>
      <PostDetails author={post.metadata.author} date={post.metadata.date} />
      {children}
    </article>
  );
}

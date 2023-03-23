import Image from 'next/image';
import React from 'react';
import CoverImage from './cover-image';
import PostType from '../interfaces/PostType';
import PostDetails from './post-details';
import Link from 'next/link';

type Props = {
  post: PostType;
  children: React.ReactNode;
};

export default function PostPreview({ post, children }: Props) {
  const slug: string = post.slug ?? '';
  return (
    <article className='mx-[20%] mt-16 border-b border-[#CCCCCC] border-solid mb-8 font-body last:border-none'>
      <div className='rounded-[1.125rem] overflow-hidden select-none cursor-pointer'>
        <Link href={`/posts/${slug}`}>
          <CoverImage src={post.metadata.coverImage} alt='' height='30rem' />
        </Link>
      </div>
      <Link href={`/posts/${slug}`}>
        <h1 className='inline-block text-6xl mt-8 mb-3 leading-[3rem] font-medium text-offBlack hover:underline cursor-pointer'>
          {post.metadata.title}
        </h1>
      </Link>
      <p className='text-xl leading-5 text-bodySecondary'>
        {post.metadata.excerpt}
      </p>
      <PostDetails author={post.metadata.author} date={post.metadata.date} />
      {children}
    </article>
  );
}

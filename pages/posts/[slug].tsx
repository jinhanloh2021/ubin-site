import Head from 'next/head';
import Image from 'next/image';
import { getPost, getSlugs } from '../../lib/posts';
import PostType from '../../interfaces/PostType';
import CoverImage from '../../components/cover-image';
import styles from './markdown-styles.module.scss';
import { useRouter } from 'next/router';
import PostDetails from '../../components/post-details';
import { useEffect } from 'react';
import CardArrowButton from '../../components/card-arrow-button';

type Props = {
  post: PostType;
};

export default function Post({ post: { slug, metadata, body } }: Props) {
  const router = useRouter();
  useEffect(() => {
    router.beforePopState((state) => {
      state.options.scroll = false;
      return true;
    });
  }, []);
  console.log('Slug: ', slug);
  console.log('Metadata: ', metadata);
  return (
    <>
      <Head>
        <title>Ubin Kakis</title>
      </Head>
      {!metadata.coverImage || (
        <CoverImage
          src={metadata.coverImage}
          alt={metadata.altText}
          height='30vh'
        />
      )}
      <div className='px-[25%] pt-12 bg-bg_paper text-left font-body'>
        <CardArrowButton url='back' direction='left' justify='start'>
          Go Back
        </CardArrowButton>
        <h1 className='text-6xl text-offBlack mb-0 leading-[3rem] font-medium'>
          {metadata.title}
        </h1>
        <PostDetails author={metadata.author} date={metadata.date} />
        <article
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getSlugs(); //loops through posts and get filenames
  console.log('[Slugs]: ', slugs);
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log('[Props]: ', slug);
  const post: PostType = await getPost(slug); //get post object from pathname (filename)
  return {
    props: { post },
  };
}

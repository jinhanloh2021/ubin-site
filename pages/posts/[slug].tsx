import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';
import PostType from '../../interfaces/PostType';
import CoverImage from '../../components/CoverImage';
import styles from './markdown-styles.module.scss';
import moment from 'moment';

type Props = {
  post: PostType;
};

export default function Post({ post: { slug, metadata, body } }: Props) {
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
          height='30'
        />
      )}
      <div className='px-[25%] pt-24 bg-bg_paper text-left'>
        <h1 className='text-6xl mb-0 leading-[3rem] font-body font-medium'>
          {metadata.title}
        </h1>
        <div className='flex flex-row justify-start align-baseline gap-2 mb-8 mt-[1.125rem] font-body text-bodySecondary text-lg'>
          <p className=''>{metadata.author}</p>
          <span className='font-display'>-</span>
          <p className=''>
            {moment(metadata.date, 'DD-MM-YY').format('D MMMM YYYY')}
          </p>
        </div>
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

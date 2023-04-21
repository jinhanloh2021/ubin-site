import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';
import PostType from '../../interfaces/PostType';
import CoverImage from '../../components/cover-image';
import styles from './markdown-styles.module.scss';
import PostDetails from '../../components/post-details';
import CardArrowButton from '../../components/card-arrow-button';
import { addImageCaptions } from '../../lib/utils';

type Props = {
  post: PostType;
};

export default function Journal({ post: { slug, metadata, body } }: Props) {
  const captionedBody = addImageCaptions(body);
  return (
    <>
      <Head>
        <title>{`Journal - ${slug}`}</title>
      </Head>
      {!metadata.coverImage || (
        <CoverImage
          src={metadata.coverImage}
          alt={metadata.altText}
          height='30vh'
        />
      )}
      <div className='lg:px-[24%] px-[8%] lg:pt-12 pt-8 bg-bg_paper text-left font-body'>
        <CardArrowButton url='back' direction='left' justify='start'>
          Go Back
        </CardArrowButton>
        <h1 className='lg:text-6xl text-3xl mt-4 text-offBlack mb-0 leading-[3rem] font-medium'>
          {metadata.title}
        </h1>
        <PostDetails author={metadata.author} date={metadata.date} />
        {metadata.videoURL && (
          <iframe
            className='w-full md:h-[50vh] sm:h-[40vh] h-[30vh] lg:my-8 my-4 mx-auto'
            src={metadata.videoURL}
            title='YouTube video player'
            allow='clipboard-write; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        )}

        <article
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: captionedBody }}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getSlugs(); //loops through posts and get filenames
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post: PostType = await getPost(slug); //get post object from pathname (filename)
  return {
    props: { post },
  };
}

import Head from 'next/head';
import PostType from '../../interfaces/PostType';
import CoverImage from '../../components/cover-image';
import styles from './markdown-styles.module.scss';
import PostDetails from '../../components/post-details';
import CardArrowButton from '../../components/card-arrow-button';
import { GET_ALL_POSTS_TITLE, GET_POST_BY_TITLE } from '../../graphql/queries';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Caption from '../../components/Caption';
import client from '../../graphql/apollo-client';
import _ from 'lodash';
import GetAllTitleRes from '../../interfaces/GetAllTitleRes';

type Props = {
  post: PostType;
};

const components = { Caption };
export default function Journal({ post: { metadata, body } }: Props) {
  return (
    <>
      <Head>
        <title>{`Journal - ${metadata.title}`}</title>
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
        <article className={styles.markdown}>
          <MDXRemote {...body} components={components} />
        </article>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const {
    data: {
      posts: { data: DataArr },
    },
  } = await client.query({
    query: GET_ALL_POSTS_TITLE,
  });
  const slugArr: string[] = DataArr.map((e) => _.kebabCase(e.attributes.Title));
  return {
    paths: slugArr.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const {
    data: {
      posts: { data: postData },
    },
  } = await client.query<GetAllTitleRes>({
    query: GET_ALL_POSTS_TITLE,
  });

  const title = postData.find((e) => _.kebabCase(e.attributes.Title) === slug)
    .attributes.Title;

  const resPost = (
    await client.query({
      query: GET_POST_BY_TITLE(title),
    })
  ).data.posts.data[0].attributes;

  const content = await serialize(resPost.Content); // Parse and compile MDX string
  const post: PostType = {
    slug: slug,
    metadata: {
      date: resPost.Date,
      title: title,
      author: resPost.Author,
      videoURL: resPost.Video_URL,
      coverImage: resPost.Cover_image.data.attributes.url,
      altText: resPost.Cover_image.data.attributes.alternativeText,
    },
    body: content,
  };
  return {
    props: { post },
  };
}

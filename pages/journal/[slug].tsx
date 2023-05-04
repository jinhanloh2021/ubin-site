import Head from 'next/head';
import PostType from '../../interfaces/PostType';
import CoverImage from '../../components/cover-image';
import styles from './markdown-styles.module.scss';
import PostDetails from '../../components/post-details';
import CardArrowButton from '../../components/card-arrow-button';
import { addImageCaptions } from '../../lib/utils';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_POSTS_TITLE, GET_POST_BY_TITLE } from '../../graphql/queries';

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
  const client = new ApolloClient({
    uri: process.env.STRAPI_PULIC_API_URL || 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const {
    data: {
      posts: { data: DataArr },
    },
  } = await client.query({
    query: GET_ALL_POSTS_TITLE,
  });
  const slugArr: string[] = DataArr.map((e) =>
    e.attributes.Title.toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  );
  return {
    paths: slugArr.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

interface QueryResponseType {
  posts: {
    data: Array<{
      attributes: {
        Title: string;
      };
    }>;
  };
}

export async function getStaticProps({ params: { slug } }) {
  const client = new ApolloClient({
    uri: process.env.STRAPI_PULIC_API_URL || 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const {
    data: {
      posts: { data: postData },
    },
  } = await client.query<QueryResponseType>({
    query: GET_ALL_POSTS_TITLE,
  });

  const title = postData.find(
    (e) =>
      e.attributes.Title.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '') === slug
  ).attributes.Title;

  const resPost = (
    await client.query({
      query: GET_POST_BY_TITLE(title),
    })
  ).data.posts.data[0].attributes;

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
    body: resPost.Content,
  };
  // console.log(post);
  return {
    props: { post },
  };
}

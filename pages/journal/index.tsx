import Head from 'next/head';
import CoverImage from '../../components/cover-image';
import Navbar from '../../components/navbar';
import PostType from '../../interfaces/PostType';
import PostPreview from '../../components/post-preview';
import LandingTitle from '../../components/landing-title';
import { GET_ALL_POSTS, GET_JOURNAL_COVER_IMG } from '../../graphql/queries';
import client from '../../graphql/apollo-client';
import _ from 'lodash';

type Props = {
  posts: PostType[];
  coverImgSrc: string;
};

export default function JournalPage({ posts, coverImgSrc }: Props) {
  return (
    <>
      <Navbar />
      <Head>
        <title>{`Ubin Kakis - Journal`}</title>
      </Head>
      <main className='min-h-screen'>
        <section id='journal-landing-img' className={`h-[100vh] mb-16`}>
          <CoverImage
            src={coverImgSrc}
            height='100vh'
            alt='Boat parked at Pulau Ubin jetty with background of the shore'
          />
          <LandingTitle>Journal</LandingTitle>
        </section>
        <section id='post-list'>
          {posts.map((post, index) => {
            return <PostPreview post={post} key={index} />;
          })}
        </section>
      </main>
    </>
  );
}

// todo: Pagination for post page. Current just show all posts
export async function getStaticProps() {
  const {
    data: {
      journalMedia: {
        data: {
          attributes: {
            Cover_img: {
              data: {
                attributes: { url },
              },
            },
          },
        },
      },
    },
  } = await client.query({
    query: GET_JOURNAL_COVER_IMG,
  });

  const {
    data: {
      posts: { data: PostDataArr },
    },
  } = await client.query({
    query: GET_ALL_POSTS,
  });

  const posts: PostType[] = PostDataArr.map((p) => {
    return {
      slug: _.kebabCase(p.attributes.Title),
      metadata: {
        date: p.attributes.Date,
        title: p.attributes.Title,
        author: p.attributes.Author,
        excerpt: p.attributes.Excerpt,
        videoURL: p.attributes.Video_URL,
        coverImage: p.attributes.Cover_image.data.attributes.url,
        altText: '',
      },
      body: '',
    };
  });
  return {
    props: { posts, coverImgSrc: url },
  };
}

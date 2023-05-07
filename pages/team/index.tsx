import React from 'react';
import Navbar from '../../components/navbar';
import Head from 'next/head';
import CoverImage from '../../components/cover-image';
import TeamName from '../../components/team-name';
import { team } from '../../lib/constants';
import { MemberType } from '../../interfaces/MemberType';
import MemberArticle from '../../components/member-article';
import LandingTitle from '../../components/landing-title';
import { GET_ALL_MEMBERS, GET_TEAM_COVER_IMG } from '../../graphql/queries';
import client from '../../graphql/apollo-client';

type Props = {
  memberList: MemberType[];
  coverImgSrc: string;
};

export default function TeamPage({ memberList, coverImgSrc }: Props) {
  return (
    <>
      <Navbar />
      <Head>
        <title>{`Ubin Kakis - Team`}</title>
      </Head>
      <main className='min-h-screen'>
        <section id='journal-landing-img' className={`h-[100vh]`}>
          <CoverImage
            src={coverImgSrc}
            height='100vh'
            alt='Boat parked at Pulau Ubin jetty with background of the shore'
          />
          <LandingTitle>Our Team</LandingTitle>
        </section>
        <section id={team[0]} className='mt-8'>
          <TeamName>{`${team[0]}`}</TeamName>
          <MemberArticle member={memberList[0]} align='right' />
        </section>
        <section id={team[1]} className='mt-8'>
          <TeamName>{`${team[1]} Team`}</TeamName>
          <MemberArticle member={memberList[1]} align='left' />
          <MemberArticle member={memberList[2]} align='right' />
          <MemberArticle member={memberList[3]} align='left' />
          <MemberArticle member={memberList[4]} align='right' />
        </section>
        <section id={team[2]} className='mt-8'>
          <TeamName>{`${team[2]} Team`}</TeamName>
          <MemberArticle member={memberList[5]} align='left' />
          <MemberArticle member={memberList[6]} align='right' />
          <MemberArticle member={memberList[7]} align='left' />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const {
    data: {
      teamMedia: {
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
    query: GET_TEAM_COVER_IMG,
  });
  const {
    data: {
      members: { data },
    },
  } = await client.query({
    query: GET_ALL_MEMBERS,
  });

  const memberList: MemberType[] = data.map((e) => {
    return {
      name: e.attributes.Name,
      position: e.attributes.Position,
      team: e.attributes.Team,
      photo: e.attributes.Profile_img.data.attributes.url,
      statement: e.attributes.Personal_statement,
      alt: '',
    };
  });
  return { props: { memberList, coverImgSrc: url } };
}

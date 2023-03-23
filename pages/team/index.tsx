import React from 'react';
import Navbar from '../../components/navbar';
import Head from 'next/head';
import CoverImage from '../../components/cover-image';
import TeamName from '../../components/team-name';
import Image from 'next/image';
import MemberImg from '../../components/member-img';
import AuthorTag from '../../components/author-tag';
import { members, team } from '../../lib/constants';
import { MemberType } from '../../interfaces/MemberType';
import MemberArticle from '../../components/member-article';
import LandingTitle from '../../components/landing-title';

type Props = {
  memberList: MemberType[];
};

export default function TeamPage({ memberList }: Props) {
  const renderOrder = team.flatMap((t) =>
    memberList
      .filter((m) => m.team === t)
      .map((m, i) => ({
        member: m,
        align: i % 2 === 0 ? 'left' : 'right',
      }))
  );
  return (
    <>
      <Navbar />
      <Head>
        <title>{`Ubin Kakis - Team`}</title>
      </Head>
      <main className='min-h-screen'>
        <section id='journal-landing-img' className={`h-[100vh]`}>
          <CoverImage
            src='TaxiStandGroupPhoto.png'
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
        </section>
        <section id={team[2]} className='mt-8'>
          <TeamName>{`${team[2]} Team`}</TeamName>
          <MemberArticle member={memberList[3]} align='left' />
          <MemberArticle member={memberList[4]} align='right' />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const memberList: MemberType[] = members;
  return { props: { memberList } };
}

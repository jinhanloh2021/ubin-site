import { MemberType } from '../interfaces/MemberType';

export const EXAMPLE_PATH = 'blog-starter';
export const CMS_NAME = 'Markdown';
export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg';

export const members: MemberType[] = [
  {
    name: 'Ansley',
    position: 'Project Leader',
    team: 'Committee',
    photo: 'ansley.png',
    statement:
      'I truly hope that more people will understand the cultural significance that Ubin holds because of the residents themselves. I want this project to be able to help visitors make greater meaning of their experiences on the island, one that is beyond a simple cycling destination or a place to get away from the city!',
    alt: '',
  },
  {
    name: 'Adele',
    position: 'Audio Engineer',
    team: 'Interview',
    photo: 'adele.png',
    statement:
      'I hope to form meaningful relationships with the residents and getting to know their stories.',
    alt: '',
  },
  {
    name: 'Jin',
    position: 'Interviewer',
    team: 'Interview',
    photo: 'jin-wei.png',
    statement:
      'Get a glimpse of what it takes to create human-interest type of content that is both heart warming and enjoyable for viewers to watch!',
    alt: '',
  },
  {
    name: 'Jia Yee',
    position: 'Video Editor',
    team: 'Interview',
    photo: 'jia-yee.png',
    statement:
      "I hope to bring more attention to Pulau Ubin and share Ubin's story. In addition, I hope that when the visitors come to Pulau Ubin, they are not just there to go cycling, camping, hiking, etc , but also to listen to Ubin's story and connect with Ubin's residents.",
    alt: '',
  },
  {
    name: 'Andy',
    position: 'Videographer',
    team: 'Interview',
    photo: 'andy.png',
    statement:
      'Through visual storytelling, my aim is to share the stories of the island and its residents with the rest of the world, shedding light on the beauty and value of Pulau Ubin that deserves to be preserved and celebrated.',
    alt: '',
  },
  {
    name: 'Victoria',
    position: 'Graphic Designer',
    team: 'Socials',
    photo: 'victoria.png',
    statement:
      'Spread the word about the secrets of Pulau Ubin and encourage more people to spend more time outside the city and appreciate our last few real kampungs.',
    alt: 'Victoria sitting on a bum boat posing for the camera',
  },
];

export const team: string[] = ['Committee', 'Interview', 'Socials'];

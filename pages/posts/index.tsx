import Navbar from '../../components/navbar';

type Props = {};

export default function Posts({}: Props) {
  return (
    <>
      <Navbar />
      {/* Render preview of all posts. Might need pagination. */}
      <div>This page will show all my posts</div>
    </>
  );
}

type Props = {
  children: React.ReactNode;
};

export default function TeamName({ children }: Props) {
  return (
    <h2 className='lg:mx-[20%] lg:text-[3rem] font-script text-5xl text-center py-3 border-b border-[#CCCCCC] mx-8'>
      {children}
    </h2>
  );
}

import Image from 'next/image';

type Props = {
  src: string;
  height: string;
  alt: string;
};

const CoverImage = ({ src, height, alt }: Props) => {
  return (
    <div className='relative' style={{ height: `${height}` }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes='100%'
        className='object-cover bg-no-repeat bg-top overflow-hidden select-none'
        priority
      />
    </div>
  );
};

export default CoverImage;

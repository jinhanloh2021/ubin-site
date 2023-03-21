import Image from 'next/image';

type Props = {
  src: string;
  height: string; //in vh
  alt: string;
};

const CoverImage = ({ src, height, alt }: Props) => {
  return (
    <div
      className={`overflow-hidden relative`}
      style={{ height: `${height}vh` }} //workaround for dynamic classname issue
    >
      <Image
        src={`/assets/Images/${src}`}
        alt={alt}
        fill
        style={{
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
        }}
      />
    </div>
  );
};

export default CoverImage;

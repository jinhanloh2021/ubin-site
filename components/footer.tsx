import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='border-t border-[#CCCCCC] min-h-fit lg:mx-[16%] md:mx-[8%] mx-0 bg-bg_paper'>
      <div className='mx-auto container'>
        <h4 className='text-base text-center my-8 font-semibold'>Contact Us</h4>
        <div className='flex flex-row justify-center align-middle gap-16 lg:mb-12 mb-8'>
          <a href='https://www.instagram.com/ubinkakis/'>
            <Image
              priority
              src={'/assets/SVGs/instagram.svg'}
              alt='envelope'
              width={32}
              height={32}
            />
          </a>
          <a href='https://www.facebook.com'>
            <Image
              priority
              src={'/assets/SVGs/facebook.svg'}
              alt='envelope'
              width={32}
              height={32}
            />
          </a>
          <a href='https://www.linkedin.com'>
            <Image
              priority
              src={'/assets/SVGs/linkedin.svg'}
              alt='envelope'
              width={32}
              height={32}
            />
          </a>
          <a href='https://smu.edu.sg'>
            <Image
              priority
              src={'/assets/SVGs/email.svg'}
              alt='envelope'
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
      <p className='font-display font-normal lg:text-sm text-xs text-right lg:pb-4 pb-2 mr-4 text-bodySecondary'>
        ©2023 Ubin Kakis
      </p>
    </footer>
  );
};

export default Footer;

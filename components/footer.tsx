import Image from 'next/image';
import TelegramForm from './telegram-form';
import Sponsor from './sponsor';

export default function Footer() {
  return (
    <footer className='border-t border-[#CCCCCC] min-h-fit lg:mx-[16%] md:mx-[8%] mx-0 bg-bg_paper'>
      <div className='mx-auto container'>
        <h3 className='text-center lg:text-6xl text-3xl text-offBlack lg:pb-[1.125rem] pb-2 leading-[3rem] font-medium font-body xl:mx-[24%] lg:mx-[20%] mx-[8%] lg:mt-24 mt-16'>
          Contact Us
        </h3>
        <h4 className='text-base text-center mt-4 mb-8 lg:text-lg md:mx-auto xl:max-w-[30vw] lg:max-w-[40vw] md:max-w-[50vw] mx-[8%]'>
          Have a question, feedback or story to share? Get in touch with us
          below.
        </h4>
        <TelegramForm />
      </div>
      <Sponsor />
      <SocialsIcons />
      <p className='font-display font-normal lg:text-sm text-xs text-right lg:pb-4 pb-2 mr-4 text-bodySecondary'>
        ©2023 Ubin Kakis
      </p>
    </footer>
  );
}

const SocialsIcons = () => {
  return (
    <div className='flex flex-row justify-center align-middle lg:gap-16 gap-10 lg:mb-12 lg:mt-16 mb-8 mt-12'>
      <a href='https://www.instagram.com/ubinkakis/'>
        <Image
          src={'/assets/SVGs/instagram.svg'}
          alt='envelope'
          width={32}
          height={32}
        />
      </a>
      <a href='https://www.youtube.com'>
        <Image
          src={'/assets/SVGs/youtube.svg'}
          alt='envelope'
          width={32}
          height={32}
        />
      </a>
      <a href='mailto:smuprojectubinkakis@gmail.com'>
        <Image
          src={'/assets/SVGs/email.svg'}
          alt='envelope'
          width={32}
          height={32}
        />
      </a>
    </div>
  );
};

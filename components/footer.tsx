const Footer = () => {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200'>
      <div className='mx-auto px-5 container'>
        <h4 className='text-base text-center my-4 font-semibold'>Contact Us</h4>
        <div className='flex flex-row justify-center align-middle'>
          <a href='/' className=''>
            Read Documentation
          </a>
          <a href='/' className=''>
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

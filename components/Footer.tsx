import Image from 'next/image'
import Logo from '@/assets/logosaas.png'
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedIn from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'

const Footer = () => {
  return (
    <footer className='px-5 md:px-11 lg:px-20 py-10 bg-black text-[#bcbcbc] text-sm text-center'>
      <div className='inline-flex relative before:content-[""] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd98,#c2f0b1,#2fd8fe)] before:absolute'>
        <Image
          src={Logo}
          alt='Saas Logo'
          height={40}
          width={40}
          className='relative'
        />
      </div>
      <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
        <a href='#'>About</a>
        <a href='#'>Features</a>
        <a href='#'>Customers</a>
        <a href='#'>Pricing</a>
        <a href='#'>Help</a>
        <a href='#'>Careers</a>
      </nav>
      <div className='flex justify-center gap-6 mt-6'>
        <SocialX />
        <SocialInsta />
        <SocialLinkedIn />
        <SocialPin />
        <SocialYoutube />
      </div>
      <p className='mt-6'>
        &copy; 2024 Your Company, Inc. All rights reserved.
      </p>
    </footer>
  )
}
export default Footer
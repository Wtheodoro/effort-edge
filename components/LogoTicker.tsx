import Image from 'next/image'
import acmeLogo from '@/assets/logo-acme.png'
import apexLogo from '@/assets/logo-apex.png'
import celestialLogo from '@/assets/logo-celestial.png'
import echoLogo from '@/assets/logo-quantum.png'
import pulseLogo from '@/assets/logo-pulse.png'
import quantumLogo from '@/assets/logo-quantum.png'

function LogoTicker() {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='flex justify-center items-center'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <div className='flex gap-14 flex-none'>
            <Image
              src={acmeLogo}
              alt='acme logo'
              className='logo-ticker-image'
            />
            <Image
              src={apexLogo}
              alt='apex logo'
              className='logo-ticker-image'
            />
            <Image
              src={celestialLogo}
              alt='celestial logo'
              className='logo-ticker-image'
            />
            <Image
              src={echoLogo}
              alt='echo logo'
              className='logo-ticker-image'
            />
            <Image
              src={pulseLogo}
              alt='pulse logo'
              className='logo-ticker-image'
            />
            <Image
              src={quantumLogo}
              alt='quantum logo'
              className='logo-ticker-image'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoTicker
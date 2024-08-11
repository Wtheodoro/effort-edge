'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'
import acmeLogo from '@/assets/logo-acme.png'
import apexLogo from '@/assets/logo-apex.png'
import celestialLogo from '@/assets/logo-celestial.png'
import echoLogo from '@/assets/logo-echo.png'
import pulseLogo from '@/assets/logo-pulse.png'
import quantumLogo from '@/assets/logo-quantum.png'

const logosImages = [
  {
    src: acmeLogo,
    alt: 'acme logo',
    className: 'logo-ticker-image',
  },
  {
    src: apexLogo,
    alt: 'apex logo',
    className: 'logo-ticker-image',
  },
  {
    src: celestialLogo,
    alt: 'celestial logo',
    className: 'logo-ticker-image',
  },
  {
    src: echoLogo,
    alt: 'echo logo',
    className: 'logo-ticker-image',
  },
  {
    src: pulseLogo,
    alt: 'acme logo',
    className: 'logo-ticker-image',
  },
  {
    src: quantumLogo,
    alt: 'acme logo',
    className: 'logo-ticker-image',
  },
]

function LogoTicker() {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='flex justify-center items-center'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div
            className='flex gap-14 flex-none pr-14'
            animate={{ translateX: '-50%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {[...logosImages, ...logosImages].map(
              ({ alt, className, src }, index) => (
                <Image
                  key={`${alt}-${index}`}
                  src={src}
                  alt={alt}
                  className={className}
                />
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoTicker

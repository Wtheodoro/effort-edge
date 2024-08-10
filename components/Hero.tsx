'use client'

import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'
import ArrowRight from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.svg?url'
import cylinderImage from '@/assets/cylinder.svg?url'
import noodleImage from '@/assets/noodle.svg?url'
import { useRef } from 'react'

const Hero = () => {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  // to debug scroll event and see on consloe log
  // useMotionValueEvent(scrollYProgress, 'change', (latestValue) =>
  //   console.log(latestValue)
  // )
  return (
    <section
      ref={heroRef}
      className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_80%)] overflow-x-clip'
    >
      <div className='container'>
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className='tag'>Version 2.0 is here</div>

            <h1 className='text-5xl md:text-7xl font-bold tracking-tighter text-gradient mt-6'>
              Pathway to productivity
            </h1>

            <p className='text-xl text-[#010d3e] tracking-tighter mt-6'>
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>

            <div className='flex gap-1 items-center mt-[30px]'>
              <button className='btn'>Get for free</button>
              <button className='btn btn-text gap-1'>
                <span>Learn more</span>
                <ArrowRight className='h-5 w-5' />
              </button>
            </div>
          </div>

          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 md:relative'>
            <motion.img
              className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6'
              src={cogImage.src}
              alt='cog image'
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 4,
                ease: 'easeInOut',
              }}
            />

            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt='cylinder image'
              className='hidden md:block md:-top-8 md:-left-32 md:absolute'
              style={{
                translateY: translateY,
              }}
            />

            <motion.img
              src={noodleImage.src}
              width={220}
              alt='noodle image'
              className='hidden lg:block lg:absolute lg:top-[524px] lg:left-[448px]'
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

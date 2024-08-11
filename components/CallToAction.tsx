'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import ArrowRight from '@/assets/arrow-right.svg'
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import { useRef } from 'react'

const CallToAction = () => {
  const callToActionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: callToActionRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section className='bg-gradient-to-b from-[#ffffff] to-[#d2dcff] overflow-x-clip pt-56 pb-36'>
      <div className='container flex flex-col items-center'>
        <div className='max-w-[600px] relative'>
          <h2 className='section-title'>Sign up for free today</h2>
          <p className='section-description mt-5'>
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt='star image'
            width={360}
            className='absolute -left-[350px] -top-[137px]'
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt='spring image'
            width={360}
            className='absolute -right-[331px] -top-[19px]'
            style={{
              translateY,
            }}
          />
        </div>
        <div className='mt-10 flex gap-2 justify-center'>
          <button className='btn btn-primary'>Get for free</button>
          <button className='btn btn-text'>
            <span>Get for free</span>
            <ArrowRight className='h-5 w-5' />
          </button>
        </div>
      </div>
    </section>
  )
}
export default CallToAction

'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'
import pyramidImage from '@/assets/pyramid.svg?url'
import productImage from '@/assets/productImage.svg?url'
import torusImage from '@/assets/torus.svg?url'
import { useRef } from 'react'

const ProductShowcase = () => {
  const productShowcaseRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: productShowcaseRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={productShowcaseRef}
      className='bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip'
    >
      <div className='container'>
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className='section-title mt-6'>
            A more effective way to track progress
          </h2>
          <p className='section-description mt-5'>
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>

        <div className='relative'>
          <Image src={productImage} alt='Product image' className='mt-10' />
          <motion.img
            src={pyramidImage.src}
            alt='Pyramid image'
            width={262}
            height={262}
            className='hidden md:block md:absolute md:-right-36 md:-top-32 lg:top-20'
            style={{
              translateY,
            }}
          />
          <motion.img
            src={torusImage.src}
            alt='Torus image'
            width={248}
            height={248}
            className='hidden md:block md:absolute bottom-24 -left-36'
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  )
}
export default ProductShowcase

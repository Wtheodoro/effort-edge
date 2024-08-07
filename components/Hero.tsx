import Image from 'next/image'
import ArrowRight from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.svg?url'
import cylinderImage from '@/assets/cylinder.svg?url'
import noodleImage from '@/assets/noodle.svg?url'

const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_80%)] overflow-x-clip'>
      <div className='p-5 md:p-11 lg:p-20'>
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
            <Image
              src={cogImage}
              alt='cog image'
              className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6'
            />

            <Image
              src={cylinderImage}
              width={220}
              height={220}
              alt='cylinder image'
              className='hidden md:block md:-top-8 md:-left-32 md:absolute'
            />

            <Image
              src={noodleImage}
              width={220}
              alt='noodle image'
              className='hidden lg:block lg:absolute lg:top-[524px] lg:left-[448px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

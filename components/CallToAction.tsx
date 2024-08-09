import Image from 'next/image'
import ArrowRight from '@/assets/arrow-right.svg'
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'

const CallToAction = () => {
  return (
    <section className='px-5 md:px-11 lg:px-20 py-36 bg-gradient-to-b from-[#ffffff] to-[#d2dcff] flex flex-col items-center overflow-x-clip'>
      <div className='max-w-[600px] relative'>
        <h2 className='section-title'>Sign up for free today</h2>
        <p className='section-description mt-5'>
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <Image
          src={starImage}
          alt='star image'
          width={360}
          className='absolute -left-[350px] -top-[137px]'
        />
        <Image
          src={springImage}
          alt='spring image'
          width={360}
          className='absolute -right-[331px] -top-[19px]'
        />
      </div>
      <div className='mt-10 flex gap-2 justify-center'>
        <button className='btn btn-primary'>Get for free</button>
        <button className='btn btn-text'>
          <span>Get for free</span>
          <ArrowRight className='h-5 w-5' />
        </button>
      </div>
    </section>
  )
}
export default CallToAction

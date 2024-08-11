'use client'

import { motion } from 'framer-motion'

import CheckIcon from '@/assets/check.svg'
import { twMerge } from 'tailwind-merge'

const pricingTiers = [
  {
    title: 'Free',
    monthlyPrice: 0,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Sign up now',
    popular: true,
    inverse: true,
    features: [
      'Up to 50 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support',
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 19,
    buttonText: 'Sign up now',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features',
    ],
  },
]

const Pricing = () => {
  return (
    <section className='bg-white py-24'>
      <div className='container'>
        <h2 className='section-title'>
          A more effective way to track progress
        </h2>
        <p className='section-description mt-5'>
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>

        <div className='flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 items-center mt-10'>
          {pricingTiers.map(
            ({
              title,
              buttonText,
              features,
              inverse,
              monthlyPrice,
              popular,
            }) => (
              <div
                key={title}
                className={twMerge(
                  'card',
                  !!inverse && 'border-black bg-black text-white'
                )}
              >
                <div className='flex justify-between'>
                  <h3
                    className={twMerge(
                      'text-lg font-bold text-black/50',
                      !!inverse && 'text-white/60'
                    )}
                  >
                    {title}
                  </h3>
                  {!!popular && (
                    <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                      <motion.span
                        animate={{ backgroundPositionX: '100%' }}
                        transition={{
                          repeat: Infinity,
                          ease: 'linear',
                          repeatType: 'loop',
                          duration: 2,
                        }}
                        className='
                          bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)]
                          [background-size:200%]
                          text-transparent bg-clip-text font-medium'
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className='flex items-baseline gap-1 mt-[30px]'>
                  <span className='text-4xl font-bold tracking-tighter leading-none'>
                    ${monthlyPrice}
                  </span>
                  <span className='tracking-tight font-bold text-black/50'>
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    'btn btn-primary w-full mt-[30px]',
                    !!inverse && 'bg-white text-black'
                  )}
                >
                  {buttonText}
                </button>
                <ul className='flex flex-col gap-5 mt-8'>
                  {features.map((feature) => (
                    <li
                      key={`${title}-${feature}`}
                      className='text-sm flex items-center gap-4'
                    >
                      <CheckIcon className='h-6 w-6' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
export default Pricing

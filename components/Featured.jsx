'use client'
import Image from 'next/image'
import featuredImg from "/public/featured/icon.svg"
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const Featured = () => {
  return (
    <motion.section 
    variants={fadeIn('up', 0.2)}
    initial='hidden' 
    whileInView={'show'}
    viewport={{once:false, amount:0.2}}
    className='bg-soft_green-secondary xl:h-[240px] max-w-[1305px] ml-auto xl:-top-[120px relative rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[60px]'>
      <div className='flex flex-col xl:flex-row items-center h-full gap-x-[30px] text-center xl:text-left'>
        <h2 className='h2 flex-1 text-soft_green leading-relaxed'>
        Experience Luxury and Comfort Like Never Before
        </h2>
        <p className='flex-1 text-soft_green leading-loose'>
        Whether you're traveling for business or pleasure, our comprehensive array of amenities and services ensure a seamless and unforgettable experience. From impeccable concierge services to cutting-edge event spaces, BookMyStay sets the stage for success and celebration.
        </p>
      </div>
    </motion.section>
  )
}

export default Featured
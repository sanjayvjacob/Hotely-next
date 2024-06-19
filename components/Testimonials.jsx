'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import reviewImg1 from "/public/testimonials/img-1.png"
import reviewImg2 from "/public/testimonials/img-2.png"

const testimonialData = [
  {
    img: reviewImg1,
    message: '"I had an amazing experience with BookMyStay. Their customer service team was prompt and very helpful. They resolved my issue within minutes, and I couldnt be happier with the service I received."',
    personName: 'Kaley Ronnin',
    location: 'England',
  },
  {
    img: reviewImg2,
    message: '"BookMyStay went above and beyond to ensure I was satisfied with my purchase. Their support team was friendly and knowledgeable. Highly recommend!"',
    personName: 'Emily James',
    location: 'Ireland',
  },
]

const Testimonials = () => {
  return (
    <motion.section
    variants={fadeIn('up',0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0}} 
    className='bg-soft_green xl:h-[880px]'>
      <motion.div 
      variants={fadeIn('up',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      className="container mx-auto">
      <Swiper 
     modules={[Pagination]} 
     pagination={{clickable:true}}
     className='xl:h-[680px] overflow-hidden'
     >
      {testimonialData.map((slide,index)=>{
        return <SwiperSlide key={index}>
          <div className='grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24'>
            <Image 
            src={slide.img}
            width={470}
            height={470}
            quality={100}
            alt=''
            className='hidden xl:flex rounded-lg'
            />
            <div className="flex-1 bg-white/20 text-white p-12 rounded-lg">
              <p className="text-lg leading-9 mb-8">{slide.message}</p>
              <p className="text-xl font-bold ">{slide.personName}</p>
              <p>{slide.location}</p>
            </div>
          </div>
        </SwiperSlide>
      })}
    
    </Swiper>
      </motion.div>

    </motion.section>
  )
}

export default Testimonials
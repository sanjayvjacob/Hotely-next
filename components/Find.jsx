'use client'
import Image from "next/image"
import hotelImg1 from '/public/find/hotel-1.png'
import hotelImg2 from '/public/find/hotel-2.png'
import hotelImg3 from '/public/find/hotel-3.png'
import hotelImg4 from '/public/find/hotel-4.png'
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const hotelData = [
  {
    image: hotelImg1,
    name: 'Hotel De Luna',
    location: 'Paris',
  },
  {
    image: hotelImg2,
    name: 'Ina Tretes Hotel',
    location: 'Tokyo',
  },
  {
    image: hotelImg3,
    name: 'Delight Hotel',
    location: 'London',
  },
  {
    image: hotelImg4,
    name: 'Mercusuar Hotel',
    location: 'Cairo',
  },
]
const Find = () => {
  return (
    <section className="py-12 xl:py-36">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.h2 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{once: false, amount: 0.2}}
          className="h2 mb-6">Find your best hotel</motion.h2>
          <motion.p 
          variants={fadeIn('up',0.4)}
          initial='hidden'
          whileInView='show'
          viewport={{once: false, amount: 0.2}}
          className="max-w-[638px] mx-auto mb-8">Unwind and rejuvenate in style at our state-of-the-art wellness facilities, where holistic treatments and personalized services cater to your every need. From invigorating spa therapies to revitalizing fitness sessions, BookMyStay offers a sanctuary for mind, body, and soul.</motion.p>
          <motion.div 
            variants={fadeIn('up',0.6)}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount: 0}}>
            <Button variant='accent' className='px-12 mb-14 xl:mb-28'>View All</Button>
          </motion.div>
        </div>
        <motion.div
        variants={fadeIn('up',0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.2}} 
        className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]">
          {hotelData.map((hotel, index)=>{
            return (
              <div 
              className="border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0"
              key={index}>
                <Image
                src={hotel.image}
                width={270}
                height={270}
                alt=""/>
                <div className="p-6">
                  <h4 className="h4 group-hover:text-white transition-all duration-300">
                    {hotel.name}
                  </h4>
                  <p className="group-hover:text-white transition-all duration-300">
                    {hotel.location}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Find
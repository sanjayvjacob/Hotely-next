'use client'
import Image from "next/image"
import Stats from "./Stats"
import aboutImage from "/public/about/img2.png"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import { useMediaQuery } from "react-responsive"

const About = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  })

  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : null,
  })
  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:false, amount:0.4}}
          className="flex-1 relative">
            <Image 
            src= {aboutImage}
            width={559}
            height={721}
            alt=""/>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:false, amount:0.4}} 
          className="xl:max-w-[470px]">
            <h2 className="h2 mb-[38px] mt-2 text-[#85c5dc]">About</h2>
            <p>At BookMyStay, we redefine the essence of opulence, offering an unparalleled fusion of sophistication and warmth. Nestled amidst breathtaking landscapes and iconic city scapes, our collection of exquisite accommodations promises an unforgettable retreat for every traveler.</p>
            <div className="my-5 xl:my-10 min-h-[35px]">

              {inView && <Stats/>}
            </div>
            <p className="mb-10">Step into a world of refined elegance as you explore our meticulously curated selection of rooms and suites, each designed to indulge your senses and elevate your stay. Whether you seek a tranquil oasis for relaxation or a vibrant hub for exploration, BookMyStay has the perfect sanctuary tailored to your desires.</p>
            <Button variant='accent'>Explore More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
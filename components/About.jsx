'use client'
import Image from "next/image"
import Stats from "./Stats"
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
            src={'/about/img2.png'}
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
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus rerum ipsum nulla repudiandae expedita veniam rem? Sequi recusandae aut molestias a nostrum corporis, est, molestiae possimus, animi dicta accusamus.</p>
            <div className="my-5 xl:my-10 min-h-[35px]">

              {inView && <Stats/>}
            </div>
            <p className="mb-10">lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempore perferendis reiciendis accusantium nesciunt quas totam quam nam a dignissimos!</p>
            <Button variant='accent'>Explore More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
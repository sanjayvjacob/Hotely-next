'use client'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { MapPin } from 'lucide-react'

import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

import DatePicker from './DatePicker'
import GuestSelect from './GuestSelect'

const SearchBox = () => {
  return (
    <motion.div 
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount:0}}
    className='w-full max-w-[488px] bg-[#dec59c] max-h-max flex flex-col border border-[#917c5f] rounded-[20px] p-10 mb-20'>
      <div className='mb-[20px]'>
        <Label htmlFor='destination'>
Where are you going?
        </Label>
        <div className='relative flex items-center mb-[20px]'>
          <Input id='destination' placeholder='try "Maldives"'/>
          <MapPin size={24} className='absolute right-6 text-black'/>
        </div>
        <div className='flex flex-col xl:flex-row gap-x-[30px] gap-y-5 xl:gap-y-0'>
        <div className='flex flex-col flex-1'>
          <Label>Check in</Label>
          <DatePicker/>
        </div>
        <div className='flex flex-col flex-1'>
          <Label>Check out</Label>
          <DatePicker/>
        </div>
      </div>
    </div>

    <div className='flex flex-col'>
      <div className='flex flex-col flex-1 mb-[24px]'>
        <Label>Guests</Label>
        <GuestSelect/>
      </div>
      <div className='flex items-center gap-x-3 mb-[24px]'>
        <Checkbox id="terms"/>
        <Label htmlFor='terms' className='font-semibold mb-0'>Pay when checking in?</Label>
      </div>
      <Button size='lg' className="bg-[#d99d6f] text-white">Search Hotel</Button>
    </div>
    </motion.div>
  )
}

export default SearchBox
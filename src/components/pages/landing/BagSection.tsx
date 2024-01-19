import React from 'react'


import Image from 'next/image'
import LandingBag from '../../../assets/pages/landing/landing-bag.svg'
import { Button } from '@/components/ui/button'


export default function BagSection() {
  return (
    <section className='flex flex-col min-h-[80vh] justify-evenly'>
    <div className='flex flex-col items-center'>
    <h1 className='text-4xl font-black md:text-6xl'>Badgepacc</h1>
    <h3 className='text-xl font-semibold md:text-3xl'>Your badge.Your pacc.</h3>
    </div>

    <div className='max-w-md m-auto '>
    <Image src={LandingBag} alt='A bag with badges' 
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"      
    />
    </div>

    <div className='flex flex-col items-center gap-4 max-sm:justify-between md:flex-row md:justify-center'>
      <Button className='w-full md:p-6 md:max-w-md'>Collect Badges</Button>
      <Button variant='outline' className='w-full md:p-6 md:max-w-md'>Explore More</Button>

    </div>
    </section>
    )
}

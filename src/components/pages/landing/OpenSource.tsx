import React from 'react'
import Image from 'next/image'

import OpenSourceBox from '../../../assets/pages/landing/opensource.svg'

import { Button } from '@/components/ui/button'

export default function OpenSource() {
  return (
    <section className='flex flex-col items-center min-h-screen py-8 sm:flex-row sm:gap-8 justify-evenly'>
    <div className='flex flex-col items-center gap-4 text-center'>
    <h1 className='text-2xl font-black md:text-4xl'>Are you an open source project?</h1>
    <h3 className='text-xl font-semibold md:text-2xl'>Give badgepacc a spin and make every contributor feel special</h3>
    <Button>
        Contact Us
    </Button>
    </div>

   <div>
         <Image src={OpenSourceBox} alt='A bag pouring down badges' 
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 43vw"      
    />
    </div>
    </section>
 )
}

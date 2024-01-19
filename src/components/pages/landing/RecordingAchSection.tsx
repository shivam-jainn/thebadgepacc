import React from 'react'
import Image from 'next/image'

import BagOfBadges from '../../../assets/pages/landing/BagOfBadges.svg'


export default function RecordingAchSection() {
  return (
    <section className='flex flex-col items-center min-h-screen py-8 sm:flex-row sm:gap-8 justify-evenly'>
    <div className='flex flex-col items-center gap-4 text-center'>
    <h1 className='text-2xl font-black md:text-4xl'>Recording achievement can be hard</h1>
    <h3 className='text-xl font-semibold md:text-2xl'>Badgepacc helps you in collecting & recording your achievements and memories right at one place</h3>
    </div>

   <div>
         <Image src={BagOfBadges} alt='A bag with badges' 
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 43vw"      
    />
    </div>
    </section>
  )
}

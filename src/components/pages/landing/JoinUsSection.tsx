import React from 'react'
import Image from 'next/image'

import GlobeFlight from '../../../assets/pages/landing/globeflight.svg'

export default function JoinUsSection() {
  return (
    <section className='flex flex-col items-center min-h-screen py-8 sm:flex-row sm:gap-8 justify-evenly'>
    <div className='flex flex-col items-center gap-4 text-center'>
    <h1 className='text-2xl font-black md:text-4xl'>Join over 500+ Clubs 
and communities across
the globe and get packin</h1>
    </div>

   <div>
         <Image src={GlobeFlight} alt='A bag pouring down badges' 
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 43vw"      
    />
    </div>

    </section>
  )
}

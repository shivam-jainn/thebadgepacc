import React from 'react'
import Image from 'next/image'

import ShowOff from '../../../assets/pages/landing/ShowOff.svg'

export default function ShowOffSection() {
  return (
    <section className='flex flex-col items-center min-h-screen py-8 sm:flex-row sm:gap-8 justify-evenly'>
    <div className='flex flex-col items-center gap-4 text-center'>
    <h1 className='text-2xl font-black md:text-4xl'>Show off your badges on </h1>
    <h3 className='text-xl font-semibold md:text-2xl'>We will help you display your achievement on social media and help you get noticed</h3>
    </div>

   <div>
         <Image src={ShowOff} alt='A bag pouring down badges' 
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 43vw"      
    />
    </div>
    </section>
  )
}

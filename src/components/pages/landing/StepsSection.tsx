import React from 'react'
import Image from 'next/image'
import Step1 from '../../../assets/pages/landing/Step1.svg'

export default function StepsSection() {
  return (
    <section className='flex flex-col items-center min-h-screen py-8 sm:flex-row sm:gap-8 justify-evenly'>
    <div className='flex flex-col items-center gap-4 text-center'>
    <h1 className='text-2xl font-black md:text-4xl'>Badgepacc makes it easier in 3 steps</h1>
    </div>

   <div className='flex flex-col gap-8'>
        <div className='flex items-center gap-8'>
            <div>
            <Image src={Step1} alt='A bag with badges' 
                         sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 43vw"      
             />
            </div>
            <div className='text-xl font-semibold md:font-bold'>
            Complete tasks
            </div>
        </div>

        <div className='flex items-center gap-8'>
        <div>
            <Image src={Step1} alt='A bag with badges' 
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 43vw"      
            />
            </div>
            <div className='text-xl font-semibold md:font-bold'>
            Badge issuance takes place
            </div>
        </div>

        <div className='flex items-center gap-8'>
        <div>
            <Image src={Step1} alt='A bag with badges' 
                         sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 43vw"      
             />
            </div>
            <div className='text-xl font-semibold md:font-bold'>
            Claim badge and share your achievements
            </div>
        </div>
    </div>
    </section>
      )
}

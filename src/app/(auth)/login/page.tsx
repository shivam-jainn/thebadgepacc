import React from 'react'
import Image from 'next/image';
import BagOfBadges from '../../../assets/pages/landing/BagOfBadges.svg'
import AuthCard from '@/components/auth/AuthCard';
import NavbarLanding from '@/components/navbar/NavbarLanding';
export default function page() {
  return (
    <section className='px-8'>
        <NavbarLanding className='mx-0' />

        <div className='flex flex-col items-center justify-center gap-16 md:flex-row md:px-8'>
        <div className='max-md:hidden'>
            <Image src={BagOfBadges} alt='A bag with badges' />
        </div>

            <div className='max-w-md'>
    <AuthCard signup={true} />
    </div>
        </div>
    </section>
  )
}

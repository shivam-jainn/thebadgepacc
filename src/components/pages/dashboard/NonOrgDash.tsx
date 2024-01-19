import React from 'react'
import Image from 'next/image'

import { Card } from '@/components/ui/card'

import BagOfBadges from '../../../assets/pages/landing/BagOfBadges.svg'

export default function NonOrgDash() {
    const organisationName = "badgepacc";
    const badgeName = "Bag Badge";
    const badgeDesc = "A badge to show love for eco custome... lorem loremloremloremloremloremloremloremlorem"

  return (
    <section >
   
        <h4 className='text-2xl font-semibold'>
            Recent
        </h4>

        <div>
            <Card className='max-w-sm flex p-2  gap-4'>
                <Card className='max-w-[50%] '>
                    <Image src={BagOfBadges} alt='a bag with badges' />
                </Card>
                <div className='flex flex-col items-center max-w-[50%] mx-auto text-pretty'>
                    <span>@ <b>{organisationName}</b></span>
                    <span><b>{badgeName}</b></span>
                    <p className='text-wrap whitespace-normal'>{badgeDesc}</p>


                </div>
            </Card>
        </div>

    </section>
  )
}

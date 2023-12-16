"use client";
import React from 'react'
import {Card } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Skeleton } from '@nextui-org/skeleton';

export default function page() {
  return (
    <>


       <Card className='max-w-sm m-auto mb-4 border-2 border-gray-300 border-solid' >
      
      {/* <Skeleton> */}
        <img
        src="/FIRSTBADGE.png"
        alt='First badge'
        className='w-full'
        />
      {/* </Skeleton> */}

    {/* <Skeleton> */}
      <Button radius='sm'>Claim</Button>
    {/* </Skeleton> */}

</Card>

    </>
  )
}

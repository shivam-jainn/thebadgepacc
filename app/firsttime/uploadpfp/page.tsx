"use client";
import React from 'react'
import {Card } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Avatar } from '@nextui-org/avatar';
import { Skeleton } from '@nextui-org/skeleton';

export default function page() {
  return (
    <>


       <Card className='max-w-sm gap-4 p-2 px-2 m-auto mb-4 border-2 border-gray-300 border-solid' >
      
        <div className='flex flex-row items-center h-full gap-4'>

<div>
       <Avatar isBordered className='w-20 h-20' radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
</div>


      <div className='flex flex-col w-full gap-2'>
      <Skeleton className='w-3/5'>
        <div>
          lorem ipsum
        </div>
      </Skeleton>
      <Skeleton>
        <div>
          lorem ipsum
        </div>
      </Skeleton>
      </div>
        </div>




  </Card>

  <Card className='max-w-sm gap-4 p-2 px-2 m-auto mt-4 border-2 border-gray-300 border-solid' >

  <Button fullWidth>
       <h4 className=" text-large">Change PFP</h4>
        </Button> 

      <Button fullWidth>
       <h4 className=" text-large">Finalize</h4>
        </Button> 
</Card>

    </>
  )
}

import React from 'react'
import {Card, CardBody, CardHeader } from '@nextui-org/card'
import { Button } from '@nextui-org/button'

export default function page() {
  return (
    <>
     <Card className='max-w-sm m-auto border-2 border-gray-300 border-solid' >
      
        <img
          alt="Card background"
          className="object-cover w-full rounded-t-lg"
          src="/Firsttime-step-1.png"
          width={270}
        />
      <CardHeader className="flex-col items-start ">
       <Button fullWidth>
       <h4 className="font-bold text-large">Let's set up your account</h4>
        </Button> 
      </CardHeader>

    </Card>
    </>
    )
}

"use client";
import React from 'react'
import {Card, CardBody, CardHeader } from '@nextui-org/card'
import { Input,Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button'


export default function page() {
  return (
    <>
       <Card className='max-w-sm gap-4 p-2 m-auto border-2 border-gray-300 border-solid' >

       <Input type="text" label="Username" placeholder="Enter your Username" isRequired />
       <Textarea  label="Bio" placeholder="Tell more about yourself" isRequired />


      <Button fullWidth>
       <h4 className=" text-large">Continue</h4>
        </Button> 

  </Card>
    </>
  )
}

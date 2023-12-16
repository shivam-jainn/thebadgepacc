"use client";
import React from 'react'
import {Card, CardBody, CardHeader } from '@nextui-org/card'
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import { Button } from '@nextui-org/button'


let options = [
  {label:"Yes",value:"true",key:"true"},
  {label:"No",value:"false",key:"false"},

]

export default function page() {
  return (
    <>
       <Card className='max-w-sm gap-4 p-2 m-auto border-2 border-gray-300 border-solid' >
      <Select isRequired label='Are you an organisation?'>
   {
    options.map((option)=>(

        <SelectItem key={option.key} value={option.value}>
            {option.label}
        </SelectItem>
    ))
   }
      </Select>


      <Button fullWidth>
       <h4 className=" text-large">Continue</h4>
        </Button> 

  </Card>
    </>
  )
}

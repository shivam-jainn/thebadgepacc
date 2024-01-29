"use client";
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation';
import { IoCloudUpload } from "react-icons/io5";
import InputCard from './InputCard';
import { IoClose } from "react-icons/io5";

export default function AddBadge({modal}:{modal?:boolean}) {

  const router = useRouter();

  const handleNextClick = () => {
    console.log("Badge added");

  }


  return (
      <Card className={`w-full m-2 max-md:max-w-[360px] md:max-w-md ${modal?"absolute z-10 top-[35%] left-[35%] backdrop-blur-3xl backdrop-brightness-50	":""} `}>
        <CardHeader className='flex flex-row items-center justify-between'>
          <div className='flex flex-col gap-3'>
          <CardTitle>
            <input type="badgename" id="badgename" placeholder="Enter Badge Name" className=' border-none outline-none' />
          </CardTitle>
          <CardDescription>
            <input type="badgedesc" id="badgedesc" placeholder="Enter Badge Description" className=' border-none outline-none' />
          </CardDescription>
          </div>

          <div>
            <Button variant='ghost' size='icon' onClick={()=>{router.push('/')}}>
              <IoClose />
            </Button>
          </div>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>

          <InputCard />

          <Button onClick={handleNextClick}>Continue </Button>
        </CardContent>
      </Card>
  )
}

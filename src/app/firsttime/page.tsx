"use client";
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import FirstTime from '@/assets/pages/firsttime/Firsttime-step-1.png'
import { useRouter } from 'next/navigation';



export default function Page() {
const router = useRouter();

const handleNextClick = ()=> {
  router.push('/firsttime/step1');
}

  return (
    <section className='h-[100vh] flex justify-center items-center'>
      <Card className='max-w-md '>
        <CardHeader>
          <CardTitle>
            Welcome to Badgepacc
          </CardTitle>
          <CardDescription>
            Let&#39;s set up your acount
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <Image src={FirstTime} alt='First Time Image' />
          <Button onClick={handleNextClick}>Continue </Button>
        </CardContent>
      </Card>
    </section>
  )
}

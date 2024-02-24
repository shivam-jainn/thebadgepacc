"use client";
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import FirstTime from '@/assets/pages/firsttime/Firsttime-step-1.png'
import { useRouter } from 'next/navigation'
import { useAtomValue } from 'jotai';
import usernameAtom from '@/atoms/Firstime/usernameAtom';

export default function page() {
    const router = useRouter();
    const username = useAtomValue(usernameAtom);
const handleNextClick = ()=> {
    router.push(`/${username}`)    
}

  return (
    <section className='h-[100vh] flex justify-center items-center'>
    <Card className='max-w-md'>
    <CardHeader>
                        <CardTitle>
                    Your account has been set up
                </CardTitle>
                    <CardDescription>
                    Let's claim your first badge !
                </CardDescription>
            </CardHeader>

            <CardContent className='flex flex-col gap-4'>

        <Image src={FirstTime} alt='first time img' className='rounded-md' />
       <Button onClick={handleNextClick}>Claim ! </Button>
            </CardContent>
   </Card>
</section>
  )
}

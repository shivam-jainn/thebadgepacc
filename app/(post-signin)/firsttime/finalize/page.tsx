"use client";
import React from 'react'
import {Card } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Skeleton } from '@nextui-org/skeleton';
import { useRouter } from 'next/navigation';
import { getToken } from 'next-auth/jwt';
import { useAtomValue } from 'jotai';
import useridAtom from "@/atoms/Firstime/useridAtom"
import usernameAtom from '@/atoms/Firstime/usernameAtom';

export default function Page() {
  const router = useRouter();
  const user_id = useAtomValue(useridAtom)
  const user_name = useAtomValue(usernameAtom)
  const handleContinueClick = async () => {
    try {

      const response = await fetch('/api/token/issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: user_id, badge_id:"clqc3e1aa0000i51a87irek6c" }),
      });

      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      router.push('/firsttime/username-bio')

    } catch (error) {
      console.error('Error:', error);
    }
  };


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
      <Button radius='sm' onClick={()=> router.push(`/shivamjainn`)}>Claim</Button>
    {/* </Skeleton> */}

</Card>

    </>
  )
}

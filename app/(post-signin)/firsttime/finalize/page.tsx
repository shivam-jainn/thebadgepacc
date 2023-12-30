"use client";
import React from 'react'
import {Card } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Page() {
  const router = useRouter();
  const {data : session,status} = useSession();

  const handleContinueClick = async () => {
    try {
      // console.log(session.user);
      
      const username = session.user.username;
      // console.log(username);
      
      const response = await fetch('/api/token/issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, badge_id:"clqs8tg7a0000iibfxwbch88j" }),
      });

      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // console.log(response);
      
      router.push(`/${session.user.username}`);
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
      <Button radius='sm' onClick={handleContinueClick}>Claim</Button>
    {/* </Skeleton> */}

</Card>

    </>
  )
}

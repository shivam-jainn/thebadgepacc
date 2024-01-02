"use client";
import React from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '@nextui-org/button'
import { IconBrandGoogleFilled,IconBrandDiscordFilled,IconBrandGithubFilled } from '@tabler/icons-react';
import { Logo } from '@/components/icons';

interface SigninCardProps {
  title: string;
}


export default function Signincard({title}:SigninCardProps) {
  return (
    <div className='flex'>
        <div className='max-w-[600px] rounded-l-lg border-y-1 border-l-1 border-white max-md:hidden'>
                <img src="/signinPageSide.png" alt="Sign In page" />
        </div>
        <div className='max-w-[600px]  bg-black md:p-8 w-full flex flex-col justify-between md:py-16 align-center rounded-r-lg border-y-1 border-r-1 border-white max-md:border-1 max-md:rounded-lg max-md:gap-3 max-md:p-8 '>
            
            <div className='flex flex-col items-center mx-auto'>
                <div >

            <Logo />
                </div>
            <h1 className='text-xl font-bold '>{title}</h1>   
            </div>
            <Button className='p-2 text-black bg-slate-100' variant='flat' onClick={() => signIn("google")} radius='sm' size='lg' startContent={<IconBrandGoogleFilled/>} >Google</Button>
            <Button className='p-2 text-black bg-slate-100' variant='flat' onClick={() => signIn("discord")} radius='sm' size='lg' startContent={<IconBrandDiscordFilled/>} >Discord</Button>
            <Button className='p-2 text-black bg-slate-100' variant='flat' onClick={() => signIn("github")} radius='sm' size='lg' startContent={<IconBrandGithubFilled/>} >Github</Button>
        </div>
    </div>
  )
}

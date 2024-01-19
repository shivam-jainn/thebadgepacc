"use client";
import React from 'react';

// Logos
import { FaGoogle,FaDiscord } from "react-icons/fa";
import {IoLogoGithub} from "react-icons/io";

// nextauth
import { signIn } from 'next-auth/react';

// primitives
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from '@/components/ui/button';
  
export default function AuthCard({signup}:{signup:boolean}) {
  return (
    <Card className='shadow-sm'>
        <CardHeader>
            <CardTitle className=' mx-auto'>
                {signup?"Welcome to Badgepacc":"Welcome back to base :)"}
            </CardTitle>
            <CardDescription className='mx-auto'>
            {signup?"Create your account right now and claim your first badge":"Whoop whoop . Sign in and claim your achievements !"}
            </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col justify-between items-center gap-4 '>
            
            {/* buttons */}
            <Button className='gap-3 p-2 '  size='lg' onClick={()=>signIn("google")}>
            <FaGoogle size={24} />
              Sign {signup?"Up":"In"} With Google
            </Button>
            <Button className='gap-3 p-2 '  size='lg' onClick={()=>signIn("discord")}>
            <FaDiscord size={24} />
              Sign {signup?"Up":"In"} With Discord
            </Button>
            <Button className='gap-3 p-2 '  size='lg' onClick={()=>signIn("github")}>
              <IoLogoGithub size={24}/>
              Sign {signup?"Up":"In"} With Github
            </Button>

            <CardFooter className={`${signup?"block":"hidden"} text-[12px] `}>
            By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings.
            </CardFooter>
        </CardContent>
    </Card>
  );
}

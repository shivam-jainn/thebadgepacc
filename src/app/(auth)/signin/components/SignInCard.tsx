import React from 'react';
import { Button } from '@/components/ui/button';

// Logos
import { FaGoogle,FaDiscord } from "react-icons/fa";
import {IoLogoGithub} from "react-icons/io";

export default function SignInCard({signup}:{signup:boolean}) {
  return (
    <div className='flex w-[80%] m-auto max-md:flex-col max-md:absolute max-md:top-[20%]   '>
      <div className='flex-1 rounded-l-lg'>
        <img src='/signinPageSide.png' className='hidden md:block' />
      </div>
      <div className='flex-1'>
        <div className='flex flex-col h-full px-2 bg-[#1a1919] rounded-lg md:rounded-r-lg shadow-sm justify-evenly  max-md:gap-4 max-md:p-8'>
         <div className='gap-2 max-md:gap-4 '>
          <h3 className='text-2xl font-bold'>Sign {signup?"Up":"In"} with Badgepacc</h3>
          <p>Sign {signup?"Up":"In"} with your {signup?"fave":""} social account and get collectin'</p>
          </div>
          <div className='flex flex-col gap-2 max-md:gap-4'>
          <Button className='gap-3 p-2 text-black bg-white hover:bg-white/80 ' variant='secondary' size='lg'>
            <FaGoogle size={24} />
              Sign {signup?"Up":"In"} With Google
            </Button>
            <Button className='gap-3 p-2 text-black bg-white hover:bg-white/80 ' variant='secondary' size='lg'>
            <FaDiscord size={24} />
              Sign {signup?"Up":"In"} With Discord
            </Button>
            <Button className='gap-3 p-2 text-black bg-white hover:bg-white/80' variant='secondary' size='lg'>
              <IoLogoGithub size={24}/>
              Sign {signup?"Up":"In"} With Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

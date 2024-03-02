"use client";
import React,{useState} from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import HamClosed from '@/assets/navbar/HamburgerClosed.svg';
import {  useRouter } from 'next/navigation';


interface Navbarprops{
  isDark?:boolean
}

export default function NavbarLanding({isDark}:Navbarprops) {
  const [hamOpen, setHamOpen] = useState(false);
  
  const router = useRouter();

  const handleOpen = (prev:any) => {
    console.log(prev.value);
    setHamOpen(!prev);
  };

  const HomeClick = (()=>{
    router.push('/');
  })

  const PricingClick = (()=>{
    router.push('/pricing');
  })

  const SigninClick = (()=>{
    router.push('/login');
  })

  const SignupClick = (()=>{
    router.push('/login');
  })

  return (
    <>
      <div className={` flex justify-evenly items-center gap-4 max-md:hidden ${isDark?"bg-black":""} `}>
        <Button variant='link' className='text-white' onClick={HomeClick}>
          Home
        </Button>
        <Button variant='link' className='text-white' onClick={PricingClick}>
          Pricing
        </Button>

        <Button variant='secondary' onClick={SigninClick} >
          Sign In
        </Button>
        <Button className='border-white border-2 bg-transparent hover:bg-white hover:text-black' onClick={SignupClick} >
          Sign Up
        </Button>
      </div>

      <div className='md:hidden'>
      <Sheet>
      <SheetTrigger asChild>
      <Button variant='ghost' onClick={() => handleOpen(hamOpen)} className='hover:bg-transparent'>
          <Image
            src={HamClosed}
            alt='Hamburger Menu Icon'
          />
        </Button>
      </SheetTrigger>
      <SheetContent className='p-8'>
      <div  className='px-2 border-b-2'>
         Home
        </div>
      </SheetContent>
    </Sheet>

      </div>
    </>
  )
}

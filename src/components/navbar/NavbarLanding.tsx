"use client";
import React, { useState } from 'react';

// primitive
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

// image
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import HamClosed from '@/assets/navbar/HamburgerClosed.svg';
import HamCross from '@/assets/navbar/HamCross.svg';

export default function NavbarLanding() {
  const [hamOpen, setHamOpen] = useState(false);

  const handleOpen = (prev) => {
    console.log(prev.value);
    setHamOpen(!prev);
  };

  return (
    <nav className='bg-[#1E1C1C] flex justify-between items-center p-4 rounded-md mx-4 my-4'>
      <div>
        <Image src={Logo} alt='Badgepacc logo' />
      </div>

      <div className='hidden md:block'>
        <Button variant='link' className='text-white'>
          Home
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
    </nav>
  );
}

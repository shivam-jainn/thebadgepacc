"use client";
import React, { useState,useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import { Avatar } from '@nextui-org/avatar';
import { Logo } from '@/components/icons'; 
import { Dropdown,DropdownItem,DropdownMenu,DropdownTrigger } from '@nextui-org/dropdown';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Skeleton } from '@nextui-org/skeleton';
export default function Layout({ children}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/api/auth/signin');
    }
  }, [status, router]);

  console.log(status);
  
  
    return (
    <>

  <Navbar maxWidth='full' isBordered>
  <NavbarBrand className='gap-4'>
    <Logo /> 
      <p className='font-bold text-inherit'>Badgepacc</p>
  </NavbarBrand>


  {
  status=='loading'?<Skeleton>
    <Avatar
       isBordered
       as="button"
       className="transition-transform"
       color="secondary"
       size="sm"
  />
  </Skeleton>: 
  <NavbarContent as="div" justify="end">
  <Dropdown placement="bottom-end">
    <DropdownTrigger>
      <Avatar
        isBordered
        as="button"
        className="transition-transform"
        color="secondary"
        name={session.user.name}
        size="sm"
        src={session.user.image}
      />
    </DropdownTrigger>
    <DropdownMenu aria-label="Profile Actions" variant="flat">
      <DropdownItem key="settings">
          <Link href="/settings">
          Settings
          </Link>
          </DropdownItem>
      <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
      <DropdownItem key="logout" color="danger" onClick={()=>signOut({callbackUrl:"/"})}>
        Log Out
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</NavbarContent>
}
</Navbar>
     
{
  status=='loading'?"":
      <main className="container flex-grow px-6 pt-4 mx-auto max-w-7xl">
        {children}
      </main>
}
    </>
  );
}

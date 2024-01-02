"use client";
import React,{useEffect} from 'react'
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import { Avatar } from '@nextui-org/avatar';
import { Logo } from '@/components/icons'; 
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
export default function UsernameNav() {
    const { data: session, status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === 'authenticated' && !session) {
          router.push('/api/auth/signin');
        }
      }, [status, session, router]);
    
  return (
    <Navbar maxWidth='full' isBordered>
    <NavbarBrand className='gap-4'>
      <Logo /> 
      <p className='font-bold text-inherit'>Badgepacc</p>
    </NavbarBrand>
    <NavbarContent as="div" justify="end">

    {status === 'authenticated' ? (
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
            <DropdownItem key="logout" color="danger" onClick={() => signOut({ callbackUrl: '/' })}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
    ) : <Button variant="flat" onClick={()=>router.push("/login")}>
        Login
        </Button>}
    </NavbarContent>
  </Navbar>
  )
}

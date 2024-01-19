import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

  
export default function NavbarUser({isOrg}:{isOrg:boolean}) {
  return (
    <div className='flex items-center gap-4'>

{
    isOrg?
    <Button variant='secondary'>
        Create Badge
    </Button>
    :
    ""
}

<DropdownMenu>
  <DropdownMenuTrigger>
  <Avatar>
<AvatarImage src="https://github.com/shadcn.png" />
<AvatarFallback>CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem className='flex justify-center items-center'>Profile</DropdownMenuItem>
    <DropdownMenuItem className='flex justify-center items-center'>Billing</DropdownMenuItem>
    <DropdownMenuItem className='flex justify-center items-center'>Settings</DropdownMenuItem>
    <DropdownMenuItem className={cn(buttonVariants({variant:"destructive"}),"w-full")}>Log Out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
    )
}

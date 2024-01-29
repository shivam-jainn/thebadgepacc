import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel
  } from "@/components/ui/dropdown-menu"
  import { ScrollArea } from "@/components/ui/scroll-area"
import { Button, buttonVariants } from '../ui/button'
import { Badge } from "@/components/ui/badge"
import { Input } from '../ui/input'

import { cn } from '@/lib/utils'

import { SlDrawer } from "react-icons/sl";

  
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


<Input type='search' className={cn(buttonVariants({variant:"default"}),"max-w-lg w-full rounded-full")} />

<DropdownMenu>
  <DropdownMenuTrigger>
    <div className='relative'>
  <Badge className='absolute py-[2px] px-[2px] flex items-center justify-center w-[16px] h-[16px] rounded-[100px] top-1 right-1'>9+</Badge>
  <Button variant="outline" size="icon">
    
  <SlDrawer />
</Button>
  </div> 
  </DropdownMenuTrigger>
  <DropdownMenuContent className='w-56'>
  <DropdownMenuLabel>My Notifications</DropdownMenuLabel>
  <ScrollArea className='h-[200px]'>
  <DropdownMenuItem className='flex flex-col'>
      <div><b>badgepacc</b> has awarded you a badge . check it out</div>
    </DropdownMenuItem>
    
    <DropdownMenuItem>
    <div><b>fane club</b> has awarded you a badge . check it out</div>

    </DropdownMenuItem>
    
    <DropdownMenuItem>
    <div><b>ola</b> has awarded you a badge . check it out</div>

    </DropdownMenuItem>
    <DropdownMenuItem className='flex flex-col'>
      <div><b>badgepacc</b> has awarded you a badge . check it out</div>
    </DropdownMenuItem>
    
    <DropdownMenuItem>
    <div><b>fane club</b> has awarded you a badge . check it out</div>

    </DropdownMenuItem>
    
    <DropdownMenuItem>
    <div><b>ola</b> has awarded you a badge . check it out</div>

    </DropdownMenuItem>
  </ScrollArea>
   
    
  </DropdownMenuContent>
</DropdownMenu>



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

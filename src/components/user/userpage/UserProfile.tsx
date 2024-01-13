import React from 'react'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"


// User PFP icon fallback
  import { FaUser } from "react-icons/fa";


export default function UserProfile() {
  return (
    <div>
          <Avatar className='w-[6rem] h-[6rem]'>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>
      <FaUser size={32} />
      </AvatarFallback>
    </Avatar>
    </div>
  )
}

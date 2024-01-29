"use client";
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import BadgeGrid from '@/components/badges/badgegrid/BadgeGrid';
import PinnedBadge from '@/components/badges/pinned/PinnedBadge';
import Navbar from '@/components/navbar/Navbar';
export default function Page() {
  const params = useParams();
  const name = "Shivam Jain";
  const userName = "shivamjain";
  const bio = "shuhsdhdshdsdsdshdshdshdsdhdhdsh";

  return (
    <section className="px-4 h-screen md:px-8 ">
        <Navbar />
<div className='flex flex-col md:flex-row md:items-center '>
      {/* avatar div  */}
      <div className="flex flex-col items-center p-4 md:p-8 gap-4 w-full md:w-1/2">

        <div className="flex items-center gap-2">

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-semibold">{name}</span>
            <span className="text-sm md:text-base">@<b>{userName}</b></span>
          </div>
        </div>

        <div className="text-sm md:text-base">
          {bio}
        </div>

        <div className="flex">
          {/* social icon */}
        </div>

        {(userName === params.username) ?
          <div>
            <Button>
              Edit Profile
            </Button>
          </div>
          :
          ""
        }

<div>
        {/* <PinnedBadge /> */}
        {/* pinned badges section */}
      </div>
      </div>

        <div className='flex flex-col'>
        
        <div className='text-2xl font-bold my-2'>
            Badges
        </div>

      <div>
        {/* badge grid section */}
        <BadgeGrid />
      </div>
      </div>

      </div>
    </section>
  );
}

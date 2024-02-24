"use client";
import React, { useEffect, useState } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import BadgeGrid from '@/components/badges/badgegrid/BadgeGrid';
import Navbar from '@/components/navbar/Navbar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { username } = useParams();
  const [userSlug_Name,setUserSlug_Name] = useState("");
  const [userSlug_UserBio,setUserSlug_UserBio] = useState("");
  const [userSlug_UserPfp,setUserSlug_UserPfp] = useState("");
  const [tokens, setTokens] = useState([]);
  const [badgeImages, setBagdeImages] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/${username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        
        setTokens(userData.tokens)        
        setUserSlug_Name(userData.user.name)
        setUserSlug_UserBio(userData.user.bio)
        setUserSlug_UserPfp(userData.user.image)
        setBagdeImages(userData.badgeImages)
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

    

  return (
    <section className="px-4 h-screen md:px-8">
      <Navbar />
      <div className='flex flex-col md:flex-row md:items-center'>
        <div className="flex flex-col items-center p-4 md:p-8 gap-4 w-full md:w-1/2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={userSlug_UserPfp} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-semibold">{userSlug_Name}</span>
              <span className="text-sm md:text-base">@<b>{username}</b></span>
            </div>
          </div>
          <div className="text-sm md:text-base">
            {userSlug_UserBio}
          </div>
          <div className="flex">
            {/* social icon */}
          </div>
          {(username === username) ?
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
            <ScrollArea className="h-[90vh] py-4 w-full rounded-md border p-4">
      <div className="grid max-sm:grid-cols-1 gap-3 max-md:grid-cols-2 grid-cols-3">
        {badgeImages.map((badge, index) => (
          <Card
            className="max-w-[200px] flex flex-col p-4 m-auto border-none radius-lg"
            key={index}
          >
           {badge ? (
              <img
                alt="Badge"
                className="object-cover m-auto mb-4 rounded-lg max-h-[200px]"
                height={200}
                src={badge.pic}
                width={200}
              />
            ) : (
              <p>Loading...</p>
            )}
            <Button>View More</Button>
          </Card>
        ))}
      </div>
    </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from 'react';
import BadgeCard from './BadgeCard';
import { Button } from '@/components/ui/button';
import { useSwipeable } from 'react-swipeable';
import FirstBadge from '@/assets/FIRSTBADGE.png';

export default function PinnedBadge() {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Handle left swipe
      console.log('Swiped left');
      if (index < pic_src.length - 1) {
        setIndex((prevIndex) => prevIndex + 1);
      }
    },
    onSwipedRight: () => {
      // Handle right swipe
      console.log('Swiped right');
      if (index > 0) {
        setIndex((prevIndex) => prevIndex - 1);
      }
    },
  });

  const pic_src = [
    FirstBadge.src,
    'https://images.pexels.com/photos/19781449/pexels-photo-19781449/free-photo-of-close-up-of-an-eagle.jpeg?auto=compress&cs=tinysrgb&w=750&h=750&dpr=1',
  ];

  return (
    <div className='px-4 py-4 mb-4 border-t border-b shadow-lg bg-[#262626]   '>
      <div className='flex items-center justify-between px-2 my-2 '>
        <p className='text-xl font-semibold '>Pinned Badges</p>
        <Button variant='link'>Edit Badge</Button>
      </div>
      <div className='md:grid-cols-5 md:gap-2 md:grid max-md:relative max-md:p-5 max-md:min-h-[300px]' {...handlers}>
        <div>
          
        </div>
        <BadgeCard className='max-md:top-2 max-md:absolute' src={pic_src[0]} />
        <BadgeCard className='max-md:top-1 max-md:absolute' src={pic_src[0]} />
          <BadgeCard className='max-md:top-0 max-md:absolute' src={pic_src[index]} />

    </div>
    </div>
  );
}

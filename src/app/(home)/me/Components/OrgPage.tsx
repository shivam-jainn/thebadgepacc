import React from 'react'
// composites
import RecentCard from '@/components/user/nonorg-dashboard/RecentCard'
import BadgeGrid from '@/components/user/userpage/BadgeGrid';

// Types
interface OrgPageProps{
  username : string;
}

export default function OrgPage() {
  const username = "Shivam Jain"
  return (
    <div className='px-8 font-mono text-2xl font-bold'>
    
    <div className='flex flex-col gap-5'>
      <div>
        Hey , {username}
      </div>

      
    </div>


    <div className='border-t'>
      Your badges
    <BadgeGrid />
      </div>    

    </div>
  )
}

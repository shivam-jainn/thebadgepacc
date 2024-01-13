import React from 'react'
// composites
import RecentCard from '@/components/user/nonorg-dashboard/RecentCard'


export default function NonOrgPage() {
  return (
    <div className='px-8 font-mono text-2xl font-bold'>
    Recent
    
    <div className='flex flex-col gap-5'>
    <RecentCard BadgeName='Fly eco 1' BadgeDesc='A badge to show love for eco customer' BadgeIssuer='aviation1' />
    <RecentCard BadgeName='Fly eco 1' BadgeDesc='A badge to show love for eco customer' BadgeIssuer='aviation1' />
    <RecentCard BadgeName='Fly eco 1' BadgeDesc='A badge to show love for eco customer' BadgeIssuer='aviation1' />
    </div>

    </div>
  )
}

import React from 'react'
import BadgeCard from './BadgeCard'
import FirstBadge from "@/assets/FIRSTBADGE.png"
export default function BadgeGrid() {
  return (
    <div className='grid grid-cols-1 gap-2 px-4 md:grid-cols-3 justify-items-center '>
        <BadgeCard src={FirstBadge.src} />
        <BadgeCard src={FirstBadge.src} />
        <BadgeCard src={FirstBadge.src} />


    </div>
  )
}

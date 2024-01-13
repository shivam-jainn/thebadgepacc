import React from 'react'

// image
import FirstBadge from "@/assets/FIRSTBADGE.png"

// primitves
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Badge } from '@/components/ui/badge'


// Types

interface RecentCardProps{
    BadgeName : string;
    BadgeDesc : string;
    BadgeIssuer:string;
}
  
export default function RecentCard({BadgeName,BadgeDesc,BadgeIssuer}:RecentCardProps) {
  return (
    <Card className='flex flex-col md:flex-row'>
    <div className='p-4'>
        <img src={FirstBadge.src} alt="" className='rounded-lg ' />
    </div>
    <div>
    <CardHeader>
        <Badge className='py-2 my-2 text-black w-fit'>
            @{BadgeIssuer}
        </Badge>
      <CardTitle>{BadgeName}</CardTitle>
      <CardDescription>{BadgeDesc}</CardDescription>
    </CardHeader>
    </div>
  </Card>
  
  )
}

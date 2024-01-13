import React, { ReactNode } from 'react'
import { BarChartComponent } from './Components/BarChartComponent';

interface layoutSlotProps{
    children:ReactNode;
    tokenstats?:ReactNode;
}

export default function layout({children}:layoutSlotProps) {
    const isOrg = true;
  return (
    <>
    {children}
    {/* {isOrg?BarChartComponent:""} */}
    
    </>
  )
}

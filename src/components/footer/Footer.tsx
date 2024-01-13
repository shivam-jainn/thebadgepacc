import React from 'react'
import { Logo } from "@/lib/icons/Logo";

export default function Footer() {
  return (
    <div className='flex justify-between w-full px-3 py-3 footer-gradient-border max-md:items-center'>
        <div className='flex flex-col items-center px-3 py-3'>
            <Logo />
            <span>badgepacc</span>
        </div>

        <div className='flex gap-4 max-md:hidden'>
        <div className='flex flex-col'>
            <h5 className='font-bold'>Products</h5>

            <span>AI Badge Generator</span>
            <span>Handsdown</span>

        </div>

        <div className='flex flex-col'>
            <h5 className='font-bold'>Company</h5>

            <span>About Us</span>
            <span>Pricing</span>
            <span> Documentation</span>
            <span>Integration</span>

        </div>
        </div>

        <div className='md:hidden'>
            <p>Made with love</p>
        </div>
    </div>
  )
}

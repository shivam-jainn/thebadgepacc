import React from 'react'
import { Navbar } from '@/components/navbar'
export default function Layout({children}) {
  return (
    <>
						<Navbar />

    <main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
    {children}
    </main>
    </>
    )
}

"use client";
import React from 'react'
import Link from 'next/link';
import { Card,CardHeader,CardTitle,CardDescription,CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button';

import { useSearchParams } from 'next/navigation';
import AddBadge from '@/assets/pages/org/AddBadge';
export default function OrgDash() {
  const tokenIssued = 100
  const searchParams = useSearchParams();

  const search = searchParams.get('addbadge')  
  
  return (
    <>
      {search?<AddBadge modal={true}  />:""}
    <section className={`${search?"blur-xl":""}`}>
        <h1 className='text-4xl font-bold'>Hello , Shivam</h1>

        {/* charts and visualization */}
        <div className='grid grid-cols-3 place-items-center gap-3 max-md:grid-cols-1'>
        <Card className='max-w-md w-full my-4'>
          <CardHeader>
            <CardTitle>
              Number of tokens issued
            </CardTitle>
            <CardDescription>
              Number of tokens issued till date
            </CardDescription>
          </CardHeader>

            <CardContent className='flex items-center justify-center'>
              <span className='text-3xl '>+<span className='font-black'>{tokenIssued}</span></span>
            </CardContent>

        </Card>

        <Card className='max-w-md w-full my-4'>
          <CardHeader>
            <CardTitle>
              Number of tokens issued
            </CardTitle>
            <CardDescription>
              Number of tokens issued till date
            </CardDescription>
          </CardHeader>

            <CardContent className='flex items-center justify-center'>
              <span className='text-3xl '>+<span className='font-black'>{tokenIssued}</span></span>
            </CardContent>

        </Card>

        <Card className='max-w-md w-full my-4'>
          <CardHeader>
            <CardTitle>
              Number of tokens issued
            </CardTitle>
            <CardDescription>
              Number of tokens issued till date
            </CardDescription>
          </CardHeader>

            <CardContent className='flex items-center justify-center'>
              <span className='text-3xl '>+<span className='font-black'>{tokenIssued}</span></span>
            </CardContent>

        </Card>
        </div>
    
        <div className='flex justify-between'>
        <h4 className='text-2xl font-bold'>Your Badges</h4>
        <Button>
          <Link href="/?addbadge=true" >
          Add Badges
          </Link>
          </Button>
        </div>
             {/*A badge grid component ?  */}
             <div className='grid gap-4 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             <Card className='max-w-md w-full my-4'>
          <CardHeader>
            <CardTitle>
              Number of tokens issued
            </CardTitle>
            <CardDescription>
              Number of tokens issued till date
            </CardDescription>
          </CardHeader>

            <CardContent className='flex items-center justify-center'>
              <span className='text-3xl '>+<span className='font-black'>{tokenIssued}</span></span>
            </CardContent>

        </Card>

        <Card className='max-w-md w-full my-4'>
          <CardHeader>
            <CardTitle>
              Number of tokens issued
            </CardTitle>
            <CardDescription>
              Number of tokens issued till date
            </CardDescription>
          </CardHeader>

            <CardContent className='flex items-center justify-center'>
              <span className='text-3xl '>+<span className='font-black'>{tokenIssued}</span></span>
            </CardContent>

        </Card>

        <Card className='max-w-md w-full my-4'>
          <CardHeader>
            <CardTitle>
              Number of tokens issued
            </CardTitle>
            <CardDescription>
              Number of tokens issued till date
            </CardDescription>
          </CardHeader>

            <CardContent className='flex items-center justify-center'>
              <span className='text-3xl '>+<span className='font-black'>{tokenIssued}</span></span>
            </CardContent>

        </Card>  <Card className='max-w-md w-full my-4'>
          <CardHeader>
            <CardTitle>
              Number of tokens issued
            </CardTitle>
            <CardDescription>
              Number of tokens issued till date
            </CardDescription>
          </CardHeader>

            <CardContent className='flex items-center justify-center'>
              <span className='text-3xl '>+<span className='font-black'>{tokenIssued}</span></span>
            </CardContent>

        </Card>
             </div>
      
    </section>
    </>
  )
}

import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';

export default function InputCard() {
  return (
    <Card>
    <CardHeader className='flex' >
      <CardTitle>
        Upload you badge here
      </CardTitle>
      <CardDescription>
        Upload a png/jpg file with 400x400 dimensions
        </CardDescription>
    </CardHeader>
    <CardContent className='p-4'>
      <Input type='file' className='input-files' />
      {/* <Image /> */}
    </CardContent>
  </Card>
    )
}

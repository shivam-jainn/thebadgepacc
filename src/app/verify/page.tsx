"use client";
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation';


export default function page() {

  const router = useRouter();

const handleNextClick = ()=> {
    console.log("nice");
}


  return (
    <section className='h-[100vh] flex justify-center items-center'>
      <Card className='w-full m-2 max-md:max-w-[360px] md:max-w-md '>
        <CardHeader>
          <CardTitle>
            Verify a badge
          </CardTitle>
          <CardDescription>
            Drop in the badge unique number and verify who it belongs to
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="badgenumber">Badge Number</Label>
            <Input type="badgenumber" id="badgenumber" placeholder="Badge Number" />
          </div>

        
          <Button onClick={handleNextClick}>Continue </Button>
        </CardContent>
      </Card>
    </section>
  )
}

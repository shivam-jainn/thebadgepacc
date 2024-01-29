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
  router.push('/firsttime/finalise');
}


  return (
    <section className='h-[100vh] flex justify-center items-center'>
      <Card className='w-full m-2 max-md:max-w-[360px] md:max-w-md '>
        <CardHeader>
          <CardTitle>
            Welcome to Badgepacc
          </CardTitle>
          <CardDescription>
            Let's set up your account
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input type="username" id="username" placeholder="username" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="bio" maxLength={120} />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="isorg">Are you an organisation?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Are you an organisation?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Yes</SelectItem>
                <SelectItem value="false">No</SelectItem>
              </SelectContent>
            </Select>

          </div>

          <Button onClick={handleNextClick}>Continue </Button>
        </CardContent>
      </Card>
    </section>
  )
}

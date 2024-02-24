"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import usernameAtom from '@/atoms/Firstime/usernameAtom';

export default function page() {
  const [username,setUsername] = useAtom(usernameAtom);
  const [bio, setBio] = useState('');
  const [isOrg, setIsOrg] = useState(false);

  const router = useRouter();


  const handleNextClick = async () => {
    fetch("/api/firsttime/info",{
      method:"POST",
      body:JSON.stringify({
        username,
        bio,
        isOrg
      }),
      headers:{
        "content-type":"application/json",
      },
    }).catch((e)=>{
      console.log(e);
    }).then((e)=>{
      console.log("sent");
      router.push('/firsttime/finalise');
    })
  }

  const handleBioChange = (e) => {
    setBio(e.target.value);
  }

  const handleOrgChange = (e) => {
    setIsOrg((prev)=>!prev);
  }

  const handleUsernameChange = (e) =>{
    setUsername(e.target.value);
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
            <Input type="username" id="username" placeholder="username" value={username} onChange={handleUsernameChange} />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="bio" maxLength={120} value={bio} onChange={handleBioChange} />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="isorg">Are you an organisation?</Label>
            <Select onValueChange={handleOrgChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Are you an organisation?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true" >Yes</SelectItem>
                <SelectItem value="false" >No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleNextClick}>Continue</Button>
        </CardContent>
      </Card>
    </section>
  )
}

"use client";
import React, { useState } from 'react'
import {Card, CardBody, CardHeader } from '@nextui-org/card'
import { Input,Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import usernameAtom from '@/atoms/Firstime/usernameAtom';
export default function Page() {
  const router = useRouter();
  const [change, setChange] = useState({ username: "", bio: "" });
  const [username,setUsername] = useAtom(usernameAtom);
  const handleChange = (e, field:string) => {
    const updatedChange = { ...change, [field]: e.target.value };
    setChange(updatedChange);
  };

  const handleSubmit = async ()=>{
    try {
      const response = await fetch('/api/firsttime/username-bio',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(change),
      });

      setUsername(change.username);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }


      router.push('/firsttime/uploadpfp');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Card className='max-w-sm gap-4 p-2 m-auto border-2 border-gray-300 border-solid'>
        <Input
          type="text"
          label="Username"
          placeholder="Enter your Username"
          isRequired
          onChange={(e) => handleChange(e, "username")}
        />
        <Textarea
          label="Bio"
          placeholder="Tell more about yourself"
          isRequired
          onChange={(e) => handleChange(e, "bio")}
        />

        <Button fullWidth onClick={handleSubmit}>
          <h4 className=" text-large">Continue</h4>
        </Button>
      </Card>
    </>
  );
}

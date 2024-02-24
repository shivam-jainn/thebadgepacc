"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { IoClose } from "react-icons/io5";
import axios from 'axios';
import { useSession } from 'next-auth/react';

export default function AddBadge({ modal, userName }: { modal?: boolean, userName?: string }) {
  const router = useRouter();
  const [badgeImage, setBadgeImage] = useState(null);
  const [fields, setFields] = useState({
    "badgeName": "",
    "badgeDesc": ""
  });
  const session = useSession();


  const handleChange = (e:any, field: string) => {
    const updatedChange = { ...fields, [field]: e.target.value };
    setFields(updatedChange);
  };

  const handleBadgeUpload = (e:any) => {
    const file = e.target.files[0];
    setBadgeImage(file);
  };

  const handleNextClick = async () => {
    try {
      const formData = new FormData();
      formData.append('badgeName', fields.badgeName);
      formData.append('badgeDesc', fields.badgeDesc);
      formData.append('email', session.data?.user?.email as string);
  
      if (badgeImage) {
        formData.append('badge_pic', badgeImage);
      }
  
      const response = await axios.post('/api/badge/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response);
      
      
      if (response.status === 200) {
        console.log(response.data); // Directly access the response data
      } else {
        console.error('Error creating badge:', response.statusText);
      }
    
    } catch (error) {
      console.error('Error processing request:', error);
    }
  };
  

  return (
    <Card className={`w-full m-2 max-md:max-w-[360px] md:max-w-md ${modal ? "absolute z-10 top-[35%] left-[35%] backdrop-blur-3xl backdrop-brightness-50" : ""}`}>
      <CardHeader className='flex flex-row items-center justify-between'>
        <div className='flex flex-col gap-3'>
          <CardTitle>
            <input type="badgename" id="badgename" placeholder="Enter Badge Name" className=' border-none outline-none' onChange={(e) => handleChange(e, "badgeName")} />
          </CardTitle>
          <CardDescription>
            <input type="badgedesc" id="badgedesc" placeholder="Enter Badge Description" className=' border-none outline-none' onChange={(e) => handleChange(e, "badgeDesc")} />
          </CardDescription>
        </div>
        <div>
          <Button variant='ghost' size='icon' onClick={() => router.push('/')}>
            <IoClose />
          </Button>
        </div>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <Card>
          <CardHeader className='flex'>
            <CardTitle>
              Upload your badge here
            </CardTitle>
            <CardDescription>
              Upload a png/jpg file with 400x400 dimensions
            </CardDescription>
          </CardHeader>
          <CardContent className='p-4'>
            <form encType="multipart/form-data" onSubmit={(e) => e.preventDefault()}>
              <Input type='file' className='input-files' onChange={handleBadgeUpload} />
            </form>
          </CardContent>
        </Card>
        <Button onClick={handleNextClick}>Continue</Button>
      </CardContent>
    </Card>
  );
}

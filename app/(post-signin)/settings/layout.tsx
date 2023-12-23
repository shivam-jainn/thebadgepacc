"use client";
import React from 'react'
import { Card, CardBody } from '@nextui-org/card'
import { Tab, Tabs } from '@nextui-org/tabs'
import { Button } from '@nextui-org/button';
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import { IconArrowNarrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import {useSession} from "next-auth/react";

export default function Layout() {

  const {data: session, status} = useSession();
  // console.log("session", session);
  
  return (
      <>
         <div className='max-w-md py-2 m-auto my-2 h-fit'>
          <Button>
            <Link href={`/${session.user.name}`}>
            <IconArrowNarrowLeft/>
            </Link>
          </Button>
         </div>
     
        <div className="flex flex-col max-w-md m-auto">
      <Tabs aria-label="Options">
        <Tab key="Profile" title="Profile">
          <Card>
            <CardBody>
              <h6>Update your profile&#39;s info</h6>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Socials" title="Socials">
          <Card>
            <CardBody>
                <h6>Connect your socials</h6>
                
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Delete Account" title="Delete Account">
          <Card>
            <CardBody>
              <h6>Deleting your account will make you lose all your data , think before you do anything ! ! !</h6>
              <Button color='danger' variant='flat' size='sm' className='mt-2'>
                  Yes , i am aware , let&#39;s destroy everything 
              </Button>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
      </>
  )
}

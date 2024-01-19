"use client";
import React, { useState } from 'react';


// primitive
import { Button } from '../ui/button';

// image
import Image from 'next/image';
import Logo from '../../../public/logo.svg';


import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

import NavbarLanding from './NavbarLanding';
import NavbarUser from './NavbarUser';

export default function Navbar({ className }: { className?: string }) {
    const router = useRouter();
    const { data: session, status } = useSession();

    const isOrg = false;

    return (
        <nav className={`${className} bg-[#1E1C1C] flex justify-between items-center p-4 rounded-md mx-4 my-4`}>
            <div>
                <Image src={Logo} alt='Badgepacc logo' />
            </div>

            {
                (session?.user) ?

                    <NavbarUser isOrg={isOrg} />
                    :
                    <NavbarLanding />
            }
        </nav>
    );
}

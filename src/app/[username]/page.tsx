import React from 'react'

// icons
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter, FaGitlab } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";


// composites
import UserProfile from '@/components/user/userpage/UserProfile'
import { UserNavbar } from '@/components/user/navbar/UserNavbar'
import BadgeCard from '@/components/user/userpage/BadgeCard';
import BadgeGrid from '@/components/user/userpage/BadgeGrid';
import PinnedBadge from '@/components/user/userpage/PinnedBadge';

// interface
interface User {
    username: string;
    name: string;
}

interface UsernamePageProps {
    user: User
}


export default function page() {
    const user = { username: "shivamm", name: "Shivam jain", bio: "This is a bio hahahahahhahahahahhahahahahhahahahahhahahahahhahahahahhahahahahhahahahahhahahahah" }
    return (
        <section>

            <UserNavbar />

            <div className='flex flex-col items-center max-w-sm p-2 mx-auto'>
            
                <div className='flex items-center gap-8 p-2'>
                    {/* pfp */}
                    <UserProfile />

                    {/* name and username */}
                    <div className='flex flex-col'>
                        <span className='text-xl font-semibold'>{user.name}</span>
                        <span>@{user.username}</span>
                    </div>
                </div>


                {/* bio */}
                <div className='p-2 text-center break-all text-wrap'>
                    <p className=''>{user.bio}</p>
                </div>

                {/* socials */}
                <div className='flex gap-4 p-2 justify-evenly'>
                    <FaDiscord size={24} />
                    <FaInstagram size={24} />
                    <IoLogoGithub size={24} />
                    <FaXTwitter size={24} />
                    <FaGitlab size={24} />
                    <TbWorldWww size={24} />
                </div>
            </div>

                <PinnedBadge />

            <div className='my-4'>
                <BadgeGrid />
            </div>

        </section>
    )
}

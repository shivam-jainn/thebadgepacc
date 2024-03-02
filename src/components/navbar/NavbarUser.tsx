import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button, buttonVariants } from '../ui/button';
import { Badge } from "@/components/ui/badge";
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { SlDrawer } from "react-icons/sl";
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"

import { signOut } from 'next-auth/react';

export default function NavbarUser({ isOrg }: { isOrg: boolean }) {
    const [userSearch, setUserSearch] = useState('');
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     const handleUserSearch = async () => {
    //         if (userSearch.length > 1) {
    //             const res = await axios.get(`/api/user/${userSearch}`);
    //             setData(res.data.user);
    //         } else {
    //             setData([]);
    //         }
    //     }

    //     handleUserSearch();
    // }, [userSearch]);

    return (
        <div className='flex items-center gap-4'>
            {isOrg &&
                <Button variant='secondary'>Create Badge</Button>
            }

            {/*<Command>
                <CommandInput
                    placeholder="Search for your friends"
                    value={userSearch}
                    onValueChange={ setUserSearch}
                />
                <CommandList>
                    {data.length > 0 ? (
                        <CommandGroup heading="Suggestions">
                            {data.map((user) => (
                                <CommandItem key={user['id']}>
                                    <Avatar>
                                        <AvatarImage src={user['image']} />
                                    </Avatar>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ) : (
                        <CommandEmpty>No results found.</CommandEmpty>
                    )}
                </CommandList>
                    </Command>*/}

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className='relative'>
                        <Badge className='absolute py-[2px] px-[2px] flex items-center justify-center w-[16px] h-[16px] rounded-[100px] top-1 right-1'>9+</Badge>
                        <Button variant="outline" size="icon">
                            <SlDrawer />
                        </Button>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56'>
                    <DropdownMenuLabel>My Notifications</DropdownMenuLabel>
                    <ScrollArea className='h-[200px]'>
                        {/* Your notification items */}
                    </ScrollArea>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className='flex justify-center items-center'>Profile</DropdownMenuItem>
                    <DropdownMenuItem className='flex justify-center items-center'>Billing</DropdownMenuItem>
                    <DropdownMenuItem className='flex justify-center items-center'>Settings</DropdownMenuItem>
                    <DropdownMenuItem className={cn(buttonVariants({ variant: "destructive" }), "w-full")} onClick={() =>
                        signOut({
                            callbackUrl: `${window.location.origin}`
                        })
                    }>Log Out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

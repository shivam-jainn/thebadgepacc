import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { Input } from "@/components/ui/input"
import { Label } from '../ui/label'
import { Button } from '../ui/button'
export default function EnterUsername() {
    return (
        <>
            <Card className='max-w-md col-start-2 row-start-2'>
                <CardHeader>
                        <CardTitle>
                Welcome to Badgepacc
                </CardTitle>
                    <CardDescription>
                    Let's set up your acount
                </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="username">Username</Label>
                        <Input type="username" id="username" placeholder="username" />
                    </div>
                <Button>Continue </Button>
                </CardContent>
            </Card>
        </>
    )
}

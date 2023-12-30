import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();
        const badge_name = body.badge_name;
        const badge_pic = body.badge_pic_url;
        const badge_desc = body.badge_desc;

        const no_of_issued = 0;
        const time_of_creation = new Date().toISOString();
        const creator = body.username_id;
        const username = body.username;

        const user = await prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        if(user){
            const badge = await prisma.badge.create({
                data: {
                    name:badge_name,
                    pic:badge_pic,
                    description:badge_desc,
                    no_of_issued:no_of_issued,
                    time_of_creation:time_of_creation,
                    creator:creator
                },
            });

            const response = {badge:badge};
            // console.log(response);
            
            return NextResponse.json(response);
        }else{
            return NextResponse.json({ result: "User not found" });
        }
    }catch(error){
        return NextResponse.error();
    }
}

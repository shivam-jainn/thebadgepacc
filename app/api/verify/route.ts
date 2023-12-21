import { PrismaClient } from '@prisma/client';

import { NextResponse,NextRequest } from 'next/server';
import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest,res:NextResponse) {
    try {
        
        const body = await req.json()
        const issuance_id = body.issuance_id;
        console.log(issuance_id);
        
        const response = await prisma.tokens.findFirst({
            where: {
                issuance_id: issuance_id
            }
        });

        const badge_id = response?.badge_id;
        const user_id = response?.user_id;

        const badge = await prisma.badge.findFirst({
            where:{
                id:badge_id
            },
        })

        const user = await prisma.user.findFirst({
            where:{
                id:user_id
            }
        })


        const badge_image = badge?.pic;
        const user_name = user?.username;

        const resp = {
            badge_image:badge_image,
            user_name:user_name
        }

        return NextResponse.json(resp);
    } catch (error) {
        console.error("Error:", error);
    }
}

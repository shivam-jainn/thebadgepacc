import { PrismaClient } from '@prisma/client';

import { NextResponse,NextRequest } from 'next/server';
import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();
const secret = process.env.NEXTAUTH_SECRET;

export async function POST(req: NextRequest,res:NextResponse) {
    try {
        const body = await req.json()
        
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        
        if (!token) {
            return NextResponse.json({ message: 'Unauthorized' });
        }


        const username = body.username;
        const bio = body.bio;        
        
        const response = await prisma.user.update({
            where: {
                email: token.email!,
            },
            data: {
                username:username,
                bio:bio,
            }
        });

        return NextResponse.json(response);
    } catch (error) {
        console.error("Error:", error);
    }
}

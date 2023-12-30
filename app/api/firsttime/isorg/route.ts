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

        const isOrg: boolean = body.isorg === 'true';
        // console.log(isOrg);
        
        
        const response = await prisma.user.update({
            where: {
                email: token.email!,
            },
            data: {
                isOrganisation: isOrg,
            }
        });

        return NextResponse.json(response);
    } catch (error) {
        console.error("Error:", error);
    }
}

import { PrismaClient } from "@prisma/client";
import { NextResponse,NextRequest } from 'next/server';
import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();
const secret = process.env.NEXTAUTH_SECRET;

export async function POST(req: NextRequest,res) {
    try {
        const body = await req.json()
        
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        
        if (!token) {
            return res.json({ message: 'Unauthorized' });
        }


        const response = await prisma.user.findFirst({
            where: {
                email: token.email!,
            }
        });

        const username = response?.username; 


        return NextResponse.json(response?.username);
    } catch (error) {
        console.error("Error:", error);
    }
}

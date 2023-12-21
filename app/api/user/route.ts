import { PrismaClient } from "@prisma/client";
import { NextResponse,NextRequest } from 'next/server';
import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();
const secret = process.env.NEXTAUTH_SECRET;

export async function GET(req: NextRequest,res) {
    try {
        
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        
        if (!token) {
            return res.json({ message: 'Unauthorized' });
        }

        
        
        const userData = await prisma.user.findUnique({
            where: {
                email: token.email!,
            }
        });


        const tokens = await prisma.tokens.findMany({
            where:{
                user_id:userData?.id
            }
        })

        const badgeIds = tokens.map(token => token.badge_id); 

        const badgeImages = await prisma.badge.findMany({
            where: {
                id: {
                    in: badgeIds 
                }
            }
        });


        const response = {
            userData:userData,
            tokens: tokens,
            badgeImages:badgeImages
        }

        return NextResponse.json(response);
    } catch (error) {
        console.error("Error:", error);
    }
}

import { PrismaClient } from "@prisma/client";
import { NextResponse,NextRequest } from 'next/server';
import { getToken } from "next-auth/jwt";
import { randomUUID } from "crypto";
import { time } from "console";

const prisma = new PrismaClient();
const secret = process.env.NEXTAUTH_SECRET;

export async function POST(req: NextRequest,res) {
    try {
        const body = await req.json()
        
        // const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        
        // if (!token) {
        //     return res.json({ message: 'Unauthorized' });
        // }

        // const isOrg: boolean = body.isorg === 'true';
        const user_id = body.user_id;
        const badge_id = body.badge_id;


        const time_now = new Date().toISOString(); 
        const issuance_id_gen = user_id+time_now;

        console.log(issuance_id_gen);
        console.log(time_now);

        // if(!isOrg){
        //     return res.json({message:"Only organisation can make badges !"})
        // }
        const response = await prisma.tokens.create({
            data: {
                user:{connect:{id:user_id}},
                badge : {connect:{id:badge_id}},
                issuance_id : issuance_id_gen,
                issuance_time: time_now,
            }
        });

        return NextResponse.json(response);
    } catch (error) {
        console.error("Error:", error);
    }
}

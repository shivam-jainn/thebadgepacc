import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();
const secret = process.env.NEXTAUTH_SECRET;

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();
        const username = body.username;
        const badge_id = body.badge_id;
        const time_now = new Date().toISOString();
        const issuance_id_gen = username + time_now;

        const user = await prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        if (user) {
            const token = await prisma.tokens.create({
                data: {
                    user: {
                        connect: {
                            id: user.id,
                        },
                    },
                    badge: {
                        connect: {
                            id: badge_id,
                        },
                    },
                    issuance_id: issuance_id_gen,
                    issuance_time: time_now,
                },
            });

            const response = {
                user: user,
                token: token,
            };

            // Log and send the response
            // console.log(response);
            return NextResponse.json(response);
        } else {
            return NextResponse.json({ result: "User not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error();
    }
}

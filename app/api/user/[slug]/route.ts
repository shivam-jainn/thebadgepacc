import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const prisma = new PrismaClient();
const secret = process.env.NEXTAUTH_SECRET;

export async function GET(  request: Request,
  { params }: { params: { slug: string } }) {
  try {
    
    const slug = params.slug;
    
    const userData = await prisma.user.findUnique({
      where: {
        username: slug!,
      },
    });

    console.log(userData);
    

    const tokens = await prisma.tokens.findMany({
      where: {
        user_id: userData?.id,
      },
    });

    const badgeIds = tokens.map((token) => token.badge_id);

    const badgeImages = await prisma.badge.findMany({
      where: {
        id: {
          in: badgeIds,
        },
      },
    });

    const response = {
      user:userData,
      tokens: tokens,
      badgeImages: badgeImages,
    };

    // console.log(response);
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: error }); // Provide a response for error scenarios
  }
}

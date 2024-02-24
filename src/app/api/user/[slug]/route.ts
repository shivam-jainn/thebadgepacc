import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const prisma = new PrismaClient();
const secret = process.env.NEXTAUTH_SECRET;

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const slug = params.slug;

    if (!slug) {
      return NextResponse.error(); // Handle cases where slug is missing
    }

    const userData = await prisma.user.findUnique({
      where: {
        username: slug,
      },
    });

    if (!userData) {
      return NextResponse.json({found:false,error:"user-not-found"});
    }

    const tokens = await prisma.tokens.findMany({
      where: {
        user_id: userData.id,
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
      user: userData,
      tokens: tokens,
      badgeImages: badgeImages,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.error();
  }
}

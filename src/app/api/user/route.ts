import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { useParams } from 'next/navigation';

const prisma = new PrismaClient();
const secret = process.env.NEXTAUTH_SECRET;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const usernameToSearch = searchParams.get('username')
    console.log(usernameToSearch);
    
    if (!usernameToSearch) {
      return NextResponse.json({ found: false, error: "Username parameter is missing" });
    }

    const userData = await prisma.user.findMany({
      where: {
        username:{
            contains: usernameToSearch, 
        }
      },
    });

    console.log(userData);
    

    if (!userData) {
      return NextResponse.json({ found: false, error: "No user exists" });
    }

    const response = {
      user: userData,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.error();
  }
}

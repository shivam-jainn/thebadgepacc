import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client"
import {PrismaAdapter} from '@auth/prisma-adapter'

const prisma = new PrismaClient();
const scopes = ['identify', 'email']



export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret : process.env.NEXTAUTH_SECRET!,
    session: {
      strategy: 'jwt',
      maxAge : 30*24*60*60,
    },
    providers: [
        GoogleProvider({          
          clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID!,
        clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        authorization: {params: {scope: scopes.join(' ')}},
      }),
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      })
    ],
    pages:{
      // signIn:'/signin',
      newUser:'/firsttime'
    },
    callbacks: {
      async jwt({ token }) {
        const dbUser = await prisma.user.findUnique({
          where: {
            email: token.email!,
          },
        });
  
        token.isOrganisation = Boolean(dbUser?.isOrganisation);
  
        return token;
      },
    }
  };
import { lucia } from "lucia";
import { prisma } from "@lucia-auth/adapter-prisma";
import {PrismaClient} from "@prisma/client"
import { nextjs_future } from "lucia/middleware";

// OAUTH
import { github } from "@lucia-auth/oauth/providers";


const client = new PrismaClient();

export const auth = lucia({
    adapter: prisma(client, {
		user: "user",
		key: "key", 
		session: "session"
	}),
	env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
	middleware: nextjs_future(),
	sessionCookie: {
		expires: false
	},
    getUserAttributes: (data) => {
		return {
			githubUsername: data.username
		};
	}
});

export const githubAuth = github(auth, {
	clientId: process.env.GITHUB_CLIENT_ID ?? "",
	clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ""
});

export type Auth = typeof auth;

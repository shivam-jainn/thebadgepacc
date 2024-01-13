import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import { Press_Start_2P as P2P } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const press2play = P2P({
  subsets: ["latin"],
  weight : '400',
})

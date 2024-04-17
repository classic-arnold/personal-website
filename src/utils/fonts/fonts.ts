import { Fira_Sans } from "next/font/google"
import localFont from 'next/font/local'
import { Electrolize } from "next/font/google";

export const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-fira',
})

export const gillSans = localFont({
  src: './gillSans.otf',
  variable: '--font-gill',
})

export const electrolize = Electrolize({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-electrolize"
});
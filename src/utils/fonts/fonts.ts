import { Fira_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Electrolize } from "next/font/google";

export const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const gillSans = localFont({
  src: "./gillSans.otf",
});

export const electrolize = Electrolize({
  subsets: ["latin"],
  weight: "400",
});

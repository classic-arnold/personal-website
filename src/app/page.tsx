import Header from "@/components/header";
import SkillDisplay from "@/components/skill-display";
import { cn } from "@/utils/utils";
import { Fira_Sans } from "next/font/google"
import Image from "next/image";

const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-fira',
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-primary w-full min-h-64 px-16 py-8 pt-36">
        <h1 className="uppercase text-4xl text-white">Arnold Umakhihe</h1>
        <h3 className={cn([fira_sans.variable, "text-xl font-extralight italic text-white mb-8"])}>Software Engineer</h3>
        <SkillDisplay />
      </div>
    </main>
  );
}

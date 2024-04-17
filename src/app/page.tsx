import ButtonLink from "@/components/button-link";
import Header from "@/components/header";
import SkillDisplay from "@/components/skill-display";
import { electrolize, fira_sans } from "@/utils/fonts/fonts";
import { PROJECTS_URL } from "@/utils/links";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-primary w-full min-h-64 px-16 py-8 pt-36">
        <h1 className="uppercase text-4xl text-white">Arnold Umakhihe</h1>
        <h3 className={cn([fira_sans.variable, "text-xl font-extralight italic text-white mb-8"])}>Software Engineer</h3>
        <SkillDisplay />
      </div>
      <div className="px-16 py-16 max-w-md">
        <p className="mb-6">
          Hey there! I’m Arnold, dialing in from San Francisco with a love for code, 
          AI, and making cool stuff happen with software and technology.
        </p>
        <ButtonLink 
        url={PROJECTS_URL}
        className={electrolize.variable}>
          View Projects
        </ButtonLink>
      </div>
    </main>
  );
}

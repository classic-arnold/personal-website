import ButtonLink from "@/components/button-link";
import Header from "@/components/header";
import SkillDisplay from "@/components/skill-display";
import { electrolize, fira_sans } from "@/utils/fonts/fonts";
import { CONTACT_URL, PROJECTS_URL } from "@/utils/links";
import { cn } from "@/utils/utils";
import Image from "next/image";

import me from "/public/images/me.png"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-primary w-full min-h-64 px-16 py-8 pt-36">
        <h1 className="uppercase text-4xl text-white">Arnold Umakhihe</h1>
        <h3 className={cn([fira_sans.className, "text-xl font-extralight italic text-white mb-8"])}>Software Engineer</h3>
        <SkillDisplay />
      </div>
      <div className="px-16 py-16 max-w-md">
        <p className="mb-6">
          Hey there! I’m Arnold, dialing in from San Francisco with a love for code, 
          AI, and making cool stuff happen with software and technology.
        </p>
        <div className="flex flex-col gap-y-4">
          <ButtonLink 
          url={PROJECTS_URL}
          className={cn([electrolize.className, "text-tertiary"])}>
            View Projects
          </ButtonLink>
          <ButtonLink 
          url={CONTACT_URL}
          className={cn([electrolize.className, "text-tertiary text-sm"])}>
            Contact Me
          </ButtonLink>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-2/3">
        <Image 
        src={me}
        alt="me!!!"
        width={1063}
        height={928}
        />
      </div>
      <div className="absolute bottom-0 py-4 mx-16">
        <p className="text-xs">
          Designed and built by me with ❤️️
        </p>
      </div>
    </main>
  );
}

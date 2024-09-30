import ButtonLink from "@/components/button-link";
import Header1 from "@/components/header-1";
import SkillDisplay from "@/components/skill-display";
import { electrolize, fira_sans } from "@/utils/fonts/fonts";
import { CONTACT_URL, PROJECTS_URL } from "@/utils/links";
import { cn } from "@/utils/utils";
import Image from "next/image";

import me from "/public/images/me.png";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header1 />
      <div className="bg-primary w-full min-h-64 py-8 pt-36 px-4 md:px-16">
        <div>
          <h1 className="uppercase text-4xl text-white">Arnold Umakhihe</h1>
          <h3
            className={cn([
              fira_sans.className,
              "text-xl font-extralight italic text-white mb-8",
            ])}
          >
            Software Engineer
          </h3>
        </div>
        <SkillDisplay />
      </div>
      <div className="px-4 md:px-16 pt-16 max-w-md">
        <p className="mb-6">
          Hey there! I&#39;m Arnold, dialing in from San Francisco with a love
          for code, AI, and making cool stuff happen with software and
          technology.
        </p>
        <div className="flex flex-col gap-y-4">
          <ButtonLink
            url={PROJECTS_URL}
            className={cn([electrolize.className])}
          >
            View Projects
          </ButtonLink>
          <ButtonLink
            url={CONTACT_URL}
            className={cn([electrolize.className])}
            secondary
          >
            Contact Me
          </ButtonLink>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-2/3 hidden md:block">
        <Image src={me} alt="me!!!" width={1063} height={928} />
      </div>
      <div className="block md:hidden">
        <Image src={me} alt="me!!!" width={1063} height={928} />
      </div>
      <div className="bg-primary md:bg-inherit md:text-black md:absolute bottom-0 py-4 px-4 md:px-16">
        <p className="text-xs text-white">Designed and built by me with ❤️️</p>
      </div>
    </main>
  );
}

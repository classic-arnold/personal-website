import Header2 from "@/components/header-2";
import { gillSans } from "@/utils/fonts/fonts";
import { cn } from "@/utils/utils";
import Image from "next/image";

import majorgen_img from "/public/images/projects/majorgen.png";
import ButtonLink from "@/components/button-link";
import { PROJECTS_URL } from "@/utils/links";

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Header2 />
      <div className="px-4 md:px-16 py-16">
        <h1
          className={cn([
            "uppercase text-4xl mt-24 md:mt-36 mb-6",
            gillSans.className,
          ])}
        >
          My Projects
        </h1>
        <div
          className="rounded-md bg-white p-4 
                md:p-16 flex md:flex-row md:gap-x-8
                flex-col gap-y-8 md:gap-y-0 max-w-screen-lg"
        >
          <div className="basis-1/2">
            <Image
              loader={imageLoader}
              src={majorgen_img}
              alt="Majorgen"
              width={650}
              height={488.08}
            />
          </div>
          <div className="basis-1/2">
            <div className="mb-4">
              <h3
                className={cn([
                  "uppercase text-2xl text-primary",
                  gillSans.className,
                ])}
              >
                Majorgen
              </h3>
              <p className="italic">AI Resume Builder SaaS</p>
            </div>
            <div className="flex flex-col gap-y-2 mb-6">
              <p className="text-sm">Languages: JavaScript, TypeScript</p>
              <p className="text-sm">Libraries: NextJS, NodeJS</p>
              <p className="text-sm">Tools: Git</p>
              <p className="text-sm">APIs: SendGrid, OpenAI</p>
              <p className="text-sm">Cloud: GitHub, Netlify, AWS</p>
            </div>
            <ButtonLink url={PROJECTS_URL}>View Project</ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}

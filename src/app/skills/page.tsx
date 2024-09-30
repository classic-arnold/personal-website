import Header2 from "@/components/header-2";
import { gillSans } from "@/utils/fonts/fonts";
import { cn } from "@/utils/utils";
import Image from "next/image";

import majorgen_img from "/public/images/projects/majorgen.png";
import ButtonLink from "@/components/button-link";
import { PROJECTS_URL } from "@/utils/links";

export default function Skills() {
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
          My Skills
        </h1>
        <div className="max-w-lg">
          <p className="mb-6">What I do best</p>
        </div>
      </div>
      <div></div>
    </main>
  );
}

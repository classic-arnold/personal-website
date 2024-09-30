import Header2 from "@/components/header-2";
import { gillSans } from "@/utils/fonts/fonts";
import { cn } from "@/utils/utils";
import Image from "next/image";

import majorgen_img from "/public/images/projects/majorgen.png";
import ButtonLink from "@/components/button-link";
import { PROJECTS_URL } from "@/utils/links";

export default function Contact() {
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
          Contact Me
        </h1>
        <div className="max-w-lg">
          <p className="mb-6">
            Reach out to me for your software and web development needs
          </p>
        </div>
      </div>
      <div></div>
    </main>
  );
}

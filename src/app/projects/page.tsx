import Header2 from "@/components/header-2";
import { gillSans } from "@/utils/fonts/fonts";
import { cn } from "@/utils/utils";
import Image from "next/image";

import majorgen_img from "/public/images/projects/majorgen.png"


export default function Projects() {
    return (
        <main>
            <Header2 />
            <div className="px-4 md:px-16 py-16">
                <h1 className={cn(["uppercase text-4xl mt-24 md:mt-36 mb-6", gillSans.className])}>My Projects</h1>
                <div className="rounded-md bg-white p-4 md:p-16">
                    <div className="mb-8">
                        <Image 
                        src={majorgen_img}
                        alt="Majorgen"
                        width={650}
                        height={488.08}
                        />
                    </div>
                    <div>
                        <div className="mb-4">
                            <h3 className={cn(["uppercase text-2xl text-primary", gillSans.className])}>Majorgen</h3>
                            <p className="italic">AI Resume Builder SaaS</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p>Languages: JavaScript, TypeScript</p>
                            <p>Libraries: NextJS, NodeJS</p>
                            <p>Tools: Git</p>
                            <p>APIs: SendGrid, OpenAI</p>
                            <p>Cloud: GitHub, Netlify, AWS</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
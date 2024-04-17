import { cn } from "@/utils/utils";
import { Electrolize } from "next/font/google";
import Image from "next/image";

const electrolize = Electrolize({ 
    subsets: ["latin"], 
    weight: "400",
    variable: "--font-electrolize"
});

export default function Header() {
    const navItems = [
        {
            title: "Skills",
            path: "/skills"
        },{
            title: "Projects",
            path: "/projects"
        },{
            title: "Contact",
            path: "/contact"
        },
    ]

    return (
        <div className="bg-transparent absolute top-0 left-0 w-full">
            <ul className="flex gap-x-4 p-8 justify-end">
                {navItems.map((navItem, i) => (
                    <li key={i} 
                    className={
                        cn([electrolize.variable, "text-lg text-white"])}>
                        { navItem.title }
                    </li>
                ))}
            </ul>
        </div>
    );
}

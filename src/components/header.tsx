import { electrolize } from "@/utils/fonts/fonts";
import { navItems } from "@/utils/nav-items";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
    return (
        <div className="bg-transparent absolute top-0 left-0 w-full">
            <ul className="flex gap-x-4 md:gap-x-8 p-8 justify-end">
                {navItems.map((navItem, i) => (
                    <li key={i} 
                    className={
                        cn([electrolize.className, "text-lg text-white"])}>
                            <Link href={navItem.path} className="hover:text-accent">
                                { navItem.title }
                            </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

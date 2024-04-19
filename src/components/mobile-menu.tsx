import { electrolize } from "@/utils/fonts/fonts";
import { navItems } from "@/utils/nav-items";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";


interface MobileMenuProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function MobileMenu({show, setShow}: MobileMenuProps) {
    return (
        <div className={cn([
            show ? "" : "hidden h-0",
            "animate-menu"
        ])}>
            <ul className="p-4 bg-primary flex 
            flex-col gap-y-8">
                {navItems.map((navItem, i) => (
                    <li key={i} 
                    className={
                        cn([electrolize.className, " text-white"])}>
                            <Link href={navItem.path} className="hover:text-accent">
                                { navItem.title }
                            </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
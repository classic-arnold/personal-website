import { electrolize } from "@/utils/fonts/fonts";
import { navItems } from "@/utils/nav-items";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";


interface MobileMenuProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function MobileMenu({show, setShow}: MobileMenuProps) {

    const menuRef = useRef<HTMLUListElement>(null)

    useEffect(()=>{
        if (show) {
            setTimeout(()=>{
                const menu = menuRef.current
                menu?.classList.remove("h-0")
            }, 1000)
        }
    }, [show])

    return (
        <ul ref={menuRef} className={cn([
            show ? "" : "hidden",
            `h-0 p-4 bg-primary animate-menu flex flex-col gap-y-8`
        ])}>
                {navItems.map((navItem, i) => (
                    <li key={i} 
                    className={
                        cn([electrolize.className, "text-white"])}>
                            <Link href={navItem.path} className="hover:text-accent">
                                { navItem.title }
                            </Link>
                    </li>
                ))}
        </ul>
    )
}
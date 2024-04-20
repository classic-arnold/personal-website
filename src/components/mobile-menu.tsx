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

    const firstRender = useRef(true);

    const menuRef = useRef<HTMLUListElement>(null)

    useEffect(()=>{
        const menu = menuRef.current
        
        if (firstRender.current) {
            menu?.classList.add("hidden")
            firstRender.current = false;
        }
        
        if (show) {
            menu?.classList.remove("hidden")
        } else {
            menu?.classList.add("animate-menu-close")
            setTimeout(()=>{
                menu?.classList.add("hidden")
            }, 500)
        }
    }, [show])

    return (
        <ul ref={menuRef} className={cn([
            `p-4 bg-primary animate-menu flex flex-col gap-y-8`
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
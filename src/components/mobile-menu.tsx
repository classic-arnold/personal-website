import { electrolize } from "@/utils/fonts/fonts";
import { navItems } from "@/utils/nav-items";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";


interface MobileMenuProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function MobileMenu({show, setShow}: MobileMenuProps) {

    const firstRender = useRef(true);

    const menuRef = useRef<HTMLUListElement>(null)

    const [hidden, setHidden] = useState<boolean>(true)

    useEffect(()=>{
        const menu = menuRef.current
        
        if (firstRender.current) {
            firstRender.current = false
        } else {
            if (show) {
                if (hidden) {
                    menu?.classList.add("flex")
                    menu?.classList.remove("hidden")
                    menu?.classList.remove("animate-menu-close")
                    menu?.classList.add("animate-menu")
                    setHidden(false)
                }
            } else {
                if (!hidden) {
                    menu?.classList.remove("animate-menu")
                    menu?.classList.add("animate-menu-close")
                    setTimeout(()=>{
                        menu?.classList.add("hidden")
                        menu?.classList.remove("flex")
                        setHidden(true)
                    }, 950)
                }
            }
        }
    }, [show, hidden, firstRender])

    return (
        <ul ref={menuRef} className={cn([
            `p-4 pb-8 bg-accent animate-menu hidden 
            flex-col gap-y-8 w-full shadow-2xl z-50`
        ])}>
                {navItems.map((navItem, i) => (
                    <li key={i} 
                    className={
                        cn([electrolize.className, "text-white"])}>
                            <Link href={navItem.path} className="hover:text-primary">
                                { navItem.title }
                            </Link>
                    </li>
                ))}
        </ul>
    )
}
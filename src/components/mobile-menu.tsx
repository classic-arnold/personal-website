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

    const hiddenRef = useRef<boolean>(true)

    useEffect(()=>{
        const menu = menuRef.current
        
        if (firstRender.current) {
            menu?.classList.add("hidden")
            firstRender.current = false
        } else {
            if (show) {
                if (hiddenRef.current) {
                    // ignore if hidden ref
                    menu?.classList.remove("hidden")
                    menu?.classList.remove("animate-menu-close")
                    menu?.classList.add("animate-menu")
                    hiddenRef.current = false
                }
            } else {
                menu?.classList.remove("animate-menu")

                menu?.classList.add("animate-menu-close")
                setTimeout(()=>{
                    menu?.classList.add("hidden")
                    hiddenRef.current = true
                }, 1000)
            }
        }
    }, [show, hiddenRef])

    return (
        <ul ref={menuRef} className={cn([
            `p-4 pb-8 bg-primary animate-menu flex flex-col gap-y-8 absolute w-full shadow shadow-slate-700 `
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
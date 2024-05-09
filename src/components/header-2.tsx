"use client"

import { electrolize, fira_sans } from "@/utils/fonts/fonts";
import { navItems } from "@/utils/nav-items";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./mobile-menu";
import { HOME } from "@/utils/links";

import menu from "/public/icons/menu.svg"
import close from "/public/icons/close.svg"


export default function Header2() {
    const [showMenu, setShowMenu] = useState(false)

    const firstRender = useRef(true);
    
    const menuIconRef = useRef<HTMLButtonElement>(null)
    const menuIconCloseRef = useRef<HTMLButtonElement>(null)

    const [menuIconDisabled, setMenuIconDisabled] = useState<boolean>()
    const [menuIconCloseDisabled, setMenuIconCloseDisabled] = useState<boolean>()

    function handleMenuButtonClick (e: React.MouseEvent) {
        setMenuIconCloseDisabled(true)
        setShowMenu(true)
    }

    function handleMenuCloseButtonClick (e: React.MouseEvent) {
        setMenuIconDisabled(true)
        setShowMenu(false)
    }

    useEffect(()=>{
        if (firstRender.current) {
            firstRender.current = false
        } else {
            if (showMenu) {
                menuIconRef.current?.classList.add("hidden")
                menuIconRef.current?.classList.remove("animate-menu-icon")
                menuIconCloseRef.current?.classList.add("animate-menu-close-icon")
                setMenuIconCloseDisabled(true)
                menuIconCloseRef.current?.classList.remove("hidden")
                setTimeout(()=>{
                    setMenuIconCloseDisabled(false)
                }, 1000)
            } else {
                menuIconCloseRef.current?.classList.add("hidden")
                menuIconCloseRef.current?.classList.remove("animate-menu-close-icon")
                menuIconRef.current?.classList.add("animate-menu-icon")
                setMenuIconDisabled(true)
                menuIconRef.current?.classList.remove("hidden")
                setTimeout(()=>{
                    setMenuIconDisabled(false)
                }, 1000)
            }
        }
    }, [showMenu, firstRender])

    return (
        <>
        <div className="bg-primary fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between">
                <div className="p-8">
                    <Link href={HOME}>
                        <h4 className="uppercase text-lg md:text-4xl text-white">Arnold Umakhihe</h4>
                        <h6 className={cn([fira_sans.className, 
                            "text-sm md:text-xl font-extralight italic text-white"])}>Software Engineer</h6>
                    </Link>
                </div>
                <div className="hidden md:block">
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
                <div className="md:hidden">
                    <div className="flex items-center justify-end p-4 md:p-8">
                        <button
                        ref={menuIconCloseRef} 
                        onClick={handleMenuCloseButtonClick}
                        disabled={menuIconCloseDisabled}
                        className="hidden disabled:opacity-50"
                        >
                            <Image 
        loader={imageLoader}
                            src={close} 
                            alt={"menu close icon"}  
                            height={30}
                            width={30}     
                            />
                        </button>
                        <button
                        ref={menuIconRef} 
                        onClick={handleMenuButtonClick}
                        disabled={menuIconDisabled}
                        className="disabled:opacity-50"
                        >
                            <Image 
        loader={imageLoader}
                            src={menu} 
                            alt={"menu icon"}  
                            height={30}
                            width={30}
                            />
                        </button>
                    </div>
                    <MobileMenu show={showMenu} setShow={setShowMenu} />
                </div>
            </div>
        </div>
        </>
    );
}

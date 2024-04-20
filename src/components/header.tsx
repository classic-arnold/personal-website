"use client"

import { electrolize, fira_sans } from "@/utils/fonts/fonts";
import { HOME } from "@/utils/links";
import { navItems } from "@/utils/nav-items";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./mobile-menu";

import menu from "/public/icons/menu.svg"
import close from "/public/icons/close.svg"


export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const firstRender = useRef(true);
    const menuIconRef = useRef<HTMLImageElement>(null)
    const menuIconCloseRef = useRef<HTMLImageElement>(null)

    function handleMenuButtonClick () {
        setShowMenu(!showMenu)
    }

    useEffect(()=>{
        if (firstRender.current) {
            firstRender.current = false
        } else {
            if (showMenu) {
                menuIconRef.current?.classList.add("hidden")
                menuIconRef.current?.classList.remove("animate-menu-icon")
                menuIconCloseRef.current?.classList.add("animate-menu-close-icon")
                // if ((document.getElementById("menu-icon-button") as HTMLButtonElement).disabled) {
                //     (document.getElementById("menu-icon-button") as HTMLButtonElement).disabled = true
                // }
                menuIconCloseRef.current?.classList.remove("hidden")
                // setTimeout(()=>{
                //     if ((document.getElementById("menu-icon-button") as HTMLButtonElement).disabled) {
                //         (document.getElementById("menu-icon-button") as HTMLButtonElement).disabled = false
                //     }
                // }, 1000)
            } else {
                menuIconCloseRef.current?.classList.add("hidden")
                menuIconCloseRef.current?.setAttribute("disabled", "true")
                menuIconCloseRef.current?.classList.remove("animate-menu-close-icon")
                menuIconRef.current?.classList.add("animate-menu-icon")
                // if ((document.getElementById("menu-icon-button") as HTMLButtonElement).disabled) {
                //     (document.getElementById("menu-icon-button") as HTMLButtonElement).disabled = true
                // }
                menuIconRef.current?.classList.remove("hidden")
                // setTimeout(()=>{
                //     if ((document.getElementById("menu-icon-button") as HTMLButtonElement).disabled) {
                //         (document.getElementById("menu-icon-button") as HTMLButtonElement).disabled = false
                //     }
                // }, 1000)
            }
        }
    }, [showMenu])
    
    return (
        <>
        <div className="bg-primary absolute top-0 left-0 w-full 
        flex items-center justify-end p-4 md:p-8 h-[100px]">
            <button
            onClick={handleMenuButtonClick}
            disabled={showMenu}
            id="menu-icon-button"
            >
                <Image
                ref={menuIconCloseRef} 
                src={close} 
                alt={"menu close icon"}  
                height={30}
                width={30}
                className="hidden"       
                />
                <Image
                ref={menuIconRef} 
                src={menu} 
                alt={"menu icon"}  
                height={30}
                width={30}
                />
            </button>
        </div>
        <div className="mt-[100px]">
            <MobileMenu show={showMenu} setShow={setShowMenu} />
        </div>
        </>
    );
}

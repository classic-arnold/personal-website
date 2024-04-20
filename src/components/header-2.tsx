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

    function handleMenuButtonClick (e: React.MouseEvent) {
        // if (!(e.target as HTMLButtonElement)?.disabled){
        //     (e.target as HTMLButtonElement).disabled = true
        // }
        setShowMenu(true)
    }

    function handleMenuCloseButtonClick (e: React.MouseEvent) {
        // if (!(e.target as HTMLButtonElement)?.disabled){
        //     (e.target as HTMLButtonElement).disabled = true
        // }
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
                menuIconCloseRef.current?.classList.remove("hidden")
                // setTimeout(()=>{
                //     if ((document.getElementById("menu-icon-button") as HTMLButtonElement).disabled) {
                //         (document.getElementById("menu-icon-button") as HTMLButtonElement).disabled = false
                //     }
                // }, 1000)
            } else {
                menuIconCloseRef.current?.classList.add("hidden")
                // menuIconCloseRef.current?.setAttribute("disabled", "true")
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
    }, [showMenu, firstRender])

    return (
        <>
        <div className="bg-primary absolute top-0 left-0 w-full 
        flex items-center justify-between p-4 md:p-8 h-[100px]">
            <Link href={HOME}>
                <h4 className="uppercase text-lg md:text-4xl text-white">Arnold Umakhihe</h4>
                <h6 className={cn([fira_sans.className, 
                    "text-sm md:text-xl font-extralight italic text-white"])}>Software Engineer</h6>
            </Link>
            <button
            ref={menuIconCloseRef} 
            onClick={handleMenuCloseButtonClick}
            className="hidden"
            >
                <Image
                src={close} 
                alt={"menu close icon"}  
                height={30}
                width={30}     
                />
            </button>
            <button
            ref={menuIconRef} 
            onClick={handleMenuButtonClick}
            >
                <Image
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

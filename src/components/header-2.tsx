"use client"

import { electrolize, fira_sans } from "@/utils/fonts/fonts";
import { navItems } from "@/utils/nav-items";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

import menu from "/public/icons/menu.svg"
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
import { HOME } from "@/utils/links";


export default function Header2() {

    const [showMenu, setShowMenu] = useState(false)

    function handleMenuButtonClick () {
        setShowMenu(!showMenu)
    }

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

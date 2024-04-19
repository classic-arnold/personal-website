import { electrolize, fira_sans } from "@/utils/fonts/fonts";
import { navItems } from "@/utils/nav-items";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

import menu from "/public/icons/menu.svg"


export default function Header2() {

    function handleMenuButtonClick () {
        
    }

    return (
        <div className="bg-primary absolute top-0 left-0 w-full 
        flex items-center justify-between p-4 md:p-8">
            <div>
                <h4 className="uppercase text-lg md:text-4xl text-white">Arnold Umakhihe</h4>
                <h6 className={cn([fira_sans.className, 
                    "text-sm md:text-xl font-extralight italic text-white"])}>Software Engineer</h6>
            </div>
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
            {/* <ul className="flex gap-x-4 md:gap-x-8 justify-end">
                {navItems.map((navItem, i) => (
                    <li key={i} 
                    className={
                        cn([electrolize.className, " text-white"])}>
                            <Link href={navItem.path} className="hover:text-accent">
                                { navItem.title }
                            </Link>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

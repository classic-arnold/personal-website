import Image from "next/image"

import python from "/public/icons/skills/Python.svg"
import javascript from "/public/icons/skills/JavaScript.svg"
import html from "/public/icons/skills/Html5.svg"
import css from "/public/icons/skills/CSS.svg"
import react from "/public/icons/skills/React.svg"
import django from "/public/icons/skills/Django.svg"
import flask from "/public/icons/skills/Flask.svg"



export default function SkillDisplay() {
    return (
        <div className="flex gap-x-4">
            <Image 
            src={python}
            alt="python icon"
            width={50}
            height={50}
            />
            <Image 
            src={javascript}
            alt="javascript icon"
            width={50}
            height={50}
            />
            <Image 
            src={html}
            alt="html icon"
            width={50}
            height={50}
            />
            <Image 
            src={css}
            alt="css icon"
            width={50}
            height={50}
            />
            <Image 
            src={react}
            alt="react icon"
            width={50}
            height={50}
            />
            <Image 
            src={django}
            alt="django icon"
            width={50}
            height={50}
            />
            <Image 
            src={flask}
            alt="flask icon"
            width={50}
            height={50}
            />
        </div>
    )
}
"use client";

import Image from "next/image";

import python from "/public/icons/skills/Python.svg";
import javascript from "/public/icons/skills/JavaScript.svg";
import html from "/public/icons/skills/Html5.svg";
import css from "/public/icons/skills/CSS.svg";
import react from "/public/icons/skills/React.svg";
import django from "/public/icons/skills/Django.svg";
import flask from "/public/icons/skills/Flask.svg";
import { useEffect, useRef, useState } from "react";

export default function SkillDisplay() {
  const displayContainerRef = useRef<HTMLDivElement>(null);

  const [run, setRun] = useState<number>(1);

  const skillsImages = [
    {
      image: python,
      alt: "python icon",
    },
    {
      image: javascript,
      alt: "javascript icon",
    },
    {
      image: html,
      alt: "html icon",
    },
    {
      image: css,
      alt: "css icon",
    },
    {
      image: react,
      alt: "react icon",
    },
    {
      image: django,
      alt: "django icon",
    },
    {
      image: flask,
      alt: "flask icon",
    },
  ];

  useEffect(() => {
    const icons = displayContainerRef.current?.children;
    if (icons) {
      for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        setTimeout(() => {
          icon.classList.add("animate-slide");
          if (i === icons.length - 1) {
            setTimeout(() => {
              const tmp = icons[0].cloneNode(true) as Element;
              tmp.classList.remove("animate-slide");

              icons[0].remove();

              for (let j = 0; j < icons.length; j++) {
                icons[j].classList.remove("animate-slide");
              }

              displayContainerRef.current?.appendChild(tmp);
              tmp.classList.add("animate-appear");

              setTimeout(() => {
                setRun(run + 1);
              }, 1000);
            }, 1000);
          }
        }, 100 * i);
      }
    }
  }, [run]);

  return (
    <div ref={displayContainerRef} className="flex gap-x-4 overflow-hidden">
      {skillsImages.map((skillImage, i) => (
        <Image
          src={skillImage.image}
          alt={skillImage.alt}
          width={50}
          height={50}
          key={i}
        />
      ))}
    </div>
  );
}

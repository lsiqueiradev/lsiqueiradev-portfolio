"use client";
import { useEffect, useState } from "react";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import { NavItem } from "./NavItem";
import Link from "next/link";

export const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Tech Stacks", href: "/stacks" },
  { text: "Projects", href: "/projects" },
  { text: "Contact", href: "/contact" },
];

export function NavBar() {
  const [isNavActive, setIsNavActive] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  useEffect(() => {
    if (isNavActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isNavActive])

  return (
    <header className="flex items-center justify-between h-24 lg:relative sticky top-0 bg-gray-950 z-50">
      <Link
        href='/'
        onClick={() => {
          setActiveIdx(0);
          setIsNavActive(false);
        }}
      >
        <h1 className="font-bold text-xl text-gray-50 z-50">LSIQUEIRA.DEV</h1>
      </Link>
      <button onClick={() => setIsNavActive(!isNavActive)} className="lg:hidden z-50">
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-gray-800 ring-0 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isNavActive && 'rotate-[42deg]'}`}></div>
            <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${isNavActive && '-translate-x-10'}`}></div>
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isNavActive && '-rotate-[42deg]'}`}></div>
          </div>
        </div>
      </button>
      {/* fixed top-0 right-0 bottom-0 w-full h-screen bg-gray-800 p-10 z-50 mt-24 lg:relative lg:bg-inherit  */}
      <div className={` ${isNavActive ? 'right-0' : '-right-full'} flex lg:items-center lg:justify-end lg:relative lg:bg-inherit lg:top-auto lg:flex-row lg:p-0 p-4 pt-20 lg:pt-4 flex-col items-center fixed lg:right-auto top-24 bottom-0 w-full h-full z-40 bg-gray-800 transition-all duration-700`}>
        <nav className="flex lg:gap-12 lg:items-center lg:flex-row flex-col text-center gap-10">
          {MENU_LIST.map((menu, index) => (
            <NavItem
              key={menu.text}
              onClick={() => {
                setActiveIdx(index);
                setIsNavActive(false);
              }}
              isActive={activeIdx === index}
              {...menu}
            />
          ))}
        </nav>
        <nav className="flex lg:ml-12 gap-4 mt-10 lg:mt-0">
          <a
            href="https://github.com/lsiqueiradev"
            target="_blank"
            className="text-2xl text-gray-300 hover:text-violet-600"
            rel="noreferrer"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lsiqueiradev"
            target="_blank"
            className="text-2xl text-gray-300 hover:text-violet-600"
            rel="noreferrer"
          >
            <IoLogoLinkedin />
          </a>
        </nav>
      </div>
    </header >
  );
}

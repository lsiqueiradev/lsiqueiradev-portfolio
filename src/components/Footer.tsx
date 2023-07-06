'use client'

import Link from "next/link";

import { MENU_LIST } from './NavBar'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="mt-40">
      <div className="flex flex-col md:flex-row justify-between items-start py-8 gap-6">
        <Link
          href='/'
        >
          <h1 className="font-bold text-xl text-gray-50 z-50">LSIQUEIRA.DEV</h1>
        </Link>
        <div className="flex flex-col md:flex-row items-start md:items-center text-sm font-light text-gray-300 gap-6">
          <div className="flex flex-col gap-2 md:flex-row md:gap-12">
            <a href="#">+55 11 96463-8781</a>
            <a href="#">lucas@lsiqueira.dev</a>
          </div>
          <nav className="flex gap-4 md:ml-6">
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
      </div>
      <div className="flex flex-col justify-between md:items-center md:gap-8 lg:gap-0 lg:flex-row py-8 text-sm font-light text-gray-300 border-t-2 border-gray-800">
        <nav className="flex flex-col gap-4 md:flex-row md:gap-10">
          {MENU_LIST.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
            >{menu.text}</Link>
          ))}
        </nav>
        <div className="mt-8 md:mt-0">
          <p>Designed and built by Lucas Siqueira with Love & Coffee</p>
        </div>
      </div>
    </footer>
  )
}
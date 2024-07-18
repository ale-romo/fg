"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation";

  export const navItems = [
    {
      href: "/group",
      title: "Group",
    },
    {
      href: "/houses",
      title: "Houses ",
    },
    {
      href: "/news",
      title: "News",
    },
    {
      href: "/offices",
      title: "Offices",
    },
    {
      href: "/careers",
      title: "Careers",
    },
    {
      href: "/foundation",
      title: "Foundation",
    },
  ];

  interface NavItemsProps {
    href: string;
    title: string;
    current: boolean;
    cb: () => void;
  }

  const NavItem = ({ href, title, current, cb }: NavItemsProps) => (
    <Link
      key={href}
      href={href}
      className={`flex font-semibold underline-offset-4 ${current && "underline"} hover:underline`}
    >
      <span onClick={cb}>{title}</span>
    </Link>
  );


const Navbar: FC= () => {
  // Mobile Navigation
  const [navIsOpen, setNavIsOpen] = useState(false);
  useEffect(()=> {
    const body = document.querySelector('body');
    if (navIsOpen) {
      if(body) body.classList.add('fixedDom');
    } else {
      if (body) body.classList.remove('fixedDom');
    }
  }, [navIsOpen]);

  // Dark/light Styles
  const pathname = usePathname();
  const isArticleRegex = /^\/news\/.+$/;
  const isArticle = isArticleRegex.test(pathname);

  return (
    <div className={`${isArticle ? 'bg-white' : 'absolute' } w-full flex justify-between items-start flex-row z-20 p-6`}>
      <Link href="/" className="z-30">
        <Image src={isArticle || navIsOpen ? "/logo.svg" : "/logo_white.svg"} alt="Falic Group" height={100} width={300} className="h-auto w-full" />
      </Link>
      <nav className={`${navIsOpen ? "fixed z-20 bg-white top-0 left-0 w-full h-full flex pt-24 px-6" : "hidden lg:flex"} uppercase gap-6 text-2xl lg:text-base ${isArticle || navIsOpen ? "text-black" : "text-white"} ${navIsOpen && "flex-col justify-around"}`}>
        {navItems.map(navItem => <NavItem key={navItem.title} current={pathname === navItem.href} href={navItem.href} title={navItem.title} cb={() => setNavIsOpen(false)} />)}
      </nav>
      <button onClick={() => setNavIsOpen(!navIsOpen)} className="w-6 h-5 lg:hidden flex flex-col gap-1 z-30">
        <span className={`flex w-full h-1 ${isArticle || navIsOpen ? 'bg-black' : 'bg-white'} ${navIsOpen && " translate-y-full rotate-45"}`}></span>
        <span className={`flex w-full h-1 ${isArticle || navIsOpen  ? 'bg-black' : 'bg-white'} ${navIsOpen && "hidden"}`}></span>
        <span className={`flex w-full h-1 ${isArticle || navIsOpen  ? 'bg-black' : 'bg-white'} ${navIsOpen && "-translate-y-full -rotate-45 "}`}></span>
      </button>
    </div>
  );
}

export default Navbar;

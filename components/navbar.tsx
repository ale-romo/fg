"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation";

  export const navItems = [
    {
      href: "/",
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
      href: "/foundation",
      title: "Foundation",
    },
    {
      href: "/careers",
      title: "Careers",
    },
    {
      href: "/offices",
      title: "Offices",
    },
  ];

  interface NavItemsProps {
    href: string;
    title: string;
    current: boolean;
    cb: () => void;
  }

  export const NavItem = ({ href, title, current, cb }: NavItemsProps) => (
    <Link
      key={href}
      href={href}
      className={`flex py-2 lg:py-6 ${current ? "border-amber-500" : "border-transparent hover:border-amber-500"} border-b-2 transition-colors duration-300`}
      style={{ marginBottom: "-2px", letterSpacing: "0.25em" }}
    >
      <span onClick={cb}>{title}</span>
    </Link>
  );


const Navbar: FC = () => {
  // Mobile Navigation
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // You can adjust this value
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
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
    <div className={`${
      isArticle || navIsOpen ? 'bg-white' :
      scrolled ? 'bg-white/80 backdrop-blur-sm' :
      'bg-transparent'
    } fixed top-0 w-full flex z-20 px-6 transition-colors duration-200`}>
      <div className="border-b border-white/30 w-full flex flex-row items-center justify-between">
        <Link href="/" className="z-30 py-6 lg:py-0">
          <Image 
            src={isArticle || navIsOpen || scrolled ? "/logo.svg" : "/logo_white.svg"} 
            alt="Falic Group" 
            height={30} 
            width={130} 
            className="h-8 w-full" 
          />
        </Link>
        <nav className={`${
          navIsOpen ? "fixed z-20 bg-white top-0 left-0 w-full h-full flex pt-24 px-6" : "hidden lg:flex"
        } uppercase gap-6 lg:text-base ${
          isArticle || navIsOpen || scrolled ? "text-black" : "text-white"
        } ${navIsOpen && "flex-col justify-start"} transition-colors duration-200`}>
          {navItems.map(navItem => <NavItem key={navItem.title} current={pathname === navItem.href} href={navItem.href} title={navItem.title} cb={() => setNavIsOpen(false)} />)}
        </nav>
        <button onClick={() => setNavIsOpen(!navIsOpen)} className="w-6 h-5 lg:hidden flex flex-col gap-1 z-30">
          <span className={`flex w-full h-1 transition-all duration-200 ${isArticle || navIsOpen || scrolled ? 'bg-black' : 'bg-white'} ${navIsOpen && " translate-y-full rotate-45"}`}></span>
          <span className={`flex w-full h-1 transition-all duration-200 ${isArticle || navIsOpen || scrolled ? 'bg-black' : 'bg-white'} ${navIsOpen && "hidden"}`}></span>
          <span className={`flex w-full h-1 transition-all duration-200 ${isArticle || navIsOpen || scrolled ? 'bg-black' : 'bg-white'} ${navIsOpen && "-translate-y-full -rotate-45 "}`}></span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

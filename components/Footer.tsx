"use client";

import Image from "next/image";
import { navItems } from './navbar';
import Link from "next/link";

interface NavProps {
  start: number;
  end: number;
}

const Footer = () => {

  const RenderNavItems = ({ start, end} : NavProps) => ( <ul className="uppercase">
    {navItems && navItems.slice(start, end).map(navItem => (
      <li key={navItem.href}>
        <Link href={navItem.href}>{navItem.title}</Link>
      </li>
    ))}
  </ul>
 );

  return <section className="flex flex-col py-8 lg:py-20">
    <Image src="/footer.webp" height="381" width="1200"  alt="Falic Group" className="w-full max-w-full h-full" />
    <div className="flex flex-col lg:flex-row justify-between gap-8  pt-8 px-8 lg:pt-10 lg:px-20 items-center text-sm">
      <div className="flex flex-row flex-wrap gap-x-12">
        <Image src="/logo.svg" height="65" width="246" alt="Falic Group" className="mb-10 lg:mb-0 h-auto w-auto" />
        <RenderNavItems start={0} end={3} />
        <RenderNavItems start={3} end={6} />
      </div>
      <p>CONTACT US: <a href="mailto:hello@falicgroup.com">hello@falicgroup.com</a></p>
    </div>
  </section>
}

export default Footer;
